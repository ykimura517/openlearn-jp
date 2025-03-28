'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, CheckCircle } from 'lucide-react';
import { auth } from '@/lib/firebase';
import {
  isSignInWithEmailLink,
  signInWithEmailLink,
  updateEmail,
} from 'firebase/auth';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function VerifyEmailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const oobUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    if (!email) {
      setError('確認用のメールアドレスを入力してください。');
      setIsLoading(false);
      return;
    }

    try {
      // メールリンク認証を完了（これによりemailVerified=true になる）
      const result = await signInWithEmailLink(auth, email, oobUrl);

      // 任意：ここで `auth.currentUser?.email !== email` の場合は updateEmail() を実行して元のユーザーとマージも可能
      // メール変更用の流れであれば、新しい email を currentUser に反映
      if (auth.currentUser && auth.currentUser.email !== email) {
        await updateEmail(auth.currentUser, email);
      }

      setSuccess(
        '認証が完了しました。新しいメールアドレスが有効になりました。'
      );
      setTimeout(() => router.push('/'), 3000);
    } catch (err: any) {
      setError(
        '認証に失敗しました。URLが無効、または期限切れの可能性があります。'
      );
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='container mx-auto px-4 py-16 max-w-md'>
      <Card>
        <CardHeader>
          <CardTitle>メール確認</CardTitle>
          <CardDescription>
            認証メール内のリンクをクリックしてこのページにアクセスしています。
            登録したメールアドレスを入力し、認証を完了してください。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleVerify} className='space-y-4'>
            <div className='space-y-2'>
              <label
                htmlFor='email'
                className='text-sm font-medium text-gray-700'
              >
                メールアドレス
              </label>
              <Input
                id='email'
                type='email'
                placeholder='your@email.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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
              {isLoading ? '確認中...' : '認証を完了する'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
