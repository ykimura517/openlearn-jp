'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/v1/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          message: '[OL] ' + formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(result.error || '送信に失敗しました。');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage(
        'サーバーエラーが発生しました。後ほど再試行してください。'
      );
    }
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <Link
        href='/'
        className='text-orange-500 hover:underline mb-4 inline-block'
      >
        ← ホームに戻る
      </Link>
      <div className='bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8'>
        <h1 className='text-3xl font-bold text-gray-800 mb-4'>お問い合わせ</h1>
        <form className='max-w-lg mx-auto' onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-gray-600 mb-2' htmlFor='name'>
              お名前
            </label>
            <input
              type='text'
              id='name'
              className='w-full px-3 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded'
              placeholder='お名前を入力してください'
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-600 mb-2' htmlFor='email'>
              メールアドレス
            </label>
            <input
              type='email'
              id='email'
              className='w-full px-3 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded'
              placeholder='メールアドレスを入力してください'
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-600 mb-2' htmlFor='message'>
              メッセージ
            </label>
            <textarea
              id='message'
              className='w-full px-3 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded'
              rows={5}
              placeholder='お問い合わせ内容を入力してください'
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          {status === 'error' && (
            <p className='text-red-500 mb-4'>{errorMessage}</p>
          )}
          {status === 'success' && (
            <p className='text-green-500 mb-4'>
              お問い合わせが正常に送信されました。
            </p>
          )}
          <button
            type='submit'
            className={`bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded ${
              status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? '送信中...' : '送信'}
          </button>
        </form>
      </div>
    </div>
  );
}
