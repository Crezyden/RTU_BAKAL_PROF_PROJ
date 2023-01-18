/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  env:{
    APP_URL: process.env.REACT_APP_URL
  },
  images:{
    domains: ['localhost']
  },
  async rewrites(){
    return[
      {
        source: '/api/:path*',
        destination: 'http://localhost:3500/api/:path*'
      },
      {
        source: '/static/:path*',
        destination: 'http://localhost:3500/static/:path*'
      }
    ]
  }
}

module.exports = nextConfig
