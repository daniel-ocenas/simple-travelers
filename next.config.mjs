import withPlaiceholder from '@plaiceholder/next';


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  turbopack: {},
};

export default withPlaiceholder(nextConfig);
