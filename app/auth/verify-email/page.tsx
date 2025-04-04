'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { auth } from '@/lib/firebase';
import { applyActionCode, checkActionCode } from 'firebase/auth';

export default function VerifyEmailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const oobCode = searchParams.get('oobCode');
  const mode = searchParams.get('mode');

  const [status, setStatus] = useState<'loading' | 'success' | 'error'>(
    'loading'
  );
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (mode === 'verifyEmail' && oobCode) {
      // オプション: 事前にコードの妥当性をチェック
      checkActionCode(auth, oobCode)
        .then(() => applyActionCode(auth, oobCode))
        .then(() => {
          setStatus('success');
          setMessage('メールアドレスの確認が完了しました。');
        })
        .catch((error) => {
          console.error('Error verifying email:', error);
          setStatus('error');
          setMessage(
            'メールアドレスの確認に失敗しました。リンクが無効か、既に確認済みの可能性があります。'
          );
        });
    } else {
      setStatus('error');
      setMessage('無効なリクエストです。');
    }
  }, [mode, oobCode]);

  return (
    <div className="container mx-auto px-4 py-16 max-w-md">
      <Card>
        <CardHeader>
          <CardTitle>メール確認</CardTitle>
        </CardHeader>
        <CardContent>
          {status === 'loading' && <p>確認中...</p>}
          {status === 'success' && (
            <Alert variant="success">
              <AlertTitle>成功</AlertTitle>
              <AlertDescription>{message}</AlertDescription>
            </Alert>
          )}
          {status === 'error' && (
            <Alert variant="destructive">
              <AlertTitle>エラー</AlertTitle>
              <AlertDescription>{message}</AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={() => router.push('/')}>トップページへ</Button>
        </CardFooter>
      </Card>
      <div className="mt-4 text-center">
        <Link href="/auth/signin" className="text-orange-500 hover:underline">
          ログインページへ
        </Link>
      </div>
    </div>
  );
}
