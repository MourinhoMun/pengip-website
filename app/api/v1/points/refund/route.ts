import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/db';

function getRefundSecret(req: NextRequest): string {
  // Support either header; easier for different runtimes.
  return req.headers.get('x-internal-refund-secret') || req.headers.get('authorization') || '';
}

export async function POST(request: NextRequest) {
  try {
    const secret = getRefundSecret(request);
    const expected = process.env.INTERNAL_REFUND_SECRET || '';
    if (!expected || secret !== expected) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const body = await request.json();
    const { userId, amount, relatedId, reason } = body || {};

    if (!userId || !Number.isInteger(amount) || amount <= 0 || !relatedId) {
      return NextResponse.json({ error: 'userId, amount (>0), relatedId are required' }, { status: 400 });
    }

    const result = await prisma.$transaction(async (tx) => {
      // Idempotency: if this relatedId was refunded already, do nothing.
      const existed = await tx.pointTransaction.findFirst({
        where: { type: 'refund', relatedId },
        select: { id: true },
      });
      if (existed) {
        const u = await tx.user.findUnique({ where: { id: userId }, select: { points: true } });
        return { already: true, balance: u?.points ?? 0 };
      }

      const updated = await tx.user.update({
        where: { id: userId },
        data: { points: { increment: amount } },
        select: { points: true },
      });

      await tx.pointTransaction.create({
        data: {
          userId,
          amount,
          type: 'refund',
          description: reason || 'refund',
          relatedId,
        },
      });

      return { already: false, balance: updated.points };
    });

    return NextResponse.json({ success: true, ...result });
  } catch (e: any) {
    console.error('Refund error:', e);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
