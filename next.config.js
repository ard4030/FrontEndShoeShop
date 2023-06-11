/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 's2.uupload.ir',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'dkstatics-public.digikala.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'www.banimode.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 's.mobile.ir',
          port: '',
          pathname: '/**',
        },
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

  }

module.exports = nextConfig
