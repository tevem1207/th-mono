import { Table, TableBody, TableCell, TableRow } from "@repo/ui";
import { ReactNode } from "react";

export const MemoList = ({ children }: { children: ReactNode }) => {
  return (
    <Table>
      <TableBody>{children}</TableBody>
    </Table>
  );
};

export const MemoItem = ({
  children,
  isLiked,
}: {
  children: ReactNode;
  isLiked: boolean;
}) => {
  return (
    <TableRow>
      <TableCell>{children}</TableCell>
      <TableCell>{isLiked}</TableCell>
    </TableRow>
  );
};
