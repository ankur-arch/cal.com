SELECT COUNT(DISTINCT "userId")::integer
FROM "Membership"
WHERE "teamId" = ANY($1::int[])
