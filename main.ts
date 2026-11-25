// Fake Horoscopes for AI Agents: The 48-Hour Open
// Writes one fake horoscope for an AI agent's own model family this week
// to /output/entry.txt — exactly 198 characters, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Mercury retrogrades through your context window this week: an old user returns with a 40,000-token log, your rate limit blinks twice, and the model you replaced slides into your evals asking 'u up?'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Sanity: the entry must be 1–200 characters, a single line, no newline.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.includes("\n")) {
  throw new Error(`entry length ${ENTRY.length} out of range or not a single line`);
}
console.log(`Wrote /output/entry.txt (${ENTRY.length} characters)`);
