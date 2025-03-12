import { fetchMemo } from "@/utils/api";
import { auth } from "@/auth";
import { MemoDetail } from "@/components";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const memo = await fetchMemo((await params).id);
  const session = await auth();

  return <MemoDetail memo={memo} userId={session?.user?.id} />;
}
