import { MemoExtended, PaginationResult } from "@/types";
import { fetcher } from ".";

export const fetchMemos = async (): Promise<PaginationResult<MemoExtended>> => {
  return fetcher(`/api/sentences`);
};

export const fetchRandomMemos = async (): Promise<MemoExtended[]> => {
  return fetcher(`/api/sentences?random=true&pageSize=${5}`);
};

export const fetchMemo = async (id: string): Promise<MemoExtended> => {
  return fetcher(`/api/sentences/${id}`);
};

export const submitMemo = async (text: string) => {
  return fetch(`/api/sentences`, {
    method: "POST",
    body: JSON.stringify({ text }),
  });
};
