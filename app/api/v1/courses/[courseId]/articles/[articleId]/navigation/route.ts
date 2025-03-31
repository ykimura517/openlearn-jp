import { type NextRequest, NextResponse } from 'next/server';
import type { CourseArticleNavigationResponse } from '@/types/api';

interface RouteParams {
  params: {
    id: string;
    articleId: string;
  };
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  const { id: courseId, articleId } = params;

  // モックデータ
  const mockCourseArticles: Record<string, CourseArticleNavigationResponse> = {
    'intro-to-ai': {
      currentCourseArticle: {
        id: 'lesson-1',
        sequence: 1,
        title: '生成AIとは何か',
        durationMin: 20,
      },
      prevCourseArticle: null,
      nextCourseArticle: {
        id: 'AprevCourseArticle-2',
        sequence: 2,
        title: '大規模言語モデル（LLM）の仕組み',
        durationMin: 25,
      },
      currentCourseArticleIndex: 0,
      totalCourseArticles: 5,
    },
  };

  // レッスンIDに基づいて動的にナビゲーション情報を生成
  let navigationInfo: CourseArticleNavigationResponse;

  if (courseId === 'intro-to-ai') {
    const articles = [
      { id: 'lesson-1', title: '生成AIとは何か', sequence: 1, durationMin: 20 },
      {
        id: 'lesson-2',
        title: '大規模言語モデル（LLM）の仕組み',
        sequence: 2,
        durationMin: 25,
      },
      {
        id: 'lesson-3',
        title: 'ChatGPTの使い方と活用例',
        durationMin: 30,
        sequence: 3,
      },
      {
        id: 'lesson-4',
        title: '画像生成AIの基礎',
        durationMin: 25,
        sequence: 4,
      },
      {
        id: 'lesson-5',
        title: '生成AIの未来と課題',
        durationMin: 20,
        sequence: 5,
      },
    ];

    const currentIndex = articles.findIndex(
      (article) => article.id === articleId
    );

    if (currentIndex !== -1) {
      navigationInfo = {
        currentCourseArticle: articles[currentIndex],
        prevCourseArticle: currentIndex > 0 ? articles[currentIndex - 1] : null,
        nextCourseArticle:
          currentIndex < articles.length - 1
            ? articles[currentIndex + 1]
            : null,
        currentCourseArticleIndex: currentIndex,
        totalCourseArticles: articles.length,
      };
    } else {
      // デフォルト値（レッスンが見つからない場合）
      navigationInfo = mockCourseArticles[courseId];
    }
  } else if (courseId === 'prompt-engineering') {
    const articles = [
      {
        id: 'lesson-1',
        title: 'プロンプトエンジニアリングとは',
        durationMin: 20,
        sequence: 1,
      },
      {
        id: 'lesson-2',
        title: '効果的なプロンプトの構造',
        durationMin: 30,
        sequence: 2,
      },

      {
        id: 'lesson-3',
        title: 'ユースケース別プロンプト設計',
        durationMin: 40,
        sequence: 3,
      },
      {
        id: 'lesson-4',
        title: 'プロンプトの最適化と反復',
        durationMin: 30,
        sequence: 4,
      },
      {
        id: 'lesson-5',
        title: '高度なプロンプト技術',
        durationMin: 30,
        sequence: 5,
      },
      {
        id: 'lesson-6',
        title: 'プロンプトの評価と改善',
        durationMin: 20,
        sequence: 6,
      },
      { id: 'lesson-7', title: '実践演習', durationMin: 30, sequence: 7 },
    ];

    const currentIndex = articles.findIndex(
      (article) => article.id === articleId
    );

    if (currentIndex !== -1) {
      navigationInfo = {
        currentCourseArticle: articles[currentIndex],
        prevCourseArticle: currentIndex > 0 ? articles[currentIndex - 1] : null,
        nextCourseArticle:
          currentIndex < articles.length - 1
            ? articles[currentIndex + 1]
            : null,
        currentCourseArticleIndex: currentIndex,
        totalCourseArticles: articles.length,
      };
    } else {
      // レッスンが見つからない場合のエラーハンドリングを改善
      return NextResponse.json(
        { error: `Article ${articleId} not found in course ${courseId}` },
        { status: 404 }
      );
    }
  } else {
    // 未知のコースIDの場合はデフォルト値
    navigationInfo = {
      currentCourseArticle: {
        id: articleId,
        title: 'レッスン',
        durationMin: 30,
        sequence: 1,
      },
      prevCourseArticle: null,
      nextCourseArticle: null,
      currentCourseArticleIndex: 0,
      totalCourseArticles: 1,
    };
  }

  // 遅延をシミュレート
  await new Promise((resolve) => setTimeout(resolve, 300));

  return NextResponse.json(navigationInfo);
}
