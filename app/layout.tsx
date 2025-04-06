import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Header from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';
import { AuthProvider } from '@/contexts/auth-context';
import { GoogleTagManager } from '@next/third-parties/google';
const noIndexEnv = ['development', 'dev', 'staging', 'test', 'local', 'stg'];

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'OpenLearn JP - AI・プログラミング学習プラットフォーム',
  description:
    '生成AIやプログラミングについての学習コースを提供するプラットフォーム',
  robots: noIndexEnv.includes(process.env.NEXT_PUBLIC_ENV as string)
    ? 'noindex,nofollow'
    : 'index,follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicons/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicons/favicon.svg" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
      </head>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID as string} />
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="light">
            <Header />
            <main className="min-h-screen">{children}</main>
            <footer className="bg-orange-100 py-8">
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="mb-6 md:mb-0">
                    <h3 className="text-xl font-bold text-orange-600 mb-4">
                      OpenLearn JP
                      {process.env.NEXT_PUBLIC_ENV != 'prod' ? ' 開発' : ''}
                    </h3>
                    <p className="text-gray-700">
                      生成AIやプログラミングについての学習コースを提供するプラットフォーム
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-orange-600 mb-3">
                        リンク
                      </h4>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href={
                              (process.env.NEXT_PUBLIC_ENV as string) === 'dev'
                                ? 'https://open-learn.dev/'
                                : '/'
                            }
                            className="text-gray-700 hover:text-orange-500"
                          >
                            ホーム
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/courses"
                            className="text-gray-700 hover:text-orange-500"
                          >
                            コース一覧
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/exams"
                            className="text-gray-700 hover:text-orange-500"
                          >
                            試験一覧
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-orange-600 mb-3">
                        サポート
                      </h4>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/contact"
                            className="text-gray-700 hover:text-orange-500"
                          >
                            お問い合わせ
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/faq"
                            className="text-gray-700 hover:text-orange-500"
                          >
                            よくある質問
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/term-of-use"
                            className="text-gray-700 hover:text-orange-500"
                          >
                            利用規約
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/legal"
                            className="text-gray-700 hover:text-orange-500"
                          >
                            特定商取引法に基づく表記
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/privacy-policy"
                            className="text-gray-700 hover:text-orange-500"
                          >
                            プライバシーポリシー
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-orange-200 text-center text-gray-600">
                  <p>
                    © {new Date().getFullYear()} OpenLearn JP. All rights
                    reserved.
                  </p>
                </div>
              </div>
            </footer>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

import './globals.css';
