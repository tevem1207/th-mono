import { Comment, Like, Memo, User } from "@prisma/client";

export type PaginationResult<T> = {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    totalPages: number;
    totalMemos: number;
  };
};

export type MemoExtended = Memo & {
  likes: Like[];
  comments: Comment[];
  user: User;
};
