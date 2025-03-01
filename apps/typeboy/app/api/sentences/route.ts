import { prisma } from "@/lib";

export async function GET() {
  const sentences = await prisma.sentence.findMany({
    include: {
      user: true,
    },
  });
  return Response.json(sentences);
}
