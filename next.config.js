/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['realestate.com'],
    formats: ['image/webp', 'image/avif'],
  },
  poweredByHeader: false,
  compress: true,
}

module.exports = nextConfig