import prisma from "@calcom/prisma";

import { queryForMostPopularApps } from ".prisma/client/sql";

const getInstallCountPerApp = async () => {
  const mostPopularApps = await prisma.$queryRawTyped(queryForMostPopularApps());

  return mostPopularApps.reduce((acc, { appId, installCount }) => {
    acc[appId] = installCount;
    return acc;
  }, {} as Record<string, number>);
};

export default getInstallCountPerApp;
