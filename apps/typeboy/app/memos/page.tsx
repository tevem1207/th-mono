"use client";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

import { MemoItem, MemoList } from "@/components";
import { fetchMemos } from "@/utils/api";

export default function Page() {
  const { data, isFetched } = useQuery({
    queryKey: ["memos"],
    queryFn: fetchMemos,
  });
  const session = useSession();

  if (!isFetched) return <div>Loading...</div>;

  if (!data) return <div>No data</div>;

  const { data: memos } = data;
  return (
    <main>
      <MemoList>
        {memos?.map((memo, index) => (
          <MemoItem key={index} memo={memo} userId={session.data?.user?.id} />
        ))}
      </MemoList>
    </main>
  );
}
