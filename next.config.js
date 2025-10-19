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
  // Vercel最適化
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig