import Link from 'next/link';

export default function LegalPage() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mb-8'>
        <Link
          href='/'
          className='text-orange-500 hover:underline mb-4 inline-block'
        >
          ← ホームに戻る
        </Link>
        <h1 className='text-3xl font-bold text-gray-800 mb-4'>お問い合わせ</h1>
      </div>

      <div className='bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8'>
        <div className='prose max-w-none'>
          <table className='w-full border-collapse'>
            <tbody>
              <tr className='border-b border-gray-200'>
                <th className='py-4 px-6 text-left bg-gray-50 w-1/4'>
                  事業者名
                </th>
                <td className='py-4 px-6'>株式会社OpenLearn</td>
              </tr>
              <tr className='border-b border-gray-200'>
                <th className='py-4 px-6 text-left bg-gray-50'>代表者名</th>
                <td className='py-4 px-6'>山田 太郎</td>
              </tr>
              <tr className='border-b border-gray-200'>
                <th className='py-4 px-6 text-left bg-gray-50'>所在地</th>
                <td className='py-4 px-6'>
                  〒100-0001 東京都千代田区千代田1-1-1
                </td>
              </tr>
              <tr className='border-b border-gray-200'>
                <th className='py-4 px-6 text-left bg-gray-50'>電話番号</th>
                <td className='py-4 px-6'>03-1234-5678</td>
              </tr>
              <tr className='border-b border-gray-200'>
                <th className='py-4 px-6 text-left bg-gray-50'>
                  メールアドレス
                </th>
                <td className='py-4 px-6'>info@openlearn-jp.example.com</td>
              </tr>
              <tr className='border-b border-gray-200'>
                <th className='py-4 px-6 text-left bg-gray-50'>URL</th>
                <td className='py-4 px-6'>
                  https://www.openlearn-jp.example.com
                </td>
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
                <td className='py-4 px-6'>クレジットカード決済、銀行振込</td>
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
