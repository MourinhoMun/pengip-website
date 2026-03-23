import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/db';

export async function GET(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const tool = await prisma.tool.findFirst({
    where: {
      OR: [
        { nameEn: slug },
        { id: slug },
      ],
      visible: true,
    },
    select: {
      id: true,
      name: true,
      nameEn: true,
      description: true,
      icon: true,
      tutorialUrl: true,
      tutorialContent: true,
    },
  });

  if (!tool) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json({ tool });
}
