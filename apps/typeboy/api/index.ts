export * from "./memo";

export const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
export const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("An error occurred while fetching the data.");
  }
  return res.json();
};
