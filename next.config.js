/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['realestate.com'],
    formats: ['image/webp', 'image/avif'],
  },
  // SEO最適化
  poweredByHeader: false,
  // パフォーマンス最適化
  compress: true,
}

module.exports = nextConfig