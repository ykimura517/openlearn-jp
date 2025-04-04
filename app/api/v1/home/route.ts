// app/api/v1/home/route.ts

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import type { CategoryWithRepresentativeCourse } from '@/types/api';

// eslint-disable-next-line
export async function GET(_: Request) {
  try {
    // MasterCategoryとその関連するコース情報を取得
    const categories = await prisma.masterCategory.findMany({
      include: {
        courses: {
          // トップページ用として、代表となる上位3件のコースを取得
          take: 3,
          orderBy: {
            createdAt: 'asc',
          },
        },
      },
    });

    // PrismaのデータをAPIのレスポンス型に合わせて変換
    const result: CategoryWithRepresentativeCourse[] = categories.map(
      (category) => ({
        categoryId: category.id,
        title: category.name,
        description: category.description,
        courses: category.courses.map((course) => ({
          id: course.id,
          // course.title は nullable の可能性があるため、nullの場合は空文字にしています
          title: course.title || '',
          level: course.level,
          // 所要時間 (durationMin) が設定されていれば「○分」として表示
          duration: course.durationMin ? `${course.durationMin}分` : 'N/A',
        })),
      })
    );

    return NextResponse.json(result);
  } catch (error: any) {
    // エラー発生時はエラーメッセージと共に 500 エラーを返す
    const msg =
      process.env.NEXT_PUBLIC_ENV !== 'prod'
        ? error.message
        : 'INTERNAL_SERVER_ERROR';
    console.error('Error fetching categories:', msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
