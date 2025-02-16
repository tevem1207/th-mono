import { getPrismaClient } from "../../../../lib";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const prisma = getPrismaClient();

  const sentence = await prisma.sentence.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  return Response.json(sentence);
}
