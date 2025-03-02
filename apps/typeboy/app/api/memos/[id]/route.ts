import { prisma } from "@/lib";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const memo = await prisma.memo.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      user: true,
      likes: true,
      comments: true,
    },
  });
  return Response.json(memo);
}
