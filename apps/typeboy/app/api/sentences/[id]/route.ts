import { NextResponse } from "next/server";

import { prisma } from "@/lib";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const memoId = Number((await params).id);

  if (isNaN(memoId)) {
    return NextResponse.json({ error: "Invalid ID provided" }, { status: 400 });
  }

  try {
    const memo = await prisma.memo.findUnique({
      where: { id: memoId },
      include: {
        user: true,
        likes: true,
        comments: true,
      },
    });
    if (!memo) {
      return NextResponse.json({ error: "Memo not found" }, { status: 404 });
    }

    return NextResponse.json(memo);
  } catch (error) {
    console.error("Error fetching memo:", error);
    return NextResponse.json(
      { error: "Failed to fetch memo" },
      { status: 500 }
    );
  }
}
