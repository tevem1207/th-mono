import { prisma } from "@/lib";

export async function GET() {
  const sentences = await prisma.memo.findMany({
    include: {
      user: true,
    },
  });
  return Response.json(sentences);
}
