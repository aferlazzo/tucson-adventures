# Tucson Adventures

Interactive Tucson stories deployed as a Cloudflare Worker with static assets.

## Adventure 1

**The Pothole That Built a Subway** is available at:

`/adventures/the-pothole-subway/?fresh=1`

The interface follows the established adventure format: one situation at a time, clickable choices, immediate consequences, and compact Share, Restart, Back Up, and End controls. There is no progress meter.

## Local checks and deployment

```bash
npm install
npm run check
npx wrangler deploy --dry-run
npx wrangler deploy
```
