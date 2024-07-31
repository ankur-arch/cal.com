import prisma from "@calcom/prisma";

import { queryForTotalBookingTime } from ".prisma/client/sql";

export const getTotalBookingDuration = async ({
  eventId,
  startDate,
  endDate,
}: {
  eventId: number;
  startDate: Date;
  endDate: Date;
}) => {
  // Aggregates the total booking time for a given event in a given time period
  // FIXME: bookings that overlap on one side will never be counted
  const [totalBookingTime] = await prisma.$queryRawTyped(
    queryForTotalBookingTime(),
    eventId,
    startDate,
    endDate
  );

  return totalBookingTime.totalMinutes ?? 0;
};
