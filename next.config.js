/** @type {import('next').NextConfig} */
const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  sw: '/sw.js',
  maximumFileSizeToCacheInBytes: 3000000,
  runtimeCaching: [
    {
      urlPattern: '/',
      handler: 'NetworkFirst',
      options: {
        cacheName: 'pages-cache',
      },
    },
  ],
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // env: {
  //   REACT_APP_URL:
  //     process.env.REACT_APP_URL === 'development' ? 'http://localhost:3000' : 'https://simpletravelers.com',
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'simpletravelers.sk',
        port: '',
        pathname: '/**',
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['sk', 'sk-SK'],
    // This is the default locale used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'sk',
  },
  // domains: [
  //   {
  //     domain: 'simpletravelers.sk',
  //     defaultLocale: 'sk',
  //   },
  // ],
  transpilePackages: [
    'antd',
    '@ant-design',
    'rc-util',
    'rc-pagination',
    'rc-picker',
    'rc-notification',
    'rc-tooltip',
    'rc-tree',
    'rc-table',
  ],
};

module.exports = process.env.NODE_ENV === 'development' ? nextConfig : withPWA(nextConfig);
