"use client";
import { fetchRandomMemos } from "@/api";
import { Editor } from "@/components";
import { useQuery } from "@tanstack/react-query";

export const MemoEditor = () => {
  const { data } = useQuery({
    queryKey: ["memos", "1"],
    queryFn: fetchRandomMemos,
  });

  return (
    <section className="flex items-center h-dvh justify-center px-6">
      <Editor data={data?.[0]} />
    </section>
  );
};
