SELECT COUNT(DISTINCT "userId")::integer
FROM "Membership"
WHERE "teamId" IN ($1);
