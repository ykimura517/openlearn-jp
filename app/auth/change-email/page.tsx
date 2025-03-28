'use client';

import type React from 'react';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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
import { useAuth } from '@/contexts/auth-context';
import { auth } from '@/lib/firebase';
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  sendSignInLinkToEmail,
} from 'firebase/auth';

// 認証メール送信用の設定オブジェクト
const actionCodeSettings = {
  // ユーザーがリンクをクリックした後に遷移するURL（適宜変更してください）
  url: 'http://localhost:3000/auth/verify-email',
  handleCodeInApp: true,
};

export default function ChangeEmailPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [currentEmail, setCurrentEmail] = useState(user?.email || '');
  const [newEmail, setNewEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    // 入力検証
    if (!newEmail) {
      setError('新しいメールアドレスを入力してください。');
      setIsLoading(false);
      return;
    }
    if (!password) {
      setError('確認のためパスワードを入力してください。');
      setIsLoading(false);
      return;
    }
    // メールアドレスの形式チェック
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newEmail)) {
      setError('有効なメールアドレスを入力してください。');
      setIsLoading(false);
      return;
    }

    try {
      if (!user) {
        throw new Error('ユーザーがログインしていません。');
      }
      // 現在のパスワードを用いて再認証を実施
      const credential = EmailAuthProvider.credential(
        user.email || '',
        password
      );
      await reauthenticateWithCredential(user, credential);

      // 新しいメールアドレス宛に認証メールを送信
      await sendSignInLinkToEmail(auth, newEmail, actionCodeSettings);

      setSuccess(
        '新しいメールアドレス宛に認証メールを送信しました。メール内のリンクをクリックし認証後、メールアドレスが変更されます。'
      );
      // ※メール認証完了後の更新処理は、認証リンク用の別ページでapplyActionCode等を用いて実施してください。
      setCurrentEmail(newEmail);
      setNewEmail('');
      setPassword('');
    } catch (err: any) {
      setError(
        'メールアドレスの変更に失敗しました。パスワードが正しいこと、または入力内容をご確認ください。'
      );
      console.error('Error changing email:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='container mx-auto px-4 py-16 max-w-md'>
      <div className='mb-8'>
        <Link
          href='/mypage'
          className='text-orange-500 hover:underline mb-4 inline-flex items-center'
        >
          <ArrowLeft className='mr-2 h-4 w-4' /> マイページに戻る
        </Link>
        <h1 className='text-3xl font-bold mt-6 mb-2'>メールアドレスの変更</h1>
        <p className='text-gray-600'>
          アカウントに登録されているメールアドレスを変更します。
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>メールアドレス変更</CardTitle>
          <CardDescription>
            新しいメールアドレスを入力してください。変更後、認証メールが送信されます。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='currentEmail'>現在のメールアドレス</Label>
              <Input
                id='currentEmail'
                type='email'
                value={currentEmail}
                disabled
                className='bg-gray-50'
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='newEmail'>新しいメールアドレス</Label>
              <Input
                id='newEmail'
                type='email'
                placeholder='new@example.com'
                required
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='password'>パスワード（確認のため）</Label>
              <Input
                id='password'
                type='password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className='text-xs text-gray-500'>
                セキュリティのため、現在のパスワードを入力してください。
              </p>
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
                <AlertTitle className='text-green-600'>成功</AlertTitle>
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
              {isLoading ? '処理中...' : 'メールアドレスを変更する'}
            </Button>
          </form>
        </CardContent>
        <CardFooter className='flex justify-center text-sm text-gray-500'>
          <p>
            変更をキャンセルする場合は、
            <Link href='/mypage' className='text-orange-500 hover:underline'>
              マイページに戻る
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
