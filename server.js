const express = require("express");
const app = express();
const PORT = Number(process.env.PORT || 8080);
app.get(["/", "/health"], (req, res) =>
  res.json({ ok: true, service: process.env.SERVICE_NAME || "audit-echo-web", listenPort: PORT, instance: process.env.POD_INSTANCE_ID || null })
);
app.get("/env", (req, res) => {
  const wanted = (process.env.ENV_KEYS_TO_SHOW || "").split(",").map(s => s.trim()).filter(Boolean);
  const shown = {};
  for (const k of wanted) shown[k] = process.env[k] ?? null;
  shown.SERVICE_NAME = process.env.SERVICE_NAME; shown.PORT = PORT;
  res.json(shown);
});
app.listen(PORT, () => console.log(`audit-echo-web listening on ${PORT}`));
