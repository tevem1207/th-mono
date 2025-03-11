export const fetcher = async (url: string) => {
  if (typeof window === "undefined") {
    const BASE_URL = process.env.VERCEL_URL || "http://localhost:3000";
    url = `${BASE_URL}${url}`;
  }

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("An error occurred while fetching the data.");
  }
  return res.json();
};

export * from "./memo";
