// app/api/v1/exams/[examId]/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import type { ExamDetail, ExamQuestion } from '@/types/api';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  // このAPIは認証不要
  try {
    const exam = await prisma.masterExam.findUnique({
      where: { id: params.id },
      include: {
        examQuestions: true,
        category: true,
      },
    });

    if (!exam) {
      return NextResponse.json({ error: 'Exam not found' }, { status: 404 });
    }

    // マスター試験の問題を昇順にソートし、API用のExamQuestionに変換
    const questions: ExamQuestion[] = exam.examQuestions
      .sort((a, b) => a.sequence - b.sequence)
      .map((q) => {
        let options: string[] | undefined;
        if (q.options) {
          try {
            options = JSON.parse(q.options);
          } catch (err) {
            console.error('Error parsing options JSON:', err);
            options = [];
          }
        }
        return {
          id: q.id,
          sequence: q.sequence,
          questionType:
            q.questionType === 'multiple-choice' ? 'SELECTION' : 'TEXT',
          question: q.question,
          options,
        };
      });

    const result: ExamDetail = {
      id: exam.id,
      title: exam.title,
      description: exam.description,
      categoryId: exam.categoryId,
      categoryName: exam.category?.name || '',
      level: exam.level.toString(),
      questions,
      timeLimitMin: exam.timeLimitMin,
      passingScore: exam.passingScore,
    };

    return NextResponse.json(result);
  } catch (error: any) {
    const msg =
      process.env.NEXT_PUBLIC_ENV !== 'prod'
        ? error.message
        : 'INTERNAL_SERVER_ERROR';
    console.error('Error fetching exam details:', msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
