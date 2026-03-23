import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import prisma from '@/app/lib/db';
import { getCurrentUser } from '@/app/lib/auth';
import { getBaseUrl } from '@/app/lib/httpBaseUrl';
import { savePublicUpload } from '@/app/lib/publicUploads';
import { providerCreateTask } from '@/app/lib/motionControlProvider';

export const runtime = 'nodejs';

const IMAGE_MAX_BYTES = 10 * 1024 * 1024;
const VIDEO_MAX_BYTES = 100 * 1024 * 1024;

const POINTS_PER_SECOND = 10;
const MAX_SECONDS_IMAGE = 10;
const MAX_SECONDS_VIDEO = 30;

function parseBool(v: unknown): boolean {
  if (v === true || v === 'true' || v === '1' || v === 1) return true;
  return false;
}

function asEnum<T extends string>(v: any, allowed: readonly T[], fallback?: T): T {
  if (allowed.includes(v)) return v;
  if (fallback) return fallback;
  throw new Error('INVALID_PARAM');
}

export async function POST(req: NextRequest) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.json({ error: '请先登录', needLogin: true }, { status: 401 });
    }

    const form = await req.formData();

    const imageFile = form.get('image_file');
    const videoFile = form.get('video_file');

    if (!(imageFile instanceof File) || !(videoFile instanceof File)) {
      return NextResponse.json({ error: '请上传照片和动作视频' }, { status: 400 });
    }

    const prompt = String(form.get('prompt') || '').trim();
    if (prompt.length > 2500) {
      return NextResponse.json({ error: '提示词不能超过 2500 字' }, { status: 400 });
    }

    const modelName = asEnum(form.get('model_name'), ['kling-v2-6', 'kling-v3'] as const, 'kling-v2-6');
    const mode = asEnum(form.get('mode'), ['std', 'pro'] as const, 'std');
    const characterOrientation = asEnum(form.get('character_orientation'), ['image', 'video'] as const, 'image');
    const keepOriginalSound = asEnum(form.get('keep_original_sound'), ['yes', 'no'] as const, 'yes');
    const watermarkEnabled = parseBool(form.get('watermark_enabled'));

    const maxSeconds = characterOrientation === 'video' ? MAX_SECONDS_VIDEO : MAX_SECONDS_IMAGE;
    const maxPoints = maxSeconds * POINTS_PER_SECOND;

    const tool = await prisma.tool.findFirst({
      where: { name: '动作复刻', status: 'active', visible: true },
      select: { id: true, name: true },
    });

    // Pre-check balance/subscription before calling provider.
    const userRecord = await prisma.user.findUnique({ where: { id: currentUser.userId } });
    if (!userRecord) {
      return NextResponse.json({ error: '用户不存在' }, { status: 404 });
    }

    const now = new Date();
    if (!userRecord.subscriptionExpiresAt || userRecord.subscriptionExpiresAt < now) {
      return NextResponse.json({ error: '请先激活年卡', subscriptionRequired: true }, { status: 403 });
    }

    if (userRecord.points < maxPoints) {
      return NextResponse.json({ error: `积分不足：本次生成最多会预扣 ${maxPoints} 积分（${POINTS_PER_SECOND}积分/秒，最多${maxSeconds}秒）` }, { status: 400 });
    }

    // Save uploads to public so provider can fetch by URL.
    const baseUrl = getBaseUrl(req);
    if (!baseUrl) {
      return NextResponse.json({ error: '服务器未配置站点域名' }, { status: 500 });
    }

    const img = await savePublicUpload(imageFile, { subdir: 'motion-control', maxBytes: IMAGE_MAX_BYTES });
    const vid = await savePublicUpload(videoFile, { subdir: 'motion-control', maxBytes: VIDEO_MAX_BYTES });

    const imageUrl = `${baseUrl}${img.publicPath}`;
    const videoUrl = `${baseUrl}${vid.publicPath}`;

    const externalTaskId = crypto.randomUUID();

    // Create task record first.
    await prisma.motionControlTask.create({
      data: {
        userId: userRecord.id,
        toolId: tool?.id || null,
        externalTaskId,
        status: 'creating',
        modelName,
        mode,
        characterOrientation,
        keepOriginalSound,
        prompt: prompt || null,
        watermarkEnabled,
        imageUrl,
        videoUrl,
        maxPoints,
      },
    });

    // Call provider.
    let providerResp;
    try {
      providerResp = await providerCreateTask({
        model_name: modelName,
        prompt: prompt || undefined,
        image_url: imageUrl,
        video_url: videoUrl,
        keep_original_sound: keepOriginalSound,
        character_orientation: characterOrientation,
        mode,
        watermark_info: watermarkEnabled ? { enabled: true } : undefined,
        external_task_id: externalTaskId,
      });
    } catch (e: any) {
      await prisma.motionControlTask.update({
        where: { externalTaskId },
        data: { status: 'failed', statusMsg: e?.message || 'PROVIDER_ERROR' },
      });
      return NextResponse.json({ error: '第三方服务调用失败', details: e?.message }, { status: 502 });
    }

    if (providerResp.code !== 0 || !providerResp.data?.task_id) {
      await prisma.motionControlTask.update({
        where: { externalTaskId },
        data: { status: 'failed', statusMsg: providerResp.message || 'CREATE_FAILED', requestId: providerResp.request_id || null },
      });
      return NextResponse.json({ error: providerResp.message || '创建任务失败', code: providerResp.code }, { status: 400 });
    }

    const providerTaskId = providerResp.data.task_id;

    // Deduct max points and update task in a transaction.
    await prisma.$transaction(async (tx) => {
      const user = await tx.user.findUnique({ where: { id: userRecord.id } });
      if (!user) throw new Error('USER_NOT_FOUND');

      const now = new Date();
      if (!user.subscriptionExpiresAt || user.subscriptionExpiresAt < now) {
        throw new Error('SUBSCRIPTION_REQUIRED');
      }

      if (user.points < maxPoints) {
        throw new Error('INSUFFICIENT_POINTS');
      }

      await tx.user.update({
        where: { id: user.id },
        data: { points: { decrement: maxPoints } },
      });

      await tx.pointTransaction.create({
        data: {
          userId: user.id,
          amount: -maxPoints,
          type: 'use_tool',
          description: `动作复刻预扣（${POINTS_PER_SECOND}积分/秒，最多${maxSeconds}秒）`,
          relatedId: tool?.id || externalTaskId,
        },
      });

      await tx.motionControlTask.update({
        where: { externalTaskId },
        data: {
          providerTaskId,
          status: providerResp.data?.task_status || 'submitted',
          requestId: providerResp.request_id || null,
        },
      });
    });

    return NextResponse.json({
      success: true,
      externalTaskId,
      providerTaskId,
      status: providerResp.data.task_status,
      maxPoints,
    });
  } catch (error: any) {
    if (String(error?.message || '') === 'MISSING_ENV:MOTION_CONTROL_AK' || String(error?.message || '') === 'MISSING_ENV:MOTION_CONTROL_SK') {
      return NextResponse.json({ error: '服务端未配置第三方密钥（MOTION_CONTROL_AK/MOTION_CONTROL_SK）' }, { status: 500 });
    }
    if (error?.message === 'FILE_TOO_LARGE') {
      return NextResponse.json({ error: '文件过大（图片<=10MB，视频<=100MB）' }, { status: 400 });
    }
    if (error?.message === 'UNSUPPORTED_FILE_TYPE') {
      return NextResponse.json({ error: '文件格式不支持（图片 jpg/jpeg/png；视频 mp4/mov）' }, { status: 400 });
    }
    console.error('motion-control create error:', error);
    return NextResponse.json({ error: '创建失败' }, { status: 500 });
  }
}
