/** @type {import('next').NextConfig} */
const compose = require('./utils/compose');
// const runtimeCaching = require('next-pwa/cache');
const withTM = require('next-transpile-modules')([
  'antd',
  'rc-input', // Also listed in the call stack
]);

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

module.exports = compose(withTM, process.env.NODE_ENV !== 'development' && withPWA)(nextConfig);
