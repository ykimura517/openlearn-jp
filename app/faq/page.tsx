'use server';
import Link from 'next/link';
import { Metadata } from 'next';

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    robots: 'noindex,nofollow',
  };
};

export default async function LegalPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link
          href="/"
          className="text-orange-500 hover:underline mb-4 inline-block"
        >
          ← ホームに戻る
        </Link>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">よくある質問</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8">
        <div className="prose max-w-none">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-gray-200">
                <th className="py-4 px-6 text-left bg-gray-50 w-1/4">
                  OpenLearn JPとは何ですか？
                </th>
                <td className="py-4 px-6">
                  AIやプログラミングについての学習コースや試験を提供するサービスです。
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <th className="py-4 px-6 text-left bg-gray-50">
                  どういうプランがありますか？
                </th>
                <td className="py-4 px-6">
                  2025年4月現在、無料プランのみです。
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <th className="py-4 px-6 text-left bg-gray-50">
                  無料プランに制限はありますか？
                </th>
                <td className="py-4 px-6">
                  AIへの質問が月5回までに制限されます。
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <th className="py-4 px-6 text-left bg-gray-50">
                  AIの回答が間違っている気がするのですが？
                </th>
                <td className="py-4 px-6">
                  AIは完璧ではありません。特に酷い間違いを見つけた場合は、お問い合わせより連絡していただけると幸いです。
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
