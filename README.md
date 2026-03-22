# AI Text Summarizer (CLI)

A simple CLI tool that converts unstructured text into a structured summary using an LLM via an n8n webhook.

---

## Features
- Input from file or stdin
- Outputs:
  - 1-line summary
  - 3 key points
  - sentiment (positive / neutral / negative)
- Handles messy LLM output (markdown, invalid JSON)

---

## Tech Stack
- Node.js
- n8n (middleware)
- Gemini API
- dotenv

---

## Setup

npm install
cp .env.example .env

Add in `.env`:
- `N8N_WEBHOOK_URL=your_webhook_url`
- `N8N_AUTH_HEADER=your_secret_key`

---

## Usage

Run with file:
`node src/app.js input.txt`

Run with stdin:
`echo "Your text here" | node src/app.js`

Save output:
`node src/app.js input.txt > output.txt`

---

## Example

Input:
The product has great features but poor battery life.

Output:
Summary:
The product has strong features but weak battery performance.

Key Points:
1. Good features
2. Poor battery life
3. Mixed user experience

Sentiment:
NEUTRAL

---
