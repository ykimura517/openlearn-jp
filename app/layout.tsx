import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/contexts/auth-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "OpenLearn JP - AI・プログラミング学習プラットフォーム",
  description: "生成AIやプログラミングについての学習コースを提供するプラットフォーム",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="light">
            <Header />
            <main className="min-h-screen">{children}</main>
            <footer className="bg-orange-100 py-8">
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="mb-6 md:mb-0">
                    <h3 className="text-xl font-bold text-orange-600 mb-4">OpenLearn JP</h3>
                    <p className="text-gray-700">
                      生成AIやプログラミングについての学習コースを提供するプラットフォーム
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-orange-600 mb-3">リンク</h4>
                      <ul className="space-y-2">
                        <li>
                          <a href="/" className="text-gray-700 hover:text-orange-500">
                            ホーム
                          </a>
                        </li>
                        <li>
                          <a href="/courses" className="text-gray-700 hover:text-orange-500">
                            コース一覧
                          </a>
                        </li>
                        <li>
                          <a href="/exams" className="text-gray-700 hover:text-orange-500">
                            試験一覧
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-orange-600 mb-3">サポート</h4>
                      <ul className="space-y-2">
                        <li>
                          <a href="#" className="text-gray-700 hover:text-orange-500">
                            お問い合わせ
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-orange-500">
                            よくある質問
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-orange-500">
                            利用規約
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-orange-200 text-center text-gray-600">
                  <p>© {new Date().getFullYear()} OpenLearn JP. All rights reserved.</p>
                </div>
              </div>
            </footer>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}



import './globals.css'