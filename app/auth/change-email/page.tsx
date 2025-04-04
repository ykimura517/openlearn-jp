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
import {
  reauthenticateWithCredential,
  EmailAuthProvider,
  sendEmailVerification,
  verifyBeforeUpdateEmail,
} from 'firebase/auth';

export default function ChangeEmailPage() {
  const router = useRouter();
  const { user, reloadUser } = useAuth(); // ※ useAuth で現在のユーザー情報を管理している前提
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newEmail)) {
      setError('有効なメールアドレスを入力してください。');
      setIsLoading(false);
      return;
    }

    try {
      if (user) {
        // ユーザーの再認証
        const credential = EmailAuthProvider.credential(user.email, password);
        await reauthenticateWithCredential(user, credential);

        // メールアドレスの更新
        // await updateEmail(user, newEmail); 現在では無理になっている
        await verifyBeforeUpdateEmail(user, newEmail);

        // 更新後、新しいメールアドレス宛に確認メールを送信
        await sendEmailVerification(user);

        // ユーザー情報を再読み込み（必要な場合）
        if (reloadUser) {
          await reloadUser();
        }

        setSuccess(
          'メールアドレスの変更が完了しました。新しいメールアドレス宛に確認メールを送信しました。'
        );
        setCurrentEmail(newEmail);
        setNewEmail('');
        setPassword('');
      } else {
        setError(
          'ユーザー情報が取得できませんでした。再度ログインしてください。'
        );
      }
    } catch (err: any) {
      setError(
        'メールアドレスの変更に失敗しました。パスワードが正しいことを確認してください。'
      );
      console.error('Error changing email:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-md">
      <div className="mb-8">
        <Link
          href="/mypage"
          className="text-orange-500 hover:underline mb-4 inline-flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> マイページに戻る
        </Link>
        <h1 className="text-3xl font-bold mt-6 mb-2">メールアドレスの変更</h1>
        <p className="text-gray-600">
          アカウントに登録されているメールアドレスを変更します。
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>メールアドレス変更</CardTitle>
          <CardDescription>
            新しいメールアドレスを入力してください。変更後、確認メールが送信されます。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currentEmail">現在のメールアドレス</Label>
              <Input
                id="currentEmail"
                type="email"
                value={currentEmail}
                disabled
                className="bg-gray-50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="newEmail">新しいメールアドレス</Label>
              <Input
                id="newEmail"
                type="email"
                placeholder="new@example.com"
                required
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">パスワード（確認のため）</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="text-xs text-gray-500">
                セキュリティのため、現在のパスワードを入力してください。
              </p>
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>エラー</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {success && (
              <Alert className="bg-green-50 border-green-200">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertTitle className="text-green-600">成功</AlertTitle>
                <AlertDescription className="text-green-700">
                  {success}
                </AlertDescription>
              </Alert>
            )}

            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600"
              disabled={isLoading}
            >
              {isLoading ? '処理中...' : 'メールアドレスを変更する'}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center text-sm text-gray-500">
          <p>
            変更をキャンセルする場合は、
            <Link href="/mypage" className="text-orange-500 hover:underline">
              マイページに戻る
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
