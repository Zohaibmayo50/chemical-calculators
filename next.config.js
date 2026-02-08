/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  experimental: {
    optimizePackageImports: ['lucide-react'],
    optimizeCss: true,
  },
  
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },
}

module.exports = nextConfig
