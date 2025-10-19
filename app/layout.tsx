import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'JALIFE愛知 | 日本とアフリカの架け橋',
  description: '愛知県を拠点とした日本とアフリカの文化交流・国際協力団体です。',
  keywords: ['JALIFE', '愛知', 'アフリカ', '国際交流', '文化交流', '国際協力'],
  authors: [{ name: 'JALIFE愛知' }],
  openGraph: {
    title: 'JALIFE愛知 | 日本とアフリカの架け橋',
    description: '愛知県を拠点とした日本とアフリカの文化交流・国際協力団体です。',
    url: 'https://jalife-aichi.com',
    siteName: 'JALIFE愛知',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JALIFE愛知 | 日本とアフリカの架け橋',
    description: '愛知県を拠点とした日本とアフリカの文化交流・国際協力団体です。',
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
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded z-50"
          >
            メインコンテンツへスキップ
          </a>
        </div>
        {children}
      </body>
    </html>
  )
}