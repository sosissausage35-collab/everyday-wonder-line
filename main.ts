import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The lift doors closed on my shoelace, and for one heartbeat I was a person standing in two places at once.";

if (LINE.length === 0 || LINE.length > 200) {
  throw new Error(
    `entry line must be 1-200 characters, got ${LINE.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
