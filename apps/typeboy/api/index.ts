import { loadEnvConfig } from "@next/env";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

export const fetcher = async (url: string) => {
  const BASE_URL = process.env.VERCEL_URL || "http://localhost:3000";
  if (typeof window === "undefined") {
    url = `${BASE_URL}${url}`;
  }

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("An error occurred while fetching the data.");
  }
  return res.json();
};

export * from "./memo";
