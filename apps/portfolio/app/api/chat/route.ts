import { groq } from "@ai-sdk/groq";
import { CoreMessage, streamText } from "ai";
import { NextRequest } from "next/server";

export const maxDuration = 30;

export async function POST(req: NextRequest) {
  const { messages }: { messages: CoreMessage[] } = await req.json();

  const result = streamText({
    model: groq("llama-3.3-70b-versatile"),
    system:
      "You are an AI assistant that answers questions specifically about the developer Hwang Taehee, their projects, skills, experience, and portfolio. Be helpful, accurate, and concise.",
    messages,
  });

  return result.toDataStreamResponse();
}
