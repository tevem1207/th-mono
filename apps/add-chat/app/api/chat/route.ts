import { CoreMessage, streamText } from "ai";
import { NextRequest } from "next/server";

import { ollama } from "./ollama";

export async function POST(req: NextRequest) {
  const { messages }: { messages: CoreMessage[] } = await req.json();
  console.log(messages);
  const result = streamText({
    model: ollama("gemma3:1b"),
    system: "You are a helpful assistant.",
    messages,
  });

  return result.toDataStreamResponse();
}
