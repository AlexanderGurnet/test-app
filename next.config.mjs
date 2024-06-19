/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['frontend-test-api.yoldi.agency'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
