/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  env: {
    APP_URL: process.env.REACT_APP_URL,
    API_URL: 'http://localhost:3500'
  },
  images: {
    domains: ['localhost']
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3500/api/:path*'
      },
      {
        source: '/static/:path*',
        destination: 'http://localhost:3500/static/:path*'
      }
    ]
  },
  /* async redirects() {
    return [
      {
        source: '/',
        destination: '/',
        permanent: true,
      }
    ]
  } */
}

module.exports = nextConfig