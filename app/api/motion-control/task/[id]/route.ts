import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/db';
import { getCurrentUser } from '@/app/lib/auth';
import { providerQueryTask } from '@/app/lib/motionControlProvider';

export const runtime = 'nodejs';

const POINTS_PER_SECOND = 10;

function ceilSecondsToPoints(duration: number, maxPoints: number): { finalPoints: number; refundedPoints: number } {
  const sec = Math.max(0, duration);
  const billedSeconds = Math.ceil(sec);
  const finalPoints = Math.min(maxPoints, billedSeconds * POINTS_PER_SECOND);
  const refundedPoints = Math.max(0, maxPoints - finalPoints);
  return { finalPoints, refundedPoints };
}

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;

    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.json({ error: '请先登录', needLogin: true }, { status: 401 });
    }

    const task = await prisma.motionControlTask.findFirst({
      where: { externalTaskId: id, userId: currentUser.userId },
    });

    if (!task) {
      return NextResponse.json({ error: '任务不存在' }, { status: 404 });
    }

    // If already finalized, return quickly.
    if (task.status === 'succeed' || task.status === 'failed') {
      return NextResponse.json({ success: true, task });
    }

    if (!task.providerTaskId) {
      return NextResponse.json({ success: true, task });
    }

    let providerResp;
    try {
      providerResp = await providerQueryTask(task.providerTaskId);
    } catch (e: any) {
      return NextResponse.json({ error: '第三方查询失败', details: e?.message }, { status: 502 });
    }

    if (providerResp.code !== 0 || !providerResp.data) {
      await prisma.motionControlTask.update({
        where: { externalTaskId: task.externalTaskId },
        data: {
          status: 'failed',
          statusMsg: providerResp.message || 'QUERY_FAILED',
          requestId: providerResp.request_id || task.requestId,
        },
      });
      return NextResponse.json({ error: providerResp.message || '查询失败', code: providerResp.code }, { status: 400 });
    }

    const data = providerResp.data;

    const status = data.task_status;
    const statusMsg = data.task_status_msg || null;

    const video = data.task_result?.videos?.[0];
    const resultUrl = video?.url || null;
    const watermarkUrl = (video as any)?.watermark_url || null;
    const durationSeconds = video?.duration ? Number(video.duration) : null;

    // Update task status/result.
    await prisma.motionControlTask.update({
      where: { externalTaskId: task.externalTaskId },
      data: {
        status,
        statusMsg,
        requestId: providerResp.request_id || task.requestId,
        resultUrl,
        watermarkUrl,
        durationSeconds: durationSeconds && !Number.isNaN(durationSeconds) ? durationSeconds : null,
        finalUnitDeduction: data.final_unit_deduction || null,
      },
    });

    // Finalize billing on succeed (only once).
    if (status === 'succeed') {
      const duration = durationSeconds && !Number.isNaN(durationSeconds) ? durationSeconds : 0;
      const { finalPoints, refundedPoints } = ceilSecondsToPoints(duration, task.maxPoints);

      if (!task.finalizedAt) {
        await prisma.$transaction(async (tx) => {
          // Update task billing
          await tx.motionControlTask.update({
            where: { externalTaskId: task.externalTaskId },
            data: {
              finalPoints,
              refundedPoints,
              finalizedAt: new Date(),
            },
          });

          // Record actual tool usage (for analytics)
          if (task.toolId) {
            await tx.toolUsage.create({
              data: {
                userId: task.userId,
                toolId: task.toolId,
                points: finalPoints,
              },
            });
          }

          // Refund difference
          if (refundedPoints > 0) {
            await tx.user.update({
              where: { id: task.userId },
              data: { points: { increment: refundedPoints } },
            });

            await tx.pointTransaction.create({
              data: {
                userId: task.userId,
                amount: refundedPoints,
                type: 'refund_tool',
                description: '动作复刻结算退回',
                relatedId: task.toolId || task.externalTaskId,
              },
            });
          }
        });
      }
    }

    const refreshed = await prisma.motionControlTask.findFirst({
      where: { externalTaskId: id, userId: currentUser.userId },
    });

    return NextResponse.json({ success: true, task: refreshed });
  } catch (error: any) {
    if (String(error?.message || '') === 'MISSING_ENV:MOTION_CONTROL_AK' || String(error?.message || '') === 'MISSING_ENV:MOTION_CONTROL_SK') {
      return NextResponse.json({ error: '服务端未配置第三方密钥（MOTION_CONTROL_AK/MOTION_CONTROL_SK）' }, { status: 500 });
    }
    console.error('motion-control task error:', error);
    return NextResponse.json({ error: '查询失败' }, { status: 500 });
  }
}
