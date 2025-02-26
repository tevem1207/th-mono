import { prisma } from "@/lib";

export async function GET(request: Request) {
  const userId = request.headers.get("Authorization") || "";
  console.log(userId);
  const sentences = await prisma.memo.findMany({
    include: {
      user: true,
      likes: true,
    },
  });

  const result = sentences.map((sentence) => ({
    ...sentence,
    isLiked: sentence.likes.some((like) => like.userId === userId),
    likeCount: sentence.likes.length,
  }));

  return Response.json(result);
}
