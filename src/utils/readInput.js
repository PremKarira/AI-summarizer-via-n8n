import fs from "fs";

export async function readInput() {
  const filePath = process.argv[2];

  if (filePath) {
    try {
      return fs.readFileSync(filePath, "utf-8").trim();
    } catch {
      console.error("❌ Failed to read file");
      process.exit(1);
    }
  }

  return new Promise((resolve) => {
    let data = "";
    process.stdin.on("data", (chunk) => (data += chunk));
    process.stdin.on("end", () => resolve(data.trim()));
  });
}