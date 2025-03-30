import { type NextRequest, NextResponse } from 'next/server';
import type { PracticeQuestionsResponse } from '@/types/api';

interface RouteParams {
  params: {
    id: string;
    articleId: string;
  };
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  const { id: courseId, articleId } = params;

  // モックデータ
  const mockQuestions: Record<
    string,
    Record<string, PracticeQuestionsResponse>
  > = {
    'intro-to-ai': {
      'lesson-1': {
        questions: [
          {
            id: 1,
            type: 'multiple-choice',
            question: '生成AIの主な種類として正しくないものはどれですか？',
            options: [
              'テキスト生成AI',
              '画像生成AI',
              '音楽生成AI',
              '物理演算AI',
            ],
            correctAnswer: '物理演算AI',
          },
          {
            id: 2,
            type: 'multiple-choice',
            question:
              '生成AIの歴史において、Transformerアーキテクチャが発表されたのは何年ですか？',
            options: ['2015年', '2017年', '2019年', '2021年'],
            correctAnswer: '2017年',
          },
          {
            id: 3,
            type: 'free-text',
            question:
              '生成AIの応用例を一つ挙げ、その利点について簡潔に説明してください。',
            correctAnswer: '',
          },
        ],
      },
      'lesson-2': {
        questions: [
          {
            id: 1,
            type: 'multiple-choice',
            question:
              '大規模言語モデル（LLM）の基本構造として広く使われているアーキテクチャは何ですか？',
            options: [
              'CNN（畳み込みニューラルネットワーク）',
              'RNN（再帰型ニューラルネットワーク）',
              'Transformer',
              'GAN（敵対的生成ネットワーク）',
            ],
            correctAnswer: 'Transformer',
          },
          {
            id: 2,
            type: 'multiple-choice',
            question:
              'LLMの学習方法として、文章の続きを予測する方法は何と呼ばれますか？',
            options: [
              'マスク言語モデル（MLM）',
              '自己回帰モデル（AR）',
              '対照学習（Contrastive Learning）',
              '転移学習（Transfer Learning）',
            ],
            correctAnswer: '自己回帰モデル（AR）',
          },
          {
            id: 3,
            type: 'multiple-choice',
            question: 'LLMの限界や課題として正しくないものはどれですか？',
            options: [
              '幻覚（Hallucination）',
              'バイアス',
              '最新情報の欠如',
              '計算速度の遅さ',
            ],
            correctAnswer: '計算速度の遅さ',
          },
          {
            id: 4,
            type: 'free-text',
            question:
              'LLMの「幻覚（Hallucination）」とは何か、簡潔に説明してください。',
            correctAnswer: '',
          },
        ],
      },
    },
    'prompt-engineering': {
      'lesson-1': {
        questions: [
          {
            id: 1,
            type: 'multiple-choice',
            question:
              'プロンプトエンジニアリングが重要な理由として正しくないものはどれですか？',
            options: [
              'AIの能力を最大化できる',
              '特定のタスクへの適応が可能',
              'AIモデルの学習速度を向上させる',
              'コスト効率が良い',
            ],
            correctAnswer: 'AIモデルの学習速度を向上させる',
          },
          {
            id: 2,
            type: 'multiple-choice',
            question:
              '効果的なプロンプトの構成要素として含まれないものはどれですか？',
            options: [
              '指示（Instruction）',
              'コンテキスト（Context）',
              'モデルパラメータ（Model Parameters）',
              '出力形式（Output Format）',
            ],
            correctAnswer: 'モデルパラメータ（Model Parameters）',
          },
          {
            id: 3,
            type: 'free-text',
            question:
              'ゼロショットプロンプトとフューショットプロンプトの違いを簡潔に説明してください。',
            correctAnswer: '',
          },
        ],
      },
    },
  };

  // デフォルトの質問（コースIDやレッスンIDに対応するデータがない場合）
  const defaultQuestions: PracticeQuestionsResponse = {
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'このレッスンの内容に関する質問です。',
        options: ['選択肢1', '選択肢2', '選択肢3', '選択肢4'],
        correctAnswer: '選択肢2',
      },
      {
        id: 2,
        type: 'free-text',
        question:
          'このレッスンで学んだ内容について、あなたの考えを述べてください。',
        correctAnswer: '',
      },
    ],
  };

  // 指定されたコースとレッスンの質問を取得（なければデフォルト）
  const questions = mockQuestions[courseId]?.[articleId] || defaultQuestions;

  // 遅延をシミュレート
  await new Promise((resolve) => setTimeout(resolve, 300));

  return NextResponse.json(questions);
}
