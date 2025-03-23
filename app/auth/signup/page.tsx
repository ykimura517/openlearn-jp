"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { AlertCircle, Github } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function SignUpPage() {
  const router = useRouter()
  const [step, setStep] = useState<"signup" | "profile">("signup")
  const [signupMethod, setSignupMethod] = useState<"email" | "google" | "github">("email")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [userId, setUserId] = useState("")
  const [username, setUsername] = useState("")
  const [occupation, setOccupation] = useState("")
  const [birthDate, setBirthDate] = useState("")
  const [error, setError] = useState("")

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Validate password
    if (password !== confirmPassword) {
      setError("パスワードが一致しません。")
      return
    }

    // In a real application, this would call an API to create the account
    // For now, we'll just move to the next step
    setStep("profile")
  }

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Validate user ID (20文字以内で半角英数のみ)
    if (!/^[a-zA-Z0-9]{1,20}$/.test(userId)) {
      setError("ユーザーIDは20文字以内の半角英数字のみ使用できます。")
      return
    }

    // Validate username (15文字以内)
    if (username.length > 15) {
      setError("ユーザー名は15文字以内で入力してください。")
      return
    }

    // Validate occupation
    if (!occupation) {
      setError("職種を選択してください。")
      return
    }

    // Validate birth date
    if (!birthDate) {
      setError("生年月日を入力してください。")
      return
    }

    // In a real application, this would call an API to update the profile
    // For now, we'll just redirect to the home page
    router.push("/")
  }

  const handleGoogleSignUp = () => {
    // In a real application, this would redirect to Google OAuth
    setSignupMethod("google")
    setStep("profile")
  }

  const handleGithubSignUp = () => {
    // In a real application, this would redirect to GitHub OAuth
    setSignupMethod("github")
    setStep("profile")
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-md">
      <div className="text-center mb-8">
        <Link href="/" className="text-2xl font-bold text-orange-600">
          OpenLearn JP
        </Link>
        <h1 className="text-3xl font-bold mt-6 mb-2">アカウント作成</h1>
        <p className="text-gray-600">OpenLearn JPで学習を始めましょう</p>
      </div>

      {step === "signup" ? (
        <Card>
          <CardHeader>
            <CardTitle>新規登録</CardTitle>
            <CardDescription>アカウントを作成して、コースや試験にアクセスしましょう。</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="email" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="email">メール</TabsTrigger>
                <TabsTrigger value="google">Google</TabsTrigger>
                <TabsTrigger value="github">GitHub</TabsTrigger>
              </TabsList>
              <TabsContent value="email">
                <form onSubmit={handleSignUp} className="space-y-4 mt-4">
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
                  <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                    アカウント作成
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value="google">
                <div className="space-y-4 mt-4">
                  <p className="text-center text-gray-600">Googleアカウントを使用して登録します。</p>
                  <Button onClick={handleGoogleSignUp} variant="outline" className="w-full">
                    <svg
                      className="mr-2 h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    Googleで続ける
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="github">
                <div className="space-y-4 mt-4">
                  <p className="text-center text-gray-600">GitHubアカウントを使用して登録します。</p>
                  <Button onClick={handleGithubSignUp} variant="outline" className="w-full">
                    <Github className="mr-2 h-4 w-4" />
                    GitHubで続ける
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Separator />
            <div className="text-center text-sm">
              すでにアカウントをお持ちですか？{" "}
              <Link href="/auth/signin" className="text-orange-500 hover:underline">
                ログイン
              </Link>
            </div>
          </CardFooter>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>プロフィール設定</CardTitle>
            <CardDescription>アカウント情報を入力してください。</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleProfileSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="userId">
                  ユーザーID <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="userId"
                  placeholder="user123"
                  required
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                />
                <p className="text-xs text-gray-500">
                  20文字以内の半角英数字のみ。一度設定すると変更できません。このIDはサービス上で公開されます。
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="username">
                  ユーザー名 <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="username"
                  placeholder="山田 太郎"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <p className="text-xs text-gray-500">15文字以内</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="occupation">
                  職種 <span className="text-red-500">*</span>
                </Label>
                <Select value={occupation} onValueChange={setOccupation}>
                  <SelectTrigger>
                    <SelectValue placeholder="職種を選択" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">学生</SelectItem>
                    <SelectItem value="engineer">エンジニア・開発者</SelectItem>
                    <SelectItem value="designer">デザイナー</SelectItem>
                    <SelectItem value="manager">マネージャー・管理職</SelectItem>
                    <SelectItem value="marketing">マーケティング</SelectItem>
                    <SelectItem value="sales">営業</SelectItem>
                    <SelectItem value="education">教育関係</SelectItem>
                    <SelectItem value="other">その他</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="birthDate">
                  生年月日 <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="birthDate"
                  type="date"
                  required
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                />
              </div>
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>エラー</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                登録を完了する
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

