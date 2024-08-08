import { Prisma } from "@prisma/client";

import prisma, { SQL } from "@calcom/prisma";

export async function isPrismaAvailableCheck() {
  try {
    await prisma.$queryRawTyped(SQL.queryHealthCheck());
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
