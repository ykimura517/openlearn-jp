// app/api/v1/mypage/profile/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import type { User as ApiUser } from '@/types/api';
import { authenticate } from '@/lib/apiHandler';

export async function GET(request: Request) {
  try {
    const decodedToken = await authenticate(request);
    const userId = decodedToken.uid;
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    const apiUser: ApiUser = {
      id: user.id,
      displayId: user.displayId,
      name: user.name || '',
      occupation: user.occupation || '',
      birthDate: user.birthDate || '',
      joinedDate: user.createdAt.toISOString(),
    };
    return NextResponse.json(apiUser);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const decodedToken = await authenticate(request);
    const userId = decodedToken.uid;
    const body = await request.json();
    const { name, occupation, displayId } = body;

    const user = await prisma.user.update({
      where: { id: userId },
      data: {
        name,
        occupation,
        displayId,
      },
    });

    const responseUser: ApiUser = {
      id: user.id,
      displayId: user.displayId,
      name: user.name || '',
      occupation: user.occupation || '',
      birthDate: user.birthDate || '',
      joinedDate: user.createdAt.toISOString(),
    };

    return NextResponse.json(responseUser);
  } catch (error: any) {
    // displayIdの重複によるユニーク制約違反の場合、PrismaエラーコードP2002が返る
    if (
      error.code === 'P2002' &&
      error.meta &&
      error.meta.target &&
      error.meta.target.includes('displayId')
    ) {
      return NextResponse.json(
        { message: 'DISPLAY_ID_ALREADY_USED' },
        { status: 409 }
      );
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
