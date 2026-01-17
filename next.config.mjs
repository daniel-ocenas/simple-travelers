import withPlaiceholder from '@plaiceholder/next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  turbopack: {},
  output: 'export',
  basePath: '/simple-travelers',
  assetPrefix: '/simple-travelers/',
  images: {
    unoptimized: true,
  },
};

export default withPlaiceholder(nextConfig);
