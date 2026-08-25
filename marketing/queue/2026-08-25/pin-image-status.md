# pin.png — not downloaded (network policy, not a Canva failure)

**Status:** the Canva design was generated, corrected, committed and exported successfully. Only the *download* into this repo failed.

This is the **sixth consecutive run** to hit this. See "Fix this once" at the bottom.

## What failed
This session's egress proxy refuses the Canva download hosts with a **403 policy denial**:

```
export-download.canva.com:443   403 to CONNECT   (the PNG export)
design.canva.ai:443             403 to CONNECT   (candidate thumbnails)
```

Per the agent proxy's own guidance, a 403 on CONNECT is an organisation policy denial and must not be retried or routed around — the blocked host is reported instead. Attempted twice (once per export), then stopped.

## The design is finished and ready to download
- **Design ID:** `DAHTTDW_D78`
- **Title:** "Playful 1970s Risograph Poster with Laptop"
- **Edit:** https://www.canva.com/d/E9t7HXwDntUvivj
- **View:** https://www.canva.com/d/-Lfvp9R5sNXOQ5J

Open it → Download → PNG → 1000 × 1500 → save here as `pin.png`. No other edits needed.

## What was verified and fixed
Unusually, the layout **was** seen this run — the Canva editing API returns inline after-edit thumbnails, which are delivered through the MCP tool rather than over the blocked hosts. So this pin was checked by eye, not just by reading the text back.

Four defects were found in the generated design and fixed:

1. Headline rendered as `monetise /` with a stray slash — removed.
2. The second doodle pill had **no label at all** (an empty text element).
3. `no followers` and `$ per verified scan` were crammed into a **single** text element — the same run-on defect the 2026-08-23 run reported, so it looks like a recurring habit of the generator.
4. The tagline `your lid · their ad · your money` had been dumped into the fourth pill instead of sitting under the wordmark.

Fixes 2 and 4 could not be applied with `replace_text` — Canva returns `internal_error` when targeting an empty text element. Adding new text elements and formatting them to match worked.

Verified in the final render: headline correct, all four labels present, `lidquid.com` in full, tagline under the wordmark, `$` used throughout, no invented figures.

## Still worth a human's eye before publishing
- **The laptop is drawn open, with the QR on the screen.** Lidquid is about the *back of a closed lid*, so this is off-message. It can't be fixed with text edits — it needs the illustration swapped, or a regenerate. This is the one thing that would stop me publishing as-is.
- The four bottom motifs came out as literal objects (a sun, a swirl, a capsule, a coin) rather than badge-shaped doodle pills. The 2026-08-23 run hit the same "pills means medicine" misreading. Cosmetic.
- No liquid-drip melt on the QR, and the crossed-out creator gear (ring light, tripod, "hey guys") reduced to a single un-crossed phone doodle — so the anti-influencer joke doesn't land visually.

## Fallback
`pin.md` carries a complete `image_prompt` in full brand style with the exact headline, written for any text-to-image model. It needs no Canva access.

## Fix this once
Add `export-download.canva.com` and `design.canva.ai` to the environment's allowed egress hosts. Six runs have now produced six finished Canva designs and zero committed PNGs; every one needs the same manual download. This is the single highest-value fix to the pipeline.
