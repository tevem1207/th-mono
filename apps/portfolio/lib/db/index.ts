import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";

config({ path: ".env" });

const client = neon(process.env.DATABASE_URL!);
export const db = drizzle({ client });
