"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, BookOpen, Settings, LogOut, Calendar, Award } from "lucide-react"

export default function MyPage() {
  const [activeTab, setActiveTab] = useState("profile")

  // Mock user data
  const user = {
    id: "yamada123",
    name: "山田 太郎",
    email: "yamada@example.com",
    occupation: "エンジニア・開発者",
    birthDate: "1990-01-01",
    joinedDate: "2023-05-15",
  }

  // Mock exam results
  const examResults = [
    {
      id: "ai-basics-1",
      title: "生成AI基礎試験",
      date: "2023-06-10",
      score: 85,
      passingScore: 70,
      category: "生成AI",
      level: "初級",
    },
    {
      id: "javascript-1",
      title: "JavaScript試験",
      date: "2023-07-22",
      score: 92,
      passingScore: 70,
      category: "プログラミング",
      level: "初級",
    },
    {
      id: "prompt-engineering-1",
      title: "プロンプトエンジニアリング試験",
      date: "2023-08-15",
      score: 78,
      passingScore: 70,
      category: "生成AI",
      level: "中級",
    },
    {
      id: "python-1",
      title: "Python試験",
      date: "2023-09-05",
      score: 65,
      passingScore: 70,
      category: "プログラミング",
      level: "中級",
      failed: true,
    },
  ]

  // Mock course progress
  const courseProgress = [
    {
      id: "intro-to-ai",
      title: "生成AIの基礎",
      progress: 100,
      completed: true,
      completedDate: "2023-06-05",
      category: "生成AI",
    },
    {
      id: "javascript-basics",
      title: "JavaScript基礎",
      progress: 100,
      completed: true,
      completedDate: "2023-07-18",
      category: "プログラミング",
    },
    {
      id: "prompt-engineering",
      title: "プロンプトエンジニアリング入門",
      progress: 80,
      completed: false,
      category: "生成AI",
    },
    {
      id: "python-data-science",
      title: "PythonによるデータサイエンスⅠ",
      progress: 45,
      completed: false,
      category: "プログラミング",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64 space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 text-center">
            <Avatar className="h-24 w-24 mx-auto mb-4">
              <AvatarImage src="/placeholder.svg?height=96&width=96" />
              <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
            <p className="text-gray-600 text-sm mb-2">@{user.id}</p>
            <Badge variant="outline" className="bg-orange-100 text-orange-600 border-orange-200">
              {user.occupation}
            </Badge>
            <div className="mt-4 text-sm text-gray-500 flex items-center justify-center">
              <Calendar className="h-4 w-4 mr-1" />
              {new Date(user.joinedDate).toLocaleDateString("ja-JP")}に登録
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <h3 className="font-medium text-gray-800">メニュー</h3>
            </div>
            <nav className="p-2">
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/mypage"
                    className={`flex items-center px-3 py-2 rounded-md ${
                      activeTab === "profile" ? "bg-orange-50 text-orange-600" : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveTab("profile")}
                  >
                    <Award className="h-5 w-5 mr-3" />
                    プロフィール
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mypage?tab=exams"
                    className={`flex items-center px-3 py-2 rounded-md ${
                      activeTab === "exams" ? "bg-orange-50 text-orange-600" : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveTab("exams")}
                  >
                    <Trophy className="h-5 w-5 mr-3" />
                    試験結果
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mypage?tab=courses"
                    className={`flex items-center px-3 py-2 rounded-md ${
                      activeTab === "courses" ? "bg-orange-50 text-orange-600" : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveTab("courses")}
                  >
                    <BookOpen className="h-5 w-5 mr-3" />
                    コース進捗
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mypage/settings"
                    className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                  >
                    <Settings className="h-5 w-5 mr-3" />
                    設定
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mypage/delete-account"
                    className="flex items-center px-3 py-2 rounded-md text-red-600 hover:bg-red-50"
                  >
                    <LogOut className="h-5 w-5 mr-3" />
                    退会
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="profile">プロフィール</TabsTrigger>
              <TabsTrigger value="exams">試験結果</TabsTrigger>
              <TabsTrigger value="courses">コース進捗</TabsTrigger>
            </TabsList>

            {/* Profile Tab */}
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>プロフィール情報</CardTitle>
                  <CardDescription>あなたのアカウント情報です。</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">ユーザーID</h4>
                      <p className="text-gray-800">{user.id}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">ユーザー名</h4>
                      <p className="text-gray-800">{user.name}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">メールアドレス</h4>
                      <p className="text-gray-800">{user.email}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">職種</h4>
                      <p className="text-gray-800">{user.occupation}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">生年月日</h4>
                      <p className="text-gray-800">{new Date(user.birthDate).toLocaleDateString("ja-JP")}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                    プロフィールを編集
                  </Button>
                </CardFooter>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>試験成績</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">合格した試験</span>
                        <span className="font-medium">{examResults.filter((exam) => !exam.failed).length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">平均スコア</span>
                        <span className="font-medium">
                          {Math.round(examResults.reduce((acc, exam) => acc + exam.score, 0) / examResults.length)}%
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>コース進捗</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">完了したコース</span>
                        <span className="font-medium">
                          {courseProgress.filter((course) => course.completed).length}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">進行中のコース</span>
                        <span className="font-medium">
                          {courseProgress.filter((course) => !course.completed).length}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Exams Tab */}
            <TabsContent value="exams">
              <Card>
                <CardHeader>
                  <CardTitle>試験結果</CardTitle>
                  <CardDescription>あなたが受験した試験の結果一覧です。</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {examResults.map((exam) => (
                      <div key={exam.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex flex-col md:flex-row justify-between mb-2">
                          <div>
                            <h3 className="text-lg font-medium text-gray-800">{exam.title}</h3>
                            <div className="flex flex-wrap gap-2 mt-1">
                              <Badge variant="outline" className="bg-orange-100 text-orange-600 border-orange-200">
                                {exam.category}
                              </Badge>
                              <Badge variant="outline" className="bg-orange-100 text-orange-600 border-orange-200">
                                {exam.level}
                              </Badge>
                              <Badge variant="outline" className="bg-gray-100 text-gray-600 border-gray-200">
                                {new Date(exam.date).toLocaleDateString("ja-JP")}
                              </Badge>
                            </div>
                          </div>
                          <div className="mt-2 md:mt-0 text-right">
                            <div className="text-2xl font-bold flex items-center justify-end">
                              <span className={exam.failed ? "text-red-500" : "text-green-500"}>{exam.score}%</span>
                              {!exam.failed && <Trophy className="ml-2 h-5 w-5 text-yellow-500" />}
                            </div>
                            <p className="text-sm text-gray-500">合格ライン: {exam.passingScore}%</p>
                          </div>
                        </div>
                        <div className="mt-2">
                          <div className="flex justify-between text-sm mb-1">
                            <span>スコア</span>
                            <span>{exam.score}%</span>
                          </div>
                          <Progress
                            value={exam.score}
                            className={`h-2 ${exam.failed ? "bg-red-100" : "bg-green-100"}`}
                            indicatorClassName={exam.failed ? "bg-red-500" : "bg-green-500"}
                          />
                        </div>
                        <div className="mt-4 flex justify-end">
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-sm border-orange-500 text-orange-500 hover:bg-orange-50"
                          >
                            詳細を見る
                          </Button>
                          {exam.failed && (
                            <Button size="sm" className="ml-2 text-sm bg-orange-500 hover:bg-orange-600 text-white">
                              再受験する
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">新しい試験に挑戦する</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Courses Tab */}
            <TabsContent value="courses">
              <Card>
                <CardHeader>
                  <CardTitle>コース進捗</CardTitle>
                  <CardDescription>あなたが受講中のコースの進捗状況です。</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {courseProgress.map((course) => (
                      <div key={course.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex flex-col md:flex-row justify-between mb-2">
                          <div>
                            <h3 className="text-lg font-medium text-gray-800">{course.title}</h3>
                            <div className="flex flex-wrap gap-2 mt-1">
                              <Badge variant="outline" className="bg-orange-100 text-orange-600 border-orange-200">
                                {course.category}
                              </Badge>
                              {course.completed && (
                                <Badge variant="outline" className="bg-green-100 text-green-600 border-green-200">
                                  完了
                                </Badge>
                              )}
                            </div>
                          </div>
                          <div className="mt-2 md:mt-0 text-right">
                            <div className="text-2xl font-bold">{course.progress}%</div>
                            {course.completed && (
                              <p className="text-sm text-gray-500">
                                {new Date(course.completedDate).toLocaleDateString("ja-JP")}に完了
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="mt-2">
                          <div className="flex justify-between text-sm mb-1">
                            <span>進捗</span>
                            <span>{course.progress}%</span>
                          </div>
                          <Progress
                            value={course.progress}
                            className="h-2 bg-orange-100"
                            indicatorClassName="bg-orange-500"
                          />
                        </div>
                        <div className="mt-4 flex justify-end">
                          <Link href={`/courses/${course.id}`}>
                            <Button className="bg-orange-500 hover:bg-orange-600 text-white" size="sm">
                              {course.completed ? "復習する" : "続ける"}
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/courses">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">新しいコースを探す</Button>
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

