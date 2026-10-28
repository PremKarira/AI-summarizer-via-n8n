import dotenv from "dotenv";
import { readInput } from "./utils/readInput.js";
import { analyzeText } from "./services/analyzeText.js";
import { printResult } from "./utils/printResult.js";

dotenv.config({ quiet: true });

async function main() {
  const text = await readInput();

  // progress goes to stderr so `> output.txt` only captures the result
  console.error("⏳ Analyzing...");

  const result = await analyzeText(text);
  printResult(result);
}

main().catch((err) => {
  console.error(`❌ ${err.message}`);
  process.exit(1);
});
