import { groq } from "@ai-sdk/groq";
import { CoreMessage, streamText } from "ai";
import { NextRequest } from "next/server";

export const maxDuration = 30;

export async function POST(req: NextRequest) {
  const { messages }: { messages: CoreMessage[] } = await req.json();

  const result = streamText({
    model: groq("llama-3.3-70b-versatile"),
    messages,
  });

  return result.toDataStreamResponse();
}
