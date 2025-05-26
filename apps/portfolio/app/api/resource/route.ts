import { createResource } from "@/lib/actions/resources";

export async function GET() {
  return createResource({ content: "Sample resource content for embedding." });
}
