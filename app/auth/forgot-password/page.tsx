'use client';

import type React from 'react';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AlertCircle, ArrowLeft, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { auth } from '@/lib/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    // 入力検証
    if (!email) {
      setError('メールアドレスを入力してください。');
      setIsLoading(false);
      return;
    }

    // メールアドレスの形式チェック
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('有効なメールアドレスを入力してください。');
      setIsLoading(false);
      return;
    }

    try {
      // Firebaseのパスワードリセットメール送信APIを呼び出す
      await sendPasswordResetEmail(auth, email);
      // 成功メッセージを表示
      setSuccess(
        'パスワードリセットのためのリンクを記載したメールを送信しました。メールをご確認ください。'
      );
    } catch (err: any) {
      setError(
        'パスワードリセットメールの送信に失敗しました。もう一度お試しください。'
      );
      console.error('Error sending password reset email:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='container mx-auto px-4 py-16 max-w-md'>
      <div className='mb-8'>
        <Link
          href='/auth/signin'
          className='text-orange-500 hover:underline mb-4 inline-flex items-center'
        >
          <ArrowLeft className='mr-2 h-4 w-4' /> ログインページに戻る
        </Link>
        <h1 className='text-3xl font-bold mt-6 mb-2'>パスワードをお忘れの方</h1>
        <p className='text-gray-600'>
          登録したメールアドレスにパスワードリセット用のリンクを送信します。
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>パスワードリセット</CardTitle>
          <CardDescription>
            アカウントに登録したメールアドレスを入力してください。パスワードリセット用のリンクをメールで送信します。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='email'>メールアドレス</Label>
              <Input
                id='email'
                type='email'
                placeholder='your@email.com'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {error && (
              <Alert variant='destructive'>
                <AlertCircle className='h-4 w-4' />
                <AlertTitle>エラー</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {success && (
              <Alert className='bg-green-50 border-green-200'>
                <CheckCircle className='h-4 w-4 text-green-600' />
                <AlertTitle className='text-green-600'>送信完了</AlertTitle>
                <AlertDescription className='text-green-700'>
                  {success}
                </AlertDescription>
              </Alert>
            )}

            <Button
              type='submit'
              className='w-full bg-orange-500 hover:bg-orange-600'
              disabled={isLoading}
            >
              {isLoading ? '送信中...' : 'リセットリンクを送信'}
            </Button>
          </form>
        </CardContent>
        <CardFooter className='flex flex-col space-y-4'>
          <div className='text-center text-sm'>
            <p className='text-gray-500 mb-2'>
              メールが届かない場合は、迷惑メールフォルダをご確認いただくか、
              <br />
              別のメールアドレスでお試しください。
            </p>
            <p>
              アカウントをお持ちの方は
              <Link
                href='/auth/signin'
                className='text-orange-500 hover:underline ml-1'
              >
                ログイン
              </Link>
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
