/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['cdn.playjunction.com', 'images.igdb.com', 'play-lh.googleusercontent.com', 'is1-ssl.mzstatic.com'],
  },
  async redirects() {
    return [
      {
        source: '/game/:slug',
        destination: '/games/:slug',
        permanent: true,
      },
      {
        source: '/mobile/:slug',
        destination: '/mobile-games/:slug',
        permanent: true,
      },
      {
        source: '/store',
        destination: '/games',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/browse/:category',
        destination: '/games?category=:category',
      },
      {
        source: '/search/:query',
        destination: '/games?search=:query',
      },
    ]
  },
}

export default nextConfig
