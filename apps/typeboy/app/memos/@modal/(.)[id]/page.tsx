"use client";

import MemoPage from "@/app/memos/[id]/page";
import { Modal } from "@/components";

export default function Page() {
  return (
    <Modal title="Memo">
      <MemoPage />
    </Modal>
  );
}
