/** @type {import('next').NextConfig} */
const nextConfig = {
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
}

module.exports = nextConfig