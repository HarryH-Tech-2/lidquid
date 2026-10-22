# pin.png — not downloaded (blocked by egress policy)

**Status:** the Canva design was created, edited and exported successfully. Only the final *file download* into this repo failed.

## What happened
This session's outbound HTTPS goes through a policy-enforcing egress proxy. Both Canva asset hosts are denied by the organisation's network policy for this session:

- `design.canva.ai` → `403` at CONNECT (candidate thumbnails)
- `export-download.canva.com` → `403` at CONNECT (the PNG export itself)

The proxy README is explicit that 403/407 denials are organisation policy and must be reported rather than retried or routed around, so no workaround was attempted. `curl` returned `(56) CONNECT tunnel failed, response 403` on each attempt and wrote no file.

## The design exists — grab it manually
- **Design ID:** `DAHTHGwTnUM`
- **Title:** Lidquid pin — you own a billboard (2026-08-23)
- **Size:** 1000 × 1500 px (2:3) ✓
- **Edit:** https://www.canva.com/d/IdBDaoLGZmi-DDK
- **View:** https://www.canva.com/d/7h4fQ9Pamn9RvHE

Open it in Canva and download as PNG, then drop the file in at `marketing/queue/2026-08-23/pin.png`. (The signed export URL the API returned expires roughly 11 hours after this run, so it isn't worth recording here.)

## What the design currently looks like
Cream paper ground with grain; big black display headline "you own a billboard" (the display face renders it as caps); handwritten subline "you've just been sitting behind it."; a teal line reading "peels off clean · $ per verified scan"; a hand-drawn laptop lid with a QR panel and coral sticker text "I get paid every time you scan this"; and "lidquid.com" sitting on a sun-yellow doodle pill with an ink border at the bottom.

Two fixes were applied after generation, both worth knowing about:
1. The generator rendered my two separate doodle pills as one literal string, `"peels off clean — and — $ per verified scan."` — replaced with a clean `·` separator.
2. It interpreted "doodle pills" as **literal red and blue medicine capsules**, which read as pharmaceuticals and were badly off-message. Both were deleted.

## Known gaps vs. the brand spec (for the reviewer)
The generated art didn't pick up everything in the brief. Still missing:
- QR finder squares are plain black, not yellow / coral / teal
- no liquid-drip melt on the bottom edge of the QR
- no washi tape, no dot grid, no hard offset shadows
- overall palette is sparser than the zine spec — accent colour is only in the teal line, coral sticker text and yellow pill

If the reviewer wants a closer match, the full `image_prompt` in `pin.md` is the fallback and is written for a text-to-image tool rather than Canva's template generator, which is the likelier route to the riso look.
