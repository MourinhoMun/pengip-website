import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/db';
import { getCurrentUser } from '@/app/lib/auth';

async function checkAdmin() {
  const currentUser = await getCurrentUser();
  if (!currentUser || currentUser.role !== 'admin') return null;
  return currentUser;
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!await checkAdmin()) return NextResponse.json({ error: '无权限' }, { status: 403 });

  const { id } = await params;
  const code = await prisma.activationCode.findUnique({ where: { id } });
  if (!code) return NextResponse.json({ error: '激活码不存在' }, { status: 404 });

  const isSuspended = code.status === 'suspended';
  const newStatus = isSuspended ? (code.usedCount > 0 ? 'used' : 'active') : 'suspended';

  const updated = await prisma.activationCode.update({
    where: { id },
    data: { status: newStatus },
  });

  // 暂停时清除用户 token，强制下线
  if (!isSuspended && code.userId) {
    await prisma.user.update({
      where: { id: code.userId },
      data: { currentToken: null },
    });
  }

  return NextResponse.json({ success: true, status: updated.status });
}
