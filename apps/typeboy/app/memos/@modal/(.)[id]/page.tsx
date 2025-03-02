import { fetchMemo } from "@/api";
import { Modal } from "@/components";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const memo = await fetchMemo((await params).id);
  return (
    <Modal title={memo.text}>
      <div>{memo.text}</div>
    </Modal>
  );
}
