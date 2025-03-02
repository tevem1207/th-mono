export type PaginationResult<T> = {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    totalPages: number;
    totalMemos: number;
  };
};
