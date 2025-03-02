import { PaginationResult } from "@/types";
import { Memo } from "@prisma/client";
import { API_URL } from ".";

export const fetchMemos = async (): Promise<PaginationResult<Memo>> => {
  return (await fetch(`${API_URL}/api/memos`)).json();
};

export const fetchRandomMemos = async (): Promise<Memo[]> => {
  return (await fetch(`${API_URL}/api/memos?random=true&pageSize=${5}`)).json();
};

export const fetchMemo = async (id: string): Promise<Memo> => {
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
