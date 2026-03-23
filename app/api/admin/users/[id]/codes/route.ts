import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/db';
import { getCurrentUser } from '@/app/lib/auth';

async function checkAdmin() {
  const currentUser = await getCurrentUser();
  if (!currentUser || currentUser.role !== 'admin') return null;
  return currentUser;
}

// GET /api/admin/users/[id]/codes — 查看用户用过的激活码
export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!await checkAdmin()) return NextResponse.json({ error: '无权限' }, { status: 403 });

  const { id } = await params;
  const codes = await prisma.activationCode.findMany({
    where: { userId: id },
    orderBy: { usedAt: 'desc' },
    select: {
      id: true,
      code: true,
      type: true,
      points: true,
      status: true,
      note: true,
      usedAt: true,
      createdAt: true,
    },
  });

  return NextResponse.json({ codes });
}
