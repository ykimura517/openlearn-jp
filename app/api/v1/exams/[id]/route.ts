import { type NextRequest, NextResponse } from "next/server"
import type { ExamDetail } from "@/types/api"

interface RouteParams {
  params: {
    id: string
  }
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  const examId = params.id

  // モックデータ
  const mockExams: Record<string, ExamDetail> = {
    "ai-basics": {
      id: "ai-basics",
      title: "生成AI基礎試験",
      description:
        "生成AIの基礎知識を測定する試験です。ChatGPT、Stable Diffusion、AIの歴史などについての問題が出題されます。",
      category: "ai",
      categoryName: "生成AI",
      level: "初級",
      questions: [
        {
          id: 1,
          type: "multiple-choice",
          question: "生成AIの主な種類として正しくないものはどれですか？",
          options: ["テキスト生成AI", "画像生成AI", "音楽生成AI", "物理演算AI"],
          correctAnswer: "物理演算AI",
        },
        {
          id: 2,
          type: "multiple-choice",
          question: "ChatGPTの開発元として正しいのはどれですか？",
          options: ["Google", "OpenAI", "Microsoft", "Meta"],
          correctAnswer: "OpenAI",
        },
        {
          id: 3,
          type: "multiple-choice",
          question: "Transformerアーキテクチャが発表されたのは何年ですか？",
          options: ["2015年", "2017年", "2019年", "2021年"],
          correctAnswer: "2017年",
        },
        {
          id: 4,
          type: "multiple-choice",
          question: "生成AIのトレーニングに使用される主な手法はどれですか？",
          options: ["教師あり学習", "強化学習", "教師なし学習", "以上すべて"],
          correctAnswer: "以上すべて",
        },
        {
          id: 5,
          type: "free-text",
          question: "生成AIの倫理的課題について、あなたの考えを100字以内で述べてください。",
          correctAnswer: "",
        },
      ],
      timeLimit: "30分",
      passingScore: 70,
    },
    "prompt-engineering": {
      id: "prompt-engineering",
      title: "プロンプトエンジニアリング試験",
      description: "効果的なプロンプトの書き方や最適化方法についての知識を測定します。",
      category: "ai",
      categoryName: "生成AI",
      level: "中級",
      questions: [
        {
          id: 1,
          type: "multiple-choice",
          question: "プロンプトエンジニアリングの主な目的として最も適切なものはどれですか？",
          options: [
            "AIモデルの学習速度を向上させる",
            "AIモデルのパラメータ数を削減する",
            "AIモデルから望ましい結果を得るための入力を最適化する",
            "AIモデルのトレーニングデータを選別する",
          ],
          correctAnswer: "AIモデルから望ましい結果を得るための入力を最適化する",
        },
        {
          id: 2,
          type: "multiple-choice",
          question: "効果的なプロンプトに含めるべき要素として適切でないものはどれですか？",
          options: ["明確な指示", "コンテキスト情報", "出力形式の指定", "AIモデルのアーキテクチャの詳細"],
          correctAnswer: "AIモデルのアーキテクチャの詳細",
        },
        {
          id: 3,
          type: "multiple-choice",
          question: "「フューショットプロンプト」の特徴として正しいものはどれですか？",
          options: [
            "プロンプトに例を含めずに直接指示を与える",
            "プロンプトに少数の例を含めてから指示を与える",
            "プロンプトを複数回に分けて段階的に与える",
            "プロンプトに詳細な制約条件を指定する",
          ],
          correctAnswer: "プロンプトに少数の例を含めてから指示を与える",
        },
        {
          id: 4,
          type: "multiple-choice",
          question: "プロンプトの最適化手法として適切でないものはどれですか？",
          options: [
            "具体的な指示を与える",
            "出力形式を指定する",
            "AIモデルのパラメータを調整する",
            "複雑なタスクを小さなステップに分ける",
          ],
          correctAnswer: "AIモデルのパラメータを調整する",
        },
        {
          id: 5,
          type: "free-text",
          question: "あなたが考える効果的なプロンプトの特徴を3つ挙げ、簡潔に説明してください。",
          correctAnswer: "",
        },
      ],
      timeLimit: "25分",
      passingScore: 70,
    },
  }

  // デフォルトの試験（試験IDに対応するデータがない場合）
  const defaultExam: ExamDetail = {
    id: examId,
    title: "試験",
    description: "この試験では、基本的な知識を測定します。",
    category: "other",
    categoryName: "その他",
    level: "初級",
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "この試験の問題1で���。",
        options: ["選択肢1", "選択肢2", "選択肢3", "選択肢4"],
        correctAnswer: "選択肢2",
      },
      {
        id: 2,
        type: "free-text",
        question: "この試験の問題2です。あなたの考えを述べてください。",
        correctAnswer: "",
      },
    ],
    timeLimit: "20分",
    passingScore: 70,
  }

  // 指定された試験IDのデータを取得（なければデフォルト）
  const exam = mockExams[examId] || defaultExam

  // 遅延をシミュレート
  await new Promise((resolve) => setTimeout(resolve, 500))

  return NextResponse.json(exam)
}

