import { MemoExtended } from "@/types";
import { Table, TableBody, TableCell, TableRow } from "@repo/ui";
import { Heart, MessageCircle } from "@repo/ui/icons";
import { cn } from "@repo/ui/lib/utils";
import Link from "next/link";
import { HTMLAttributes, ReactNode } from "react";

export const MemoList = ({ children }: { children: ReactNode }) => {
  return (
    <Table>
      <TableBody>{children}</TableBody>
    </Table>
  );
};

export const MemoItem = ({
  memo,
  userId,
  ...props
}: {
  memo: MemoExtended;
  userId?: string;
} & HTMLAttributes<HTMLTableRowElement>) => {
  return (
    <TableRow {...props}>
      <TableCell>
        <Link href={`/memos/${memo.id}`}>{memo.text}</Link>
      </TableCell>
      <TableCell>
        <MemoActions memo={memo} userId={userId} />
      </TableCell>
    </TableRow>
  );
};

export const MemoDetail = ({
  memo,
  userId,
}: {
  memo: MemoExtended;
  userId?: string;
}) => {
  return (
    <div>
      <h1>{memo.text}</h1>
      <p>{new Date(memo?.createdAt).toLocaleString()}</p>
      <MemoActions memo={memo} userId={userId} />
    </div>
  );
};

export const MemoActions = ({
  memo,
  userId,
}: {
  memo: MemoExtended;
  userId?: string;
}) => {
  return (
    <div className="flex items-center gap-4">
      <span className="flex items-center gap-2">
        <MessageCircle />
        {memo.comments?.length ?? 0}
      </span>
      <span className="flex items-center gap-2">
        <Heart
          className={cn(
            memo.likes.some((like) => like.userId === userId) &&
              "text-red-500 fill-current"
          )}
        />
        {memo.likes?.length ?? 0}
      </span>
    </div>
  );
};
