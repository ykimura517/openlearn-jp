'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle } from 'lucide-react';

interface Question {
  id: string;
  type: 'multiple-choice' | 'free-text';
  question: string;
  options?: string[];
  correctAnswer: string;
}

interface PracticeQuestionsProps {
  questions: Question[];
}

export default function PracticeQuestions({
  questions,
}: PracticeQuestionsProps) {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checkedAnswers, setCheckedAnswers] = useState<Record<number, boolean>>(
    {}
  );
  const [feedback, setFeedback] = useState<Record<number, string>>({});

  const handleAnswerChange = (questionId: number, answer: string) => {
    setAnswers({
      ...answers,
      [questionId]: answer,
    });

    // Reset checked state when answer changes
    if (checkedAnswers[questionId] !== undefined) {
      const newCheckedAnswers = { ...checkedAnswers };
      delete newCheckedAnswers[questionId];
      setCheckedAnswers(newCheckedAnswers);

      const newFeedback = { ...feedback };
      delete newFeedback[questionId];
      setFeedback(newFeedback);
    }
  };

  const checkAnswer = (questionId: number) => {
    const question = questions.find((q) => q.id === questionId);
    if (!question) return;

    const userAnswer = answers[questionId] || '';

    if (question.type === 'multiple-choice') {
      const isCorrect = userAnswer === question.correctAnswer;
      setCheckedAnswers({
        ...checkedAnswers,
        [questionId]: isCorrect,
      });
      setFeedback({
        ...feedback,
        [questionId]: isCorrect
          ? '正解です！'
          : `不正解です。正解は「${question.correctAnswer}」です。`,
      });
    } else if (question.type === 'free-text') {
      // For free-text questions, we'll just acknowledge the answer
      setCheckedAnswers({
        ...checkedAnswers,
        [questionId]: true,
      });
      setFeedback({
        ...feedback,
        [questionId]:
          '回答を受け付けました。自己評価のために参考解答をご確認ください。',
      });
    }
  };

  return (
    <div className="space-y-6">
      {questions.map((question, ind) => (
        <Card key={question.id} className="overflow-hidden">
          <CardHeader className="bg-orange-50">
            <CardTitle className="text-lg text-gray-800">
              問題 {ind + 1}: {question.question}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            {question.type === 'multiple-choice' ? (
              <RadioGroup
                value={answers[question.id] || ''}
                onValueChange={(value) =>
                  handleAnswerChange(question.id, value)
                }
                className="space-y-3"
              >
                {question.options?.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={option}
                      id={`q${question.id}-option-${index}`}
                    />
                    <Label
                      htmlFor={`q${question.id}-option-${index}`}
                      className="text-base"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            ) : (
              <Textarea
                placeholder="回答を入力してください..."
                className="min-h-32"
                value={answers[question.id] || ''}
                onChange={(e) =>
                  handleAnswerChange(question.id, e.target.value)
                }
              />
            )}

            {/* Feedback after checking answer */}
            {checkedAnswers[question.id] !== undefined && (
              <div
                className={`mt-4 p-3 rounded-md ${
                  checkedAnswers[question.id]
                    ? 'bg-green-50 text-green-700 border border-green-200'
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}
              >
                <div className="flex items-start">
                  {checkedAnswers[question.id] ? (
                    <CheckCircle2 className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  )}
                  <div>{feedback[question.id]}</div>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="bg-gray-50 border-t border-gray-100">
            <Button
              onClick={() => checkAnswer(question.id)}
              className="bg-orange-500 hover:bg-orange-600 text-white"
              disabled={
                !answers[question.id] ||
                checkedAnswers[question.id] !== undefined
              }
            >
              回答を確認する
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
