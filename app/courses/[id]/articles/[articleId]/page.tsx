import { Suspense } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import SocialShareButtons from '@/components/social-share-buttons';
import ArticleContent from './article-content';
import PracticeQuestions from './practice-questions';
import AiChatSection from './ai-chat-section';
import NavigationSection from './navigation-section';
import ReferencesSection from './references-section';
import NextArticleSection from './next-article-section';
import type {
  CourseArticleDetail,
  ExerciseQuestionsResponse,
} from '@/types/api';

interface ArticlePageProps {
  params: {
    id: string;
    articleId: string;
  };
}

// サーバーコンポーネントでのデータフェッチング
async function getArticleData(courseId: string, articleId: string) {
  try {
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_API_BASE_URL || ''
      }/api/v1/courses/${courseId}/articles/${articleId}`,
      { cache: 'no-store' }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Failed to fetch lesson(article) content: ${response.status} - ${errorText}`
      );
    }

    return (await response.json()) as CourseArticleDetail;
  } catch (error) {
    console.error('Error fetching lesson data:', error);
    throw error;
  }
}

// 練習問題の取得
async function getExerciseQuestions(courseId: string, articleId: string) {
  try {
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_API_BASE_URL || ''
      }/api/v1/courses/${courseId}/articles/${articleId}/questions`,
      { cache: 'no-store' }
    );

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as ExerciseQuestionsResponse;
  } catch (error) {
    console.error('Error fetching practice questions:', error);
    return null;
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { id: courseId, articleId } = params;
  // データフェッチング
  let articleData: CourseArticleDetail | null = null;
  let error: string | null = null;
  let questions: ExerciseQuestionsResponse | null = null;

  try {
    // 並列でデータを取得
    [articleData, questions] = await Promise.all([
      getArticleData(courseId, articleId),
      getExerciseQuestions(courseId, articleId),
    ]);
  } catch (err) {
    error =
      err instanceof Error
        ? err.message
        : 'レッスンデータの取得中にエラーが発生しました。';
  }

  // エラー状態
  if (error || !articleData) {
    return (
      <div className='container mx-auto px-4 py-8'>
        <div className='bg-red-50 border border-red-200 rounded-lg p-6 text-center'>
          <h2 className='text-xl font-bold text-red-600 mb-2'>
            エラーが発生しました
          </h2>
          <p className='text-red-600 mb-4'>
            {error || 'レッスンデータを取得できませんでした。'}
          </p>
          <Link href={`/courses/${courseId}`}>
            <Button
              variant='outline'
              className='border-red-500 text-red-500 hover:bg-red-50'
            >
              コース概要に戻る
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mb-8'>
        <Link
          href={`/courses/${courseId}`}
          className='text-orange-500 hover:underline mb-4 inline-block'
        >
          ← コース概要に戻る
        </Link>
        <h1 className='text-3xl font-bold text-gray-800 mb-2'>
          {articleData.courseTitle}
        </h1>
        <h2 className='text-xl text-gray-600 mb-4'>{articleData.title}</h2>
        <SocialShareButtons
          title={`${articleData.courseTitle} - ${articleData.title}`}
          className='mb-6'
        />
      </div>

      {/* レッスンナビゲーション - クライアントコンポーネント */}
      <NavigationSection courseId={courseId} articleId={articleId} />

      {/* レッスンコンテンツ - サーバーサイドレンダリング */}
      <div className='mb-12'>
        <Suspense
          fallback={
            <div className='animate-pulse h-96 bg-gray-100 rounded-md'></div>
          }
        >
          <ArticleContent content={articleData.content} />
        </Suspense>
      </div>

      {/* 練習問題 - クライアントサイドインタラクティブ */}
      {questions && questions.questions.length > 0 && (
        <div className='mb-12'>
          <h2 className='text-2xl font-bold text-gray-800 mb-6'>練習問題</h2>
          <PracticeQuestions questions={questions.questions} />
        </div>
      )}

      {/* AIチャットセクション - クライアントサイドインタラクティブ */}
      <div className='mb-12'>
        <h2 className='text-2xl font-bold text-gray-800 mb-6'>AIに質問する</h2>
        <AiChatSection articleTitle={articleData.title} />
      </div>

      {/* 次のレッスンボタン - クライアントコンポーネント */}
      <NextArticleSection courseId={courseId} articleId={articleId} />

      {/* 参考リンク - クライアントコンポーネント */}
      <ReferencesSection courseId={courseId} articleId={articleId} />
    </div>
  );
}
