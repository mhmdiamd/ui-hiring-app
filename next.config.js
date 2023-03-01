/** @type {import('next').NextConfig} */
const nextConfig = {

  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
  experimental: {
    appDir: true
  },
  env: {
    JWT_SIGNING_PRIVATE_KEY: 'codeauthentication',
    API_ENDPOINT: 'http://localhost:3001/api/v1',
  }
}

module.exports = nextConfig
