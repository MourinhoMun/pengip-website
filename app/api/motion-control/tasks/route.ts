import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/db';
import { getCurrentUser } from '@/app/lib/auth';

export const runtime = 'nodejs';

export async function GET(req: NextRequest) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.json({ error: '请先登录', needLogin: true }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const page = Math.max(1, Number(searchParams.get('page') || '1'));
    const pageSize = Math.min(50, Math.max(1, Number(searchParams.get('pageSize') || '20')));

    const tasks = await prisma.motionControlTask.findMany({
      where: { userId: currentUser.userId },
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * pageSize,
      take: pageSize,
      select: {
        externalTaskId: true,
        status: true,
        statusMsg: true,
        modelName: true,
        mode: true,
        characterOrientation: true,
        keepOriginalSound: true,
        watermarkEnabled: true,
        imageUrl: true,
        videoUrl: true,
        resultUrl: true,
        watermarkUrl: true,
        durationSeconds: true,
        maxPoints: true,
        finalPoints: true,
        refundedPoints: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return NextResponse.json({ success: true, tasks });
  } catch (error) {
    console.error('motion-control tasks error:', error);
    return NextResponse.json({ error: '获取任务失败' }, { status: 500 });
  }
}
