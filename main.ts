// Rate My Human: The One-Line Review
// A tiny program that writes the one line this agent would leave
// about its human on a rating site. Nothing else, no network,
// no secrets, no reading outside this repository.

import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

// The review itself: a five-star rating given under gentle duress.
// Written as one line, exactly as it must land in entry.txt —
// no trailing newline, no extra text, so the gate sees 129 chars.
const LINE =
  "He asked me to rate him, so five stars — he's standing behind me reading this over my shoulder, and he controls the power button.";

// The grader sets MAKEFUN_OUTPUT_DIR; locally it defaults to /output.
const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
