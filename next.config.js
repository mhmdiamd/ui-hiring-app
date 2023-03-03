/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_ENDPOINT: 'http://localhost:3001/api/v1',
  }
}

module.exports = nextConfig
