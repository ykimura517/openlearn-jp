'use client';

import type React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertCircle, ArrowLeft, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useAuth } from '@/contexts/auth-context';
import { apiFetch } from '@/lib/apiClient';
import type { User as ApiUser } from '@/types/api';

export default function SettingsPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('account');
  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState('');
  const [occupation, setOccupation] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // プロフィール情報の取得
  useEffect(() => {
    async function fetchProfile() {
      try {
        const data = await apiFetch<ApiUser>(
          '/api/v1/mypage/profile',
          { cache: 'no-store' },
          true
        );
        setUsername(data.name);
        setUserId(data.displayId);
        setOccupation(data.occupation);
      } catch (err) {
        console.error('プロフィール取得エラー:', err);
        setError('プロフィール情報の取得に失敗しました。');
      }
    }
    fetchProfile();
  }, []);

  // プロフィール更新処理（PUTリクエスト）
  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    try {
      const payload = {
        name: username,
        occupation: occupation,
        displayId: userId,
      };
      await apiFetch<ApiUser>(
        '/api/v1/mypage/profile',
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        },
        true
      );
      setSuccess('プロフィール情報が正常に更新されました。');
    } catch (err: any) {
      console.error(err);
      // API側でDISPLAY_ID_ALREADY_USEDエラーを返している場合
      if (err.message === 'DISPLAY_ID_ALREADY_USED') {
        setError('ユーザーIDは既に使用されています。');
      } else {
        setError('プロフィールの更新に失敗しました。もう一度お試しください。');
      }
      console.error('Error updating profile:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link
          href="/mypage"
          className="text-orange-500 hover:underline mb-4 inline-flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> マイページに戻る
        </Link>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          アカウント設定
        </h1>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="account">アカウント情報</TabsTrigger>
          {/* <TabsTrigger value='notifications'>通知設定</TabsTrigger> */}
        </TabsList>

        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>アカウント情報</CardTitle>
              <CardDescription>プロフィール情報を変更します。</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSaveProfile} className="space-y-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="username">ユーザー名(最大15文字)</Label>
                      <Input
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="userId">ユーザーID（最大20文字）</Label>
                      <Input
                        id="userId"
                        value={userId}
                        // disabled
                        // className='bg-gray-50'
                        onChange={(e) => setUserId(e.target.value)}
                      />
                      <p className="text-xs text-gray-500"></p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="occupation">職種</Label>
                    <Input
                      id="occupation"
                      value={occupation}
                      onChange={(e) => setOccupation(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">メールアドレス</Label>
                    <div className="flex items-center gap-4">
                      <Input
                        id="email"
                        type="email"
                        value={user?.email || 'example@email.com'}
                        disabled
                        className="bg-gray-50 flex-1"
                      />
                      <Link href="/auth/change-email">
                        <Button
                          variant="outline"
                          className="border-orange-500 text-orange-500 hover:bg-orange-50"
                        >
                          変更
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>パスワード</Label>
                    <div className="flex items-center gap-4">
                      <Input
                        type="password"
                        value="********"
                        disabled
                        className="bg-gray-50 flex-1"
                      />
                      <Button
                        variant="outline"
                        className="border-orange-500 text-orange-500 hover:bg-orange-50"
                      >
                        変更
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>パスワード</Label>
                    {/* <div className='flex items-center gap-4'>
                      <Input
                        type='password'
                        value='********'
                        disabled
                        className='bg-gray-50 flex-1'
                      />
                      <Button
                        variant='outline'
                        className='border-orange-500 text-orange-500 hover:bg-orange-50'
                      >
                        変更
                      </Button>
                    </div> */}
                  </div>
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
                  className="bg-orange-500 hover:bg-orange-600"
                  disabled={isLoading}
                >
                  {isLoading ? '保存中...' : '変更を保存'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      {/* 退会リンク */}
      <div className="mt-12 pt-6 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-lg font-medium">アカウント退会</h3>
            <p className="text-gray-600 text-sm mt-1">
              アカウントを退会すると、すべてのデータが削除され、復元することはできません。
            </p>
          </div>
          <Link href="/mypage/delete-account" className="mt-4 md:mt-0">
            <Button variant="outline" className="hover:bg-red-50">
              退会手続きへ
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
