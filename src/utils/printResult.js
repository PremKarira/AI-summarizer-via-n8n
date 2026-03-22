export function printResult(result) {
  console.log("\nRESULT\n");

  console.log("Summary:");
  console.log(result.summary);

  console.log("\nKey Points:");
  result.keyPoints?.forEach((p, i) => {
    console.log(`${i + 1}. ${p}`);
  });

  console.log("\nSentiment:");
  console.log(result.sentiment?.toUpperCase());

  console.log("\nDone\n");
}