// app/exams/[id]/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ArrowLeft, Clock, Trophy } from 'lucide-react';
import SocialShareButtons from '@/components/social-share-buttons';
import { apiFetch } from '@/lib/apiClient';
import type {
  ExamDetail,
  ExamSubmission as ExamSubmissionReq,
  ExamResult,
} from '@/types/api';

interface ExamParams {
  params: {
    id: string;
  };
}

export default function ExamPage({ params }: ExamParams) {
  const examId = params.id;
  const [exam, setExam] = useState<ExamDetail | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1800); // 30分
  const [result, setResult] = useState<ExamResult | null>(null);

  useEffect(() => {
    // APIから試験詳細を取得
    apiFetch<ExamDetail>(`/api/v1/exams/${examId}`)
      .then((data) => {
        setExam(data);
      })
      .catch((err) => {
        console.error('試験の取得に失敗しました:', err);
      });
  }, [examId]);

  const handleAnswerChange = (questionId: string, answer: string) => {
    setAnswers({
      ...answers,
      [questionId]: answer,
    });
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNextQuestion = () => {
    if (exam && currentQuestionIndex < exam.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = async () => {
    if (!exam) return;
    setIsSubmitted(true);

    const submissionPayload: ExamSubmissionReq = {
      examId: exam.id,
      MapQuestionIdToAnswer: answers,
    };

    try {
      const res = await apiFetch<ExamResult>(
        `/api/v1/exams/${examId}/submit`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submissionPayload),
        },
        true
      );
      setResult(res);
      setShowResults(true);
    } catch (error) {
      console.error('試験提出に失敗しました:', error);
    }
  };

  if (!exam) {
    return <div>試験データを読み込み中...</div>;
  }

  const currentQuestion = exam.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / exam.questions.length) * 100;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link
          href="/exams"
          className="text-orange-500 hover:underline mb-4 inline-block"
        >
          <ArrowLeft className="inline mr-2 h-4 w-4" /> 試験一覧に戻る
        </Link>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{exam.title}</h1>
        <p className="text-gray-600 mb-4">{exam.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-sm">
            {exam.categoryName}
          </span>
          <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-sm">
            {exam.level}
          </span>
          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm flex items-center">
            <Clock className="mr-1 h-4 w-4" /> {exam.timeLimitMin}分
          </span>
        </div>
      </div>

      {/* 試験進捗 */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600">
            問題 {currentQuestionIndex + 1} / {exam.questions.length}
          </span>
          <span className="text-gray-600">進捗: {Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* 問題カード */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl text-gray-800">
            問題 {currentQuestionIndex + 1}: {currentQuestion.question}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {currentQuestion.questionType === 'SELECTION' ? (
            <RadioGroup
              value={answers[currentQuestion.id] || ''}
              onValueChange={(value) =>
                handleAnswerChange(currentQuestion.id, value)
              }
            >
              {currentQuestion.options?.map((option, index) => (
                <div key={index} className="flex items-center space-x-2 mb-4">
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="text-base">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          ) : (
            <div>
              <Textarea
                placeholder="回答を入力してください..."
                className="min-h-32"
                value={answers[currentQuestion.id] || ''}
                onChange={(e) =>
                  handleAnswerChange(currentQuestion.id, e.target.value)
                }
              />
              <p className="text-gray-500 text-sm mt-2">
                100字以内で回答してください。
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* ナビゲーションボタン */}
      <div className="flex justify-between mb-8">
        <Button
          variant="outline"
          onClick={handlePrevQuestion}
          disabled={currentQuestionIndex === 0}
          className="border-orange-500 text-orange-500 hover:bg-orange-50"
        >
          前の問題
        </Button>

        {currentQuestionIndex < exam.questions.length - 1 ? (
          <Button
            onClick={handleNextQuestion}
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            次の問題
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            disabled={isSubmitted}
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            提出する
          </Button>
        )}
      </div>

      {/* 結果ダイアログ */}
      <Dialog open={showResults} onOpenChange={setShowResults}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">
              {result && result.passed ? (
                <span className="text-green-600">
                  合格おめでとうございます！
                </span>
              ) : (
                <span className="text-red-600">残念ながら不合格です</span>
              )}
            </DialogTitle>
            <DialogDescription className="text-center">
              <div className="my-6 flex justify-center">
                {result && result.passed ? (
                  <Trophy className="h-16 w-16 text-yellow-500" />
                ) : (
                  <div className="h-16 w-16 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-red-600 text-2xl">!</span>
                  </div>
                )}
              </div>
              {result && (
                <>
                  <p className="text-xl mb-2">
                    あなたのスコア:{' '}
                    <span className="font-bold">{result.score}%</span>
                  </p>
                  <p className="mb-4">合格ライン: {exam.passingScore}%</p>
                  <p className="text-sm text-gray-600 mb-4">
                    あなたは上位{result.percentile}
                    %のパフォーマンスを達成しました！
                  </p>
                </>
              )}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex-col sm:flex-col gap-2">
            <SocialShareButtons
              title={`OpenLearn JPの${exam.title}で${
                result?.score || 0
              }%のスコアを獲得しました！`}
              className="mb-4 justify-center"
            />
            <div className="flex gap-2 w-full">
              <Button
                variant="outline"
                className="flex-1 border-orange-500 text-orange-500 hover:bg-orange-50"
                onClick={() => {
                  setShowResults(false);
                  setIsSubmitted(false);
                  setCurrentQuestionIndex(0);
                  setAnswers({});
                  setResult(null);
                }}
              >
                もう一度挑戦
              </Button>
              <Link href="/exams" className="flex-1">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  他の試験を見る
                </Button>
              </Link>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
