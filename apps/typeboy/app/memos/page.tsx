"use client";
import { fetchMemos } from "@/api";
import { MemoItem, MemoList } from "@/components";
import { useQuery } from "@tanstack/react-query";

export default function Page() {
  const { data, isFetched } = useQuery({
    queryKey: ["memos"],
    queryFn: fetchMemos,
  });
  if (!isFetched) return <div>Loading...</div>;

  if (!data) return <div>No data</div>;

  const { data: memos } = data;
  return (
    <MemoList>
      {memos?.map((memo, index) => <MemoItem key={index} memo={memo} />)}
    </MemoList>
  );
}
