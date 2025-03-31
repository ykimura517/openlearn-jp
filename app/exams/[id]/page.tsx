'use client';

import { useState } from 'react';
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

interface ExamParams {
  params: {
    id: string;
  };
}

export default function ExamPage({ params }: ExamParams) {
  const examId = params.id;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds

  // 実際のアプリケーションではAPIからデータを取得します
  const exam = {
    id: examId,
    title: examId === 'ai-basics' ? '生成AI基礎試験' : '試験タイトル',
    description:
      '生成AIの基礎知識を測定する試験です。ChatGPT、Stable Diffusion、AIの歴史などについての問題が出題されます。',
    category: 'ai',
    categoryName: '生成AI',
    level: '初級',
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: '生成AIの主な種類として正しくないものはどれですか？',
        options: ['テキスト生成AI', '画像生成AI', '音楽生成AI', '物理演算AI'],
        correctAnswer: '物理演算AI',
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: 'ChatGPTの開発元として正しいのはどれですか？',
        options: ['Google', 'OpenAI', 'Microsoft', 'Meta'],
        correctAnswer: 'OpenAI',
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'Transformerアーキテクチャが発表されたのは何年ですか？',
        options: ['2015年', '2017年', '2019年', '2021年'],
        correctAnswer: '2017年',
      },
      {
        id: 4,
        type: 'multiple-choice',
        question: '生成AIのトレーニングに使用される主な手法はどれですか？',
        options: ['教師あり学習', '強化学習', '教師なし学習', '以上すべて'],
        correctAnswer: '以上すべて',
      },
      {
        id: 5,
        type: 'free-text',
        question:
          '生成AIの倫理的課題について、あなたの考えを100字以内で述べてください。',
        correctAnswer: '',
      },
    ],
    timeLimit: '30分',
    passingScore: 70,
  };

  const handleAnswerChange = (questionIndex: number, answer: string) => {
    setAnswers({
      ...answers,
      [questionIndex]: answer,
    });
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < exam.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);

    // Calculate score
    let correctAnswers = 0;
    exam.questions.forEach((question, index) => {
      if (
        question.type === 'multiple-choice' &&
        answers[index] === question.correctAnswer
      ) {
        correctAnswers++;
      } else if (question.type === 'free-text') {
        // For free-text questions, we'll give a point if they answered something
        if (answers[index] && answers[index].trim().length > 0) {
          correctAnswers++;
        }
      }
    });

    const score = Math.round((correctAnswers / exam.questions.length) * 100);

    setShowResults(true);
  };

  const currentQuestion = exam.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / exam.questions.length) * 100;

  // Calculate score for results
  const calculateScore = () => {
    let correctAnswers = 0;
    exam.questions.forEach((question, index) => {
      if (
        question.type === 'multiple-choice' &&
        answers[index] === question.correctAnswer
      ) {
        correctAnswers++;
      } else if (question.type === 'free-text') {
        // For free-text questions, we'll give a point if they answered something
        if (answers[index] && answers[index].trim().length > 0) {
          correctAnswers++;
        }
      }
    });

    return Math.round((correctAnswers / exam.questions.length) * 100);
  };

  const score = calculateScore();
  const isPassed = score >= exam.passingScore;

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mb-8'>
        <Link
          href='/exams'
          className='text-orange-500 hover:underline mb-4 inline-block'
        >
          <ArrowLeft className='inline mr-2 h-4 w-4' /> 試験一覧に戻る
        </Link>
        <h1 className='text-3xl font-bold text-gray-800 mb-2'>{exam.title}</h1>
        <p className='text-gray-600 mb-4'>{exam.description}</p>
        <div className='flex flex-wrap gap-2 mb-4'>
          <span className='bg-orange-100 text-orange-600 px-2 py-1 rounded text-sm'>
            {exam.categoryName}
          </span>
          <span className='bg-orange-100 text-orange-600 px-2 py-1 rounded text-sm'>
            {exam.level}
          </span>
          <span className='bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm flex items-center'>
            <Clock className='mr-1 h-4 w-4' /> {exam.timeLimit}
          </span>
        </div>
      </div>

      {/* Exam Progress */}
      <div className='mb-6'>
        <div className='flex justify-between items-center mb-2'>
          <span className='text-gray-600'>
            問題 {currentQuestionIndex + 1} / {exam.questions.length}
          </span>
          <span className='text-gray-600'>進捗: {Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className='h-2' />
      </div>

      {/* Question Card */}
      <Card className='mb-8'>
        <CardHeader>
          <CardTitle className='text-xl text-gray-800'>
            問題 {currentQuestionIndex + 1}: {currentQuestion.question}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {currentQuestion.type === 'multiple-choice' ? (
            <RadioGroup
              value={answers[currentQuestionIndex] || ''}
              onValueChange={(value) =>
                handleAnswerChange(currentQuestionIndex, value)
              }
            >
              {currentQuestion.options?.map((option, index) => (
                <div key={index} className='flex items-center space-x-2 mb-4'>
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className='text-base'>
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          ) : (
            <div>
              <Textarea
                placeholder='回答を入力してください...'
                className='min-h-32'
                value={answers[currentQuestionIndex] || ''}
                onChange={(e) =>
                  handleAnswerChange(currentQuestionIndex, e.target.value)
                }
              />
              <p className='text-gray-500 text-sm mt-2'>
                100字以内で回答してください。
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <div className='flex justify-between mb-8'>
        <Button
          variant='outline'
          onClick={handlePrevQuestion}
          disabled={currentQuestionIndex === 0}
          className='border-orange-500 text-orange-500 hover:bg-orange-50'
        >
          前の問題
        </Button>

        {currentQuestionIndex < exam.questions.length - 1 ? (
          <Button
            onClick={handleNextQuestion}
            className='bg-orange-500 hover:bg-orange-600 text-white'
          >
            次の問題
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            disabled={isSubmitted}
            className='bg-orange-500 hover:bg-orange-600 text-white'
          >
            提出する
          </Button>
        )}
      </div>

      {/* Results Dialog */}
      <Dialog open={showResults} onOpenChange={setShowResults}>
        <DialogContent className='sm:max-w-md'>
          <DialogHeader>
            <DialogTitle className='text-center text-2xl'>
              {isPassed ? (
                <span className='text-green-600'>
                  合格おめでとうございます！
                </span>
              ) : (
                <span className='text-red-600'>残念ながら不合格です</span>
              )}
            </DialogTitle>
            <DialogDescription className='text-center'>
              <div className='my-6 flex justify-center'>
                {isPassed ? (
                  <Trophy className='h-16 w-16 text-yellow-500' />
                ) : (
                  <div className='h-16 w-16 rounded-full bg-red-100 flex items-center justify-center'>
                    <span className='text-red-600 text-2xl'>!</span>
                  </div>
                )}
              </div>
              <p className='text-xl mb-2'>
                あなたのスコア: <span className='font-bold'>{score}%</span>
              </p>
              <p className='mb-4'>合格ライン: {exam.passingScore}%</p>
              <p className='text-sm text-gray-600 mb-4'>
                あなたは上位30%のパフォーマンスを達成しました！
              </p>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className='flex-col sm:flex-col gap-2'>
            <SocialShareButtons
              title={`OpenLearn JPの${exam.title}で${score}%のスコアを獲得しました！`}
              className='mb-4 justify-center'
            />
            <div className='flex gap-2 w-full'>
              <Button
                variant='outline'
                className='flex-1 border-orange-500 text-orange-500 hover:bg-orange-50'
                onClick={() => {
                  setShowResults(false);
                  setIsSubmitted(false);
                  setCurrentQuestionIndex(0);
                  setAnswers({});
                }}
              >
                もう一度挑戦
              </Button>
              <Link href='/exams' className='flex-1'>
                <Button className='w-full bg-orange-500 hover:bg-orange-600 text-white'>
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
