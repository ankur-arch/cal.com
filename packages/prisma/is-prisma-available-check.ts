import { Prisma } from "@prisma/client";

import prisma from ".";
import { queryHealthCheck } from ".prisma/client/sql";

export async function isPrismaAvailableCheck() {
  try {
    await prisma.$queryRawTyped(queryHealthCheck);
    return true;
  } catch (e: unknown) {
    if (e instanceof Prisma.PrismaClientInitializationError) {
      // Database might not available at build time.
      return false;
    } else {
      throw e;
    }
  }
}
