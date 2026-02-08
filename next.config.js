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
    webpackBuildWorker: true,
  },
  
  transpilePackages: [],
  
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },
  
  // Turbopack config for Next.js 16+
  turbopack: {},
}

module.exports = nextConfig
