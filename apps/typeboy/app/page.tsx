"use client";

import { useQuery } from "@tanstack/react-query";
import { Editor } from "../components";
import { sentence } from "@prisma/client";

export default function Page() {
  const { data, isFetched } = useQuery<sentence>({
    queryKey: ["sentences", "1"],
    queryFn: async () => {
      const response = await fetch("/api/sentences/2");
      return response.json();
    },
  });
  return (
    <main className="flex items-center h-dvh justify-center px-6">
      {isFetched && <Editor text={data?.text ?? ""} />}
    </main>
  );
}
