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
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertCircle, ArrowLeft, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useAuth } from '@/contexts/auth-context';

export default function SettingsPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('account');
  const [username, setUsername] = useState('山田 太郎');
  const [userId, setUserId] = useState('yamada123');
  const [occupation, setOccupation] = useState('エンジニア・開発者');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    try {
      // 実際のアプリケーションではAPIを呼び出してプロフィールを更新
      // ここではモック処理
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // 成功メッセージを表示
      setSuccess('プロフィール情報が正常に更新されました。');
    } catch (err) {
      setError('プロフィールの更新に失敗しました。もう一度お試しください。');
      console.error('Error updating profile:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveNotifications = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    try {
      // 実際のアプリケーションではAPIを呼び出して通知設定を更新
      // ここではモック処理
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // 成功メッセージを表示
      setSuccess('通知設定が正常に更新されました。');
    } catch (err) {
      setError('通知設定の更新に失敗しました。もう一度お試しください。');
      console.error('Error updating notification settings:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mb-8'>
        <Link
          href='/mypage'
          className='text-orange-500 hover:underline mb-4 inline-flex items-center'
        >
          <ArrowLeft className='mr-2 h-4 w-4' /> マイページに戻る
        </Link>
        <h1 className='text-3xl font-bold text-gray-800 mb-4'>
          アカウント設定
        </h1>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className='w-full'>
        <TabsList className='grid w-full grid-cols-2 mb-8'>
          <TabsTrigger value='account'>アカウント情報</TabsTrigger>
          <TabsTrigger value='notifications'>通知設定</TabsTrigger>
        </TabsList>

        <TabsContent value='account'>
          <Card>
            <CardHeader>
              <CardTitle>アカウント情報</CardTitle>
              <CardDescription>プロフィール情報を変更します。</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSaveProfile} className='space-y-6'>
                <div className='space-y-4'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='space-y-2'>
                      <Label htmlFor='username'>ユーザー名</Label>
                      <Input
                        id='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='userId'>ユーザーID</Label>
                      <Input
                        id='userId'
                        value={userId}
                        disabled
                        className='bg-gray-50'
                      />
                      <p className='text-xs text-gray-500'>
                        ユーザーIDは変更できません。
                      </p>
                    </div>
                  </div>

                  <div className='space-y-2'>
                    <Label htmlFor='occupation'>職種</Label>
                    <Input
                      id='occupation'
                      value={occupation}
                      onChange={(e) => setOccupation(e.target.value)}
                    />
                  </div>

                  <div className='space-y-2'>
                    <Label htmlFor='email'>メールアドレス</Label>
                    <div className='flex items-center gap-4'>
                      <Input
                        id='email'
                        type='email'
                        value={user?.email || 'example@email.com'}
                        disabled
                        className='bg-gray-50 flex-1'
                      />
                      <Link href='/auth/change-email'>
                        <Button
                          variant='outline'
                          className='border-orange-500 text-orange-500 hover:bg-orange-50'
                        >
                          変更
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <div className='space-y-2'>
                    <Label>パスワード</Label>
                    <div className='flex items-center gap-4'>
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
                    </div>
                  </div>
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
                  className='bg-orange-500 hover:bg-orange-600'
                  disabled={isLoading}
                >
                  {isLoading ? '保存中...' : '変更を保存'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value='notifications'>
          <Card>
            <CardHeader>
              <CardTitle>通知設定</CardTitle>
              <CardDescription>
                通知の受け取り方法を設定します。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSaveNotifications} className='space-y-6'>
                <div className='space-y-4'>
                  <div className='flex items-center justify-between'>
                    <div className='space-y-0.5'>
                      <Label htmlFor='email-notifications'>メール通知</Label>
                      <p className='text-sm text-gray-500'>
                        コースの更新やお知らせをメールで受け取ります。
                      </p>
                    </div>
                    <Switch
                      id='email-notifications'
                      checked={emailNotifications}
                      onCheckedChange={setEmailNotifications}
                    />
                  </div>
                  <Separator />
                  <div className='flex items-center justify-between'>
                    <div className='space-y-0.5'>
                      <Label htmlFor='marketing-emails'>
                        マーケティングメール
                      </Label>
                      <p className='text-sm text-gray-500'>
                        新しいコースやキャンペーン情報をメールで受け取ります。
                      </p>
                    </div>
                    <Switch
                      id='marketing-emails'
                      checked={marketingEmails}
                      onCheckedChange={setMarketingEmails}
                    />
                  </div>
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
                  className='bg-orange-500 hover:bg-orange-600'
                  disabled={isLoading}
                >
                  {isLoading ? '保存中...' : '設定を保存'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
