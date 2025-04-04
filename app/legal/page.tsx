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
    <div className='container mx-auto px-4 py-8'>
      <div className='mb-8'>
        <Link
          href='/'
          className='text-orange-500 hover:underline mb-4 inline-block'
        >
          ← ホームに戻る
        </Link>
        <h1 className='text-3xl font-bold text-gray-800 mb-4'>
          特定商取引法に基づく表記
        </h1>
      </div>

      <div className='bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8'>
        <div className='prose max-w-none'>
          <table className='w-full border-collapse'>
            <tbody>
              <tr className='border-b border-gray-200'>
                <th className='py-4 px-6 text-left bg-gray-50 w-1/4'>
                  事業者名
                </th>
                <td className='py-4 px-6'>ネクストフォーム合同会社</td>
              </tr>
              <tr className='border-b border-gray-200'>
                <th className='py-4 px-6 text-left bg-gray-50'>代表者名</th>
                <td className='py-4 px-6'>木村祐輔</td>
              </tr>
              <tr className='border-b border-gray-200'>
                <th className='py-4 px-6 text-left bg-gray-50'>所在地</th>
                <td className='py-4 px-6'>
                  〒523-0891 滋賀県近江八幡市鷹飼町1085
                </td>
              </tr>
              <tr className='border-b border-gray-200'>
                <th className='py-4 px-6 text-left bg-gray-50'>電話番号</th>
                <td className='py-4 px-6'>080-5323-3262</td>
              </tr>
              <tr className='border-b border-gray-200'>
                <th className='py-4 px-6 text-left bg-gray-50'>URL</th>
                <td className='py-4 px-6'>https://openlearn.jp</td>
              </tr>
              <tr className='border-b border-gray-200'>
                <th className='py-4 px-6 text-left bg-gray-50'>販売価格</th>
                <td className='py-4 px-6'>各商品・サービスページに記載</td>
              </tr>
              <tr className='border-b border-gray-200'>
                <th className='py-4 px-6 text-left bg-gray-50'>
                  商品等の引渡時期
                </th>
                <td className='py-4 px-6'>お申込み完了後、即時アクセス可能</td>
              </tr>
              <tr className='border-b border-gray-200'>
                <th className='py-4 px-6 text-left bg-gray-50'>お支払い方法</th>
                <td className='py-4 px-6'>
                  クレジットカード決済、銀行振込、PayPal、コンビニ決済
                </td>
              </tr>
              <tr className='border-b border-gray-200'>
                <th className='py-4 px-6 text-left bg-gray-50'>
                  キャンセル・返品
                </th>
                <td className='py-4 px-6'>
                  デジタルコンテンツのため、原則として返品・キャンセルはお受けしておりません。
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
