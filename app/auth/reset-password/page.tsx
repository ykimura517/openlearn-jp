'use client';

import type React from 'react';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
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

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    // 入力検証
    if (!newPassword) {
      setError('新しいパスワードを入力してください。');
      setIsLoading(false);
      return;
    }

    if (newPassword.length < 8) {
      setError('パスワードは8文字以上で入力してください。');
      setIsLoading(false);
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('パスワードが一致しません。');
      setIsLoading(false);
      return;
    }

    if (!token) {
      setError(
        '無効なリセットリンクです。もう一度パスワードリセットをお試しください。'
      );
      setIsLoading(false);
      return;
    }

    try {
      // 実際のアプリケーションではAPIを呼び出してパスワードをリセット
      // ここではモック処理
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // 成功メッセージを表示
      setSuccess(
        'パスワードが正常にリセットされました。新しいパスワードでログインしてください。'
      );

      // 3秒後にログインページにリダイレクト
      setTimeout(() => {
        router.push('/auth/signin');
      }, 3000);
    } catch (err) {
      setError(
        'パスワードのリセットに失敗しました。リンクの有効期限が切れている可能性があります。'
      );
      console.error('Error resetting password:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // トークンがない場合はエラーを表示
  if (!token) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-md">
        <div className="mb-8">
          <Link
            href="/auth/signin"
            className="text-orange-500 hover:underline mb-4 inline-flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> ログインページに戻る
          </Link>
          <h1 className="text-3xl font-bold mt-6 mb-2">パスワードリセット</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>無効なリンク</CardTitle>
            <CardDescription>
              このパスワードリセットリンクは無効です。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>エラー</AlertTitle>
              <AlertDescription>
                無効なリセットリンクです。もう一度パスワードリセットをお試しください。
              </AlertDescription>
            </Alert>
          </CardContent>
          <CardFooter>
            <Link href="/auth/forgot-password" className="w-full">
              <Button className="w-full bg-orange-500 hover:bg-orange-600">
                パスワードリセットをやり直す
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-md">
      <div className="mb-8">
        <Link
          href="/auth/signin"
          className="text-orange-500 hover:underline mb-4 inline-flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> ログインページに戻る
        </Link>
        <h1 className="text-3xl font-bold mt-6 mb-2">新しいパスワードの設定</h1>
        <p className="text-gray-600">新しいパスワードを入力してください。</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>パスワードリセット</CardTitle>
          <CardDescription>
            安全なパスワードを設定してください。パスワードは8文字以上で、英数字を含めることをおすすめします。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="newPassword">新しいパスワード</Label>
              <Input
                id="newPassword"
                type="password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <p className="text-xs text-gray-500">
                8文字以上の英数字を含むパスワードを設定してください。
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">パスワード（確認）</Label>
              <Input
                id="confirmPassword"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
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
                  <div className="mt-2 text-sm">
                    3秒後にログインページに移動します...
                  </div>
                </AlertDescription>
              </Alert>
            )}

            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600"
              disabled={isLoading}
            >
              {isLoading ? '処理中...' : 'パスワードを変更する'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
