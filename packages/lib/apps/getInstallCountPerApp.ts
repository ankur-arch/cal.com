import { prismaWithoutClientExtensions, SQL } from "@calcom/prisma";

const getInstallCountPerApp = async () => {
  const mostPopularApps = await prismaWithoutClientExtensions.$queryRawTyped(SQL.queryForMostPopularApps());

  return mostPopularApps.reduce((acc, { appId, installCount }) => {
    acc[appId] = installCount;
    return acc;
  }, {} as Record<string, number>);
};

export default getInstallCountPerApp;
