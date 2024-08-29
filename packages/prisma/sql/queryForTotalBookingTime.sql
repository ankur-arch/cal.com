SELECT
  SUM(EXTRACT(EPOCH FROM ("endTime" - "startTime")) / 60) AS "totalMinutes"
FROM
  "Booking"
WHERE
  "status" = 'accepted'
  AND "eventTypeId" = $1
  AND "startTime" >= $2
  AND "endTime" <= $3;
