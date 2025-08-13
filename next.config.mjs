import withPlaiceholder from '@plaiceholder/next';


/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'], // Specify the directories to be linted
  },
};

export default withPlaiceholder(nextConfig);
