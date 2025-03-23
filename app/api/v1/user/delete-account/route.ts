import { type NextRequest, NextResponse } from "next/server"
import type { DeleteAccountRequest, DeleteAccountResponse } from "@/types/api"
import { getAuth } from "firebase-admin/auth"
import { initializeFirebaseAdmin } from "@/lib/firebase-admin"

// Firebase Adminの初期化
initializeFirebaseAdmin()

export async function POST(request: NextRequest) {
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

      // リクエストボディの解析
      const body: DeleteAccountRequest = await request.json()
      const { reason, confirmation } = body

      // バリデーション
      if (!reason) {
        return NextResponse.json({ error: "Reason is required" }, { status: 400 })
      }

      if (confirmation !== "退会します") {
        return NextResponse.json({ error: "Invalid confirmation text" }, { status: 400 })
      }

      // 実際のアプリケーションではユーザーアカウントを削除
      // ここではモック処理

      // 遅延をシミュレート
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const response: DeleteAccountResponse = {
        success: true,
        message: "アカウントが正常に削除されました。",
      }

      return NextResponse.json(response)
    } catch (error) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 })
    }
  } catch (error) {
    console.error("Delete account API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

