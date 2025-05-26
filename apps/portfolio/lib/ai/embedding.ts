import { pipeline } from "@xenova/transformers";

const embedderPromise = pipeline(
  "feature-extraction",
  "Xenova/all-MiniLM-L6-v2"
);

const generateChunks = (input: string): string[] => {
  return input
    .trim()
    .split(".")
    .filter((i) => i !== "");
};

export const generateEmbeddings = async (
  value: string
): Promise<Array<{ embedding: number[]; content: string }>> => {
  const embedder = await embedderPromise;
  const chunks = generateChunks(value);

  const embeddings: number[][] = [];

  for (const chunk of chunks) {
    const result = await embedder(chunk, { pooling: "mean", normalize: true });
    const embeddingArray = result.tolist(); // Tensor → JS array
    embeddings.push(embeddingArray);
  }

  return embeddings.map((e, i) => ({
    content: chunks[i] ?? "",
    embedding: e,
  }));
};
