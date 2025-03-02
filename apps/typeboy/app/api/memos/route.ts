import { prisma } from "@/lib";
import { Memo, Prisma } from "@prisma/client";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page") || "0");
  const pageSize = parseInt(url.searchParams.get("pageSize") || "10");
  const random = url.searchParams.get("random") === "true";
  const skip = page * pageSize;

  if (random) {
    const data = await prisma.$queryRaw<Memo[]>`
      SELECT * FROM "Memo"
      ORDER BY RANDOM()
      LIMIT ${pageSize}
    `;

    return Response.json(data);
  }

  const data = await prisma.memo.findMany({
    skip: skip,
    take: pageSize,
    include: {
      user: true,
      likes: true,
    },
  });

  const totalMemos = await prisma.memo.count();
  const totalPages = Math.ceil(totalMemos / pageSize);

  return Response.json({
    data,
    pagination: {
      page,
      pageSize,
      totalPages,
      totalMemos,
    },
  });
}

export async function POST(request: Request) {
  const data = (await request.json()) as Prisma.MemoCreateInput;

  const newMemo = await prisma.memo.create({ data });

  return new Response(JSON.stringify(newMemo), { status: 201 });
}
