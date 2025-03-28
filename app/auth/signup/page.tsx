// app/auth/signup/page.tsx
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { AlertCircle, Github } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

import { auth, googleProvider, githubProvider } from '@/lib/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  fetchSignInMethodsForEmail,
  sendEmailVerification,
} from 'firebase/auth';

// Firebaseのエラーコードに応じた日本語メッセージを返す関数
function getErrorMessage(err: any) {
  if (err.code === 'auth/email-already-in-use') {
    return 'このメールアドレスは既に登録されています。';
  } else if (err.code === 'auth/account-exists-with-different-credential') {
    return '既に別の認証方法で登録されています。';
  } else if (err.code === 'auth/weak-password') {
    return 'パスワードは8文字以上(数字と英小文字が必要)で設定してください。';
  } else {
    return err.message || 'エラーが発生しました。';
  }
}

export default function SignUpPage() {
  const router = useRouter();
  const [step, setStep] = useState<'signup' | 'profile'>('signup');
  const [signupMethod, setSignupMethod] = useState<
    'email' | 'google' | 'github'
  >('email');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // Firebaseで作成したユーザーオブジェクトを保持
  const [firebaseUser, setFirebaseUser] = useState<any>(null);
  const [userId, setUserId] = useState('');
  const [username, setUsername] = useState('');
  const [occupation, setOccupation] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [error, setError] = useState('');

  // BEユーザー登録API（初期登録）を呼び出す関数
  const registerUserInBE = async (user: any) => {
    try {
      const token = await user.getIdToken();
      const response = await fetch('/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        // 必要最低限の情報を送信（例：firebaseUid、メールアドレス）
        body: JSON.stringify({
          firebaseUid: user.uid,
          email: user.email,
        }),
      });
      if (!response.ok) {
        const resData = await response.json();
        // BE側で既に登録済みの場合はALREADY_EXISTSエラーを返しているので、専用メッセージを設定
        if (resData.error === 'ALREADY_EXISTS') {
          throw new Error('この認証情報は既に使用されています');
        } else {
          throw new Error(resData.error || 'ユーザー登録に失敗しました。');
        }
      }
    } catch (err: any) {
      throw new Error(getErrorMessage(err));
    }
  };

  // メール/パスワードでのサインアップ処理
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (password !== confirmPassword) {
      setError('パスワードが一致しません。');
      return;
    }
    // パスワードポリシーのチェック（念のため送信時にも実施）
    if (!/^(?=.*[0-9])(?=.*[a-z]).{8,}$/.test(password)) {
      setError(
        'パスワードは8文字以上(数字と英小文字が必要)で設定してください。'
      );
      return;
    }
    // 既に登録済みかどうかのチェック（メール入力欄でチェック済みでも再確認）
    try {
      const methods = await fetchSignInMethodsForEmail(auth, email);
      if (methods.length > 0) {
        setError('このメールアドレスは既に登録されています。');
        return;
      }
    } catch (err: any) {
      console.error(err);
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // メール認証メールを送信
      await sendEmailVerification(userCredential.user);
      setFirebaseUser(userCredential.user);
      // Firebaseユーザー作成完了直後にBE登録APIを呼び出す
      await registerUserInBE(userCredential.user);
      setStep('profile');
    } catch (err: any) {
      setError(getErrorMessage(err));
    }
  };

  // Google OAuthでのサインアップ処理
  const handleGoogleSignUp = async () => {
    setError('');
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setFirebaseUser(result.user);
      setSignupMethod('google');
      // Firebaseユーザー作成完了直後にBE登録APIを呼び出す
      await registerUserInBE(result.user);
      setStep('profile');
    } catch (err: any) {
      setError(getErrorMessage(err));
    }
  };

  // GitHub OAuthでのサインアップ処理
  const handleGithubSignUp = async () => {
    setError('');
    try {
      const result = await signInWithPopup(auth, githubProvider);
      setFirebaseUser(result.user);
      setSignupMethod('github');
      // Firebaseユーザー作成完了直後にBE登録APIを呼び出す
      await registerUserInBE(result.user);
      setStep('profile');
    } catch (err: any) {
      setError(getErrorMessage(err));
    }
  };

  // パスワード入力のハンドラ（パスワードポリシーのチェック）
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (!/^(?=.*[0-9])(?=.*[a-z]).{8,}$/.test(newPassword)) {
      setPasswordError(
        'パスワードは8文字以上(数字と英小文字が必要)で設定してください。'
      );
    } else {
      setPasswordError('');
    }
  };

  // メール入力のハンドラ（既に登録済みのチェック）
  const handleEmailBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    if (emailValue) {
      try {
        const methods = await fetchSignInMethodsForEmail(auth, emailValue);
        if (methods.length > 0) {
          setError('このメールアドレスは既に登録されています。');
        } else {
          setError('');
        }
      } catch (err: any) {
        console.error(err);
      }
    }
  };

  // プロフィール情報送信時に、プロフィール更新APIを呼び出す
  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!/^[a-zA-Z0-9]{1,20}$/.test(userId)) {
      setError('ユーザーIDは20文字以内の半角英数字のみ使用できます。');
      return;
    }
    if (username.length > 15) {
      setError('ユーザー名は15文字以内で入力してください。');
      return;
    }
    if (!occupation) {
      setError('職種を選択してください。');
      return;
    }
    if (!birthDate) {
      setError('生年月日を入力してください。');
      return;
    }
    try {
      // FirebaseのIDトークンを取得
      const token = await firebaseUser.getIdToken();
      // プロフィール更新用のAPIを呼び出す
      const response = await fetch('/api/v1/user/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userId,
          username,
          occupation,
          birthDate,
        }),
      });
      if (!response.ok) {
        const resData = await response.json();
        throw new Error(resData.error || 'プロフィール更新に失敗しました。');
      }
      router.push('/');
    } catch (err: any) {
      setError(getErrorMessage(err));
    }
  };

  return (
    <div className='container mx-auto px-4 py-16 max-w-md'>
      <div className='text-center mb-8'>
        <Link href='/' className='text-2xl font-bold text-orange-600'>
          OpenLearn JP
        </Link>
        <h1 className='text-3xl font-bold mt-6 mb-2'>アカウント作成</h1>
        <p className='text-gray-600'>OpenLearn JPで学習を始めましょう</p>
      </div>

      {step === 'signup' ? (
        <Card>
          <CardHeader>
            <CardTitle>新規登録</CardTitle>
            <CardDescription>
              アカウントを作成して、コースや試験にアクセスしましょう。
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* エラーはどのタブにいても常に表示 */}
            {error && (
              <Alert variant='destructive' className='mb-4'>
                <AlertCircle className='h-4 w-4' />
                <AlertTitle>エラー</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <Tabs defaultValue='email' className='w-full'>
              <TabsList className='grid w-full grid-cols-3'>
                <TabsTrigger value='email'>メール</TabsTrigger>
                <TabsTrigger value='google'>Google</TabsTrigger>
                <TabsTrigger value='github'>GitHub</TabsTrigger>
              </TabsList>
              <TabsContent value='email'>
                <form onSubmit={handleSignUp} className='space-y-4 mt-4'>
                  <div className='space-y-2'>
                    <Label htmlFor='email'>メールアドレス</Label>
                    <Input
                      id='email'
                      type='email'
                      placeholder='your@email.com'
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={handleEmailBlur}
                    />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='password'>パスワード</Label>
                    <Input
                      id='password'
                      type='password'
                      required
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    {passwordError && (
                      <p className='text-xs text-red-500'>{passwordError}</p>
                    )}
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='confirmPassword'>パスワード（確認）</Label>
                    <Input
                      id='confirmPassword'
                      type='password'
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <Button
                    type='submit'
                    className='w-full bg-orange-500 hover:bg-orange-600'
                  >
                    アカウント作成
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value='google'>
                <div className='space-y-4 mt-4'>
                  <p className='text-center text-gray-600'>
                    Googleアカウントを使用して登録します。
                  </p>
                  <Button
                    onClick={handleGoogleSignUp}
                    variant='outline'
                    className='w-full'
                  >
                    Googleで続ける
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value='github'>
                <div className='space-y-4 mt-4'>
                  <p className='text-center text-gray-600'>
                    GitHubアカウントを使用して登録します。
                  </p>
                  <Button
                    onClick={handleGithubSignUp}
                    variant='outline'
                    className='w-full'
                  >
                    <Github className='mr-2 h-4 w-4' />
                    GitHubで続ける
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className='flex flex-col space-y-4'>
            <Separator />
            <div className='text-center text-sm'>
              すでにアカウントをお持ちですか？{' '}
              <Link
                href='/auth/signin'
                className='text-orange-500 hover:underline'
              >
                ログイン
              </Link>
            </div>
          </CardFooter>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>プロフィール設定</CardTitle>
            <CardDescription>
              アカウント情報を入力してください。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleProfileSubmit} className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='userId'>
                  ユーザーID <span className='text-red-500'>*</span>
                </Label>
                <Input
                  id='userId'
                  placeholder='user123'
                  required
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                />
                <p className='text-xs text-gray-500'>
                  半角英数字（20文字以内）。一度設定すると変更できません。サービス上で他のユーザーに公開されます。
                </p>
              </div>
              <div className='space-y-2'>
                <Label htmlFor='username'>
                  ユーザー名 <span className='text-red-500'>*</span>
                </Label>
                <Input
                  id='username'
                  placeholder='山田 太郎'
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <p className='text-xs text-gray-500'>
                  15文字以内。サービス上で他のユーザーに公開されます。
                </p>
              </div>
              <div className='space-y-2'>
                <Label htmlFor='occupation'>
                  職種 <span className='text-red-500'>*</span>
                </Label>
                <Select value={occupation} onValueChange={setOccupation}>
                  <SelectTrigger>
                    <SelectValue placeholder='職種を選択' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='student'>学生</SelectItem>
                    <SelectItem value='engineer'>エンジニア・開発者</SelectItem>
                    <SelectItem value='designer'>デザイナー</SelectItem>
                    <SelectItem value='manager'>
                      マネージャー・管理職
                    </SelectItem>
                    <SelectItem value='marketing'>マーケティング</SelectItem>
                    <SelectItem value='sales'>営業</SelectItem>
                    <SelectItem value='education'>教育関係</SelectItem>
                    <SelectItem value='other'>その他</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className='space-y-2'>
                <Label htmlFor='birthDate'>
                  生年月日 <span className='text-red-500'>*</span>
                </Label>
                <Input
                  id='birthDate'
                  type='date'
                  required
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                />
              </div>
              {error && (
                <Alert variant='destructive'>
                  <AlertCircle className='h-4 w-4' />
                  <AlertTitle>エラー</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <Button
                type='submit'
                className='w-full bg-orange-500 hover:bg-orange-600'
              >
                登録を完了する
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
