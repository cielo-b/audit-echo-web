console.log(`[audit-cron] ran at ${new Date().toISOString()} secret=${process.env.CRON_SECRET || "unset"} schedule=${process.env.CRON_SCHEDULE_LABEL || "unset"}`);
