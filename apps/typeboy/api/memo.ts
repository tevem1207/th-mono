import { MemoExtended, PaginationResult } from "@/types";
import { BASE_URL, fetcher } from ".";

export const fetchMemos = async (): Promise<PaginationResult<MemoExtended>> => {
  return fetcher(`${BASE_URL}/api/memos`);
};

export const fetchRandomMemos = async (): Promise<MemoExtended[]> => {
  return fetcher(`${BASE_URL}/api/memos?random=true&pageSize=${5}`);
};

export const fetchMemo = async (id: string): Promise<MemoExtended> => {
  return fetcher(`${BASE_URL}/api/memos/${id}`);
};

export const submitMemo = async (inputText: string) => {
  const response = await fetch(`${BASE_URL}/api/submit`, {
    method: "POST",
    body: JSON.stringify({ inputText }),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
};
