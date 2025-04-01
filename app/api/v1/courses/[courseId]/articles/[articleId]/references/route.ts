// app/api/v1/courses/[courseId]/articles/[articleId]/references/route.ts

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import type { ReferencesResponse } from '@/types/api';

interface RouteParams {
  params: {
    courseId: string;
    articleId: string;
  };
}

export async function GET(request: Request, { params }: RouteParams) {
  const { courseId, articleId } = params;

  // 指定された記事が対象のコースに存在するか確認
  const article = await prisma.masterCourseArticle.findFirst({
    where: {
      id: articleId,
      courseId: courseId,
    },
  });

  if (!article) {
    return NextResponse.json({ error: 'Article not found' }, { status: 404 });
  }

  // 記事に関連付けられた参考リンクのリレーションを取得
  const relationEntries =
    await prisma.masterCourseArticleMasterCourseArticleReferenceRelation.findMany(
      {
        where: {
          masterCourseArticleId: articleId,
        },
        select: {
          referenceId: true,
        },
        orderBy: {
          score: 'desc', // スコア順にソート
        },
        take: 4, // 上位4件を取得
      }
    );

  const referenceIds = relationEntries.map((entry) => entry.referenceId);

  // 参考リンクのIDリストから、実際の参考リンクデータを取得
  const referencesData = await prisma.masterCourseArticleReference.findMany({
    where: {
      id: { in: referenceIds },
    },
  });

  // APIの型に合わせて整形
  const response: ReferencesResponse = {
    references: referencesData.map((ref) => ({
      title: ref.title,
      url: ref.url,
      description: ref.description,
    })),
  };

  return NextResponse.json(response);
}
