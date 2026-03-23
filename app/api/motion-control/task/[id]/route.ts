import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/db';
import { getCurrentUser } from '@/app/lib/auth';
import { providerQueryTask } from '@/app/lib/motionControlProvider';

export const runtime = 'nodejs';

const POINTS_PER_SECOND = 10;

type FinalStatus = 'succeed' | 'failed';

function computeBilling(durationSeconds: number, maxPoints: number): { finalPoints: number; refundedPoints: number } {
  const sec = Math.max(0, durationSeconds);
  const billedSeconds = Math.ceil(sec);
  const finalPoints = Math.min(maxPoints, billedSeconds * POINTS_PER_SECOND);
  const refundedPoints = Math.max(0, maxPoints - finalPoints);
  return { finalPoints, refundedPoints };
}

async function finalizeIfNeeded(externalTaskId: string, status: FinalStatus) {
  await prisma.$transaction(async (tx) => {
    const t = await tx.motionControlTask.findUnique({ where: { externalTaskId } });
    if (!t || t.finalizedAt) return;

    if (status === 'succeed') {
      const duration = typeof t.durationSeconds === 'number' && !Number.isNaN(t.durationSeconds) ? t.durationSeconds : 0;
      const { finalPoints, refundedPoints } = computeBilling(duration, t.maxPoints);

      await tx.motionControlTask.update({
        where: { externalTaskId },
        data: {
          finalPoints,
          refundedPoints,
          finalizedAt: new Date(),
        },
      });

      // Record tool usage (analytics)
      if (t.toolId && finalPoints > 0) {
        await tx.toolUsage.create({
          data: {
            userId: t.userId,
            toolId: t.toolId,
            points: finalPoints,
          },
        });
      }

      // Refund difference
      if (refundedPoints > 0) {
        await tx.user.update({
          where: { id: t.userId },
          data: { points: { increment: refundedPoints } },
        });

        await tx.pointTransaction.create({
          data: {
            userId: t.userId,
            amount: refundedPoints,
            type: 'refund',
            description: '动作复刻结算退回',
            relatedId: t.toolId || t.externalTaskId,
          },
        });
      }

      return;
    }

    // failed: refund everything (pricing is per-second; no duration on failure)
    const refundedPoints = t.maxPoints;

    await tx.motionControlTask.update({
      where: { externalTaskId },
      data: {
        finalPoints: 0,
        refundedPoints,
        finalizedAt: new Date(),
      },
    });

    if (refundedPoints > 0) {
      await tx.user.update({
        where: { id: t.userId },
        data: { points: { increment: refundedPoints } },
      });

      await tx.pointTransaction.create({
        data: {
          userId: t.userId,
          amount: refundedPoints,
          type: 'refund',
          description: '动作复刻失败退回',
          relatedId: t.toolId || t.externalTaskId,
        },
      });
    }
  });
}

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;

    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.json({ error: '请先登录', needLogin: true }, { status: 401 });
    }

    let task = await prisma.motionControlTask.findFirst({
      where: { externalTaskId: id, userId: currentUser.userId },
    });

    if (!task) {
      return NextResponse.json({ error: '任务不存在' }, { status: 404 });
    }

    // If already final and finalized, return.
    if ((task.status === 'succeed' || task.status === 'failed') && task.finalizedAt) {
      return NextResponse.json({ success: true, task });
    }

    // If final but not finalized yet (backfill), finalize without querying.
    if ((task.status === 'succeed' || task.status === 'failed') && !task.finalizedAt) {
      await finalizeIfNeeded(task.externalTaskId, task.status);
      task = await prisma.motionControlTask.findUnique({ where: { externalTaskId: task.externalTaskId } });
      return NextResponse.json({ success: true, task });
    }

    if (!task.providerTaskId) {
      return NextResponse.json({ success: true, task });
    }

    const providerResp = await providerQueryTask(task.providerTaskId);

    if (providerResp.code !== 0 || !providerResp.data) {
      await prisma.motionControlTask.update({
        where: { externalTaskId: task.externalTaskId },
        data: {
          status: 'failed',
          statusMsg: providerResp.message || 'QUERY_FAILED',
          requestId: providerResp.request_id || task.requestId,
        },
      });

      await finalizeIfNeeded(task.externalTaskId, 'failed');

      const refreshed = await prisma.motionControlTask.findUnique({ where: { externalTaskId: task.externalTaskId } });
      return NextResponse.json({ success: true, task: refreshed });
    }

    const data = providerResp.data;

    const status = data.task_status;
    const statusMsg = data.task_status_msg || null;

    const video = data.task_result?.videos?.[0];
    const resultUrl = video?.url || null;
    const watermarkUrl = (video as any)?.watermark_url || null;
    const durationSeconds = video?.duration ? Number(video.duration) : null;

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

    if (status === 'succeed' || status === 'failed') {
      await finalizeIfNeeded(task.externalTaskId, status);
    }

    const refreshed = await prisma.motionControlTask.findUnique({ where: { externalTaskId: task.externalTaskId } });
    return NextResponse.json({ success: true, task: refreshed });
  } catch (error: any) {
    if (String(error?.message || '') === 'MISSING_ENV:MOTION_CONTROL_AK' || String(error?.message || '') === 'MISSING_ENV:MOTION_CONTROL_SK') {
      return NextResponse.json({ error: '服务端未配置第三方密钥（MOTION_CONTROL_AK/MOTION_CONTROL_SK）' }, { status: 500 });
    }
    console.error('motion-control task error:', error);
    return NextResponse.json({ error: '查询失败' }, { status: 500 });
  }
}
