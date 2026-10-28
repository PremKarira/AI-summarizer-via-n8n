# Notes

## Known issues
- [x] `src/app.js` was missing from the repo, so `npm start` and the README commands failed.
- [ ] `output.txt` was saved as UTF-16 (PowerShell `>` redirect) and includes the dotenv banner, so it shows up garbled on GitHub.
- [ ] No `.gitignore` — `.env` and `node_modules` could be committed by accident.

## Ideas
- Include the HTTP status in the error when the n8n webhook request fails.
- Fail early with a clear message when `N8N_WEBHOOK_URL` is not set.
