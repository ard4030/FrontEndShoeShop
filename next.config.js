/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '7251',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'shopserver.novin-code.ir',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'shopserver.novin-code.ir',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'demos.mahdisweb.net',
        port: '',
        pathname: '/**',
      }
    ],
  },
});