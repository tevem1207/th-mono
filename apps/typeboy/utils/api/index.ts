import { connection } from "next/server";

export const fetcher = async (url: string) => {
  if (typeof window === "undefined") {
    await connection();
    const BASE_URL =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : `https://${process.env.VERCEL_URL}`;
    url = `${BASE_URL}${url}`;
  }

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("An error occurred while fetching the data.");
  }
  return res.json();
};

export * from "./memo";
