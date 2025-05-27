/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },

      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async redirects() {
    if (process.env.NODE_ENV !== "development") {
      return [
        {
          source: "/resource",
          destination: "/",
          permanent: false,
        },
        {
          source: "/api/resource",
          destination: "/",
          permanent: false,
        },
      ];
    }
    return [];
  },
};

export default nextConfig;
