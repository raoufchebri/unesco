/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'whc.unesco.org',
        port: '',
        pathname: '/uploads/sites/gallery/google/**',
      },
    ],
  },
};

module.exports = nextConfig;
