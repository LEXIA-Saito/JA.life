/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['jalife-aichi.com'],
    formats: ['image/webp', 'image/avif'],
  },
  // SEO最適化
  poweredByHeader: false,
  // パフォーマンス最適化
  compress: true,
  // 多言語対応準備
  i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'ja',
  },
  // 静的エクスポート設定
  trailingSlash: true,
  // 画像最適化
  images: {
    unoptimized: false,
    domains: ['jalife-aichi.com'],
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig