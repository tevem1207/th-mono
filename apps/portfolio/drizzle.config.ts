import { config } from "dotenv";

import type { Config } from "drizzle-kit";

config({ path: ".env" });

export default {
  schema: "./lib/db/schema",
  dialect: "postgresql",
  out: "./lib/db/migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config;
