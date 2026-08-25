One day of marketing drafts for review. Nothing here is published — drafts only, and no file outside `marketing/queue/2026-08-25/` is touched.

## ⚠️ First, something that needs a decision

**Five previous days of drafts (#1–#5) are still open and unmerged**, so `marketing/` has never existed on `main`. Every daily run clones `main`, finds no `marketing/queue/`, correctly concludes "this is the first run", and reaches for the most obvious angle — the same one every time.

The result: **four of the five previous days are the same dead-space/ad-space idea reworded.**

| day | PR | angle | headline |
|---|---|---|---|
| 08-20 | #1 | dead space | "Your laptop lid is dead space — rent it out" |
| 08-21 | #2 | the perspective flip | "you see one side of your laptop. strangers see the other" |
| 08-22 | #3 | social / ice-breaker | "my laptop lid makes small talk — and money" |
| 08-23 | #4 | ad space you already own | "you own a billboard. you've just been sitting behind it." |
| 08-24 | #5 | dead space | "the back of your laptop is doing nothing. rent it out." |

Today's draft initially fell into the same trap — "the back of your laptop is unemployed", which is yesterday's headline with a different adjective. It was caught by listing the repo's open PRs and **rewritten from scratch** onto a genuinely unused angle.

Until at least one of these merges, the rotation instruction cannot work. The six branches all fork from `acfea02` and touch different folders, so they won't conflict with each other.

## Angle

**Anti-influencer — monetise your laptop, not your personality.**

Every other way to earn from a laptop asks you to become a brand first: post consistently, build an audience, film yourself. Lidquid asks nothing of you. This is the site's own differentiator ("no posting, no follower count, no promoting") and it has never been used. It also sidesteps earnings entirely, which is convenient while there are no pilot numbers to publish.

## Pin

**Title:** monetise your laptop, not your personality — rent your lid as ad space

Board suggestion: *Side Hustle Ideas That Don't Need An Audience*. Description 494/500 chars, 8 hashtags, alt text, and a full text-to-image `image_prompt` included.

## Social previews

- **X / Threads** (223 chars) — "monetise your laptop. not your personality. no posting. no followers. no promoting. no 'hey guys.'"
- **Instagram** — opens on the same line, then the ring-light-at-7am contrast, then the whole job start to finish. Closes on "your personality stays yours." 12 hashtags.
- **LinkedIn** — five lines. "Most ways to earn money from a laptop require you to become a brand first." Lands on: the attention is the product, not you.

## Digest — 3 suggestions for what to make next

1. **Merge the backlog, or teach the agent to read open PRs.** The highest-value fix available, and not a content idea. PR #2 already proposed an append-only `marketing/angles.md` ledger; nothing acted on it because PR #2 never merged either.
2. **The student angle, this week.** Term starts soon and students are moving into new cities right now — the only unused angle with an expiry date. Flagged on the 22nd; the window has been narrowing since.
3. **A "peels off clean" three-panel peel strip.** "Will it wreck my laptop?" is the first question in the site's own FAQ and is answered in words only. Three previous runs have suggested a version of this; none has been made.

## ⚠️ `pin.png` is missing — sixth run running

The Canva design was generated, corrected, committed and exported successfully. Only the download failed: this session's egress proxy returns a **403 policy denial** on `export-download.canva.com` and `design.canva.ai`. Policy denials aren't retried or routed around.

**~30 seconds of human work:** open https://www.canva.com/d/E9t7HXwDntUvivj (design `DAHTTDW_D78`), download PNG at 1000×1500, save as `marketing/queue/2026-08-25/pin.png`.

**Permanent fix:** allowlist those two hosts. Six runs, six finished designs, zero committed PNGs.

Unlike previous runs, the layout **was** seen this time — Canva's editing API returns inline thumbnails through the MCP tool rather than over the blocked hosts. Four defects were found and fixed: a stray `/` in the headline, an entirely unlabelled doodle pill, `no followers` and `$ per verified scan` crammed into one text element, and the tagline dumped into a pill instead of under the wordmark.

**One thing I'd fix before publishing:** the laptop is drawn *open with the QR on the screen*, rather than a closed lid seen from behind — off-message for a product about the back of a lid. It needs the illustration swapped or a regenerate; text edits can't reach it. Details in `pin-image-status.md`.

## Checks

- Currency is `$` throughout — no `£`, no `GBP`.
- No invented earnings figures, rates, stats, testimonials, press mentions or partner brands. Claims stay at or inside what `index.html` already says.
- `index.html` and `assets/` untouched; no commits to `main`.
