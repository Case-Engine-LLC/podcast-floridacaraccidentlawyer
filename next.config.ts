import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/v1', destination: '/', permanent: true },
      { source: '/v2', destination: '/', permanent: true },
      { source: '/v3', destination: '/', permanent: true },
      { source: '/v1/:path*', destination: '/:path*', permanent: true },
      { source: '/v2/:path*', destination: '/:path*', permanent: true },
      { source: '/v3/:path*', destination: '/:path*', permanent: true },
      // Episode 1 is live again (Connor, 2026-09-14). Its canonical URL is
      // /episode/what-every-florida-driver-needs-to-know-in-the-first-72-hours-after-a-crash,
      // so that slug must NOT be redirected; the two older published spellings
      // of the same episode point at it instead of at home. Every other
      // episode stays redirected home by src/middleware.ts — see the takedown
      // note there before touching any of this.
      {
        source: '/episode/the-you-interview-w-jonathon-eberst',
        destination: '/episode/what-every-florida-driver-needs-to-know-in-the-first-72-hours-after-a-crash',
        permanent: true,
      },
      {
        source: '/episode/the-you-interview-with-jonathon-eberst',
        destination: '/episode/what-every-florida-driver-needs-to-know-in-the-first-72-hours-after-a-crash',
        permanent: true,
      },
      { source: '/privacy', destination: 'https://eberstlaw.com/privacy-policy/', permanent: true },
      { source: '/privacy-policy', destination: 'https://eberstlaw.com/privacy-policy/', permanent: true },
    ]
  },
}

export default nextConfig
