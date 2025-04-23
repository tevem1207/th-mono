"use client";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";

import { MemoDetail } from "@/components";
import { fetchMemo } from "@/utils/api";


export default function Page() {
  const params = useParams<{ id: string }>();
  const { data, isFetched } = useQuery({
    queryKey: ["memo", params.id],
    queryFn: async () => fetchMemo(params.id),
  });
  const session = useSession();

  if (!isFetched) return <div>Loading...</div>;

  if (!data) return <div>No data</div>;

  return <MemoDetail memo={data} userId={session?.data?.user?.id} />;
}
