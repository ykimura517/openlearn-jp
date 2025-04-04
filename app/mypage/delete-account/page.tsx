'use client';

import type React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { AlertCircle, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { apiFetch } from '@/lib/apiClient';
import { useAuth } from '@/contexts/auth-context';

export default function DeleteAccountPage() {
  const router = useRouter();
  const { logout } = useAuth();
  const [reason, setReason] = useState('');
  const [selectedReason, setSelectedReason] = useState('');
  const [otherReason, setOtherReason] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [confirmCheckbox, setConfirmCheckbox] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const finalReason =
      selectedReason === 'other' ? otherReason : selectedReason;
    if (!finalReason.trim()) {
      setError('退会理由を入力してください。');
      return;
    }

    if (confirmation !== '退会します') {
      setError('確認のテキストが正しくありません。');
      return;
    }

    if (!confirmCheckbox) {
      setError('確認事項にチェックを入れてください。');
      return;
    }

    try {
      // API を呼び出してユーザー削除を実行
      await apiFetch<{ ok: boolean }>(
        '/api/v1/mypage/delete-account',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            reason: finalReason,
            confirmation,
          }),
        },
        true // 認証トークンを付与する
      );
      // 退会後は認証情報（トークン、ユーザー情報）を破棄するために logout を呼び出す
      await logout();
      // logout 内でトップページへのリダイレクト処理があるため、ここでの router.push は不要
    } catch (err: any) {
      setError(err.message || 'アカウント削除に失敗しました。');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="mb-8">
        <Link
          href="/mypage"
          className="text-orange-500 hover:underline mb-4 inline-block"
        >
          ← マイページに戻る
        </Link>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          アカウント退会
        </h1>
        <p className="text-gray-600">
          アカウントを退会すると、すべてのデータが削除され、復元することはできません。
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-red-600 flex items-center">
            <AlertTriangle className="mr-2 h-5 w-5" />
            アカウント退会
          </CardTitle>
          <CardDescription>
            退会する前に、以下の情報をご確認ください。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert className="mb-6 border-amber-200 bg-amber-50">
            <AlertCircle className="h-4 w-4 text-amber-600" />
            <AlertTitle className="text-amber-600">注意事項</AlertTitle>
            <AlertDescription className="text-amber-700">
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>
                  アカウントを退会すると、すべての学習データ、試験結果、認定証が削除されます。
                </li>
                <li>
                  一度退会すると、同じユーザーIDで再登録することはできません。
                </li>
                <li>
                  有料コースを購入している場合、自動解約は行われません。事前に解約しておくようにお願いします。
                </li>
              </ul>
            </AlertDescription>
          </Alert>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-800">
                退会理由を教えてください
              </h3>
              <RadioGroup
                value={selectedReason}
                onValueChange={setSelectedReason}
              >
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem
                      value="not-useful"
                      id="not-useful"
                      className="mt-1"
                    />
                    <div>
                      <Label htmlFor="not-useful" className="text-base">
                        サービスが役に立たなかった
                      </Label>
                      <p className="text-sm text-gray-500">
                        コンテンツや機能が期待と異なっていた
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem
                      value="too-expensive"
                      id="too-expensive"
                      className="mt-1"
                    />
                    <div>
                      <Label htmlFor="too-expensive" className="text-base">
                        料金が高すぎる
                      </Label>
                      <p className="text-sm text-gray-500">
                        サービスの価格に見合う価値を感じなかった
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem
                      value="found-alternative"
                      id="found-alternative"
                      className="mt-1"
                    />
                    <div>
                      <Label htmlFor="found-alternative" className="text-base">
                        他のサービスを見つけた
                      </Label>
                      <p className="text-sm text-gray-500">
                        より良い代替サービスを利用することにした
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem
                      value="temporary"
                      id="temporary"
                      className="mt-1"
                    />
                    <div>
                      <Label htmlFor="temporary" className="text-base">
                        一時的に利用しないため
                      </Label>
                      <p className="text-sm text-gray-500">
                        後で再登録する予定がある
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="other" id="other" className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor="other" className="text-base">
                        その他
                      </Label>
                      {selectedReason === 'other' && (
                        <Textarea
                          placeholder="退会理由を詳しく教えてください"
                          className="mt-2"
                          value={otherReason}
                          onChange={(e) => setOtherReason(e.target.value)}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-800">確認</h3>
              <p className="text-sm text-gray-600">
                退会を確定するには、以下に「退会します」と入力してください。
              </p>
              <Input
                placeholder="退会します"
                value={confirmation}
                onChange={(e) => setConfirmation(e.target.value)}
                className="border-red-200"
              />
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="confirm"
                checked={confirmCheckbox}
                onCheckedChange={(checked) =>
                  setConfirmCheckbox(checked as boolean)
                }
              />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="confirm"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  上記の注意事項を読み、理解しました。アカウントを完全に削除することに同意します。
                </label>
              </div>
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>エラー</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/mypage">
            <Button variant="outline">キャンセル</Button>
          </Link>
          <Button
            variant="destructive"
            onClick={handleSubmit}
            disabled={
              !selectedReason ||
              (selectedReason === 'other' && !otherReason) ||
              confirmation !== '退会します' ||
              !confirmCheckbox
            }
          >
            アカウントを退会する
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
