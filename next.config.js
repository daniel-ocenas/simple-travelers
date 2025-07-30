/** @type {import('next').NextConfig} */
const compose = require('./src/utils/compose');
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
  productionBrowserSourceMaps: true,
  compiler: {
    styledComponents: true,
  },
  // i18n: {
  //   locales: ['sk', 'sk-SK'],
  //   defaultLocale: 'sk',
  // },
  // webpack: (config) => {
  //   config.module.rules.push({
  //     test: /\.css$/,
  //     use: ['style-loader', 'css-loader', 'postcss-loader'],
  //   });
  //   return config;
  // },
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
