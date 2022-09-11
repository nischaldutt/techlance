/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "tailwindui.com",
      "images.unsplash.com",
      "mdbcdn.b-cdn.net",
      "mdbootstrap.com",
      "d2zdpiztbgorvt.cloudfront.net",
      "mdbcdn.b-cdn.net",
      "maps.googleapis.com",
    ],
  },
  webpack(config) {
    // configuring @svgr/webpack to use svgs as components
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true,
          },
        },
      ],
    });

    return config;
  },
  env: {
    NEXT_PUBLIC_GOOGLE_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  },
};

module.exports = nextConfig;
