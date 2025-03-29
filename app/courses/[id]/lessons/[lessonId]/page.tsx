import { Suspense } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import SocialShareButtons from '@/components/social-share-buttons';
import LessonContent from './lesson-content';
import PracticeQuestions from './practice-questions';
import AiChatSection from './ai-chat-section';
import NavigationSection from './navigation-section';
import ReferencesSection from './references-section';
import NextLessonSection from './next-lesson-section';
import type { LessonDetail, PracticeQuestionsResponse } from '@/types/api';

interface LessonPageProps {
  params: {
    id: string;
    lessonId: string;
  };
}

// サーバーコンポーネントでのデータフェッチング
async function getLessonData(courseId: string, lessonId: string) {
  try {
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_API_BASE_URL || ''
      }/api/v1/courses/${courseId}/lessons/${lessonId}`,
      { cache: 'no-store' }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Failed to fetch lesson content: ${response.status} - ${errorText}`
      );
    }

    return (await response.json()) as LessonDetail;
  } catch (error) {
    console.error('Error fetching lesson data:', error);
    throw error;
  }
}

// 練習問題の取得
async function getPracticeQuestions(courseId: string, lessonId: string) {
  try {
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_API_BASE_URL || ''
      }/api/v1/courses/${courseId}/lessons/${lessonId}/questions`,
      { cache: 'no-store' }
    );

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as PracticeQuestionsResponse;
  } catch (error) {
    console.error('Error fetching practice questions:', error);
    return null;
  }
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { id: courseId, lessonId } = params;
  // データフェッチング
  let lessonData: LessonDetail | null = null;
  let error: string | null = null;
  let questions: PracticeQuestionsResponse | null = null;

  try {
    // 並列でデータを取得
    [lessonData, questions] = await Promise.all([
      getLessonData(courseId, lessonId),
      getPracticeQuestions(courseId, lessonId),
    ]);
  } catch (err) {
    error =
      err instanceof Error
        ? err.message
        : 'レッスンデータの取得中にエラーが発生しました。';
  }

  // エラー状態
  if (error || !lessonData) {
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
          {lessonData.courseTitle}
        </h1>
        <h2 className='text-xl text-gray-600 mb-4'>{lessonData.title}</h2>
        <SocialShareButtons
          title={`${lessonData.courseTitle} - ${lessonData.title}`}
          className='mb-6'
        />
      </div>

      {/* レッスンナビゲーション - クライアントコンポーネント */}
      <NavigationSection courseId={courseId} lessonId={lessonId} />

      {/* レッスンコンテンツ - サーバーサイドレンダリング */}
      <div className='mb-12'>
        <Suspense
          fallback={
            <div className='animate-pulse h-96 bg-gray-100 rounded-md'></div>
          }
        >
          <LessonContent content={lessonData.content} />
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
        <AiChatSection lessonTitle={lessonData.title} />
      </div>

      {/* 次のレッスンボタン - クライアントコンポーネント */}
      <NextLessonSection courseId={courseId} lessonId={lessonId} />

      {/* 参考リンク - クライアントコンポーネント */}
      <ReferencesSection courseId={courseId} lessonId={lessonId} />
    </div>
  );
}
