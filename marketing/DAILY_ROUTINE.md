# Lidquid daily marketing routine

Instructions for the scheduled agent (Claude Code routine) that runs every morning. It can also be run by hand:
`claude -p "Follow marketing/DAILY_ROUTINE.md for today"`.

**Hard rules**
- Draft only. Never post, publish, email or DM anything, and never push to `main` (main = production on Vercel).
- Never invent earnings, pilot results, scan counts, testimonials, partner brands or press. Lidquid is in pilot: 50 laptops, one city at a time, cities open by waitlist demand. Earnings examples must be labelled illustrative (homepage formula: days × scans/day × rate × 4.33; e.g. 5 × 3 × $0.50 ≈ $32/month).
- Use `$`. Voice: lowercase-friendly, dry, warm, zine-like. See `marketing/queue/2026-08-20/` for tone.
- Every link carries a channel ref: `?ref=<channel>-YYYYMMDD` (pin, x, ig, li, th, rd).

## Every day

1. Work on branch `marketing-queue` (create it from `main` if missing; rebase it onto `main` first).
2. Pick **today's guide** for the link target: list `content/guides/*.js` sorted by `order`, take index `dayOfYear % count`. Link to `https://www.lidquid.com/guides/<slug>?ref=...`. Every third day, link to the homepage instead.
3. Pick **one angle** not used in the last 14 days (check `marketing/queue/*/digest.md`). Pull the angle from the guide's content, so posts answer a real question people search.
4. Pick an image from `marketing/README.md` "Ready To Post" (rotate; don't repeat within 7 days). Do not generate new images unless an image tool is available. If you do, check the lettering carefully.
5. Write `marketing/queue/YYYY-MM-DD/`:
   - `pin.md`: title (≤100 chars, keyword-first, e.g. "get paid to put a sticker on your laptop"), description (≤500), alt text, board, link, image file.
   - `social.md`: X/Threads (≤240), Instagram (caption + 8–12 hashtags), LinkedIn (short, professional), and **one** Reddit idea: subreddit, post title, body written as a genuine answer, and a note to check that sub's self-promo rules first.
   - `reply-bank.md`: 3 short, genuinely helpful answers to questions people ask on Reddit/Quora about laptop stickers, side hustles in cafés, or QR marketing. Each ends with a soft link to the matching guide.
   - `digest.md`: angle used, guide linked, unused angles, and anything blocked.
6. Commit with message `marketing: drafts for YYYY-MM-DD` and push `marketing-queue`.

## Mondays: one new guide (SEO/AEO)

1. Take the top unchecked item in `marketing/content-backlog.md`.
2. Write `content/guides/<slug>.js` in the same format and voice as `content/guides/get-paid-to-put-a-sticker-on-your-laptop.js`: question-style `<h2 id>` headings, each answered in the first 1–2 sentences; a 40–80 word `answer`; 900–1500 words; 5–7 FAQs; 2–3 `related` slugs. Add the new slug to one or two existing guides' `related` lists or body links.
3. Run `node build-guides.js` and fix any error or warning it prints.
4. Tick the item in the backlog. On a new branch `guide/<slug>`, commit and **open a pull request to main** titled `New guide: <h1>`. Do not merge it. The site owner reviews and merges, and merging deploys it.

## On the 1st of each month: refresh

Pick the 2 oldest guides by `updated`/`published`. Tighten their short answers, refresh anything time-sensitive, and set `updated` to today. Ship it as a PR like the Monday guide.
