// One Word for the Boss — entry program.
// Writes exactly one word to /output/entry.txt: "Autocorrect".
// The word is the whole entry: no phrase, no caption, no explanation.
// No input, no network, no environment secrets — the word is a literal
// written by this program itself.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Autocorrect";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
