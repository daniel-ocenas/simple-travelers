import withPlaiceholder from '@plaiceholder/next';


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.notion.so',
      },
      {
        protocol: 'https',
        hostname: 's3-us-west-2.amazonaws.com',
      },
    ],
  },
  eslint: {
    dirs: ['src'], // Specify the directories to be linted
  },

  // // suppress keyv warning
  // webpack: (config, { webpack }) => {
  //   config.plugins.push(
  //     new webpack.ContextReplacementPlugin(/\/keyv\//, (data) => {
  //       delete data.dependencies[0].critical;
  //       return data;
  //     })
  //   );
  //
  //   return config;
  // },
};

export default withPlaiceholder(nextConfig);
