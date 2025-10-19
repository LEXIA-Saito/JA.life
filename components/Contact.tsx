'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // フォーム送信処理をここに実装
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            お問い合わせ
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            物件に関するご質問やご相談がございましたら、お気軽にお問い合わせください。
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-black">
                お名前 <span className="text-red-500">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium leading-6 text-black">
                電話番号
              </label>
              <div className="mt-2">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium leading-6 text-black">
                お問い合わせ内容 <span className="text-red-500">*</span>
              </label>
              <div className="mt-2">
                <select
                  name="subject"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                >
                  <option value="">選択してください</option>
                  <option value="buy">物件購入について</option>
                  <option value="sell">物件売却について</option>
                  <option value="rent">賃貸について</option>
                  <option value="investment">投資用物件について</option>
                  <option value="consultation">無料相談について</option>
                  <option value="other">その他</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium leading-6 text-black">
                メッセージ <span className="text-red-500">*</span>
              </label>
              <div className="mt-2">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="block w-full rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-colors"
              >
                送信する
              </button>
            </div>
          </form>
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="text-center bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-black">本社</h3>
              <p className="mt-2 text-gray-600">
                〒100-0001<br />
                東京都千代田区千代田1-1-1<br />
                千代田ビル5F
              </p>
            </div>
            <div className="text-center bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-black">連絡先</h3>
              <p className="mt-2 text-gray-600">
                Email: info@realestate.com<br />
                Tel: 03-1234-5678<br />
                営業時間: 平日 9:00-18:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}