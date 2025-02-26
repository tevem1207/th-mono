import { Memo } from "@prisma/client";
import { Table, TableBody, TableCell, TableRow } from "@repo/ui";
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
  ...props
}: {
  memo: Memo;
} & HTMLAttributes<HTMLTableRowElement>) => {
  return (
    <TableRow {...props}>
      <TableCell>
        <Link href={`/memos/${memo.id}`}>{memo.text}</Link>
      </TableCell>
      <TableCell>{"isLiked"}</TableCell>
    </TableRow>
  );
};

export const MemoDetail = () => {};
