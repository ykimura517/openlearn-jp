// app/api/v1/courses/[courseId]/articles/[articleId]/navigation/route.ts

import { type NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import type { CourseArticleNavigationResponse } from '@/types/api';

export async function GET(
  request: NextRequest,
  { params }: { params: { courseId: string; articleId: string } }
) {
  const { courseId, articleId } = params;

  try {
    // 対象コースの全記事をsequence順に取得
    const articles = await prisma.masterCourseArticle.findMany({
      where: { courseId },
      orderBy: { sequence: 'asc' },
    });

    if (articles.length === 0) {
      return NextResponse.json(
        { error: `No articles found for course ${courseId}` },
        { status: 404 }
      );
    }

    // 現在のarticleIdのインデックスを特定
    const currentIndex = articles.findIndex(
      (article) => article.id === articleId
    );
    if (currentIndex === -1) {
      return NextResponse.json(
        { error: `Article ${articleId} not found in course ${courseId}` },
        { status: 404 }
      );
    }

    // Prismaから取得した記事データを、APIの型(CourseArticleSummary)に合わせて整形
    const articleSummaries = articles.map((article) => ({
      id: article.id,
      sequence: article.sequence,
      title: article.title || '',
      durationMin: article.durationMin || 0,
    }));

    const navigationInfo: CourseArticleNavigationResponse = {
      currentCourseArticle: articleSummaries[currentIndex],
      prevCourseArticle:
        currentIndex > 0 ? articleSummaries[currentIndex - 1] : null,
      nextCourseArticle:
        currentIndex < articleSummaries.length - 1
          ? articleSummaries[currentIndex + 1]
          : null,
      currentCourseArticleIndex: currentIndex,
      totalCourseArticles: articleSummaries.length,
    };

    return NextResponse.json(navigationInfo);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
