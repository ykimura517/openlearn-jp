// app/api/v1/courses/[courseId]/articles/[articleId]/questions/route.ts

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import type { ExerciseQuestionsResponse } from '@/types/api';

export async function GET(
  request: Request,
  { params }: { params: { courseId: string; articleId: string } }
) {
  try {
    // まず該当記事が存在するか、またcourseIdと紐付いているかチェック
    const article = await prisma.masterCourseArticle.findFirst({
      where: {
        id: params.articleId,
        courseId: params.courseId,
      },
    });

    if (!article) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }

    // 該当記事に紐づく練習問題を取得（作成日時順）
    const exercises = await prisma.masterCourseArticleExercise.findMany({
      where: {
        courseArticleId: params.articleId,
      },
      orderBy: {
        createdAt: 'asc',
      },
    });

    // APIレスポンスの型に合わせて変換
    const questions = exercises.map((ex, index) => {
      // DB上のexerciseTypeをAPI用の値に変換（SELECTION -> multiple-choice, TEXT -> free-text）
      const type =
        ex.exerciseType === 'SELECTION' ? 'multiple-choice' : 'free-text';
      let options: string[] | undefined;
      if (ex.options) {
        try {
          options = JSON.parse(ex.options);
        } catch (e) {
          options = [];
        }
      }
      return {
        id: ex.id,
        type,
        question: ex.question,
        options,
        correctAnswer: ex.correctAnswer || '',
      };
    });

    const result: ExerciseQuestionsResponse = {
      questions,
    };

    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
