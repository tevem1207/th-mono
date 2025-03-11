import { MemoExtended, PaginationResult } from "@/types";
import { fetcher } from ".";

export const fetchMemos = async (): Promise<PaginationResult<MemoExtended>> => {
  return fetcher(`/api/memos`);
};

export const fetchRandomMemos = async (): Promise<MemoExtended[]> => {
  return fetcher(`/api/memos?random=true&pageSize=${5}`);
};

export const fetchMemo = async (id: string): Promise<MemoExtended> => {
  return fetcher(`/api/memos/${id}`);
};
