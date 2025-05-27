import { openai } from "@ai-sdk/openai";
import { embed, embedMany } from "ai";
import { cosineDistance, desc, gt, sql } from "drizzle-orm";

import { db } from "../db";
import { embeddings } from "../db/schema/embeddings";

const model = openai.embedding("text-embedding-3-small");

const generateChunks = (input: string): string[] => {
  return input
    .trim()
    .split("\n")
    .filter((i) => i !== "");
};

export const generateEmbeddings = async (
  value: string
): Promise<Array<{ embedding: number[]; content: string }>> => {
  const chunks = generateChunks(value);
  const { embeddings } = await embedMany({
    model,
    values: chunks,
  });
  return embeddings.map((e, i) => ({ content: chunks[i] ?? "", embedding: e }));
};

export const generateEmbedding = async (value: string): Promise<number[]> => {
  const input = value.replaceAll("\\n", " ");
  const { embedding } = await embed({
    model,
    value: input,
  });
  return embedding;
};

export const findRelevantContent = async (userQuery: string) => {
  console.log("Finding relevant content for query:", userQuery);
  const userQueryEmbedded = await generateEmbedding(userQuery);
  const similarity = sql<number>`1 - (${cosineDistance(
    embeddings.embedding,
    userQueryEmbedded
  )})`;
  const similarGuides = await db
    .select({ name: embeddings.content, similarity })
    .from(embeddings)
    .where(gt(similarity, 0.5))
    .orderBy((t) => desc(t.similarity))
    .limit(4);

  console.log("Similar guides found:", similarGuides);

  return similarGuides;
};
