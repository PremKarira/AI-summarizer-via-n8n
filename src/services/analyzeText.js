import { safeParse } from "../utils/safeParse.js";

export async function analyzeText(text) {
  if (!text) throw new Error("Input text is empty");

  const response = await fetch(process.env.N8N_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.N8N_AUTH_HEADER,
    },
    body: JSON.stringify({
      query: `
You are an assistant that converts unstructured text into structured JSON.

Return ONLY valid JSON:
{
  "summary": "one sentence",
  "keyPoints": ["point 1", "point 2", "point 3"],
  "sentiment": "positive | neutral | negative"
}

Rules:
- summary must be one sentence
- exactly 3 key points
- sentiment must be valid
- no extra text

Text to analyze:
${text}
      `,
    }),
  });

  if (!response.ok) {
    throw new Error("API request failed");
  }

  const data = await response.json();
  const rawText = data.final_result;

  return safeParse(rawText);
}