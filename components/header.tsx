"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, User } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, logout } = useAuth()

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error("Logout failed:", error)
    }
  }

  return (
    <header className="bg-white border-b border-orange-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-orange-600">OpenLearn JP</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/courses" className="text-gray-700 hover:text-orange-500">
              コース一覧
            </Link>
            <Link href="/exams" className="text-gray-700 hover:text-orange-500">
              試験一覧
            </Link>
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                    <User className="h-4 w-4 mr-2" />
                    マイアカウント
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/mypage">マイページ</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/mypage/settings">設定</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>ログアウト</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-4">
                <Link href="/auth/signin">
                  <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                    ログイン
                  </Button>
                </Link>
                <Link href="/auth/signup">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">新規登録</Button>
                </Link>
              </div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-orange-100">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/courses"
                className="text-gray-700 hover:text-orange-500 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                コース一覧
              </Link>
              <Link
                href="/exams"
                className="text-gray-700 hover:text-orange-500 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                試験一覧
              </Link>
              {user ? (
                <>
                  <Link
                    href="/mypage"
                    className="text-gray-700 hover:text-orange-500 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    マイページ
                  </Link>
                  <Link
                    href="/mypage/settings"
                    className="text-gray-700 hover:text-orange-500 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    設定
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout()
                      setIsMenuOpen(false)
                    }}
                    className="text-red-600 hover:text-red-700 py-2 text-left"
                  >
                    ログアウト
                  </button>
                </>
              ) : (
                <div className="flex flex-col space-y-3 pt-3 border-t border-orange-100">
                  <Link href="/auth/signin" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 w-full">
                      ログイン
                    </Button>
                  </Link>
                  <Link href="/auth/signup" onClick={() => setIsMenuOpen(false)}>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">新規登録</Button>
                  </Link>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

