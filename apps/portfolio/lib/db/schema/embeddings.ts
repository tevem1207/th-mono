import {
  index,
  pgTable,
  text,
  integer,
  vector,
  serial,
} from "drizzle-orm/pg-core";

import { resources } from "./resources";

export const embeddings = pgTable(
  "embeddings",
  {
    id: serial("id").primaryKey(),
    resourceId: integer().references(() => resources.id, {
      onDelete: "cascade",
    }),
    content: text("content").notNull(),
    embedding: vector("embedding", { dimensions: 1536 }).notNull(),
  },
  (table) => [
    index("embeddingIndex").using(
      "hnsw",
      table.embedding.op("vector_cosine_ops")
    ),
  ]
);
