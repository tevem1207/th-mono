/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui", "@repo/util"], // next.config.js
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://localhost:3000/api/:path*"
            : `https://${process.env.VERCEL_URL}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
