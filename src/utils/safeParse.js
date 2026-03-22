export function safeParse(text) {
  try {
    // remove ```json ```
    const cleaned = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleaned);
  } catch {
    const match = text.match(/\{[\s\S]*\}/);
    if (match) {
      try {
        return JSON.parse(match[0]);
      } catch {}
    }

    return {
      summary: "Failed to parse response",
      keyPoints: [],
      sentiment: "neutral",
    };
  }
}