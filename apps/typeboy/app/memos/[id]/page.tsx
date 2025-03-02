import { fetchMemo } from "@/api";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const memo = await fetchMemo((await params).id);
  return <div>{memo.text}</div>;
}
