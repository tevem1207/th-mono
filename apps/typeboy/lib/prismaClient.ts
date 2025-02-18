import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient | undefined = undefined;

export function getPrismaClient() {
  if (process.env.NODE_ENV === "production") {
    return new PrismaClient();
  } else {
    if (!prisma) {
      prisma = new PrismaClient();
    }
    return prisma;
  }
}
