import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: '不動産会社 | 理想の住まいを見つけませんか',
  description: '豊富な物件情報と確かな実績で、お客様の不動産取引をサポートいたします。売買から賃貸まで、幅広いニーズにお応えします。',
  keywords: ['不動産', '売買', '賃貸', '投資', 'マンション', '戸建て', '土地'],
  authors: [{ name: '不動産会社' }],
  openGraph: {
    title: '不動産会社 | 理想の住まいを見つけませんか',
    description: '豊富な物件情報と確かな実績で、お客様の不動産取引をサポートいたします。',
    url: 'https://realestate.com',
    siteName: '不動産会社',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '不動産会社 | 理想の住まいを見つけませんか',
    description: '豊富な物件情報と確かな実績で、お客様の不動産取引をサポートいたします。',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={notoSansJP.className}>
      <body>
        <div id="skip-to-content">
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-black text-white px-4 py-2 rounded z-50"
          >
            メインコンテンツへスキップ
          </a>
        </div>
        {children}
      </body>
    </html>
  )
}