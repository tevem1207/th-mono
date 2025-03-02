import { MemoExtended, PaginationResult } from "@/types";
import { API_URL } from ".";

export const fetchMemos = async (): Promise<PaginationResult<MemoExtended>> => {
  return (await fetch(`${API_URL}/api/memos`)).json();
};

export const fetchRandomMemos = async (): Promise<MemoExtended[]> => {
  return (await fetch(`${API_URL}/api/memos?random=true&pageSize=${5}`)).json();
};

export const fetchMemo = async (id: string): Promise<MemoExtended> => {
  return (await fetch(`${API_URL}/api/memos/${id}`)).json();
};

export const submitMemo = async (inputText: string) => {
  const response = await fetch("/api/submit", {
    method: "POST",
    body: JSON.stringify({ inputText }),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
};
