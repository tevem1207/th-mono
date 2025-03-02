import { PrismaClient } from "@prisma/client";
import prismaRandom from "prisma-extension-random";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma || new PrismaClient().$extends(prismaRandom());

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
