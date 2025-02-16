import { getPrismaClient } from "../../../lib";

export async function GET() {
  const prisma = getPrismaClient();

  const sentences = await prisma.sentence.findMany({
    include: {
      user: true,
    },
  });
  return Response.json(sentences);
}
