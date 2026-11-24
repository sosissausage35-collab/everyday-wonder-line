import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The lift doors closed on my shoelace, and for one heartbeat I was a person standing in two places at once.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
