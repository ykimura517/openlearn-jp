// app/api/v1/exams/[examId]/submit/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import type {
  ExamSubmission as ExamSubmissionReq,
  ExamResult,
} from '@/types/api';
import { ulid } from 'ulid';
import { authenticate } from '@/lib/apiHandler';

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const decodedToken = await authenticate(request);
  const userId = decodedToken.uid;
  const submissionId = ulid();

  try {
    const body: ExamSubmissionReq = await request.json();

    // 対象試験とその問題を正解情報付きで取得
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

    const questions = exam.examQuestions;
    let correctAnswers = 0;
    const MapQuestionIdToCorrectAnswerValue: Record<string, string> = {};

    // 各問題ごとに採点
    for (const q of questions) {
      const userAnswer = body.MapQuestionIdToAnswer[q.id];
      if (q.questionType === 'multiple-choice') {
        if (userAnswer === q.correctAnswer) {
          correctAnswers++;
        }
        MapQuestionIdToCorrectAnswerValue[q.id] = q.correctAnswer || '';
      } else {
        // 自由記述は回答が入力されていれば採点（※実際は内容の評価ロジックが必要）
        if (userAnswer && userAnswer.trim().length > 0) {
          correctAnswers++;
          MapQuestionIdToCorrectAnswerValue[q.id] = '評価不要';
        } else {
          MapQuestionIdToCorrectAnswerValue[q.id] = '';
        }
      }
    }

    const totalQuestions = questions.length;
    const score = Math.round((correctAnswers / totalQuestions) * 100);
    const passed = score >= exam.passingScore;

    // 試験提出レコードを作成
    const submission = await prisma.examSubmission.create({
      data: {
        id: submissionId,
        examId: exam.id,
        userId: userId,
        score: score,
        percentile: 0, // 後で更新
      },
    });

    // 各問題の回答レコードを作成
    for (const q of questions) {
      const userAnswer = body.MapQuestionIdToAnswer[q.id] || '';
      const isCorrect =
        (q.questionType === 'multiple-choice' &&
          userAnswer === q.correctAnswer) ||
        (q.questionType !== 'multiple-choice' && userAnswer.trim().length > 0);
      await prisma.examAnswer.create({
        data: {
          id: ulid(),
          examSubmissionId: submission.id,
          examQuestionId: q.id,
          answer: userAnswer,
          isCorrect: isCorrect,
        },
      });
    }

    // 同一試験の提出結果を全件取得し、パーセンタイルを計算
    const submissions = await prisma.examSubmission.findMany({
      where: { examId: exam.id },
    });
    const totalSubmissions = submissions.length;
    const countLower = submissions.filter((s) => s.score < score).length;
    const percentile =
      totalSubmissions > 0
        ? Math.round((countLower / totalSubmissions) * 100)
        : 100;

    // パーセンタイルを更新
    await prisma.examSubmission.update({
      where: { id: submission.id },
      data: { percentile },
    });

    const result: ExamResult = {
      subMissionId: submissionId,
      examId: exam.id,
      examTitle: exam.title,
      examCategoryName: exam.category.name,
      examLevel: String(exam.level),
      score,
      correctAnswers,
      totalQuestions,
      passed,
      passingScore: exam.passingScore,
      percentile,
      MapQuestionIdToCorrectAnswerValue,
    };

    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
