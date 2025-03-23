import { type NextRequest, NextResponse } from "next/server"
import type { UserExamResultsResponse } from "@/types/api"
import { getAuth } from "firebase-admin/auth"
import { initializeFirebaseAdmin } from "@/lib/firebase-admin"

// Firebase Adminの初期化
initializeFirebaseAdmin()

export async function GET(request: NextRequest) {
  try {
    // 認証チェック
    const authHeader = request.headers.get("Authorization")
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const token = authHeader.split("Bearer ")[1]

    try {
      // トークンの検証
      const decodedToken = await getAuth().verifyIdToken(token)
      const uid = decodedToken.uid

      // 実際のアプリケーションではDBからユーザーの試験結果を取得
      // ここではモックデータを返す
      const mockExamResults: UserExamResultsResponse = {
        results: [
          {
            id: "result-1",
            examId: "ai-basics",
            title: "生成AI基礎試験",
            date: "2023-06-10",
            score: 85,
            passingScore: 70,
            category: "生成AI",
            level: "初級",
            passed: true,
          },
          {
            id: "result-2",
            examId: "javascript",
            title: "JavaScript試験",
            date: "2023-07-22",
            score: 92,
            passingScore: 70,
            category: "プログラミング",
            level: "初級",
            passed: true,
          },
          {
            id: "result-3",
            examId: "prompt-engineering",
            title: "プロンプトエンジニアリング試験",
            date: "2023-08-15",
            score: 78,
            passingScore: 70,
            category: "生成AI",
            level: "中級",
            passed: true,
          },
          {
            id: "result-4",
            examId: "python",
            title: "Python試験",
            date: "2023-09-05",
            score: 65,
            passingScore: 70,
            category: "プログラミング",
            level: "中級",
            passed: false,
          },
        ],
      }

      // 遅延をシミュレート
      await new Promise((resolve) => setTimeout(resolve, 500))

      return NextResponse.json(mockExamResults)
    } catch (error) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 })
    }
  } catch (error) {
    console.error("User exam results API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

