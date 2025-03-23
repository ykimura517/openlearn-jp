import { type NextRequest, NextResponse } from "next/server"
import type { ExamSubmission, ExamResult } from "@/types/api"

interface RouteParams {
  params: {
    id: string
  }
}

export async function POST(request: NextRequest, { params }: RouteParams) {
  const examId = params.id

  try {
    // リクエストボディの解析
    const body: ExamSubmission = await request.json()
    const { answers } = body

    if (!answers || Object.keys(answers).length === 0) {
      return NextResponse.json({ error: "Answers are required" }, { status: 400 })
    }

    // モックデータ（実際のアプリケーションではDBから正解を取得）
    const mockCorrectAnswers: Record<string, Record<number, string>> = {
      "ai-basics": {
        1: "物理演算AI",
        2: "OpenAI",
        3: "2017年",
        4: "以上すべて",
      },
      "prompt-engineering": {
        1: "AIモデルから望ましい結果を得るための入力を最適化する",
        2: "AIモデルのアーキテクチャの詳細",
        3: "プロンプトに少数の例を含めてから指示を与える",
        4: "AIモデルのパラメータを調整する",
      },
    }

    // 正解の答えと比較して採点
    let correctAnswers = 0
    let totalQuestions = 0
    const feedback: Record<number, string> = {}

    // 試験IDに対応する正解がある場合
    if (mockCorrectAnswers[examId]) {
      const correctAnswersForExam = mockCorrectAnswers[examId]

      // 各問題をチェック
      Object.keys(answers).forEach((questionIdStr) => {
        const questionId = Number.parseInt(questionIdStr)
        totalQuestions++

        // 選択問題の場合
        if (correctAnswersForExam[questionId]) {
          if (answers[questionId] === correctAnswersForExam[questionId]) {
            correctAnswers++
            feedback[questionId] = "正解です！"
          } else {
            feedback[questionId] = `不正解です。正解は「${correctAnswersForExam[questionId]}」です。`
          }
        }
        // 記述問題の場合
        else {
          // 記述問題は内容があれば正解とする（実際のアプリケーションではAIなどで評価）
          if (answers[questionId] && answers[questionId].trim().length > 0) {
            correctAnswers++
            feedback[questionId] = "回答を受け付けました。自己評価のために参考解答をご確認ください。"
          } else {
            feedback[questionId] = "回答が入力されていません。"
          }
        }
      })
    }
    // 試験IDに対応する正解がない場合（デフォルト処理）
    else {
      totalQuestions = Object.keys(answers).length

      // ランダムに採点（デモ用）
      Object.keys(answers).forEach((questionIdStr) => {
        const questionId = Number.parseInt(questionIdStr)

        // 70%の確率で正解とする
        if (Math.random() > 0.3) {
          correctAnswers++
          feedback[questionId] = "正解です！"
        } else {
          feedback[questionId] = "不正解です。"
        }
      })
    }

    // スコアの計算
    const score = Math.round((correctAnswers / totalQuestions) * 100)
    const passingScore = 70 // デフォルトの合格ライン

    // 結果の作成
    const result: ExamResult = {
      score,
      correctAnswers,
      totalQuestions,
      passed: score >= passingScore,
      passingScore,
      feedback,
    }

    // 遅延をシミュレート
    await new Promise((resolve) => setTimeout(resolve, 1500))

    return NextResponse.json(result)
  } catch (error) {
    console.error("Exam submission error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

