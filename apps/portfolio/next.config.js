/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    if (process.env.NODE_ENV === "production") {
      return [
        {
          source: "/",
          destination: "https://th-front-portfolio.web.app/",
          permanent: true,
        },
      ];
    }
    return [];
  },
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
};

export default nextConfig;
