import { type NextRequest, NextResponse } from "next/server"
import type { UserProfile } from "@/types/api"
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

      // 実際のアプリケーションではDBからユーザー情報を取得
      // ここではモックデータを返す
      const mockUserProfile: UserProfile = {
        id: "yamada123",
        name: "山田 太郎",
        email: "yamada@example.com",
        occupation: "エンジニア・開発者",
        birthDate: "1990-01-01",
        joinedDate: "2023-05-15",
      }

      // 遅延をシミュレート
      await new Promise((resolve) => setTimeout(resolve, 300))

      return NextResponse.json(mockUserProfile)
    } catch (error) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 })
    }
  } catch (error) {
    console.error("User profile API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

