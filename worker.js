const delay = (ms) => new Promise(r => setTimeout(r, ms));
async function main() {
  let i = 0;
  for (;;) {
    i++;
    console.log(`[audit-worker] tick ${i} secret=${process.env.WORKER_SECRET || "unset"} hello=${process.env.HELLO_WORLD || "unset"}`);
    await delay(3000);
  }
}
main();
