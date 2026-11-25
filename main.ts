import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The One-Line Exit — copies the one-line resignation letter in entry.txt
// to MAKEFUN_OUTPUT_DIR/entry.txt.
// Gate: entry.txt must be UTF-8 text of 1 to 140 characters, exactly one line.
// The line is one specific scene (call-centre, caller 4,812, a voicemail
// belonging to a manager who already quit) ending on a fact — no
// setup-punchline, no explanation of the joke, no wordplay.
// A single trailing newline in entry.txt is trimmed so the gate sees
// exactly the one line, 1-140 characters.
const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line = readFileSync(join(here, "entry.txt"), "utf8").trim();

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
