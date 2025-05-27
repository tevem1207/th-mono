import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import { env } from "@/lib/env.mjs";

const sql = neon(env.PORTFOLIO_DATABASE_URL ?? "");
export const db = drizzle({ client: sql });
