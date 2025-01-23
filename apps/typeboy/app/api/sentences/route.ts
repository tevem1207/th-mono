import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const sentences = await prisma.sentence.findMany({
    include: {
      user: true,
    },
  });
  return Response.json(sentences);
}
