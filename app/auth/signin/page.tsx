'use client';

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { AlertCircle, Github } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Checkbox } from '@/components/ui/checkbox';

import { auth, googleProvider, githubProvider } from '@/lib/firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  // Firebaseのエラーコードに基づき、日本語のエラーメッセージを返す関数
  const getErrorMessage = (err: any) => {
    switch (err.code) {
      default:
        return 'ログインに失敗しました。';
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // ログイン成功後、トップページへリダイレクト
      router.push('/');
    } catch (err: any) {
      setError(getErrorMessage(err));
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    try {
      await signInWithPopup(auth, googleProvider);
      router.push('/');
    } catch (err: any) {
      setError(getErrorMessage(err));
    }
  };

  const handleGithubSignIn = async () => {
    setError('');
    try {
      await signInWithPopup(auth, githubProvider);
      router.push('/');
    } catch (err: any) {
      setError(getErrorMessage(err));
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-md">
      <Card>
        <CardHeader>
          <CardTitle>ログイン</CardTitle>
          <CardDescription>
            アカウントにログインして、学習を続けましょう。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="email" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="email">メール</TabsTrigger>
              <TabsTrigger value="google">Google</TabsTrigger>
              <TabsTrigger value="github">GitHub</TabsTrigger>
            </TabsList>
            <TabsContent value="email">
              <form onSubmit={handleSignIn} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="email">メールアドレス</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">パスワード</Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="rememberMe"
                    checked={rememberMe}
                    onCheckedChange={(checked) =>
                      setRememberMe(checked as boolean)
                    }
                  />
                  <Label htmlFor="rememberMe" className="text-sm">
                    ログイン状態を保持する
                  </Label>
                </div>
                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>エラー</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                <Button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600"
                >
                  ログイン
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="google">
              <div className="space-y-4 mt-4">
                <p className="text-center text-gray-600">
                  Googleアカウントを使用してログインします。
                </p>
                <Button
                  onClick={handleGoogleSignIn}
                  variant="outline"
                  className="w-full"
                >
                  Googleでログイン
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="github">
              <div className="space-y-4 mt-4">
                <p className="text-center text-gray-600">
                  GitHubアカウントを使用してログインします。
                </p>
                <Button
                  onClick={handleGithubSignIn}
                  variant="outline"
                  className="w-full"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHubでログイン
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Separator />
          <div className="text-center text-sm">
            アカウントをお持ちでないですか？{' '}
            <Link
              href="/auth/signup"
              className="text-orange-500 hover:underline"
            >
              新規登録
            </Link>
            <br />
            <Link
              href="/auth/forgot-password"
              className="text-xs text-orange-500 hover:underline"
            >
              パスワードをお忘れですか？
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
