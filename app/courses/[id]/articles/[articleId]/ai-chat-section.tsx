'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SendHorizontal, Lock } from 'lucide-react';
import { useAuth } from '@/contexts/auth-context';
import Link from 'next/link';
import type { AIChatRequest, AIChatResponse } from '@/types/api';

interface AiChatSectionProps {
  articleTitle: string;
}

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

//// TODO:messageが8000文字を超える場合は、エラーにしてその旨を表示する
export default function AiChatSection({ articleTitle }: AiChatSectionProps) {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // メッセージが追加されたときに自動スクロール
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || !user) return;

    // ユーザーメッセージを追加
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // ユーザーのIDトークンを取得
      const idToken = await user.getIdToken();

      // AIチャットAPIにリクエスト
      const response = await fetch('/api/v1/ai-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({
          message: userMessage.content,
          articleTitle,
          history: messages.map((m) => ({ role: m.role, content: m.content })),
        } as AIChatRequest),
      });

      if (!response.ok) {
        throw new Error('AI chat request failed');
      }

      const data: AIChatResponse = await response.json();

      // AIの応答を追加
      const aiMessage: Message = {
        id: `ai-${Date.now()}`,
        role: 'assistant',
        content: data.message,
        timestamp: new Date(data.timestamp),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      // エラー処理
      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        role: 'assistant',
        content:
          '申し訳ありません。メッセージの送信中にエラーが発生しました。もう一度お試しください。',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // 非ログイン状態の表示
  if (!user) {
    return (
      <Card className='border border-orange-100'>
        <CardHeader className='bg-orange-50 border-b border-orange-100'>
          <CardTitle className='text-lg text-orange-700'>
            AIに質問する
          </CardTitle>
        </CardHeader>
        <CardContent className='p-6 text-center'>
          <div className='flex flex-col items-center justify-center py-8'>
            <div className='bg-orange-100 rounded-full p-4 mb-4'>
              <Lock className='h-8 w-8 text-orange-500' />
            </div>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>
              この機能はログインが必要です
            </h3>
            <p className='text-gray-600 mb-6'>
              AIアシスタントに質問するには、ログインまたは新規登録が必要です。
            </p>
            <div className='flex gap-4'>
              <Link href='/auth/signin'>
                <Button
                  variant='outline'
                  className='border-orange-500 text-orange-500 hover:bg-orange-50'
                >
                  ログイン
                </Button>
              </Link>
              <Link href='/auth/signup'>
                <Button className='bg-orange-500 hover:bg-orange-600 text-white'>
                  新規登録
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className='border border-orange-100'>
      <CardHeader className='bg-orange-50 border-b border-orange-100'>
        <CardTitle className='text-lg text-orange-700'>AIに質問する</CardTitle>
      </CardHeader>
      <CardContent className='p-0'>
        <div className='h-96 overflow-y-auto p-4 space-y-4'>
          {messages.length === 0 && (
            <div className='text-center text-gray-500 py-8'>
              <p>レッスンの内容について質問してみましょう</p>
            </div>
          )}

          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`flex max-w-[80%] ${
                  message.role === 'user' ? 'flex-row-reverse' : ''
                }`}
              >
                {message.role === 'assistant' && (
                  <Avatar className='h-8 w-8 mr-2 mt-1'>
                    <AvatarImage src='/placeholder.svg?height=32&width=32' />
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                )}
                <div>
                  <div
                    className={`rounded-lg p-3 ${
                      message.role === 'user'
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {message.content}
                  </div>
                  <div
                    className={`text-xs mt-1 text-gray-500 ${
                      message.role === 'user' ? 'text-right' : ''
                    }`}
                  >
                    {formatTime(message.timestamp)}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className='flex justify-start'>
              <div className='flex'>
                <Avatar className='h-8 w-8 mr-2 mt-1'>
                  <AvatarImage src='/placeholder.svg?height=32&width=32' />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
                <div className='bg-gray-100 text-gray-800 rounded-lg p-3 flex items-center'>
                  <div className='flex space-x-1'>
                    <div
                      className='w-2 h-2 bg-gray-400 rounded-full animate-bounce'
                      style={{ animationDelay: '0ms' }}
                    ></div>
                    <div
                      className='w-2 h-2 bg-gray-400 rounded-full animate-bounce'
                      style={{ animationDelay: '150ms' }}
                    ></div>
                    <div
                      className='w-2 h-2 bg-gray-400 rounded-full animate-bounce'
                      style={{ animationDelay: '300ms' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className='p-4 border-t border-gray-200'>
          <div className='flex'>
            <Textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder='質問を入力してください...'
              className='flex-1 resize-none'
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              disabled={isLoading}
            />
            <Button
              onClick={handleSendMessage}
              className='ml-2 bg-orange-500 hover:bg-orange-600'
              disabled={!inputValue.trim() || isLoading}
            >
              <SendHorizontal className='h-5 w-5' />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
