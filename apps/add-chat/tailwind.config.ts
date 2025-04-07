import baseConfig from "@repo/ui/tailwindConfig";

const config = {
  ...baseConfig,
  content: [...baseConfig.content, "./widget/**/*.{ts,tsx}"],
};

export default config;
