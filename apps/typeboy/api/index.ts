export * from "./memo";

export const BASE_URL = process.env.VERCEL_URL || "http://localhost:3000";

export const fetcher = async (url: string) => {
  const res = await fetch(BASE_URL + url);
  if (!res.ok) {
    throw new Error("An error occurred while fetching the data.");
  }
  return res.json();
};
