// app/api/v1/home/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  // トップページで表示するカテゴリID（DBのMasterCategory.idと一致するもの）
  const categoryIds = ['ai', 'programming', 'python'];

  // 各カテゴリの直下のコース（最新の3件）を取得
  const categories = await prisma.masterCategory.findMany({
    where: { id: { in: categoryIds } },
    include: {
      courses: {
        orderBy: { createdAt: 'desc' },
        take: 3,
        select: {
          id: true,
          title: true,
          difficulty: true,
          courseContents: true,
        },
      },
    },
  });

  // フロント側が必要とする形に整形
  const transformed = categories.map((category) => ({
    id: category.id,
    // DBのnameをタイトルとして利用（例："生成AI", "プログラミング", "Web開発"）
    title: category.name,
    // 説明はDBにないので空文字または必要に応じた静的な文言に変更してください
    description: '',
    courses: category.courses.map((course) => ({
      id: course.id,
      title: course.title,
      level: course.difficulty || '未設定',
      // durationはDBに情報が無い場合は仮の値を設定
      duration: String(course.durationMin ?? '未設定'),
    })),
  }));

  return NextResponse.json(transformed);
}
