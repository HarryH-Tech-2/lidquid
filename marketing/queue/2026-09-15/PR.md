## Marketing drafts — 2026-09-15

Day 1 of the queue. Drafts only — nothing has been posted, published or scheduled anywhere.

### Angle

**The ice-breaker / café-social angle** — the sticker is a tiny billboard that also happens to start conversations. Hook: the stranger at the next table asking *"wait, what is that?"*

This mirrors the "the part nobody expects" section already on `index.html`. No claims exceed the live page; no rates, earnings figures or stats are invented anywhere — money is always phrased as "$ per verified scan".

### Pin title

> wait, what is that? — the laptop sticker that pays you per scan

### Social previews

| channel | first line | length |
|---|---|---|
| X / Threads | *someone leaned over and asked "wait, what is that?"* | 227 / 240 |
| Instagram | *the part nobody warns you about: your laptop lid starts conversations.* | 12 hashtags |
| LinkedIn | *The best ad space in a café is the one everybody is already staring at.* | 5 lines |

### Digest — 3 suggestions for next

1. **A "cities open by demand — vote with your city" pin.** It is the only angle where the CTA *is* the payoff rather than a step after it, and a tally/leaderboard visual won't cannibalise today's laptop-and-QR composition in a Pinterest feed.
2. **Reuse the three existing photo assets** (`wild-coffee-money`, `wild-ad-space`, `wild-cafe-scan`) instead of only generating poster art. Real photos travel better on Instagram, they map onto three future angles, and it costs no image generation.
3. **A short FAQ-answering series, starting with "will it wreck my laptop?"** The FAQ is the most objection-dense copy on the site, the answers are already written and approved, and it needs no invented numbers.

### ⚠️ `pin.png` is missing — needs a human

The Canva design was created at the correct size (1000 × 1500, design `DAHVRBHrYPQ`) and exported successfully, but **the file could not be downloaded into the repo**: this session's network policy blocks `export-download.canva.com` and `design.canva.ai` at the proxy (403 on CONNECT). Two attempts, PNG and JPG, both denied.

Because the thumbnail host is blocked too, **nobody has seen this design** — including the agent. AI-rendered text is often garbled, so the headline needs checking before the pin is used.

- Design: https://www.canva.com/d/o5NvUpZ4C__YhmP
- Checklist + manual steps: `marketing/queue/2026-09-15/pin-image-status.md`
- Fallback: `pin.md` carries a complete `image_prompt` for any text-to-image tool

To fix this for future runs, allow those two hosts in the environment's network policy.

### Repo changes since last run

None — `git log --since='26 hours ago'` is empty. This is the first run, so there is no previous queue day to diff against.

### Files

```
marketing/queue/2026-09-15/
├── pin.md
├── social.md
├── digest.md
├── pin-image-status.md
└── PR.md
```

Nothing outside `marketing/queue/2026-09-15/` was touched. `index.html` and `assets/` are untouched.
