import { MemoItem, MemoList } from "@/components";
import { Memo } from "@prisma/client";

export default async function Page() {
  return (
    <MemoList>
      {[].map((memo, index) => (
        <MemoItem key={index} memo={memo as Memo} />
      ))}
    </MemoList>
  );
}
