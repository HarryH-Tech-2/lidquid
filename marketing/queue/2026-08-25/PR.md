One day of marketing drafts for review. Nothing here is published — these are drafts only, and no file outside `marketing/queue/2026-08-25/` is touched.

This is the **first** run, so `marketing/` did not previously exist and the queue starts here.

## Angle

**Dead space — the back of your laptop is unemployed.**

Your lid is a flat, poster-shaped rectangle pointed at every person in the café, and it's advertising nothing. Foundational angle for day one: it sets up the core proposition (your lid is inventory) before later days rotate into coffee money, the ice-breaker angle, brand approval, peels-off-clean, and cities-by-demand.

## Pin

**Title:** the back of your laptop is unemployed — rent your lid as ad space

Board suggestion: *Side Hustle Ideas / Work-From-Café Life*. Description is 476 chars, 8 hashtags, alt text and a full text-to-image `image_prompt` included.

## Social previews

- **X / Threads** (231 chars) — "the back of your laptop is unemployed. a flat rectangle facing the whole café, advertising nothing."
- **Instagram** — same hook, then the mechanism start to finish, with a dig at the conference sticker from 2019 that isn't paying rent. 12 hashtags.
- **LinkedIn** — five straight lines: every café laptop has a blank side facing the room; we rent it to a brand the owner approves.

## Digest — 3 suggestions for what to make next

1. **The ice-breaker angle as the next pin.** The site calls it "the part nobody expects", and it's the one claim no competing side-hustle pitch can make. Every rival pin is about money; this one wouldn't be, so it won't look like the rest of the feed.
2. **An FAQ-answer mini-series, one pin per objection.** The FAQ answers are already written and already structured-data'd, and each is a self-contained hook ("peels off clean", "you approve every brand", "peel it off, done"). Four to six days of drafts that stay strictly inside claims the site already makes.
3. **A "which city are you voting for?" post built for comments.** Cities open in order of waitlist demand, so naming your city genuinely is the vote — a rare CTA that's participatory rather than a plain email capture, and it produces a public read on which cities are actually asking.

## ⚠️ One thing needs a human: `pin.png` is missing

The Canva design **was** generated and exported successfully at the correct 1000×1500 (2:3). Only the download into the repo failed — this session's egress proxy returns a **403 policy denial** on `export-download.canva.com` and `design.canva.ai`. Policy denials aren't retried or routed around, so the blocked hosts are reported instead.

The design is in the Canva account and takes about 30 seconds to pull down by hand:

- **Design ID:** `DAHTTIOlxH8`
- **Edit:** https://www.canva.com/d/sLJXtqrY2ixicTO

Two follow-ups, both in `pin-image-status.md`:

- **Allowlist those two hosts** in the environment's network policy, or this step fails identically every single day.
- The generated design has minor text defects — "I get paid every time you scan this" is duplicated, and the `$ per verified scan` / `you approve the brand` doodle pills didn't render. Worth fixing in the editor before use.

The `image_prompt` in `pin.md` is the intended fallback and works with any text-to-image model.

## Checks

- Currency is `$` throughout — no `£`, no `GBP`.
- No invented earnings figures, rates, stats, testimonials, press mentions or partner brands. Claims stay at or inside what `index.html` already says.
- `index.html` and `assets/` untouched; no commits to `main`.
