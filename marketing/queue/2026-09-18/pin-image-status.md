# pin.png — not downloaded (design is finished in Canva)

**Status: the pin was designed, corrected and exported successfully. Only the file transfer into this repo failed.** Nothing about the design needs redoing — a human can download it in two clicks.

## The design

- **Design ID `DAHVjF86qpk`** — 1 page, **1000 × 1500 px** (correct 2:3 Pinterest ratio), cream `#f6f1e7` ground.
- Title: *Pinterest Pin - YOU WERE GOING TO SIT THERE ANYWAY.*
- View: https://www.canva.com/d/3tde37JcnJfmO9S · Edit: https://www.canva.com/d/Jui2jgv2UF6L6un
- PNG export job `92ee8ca6-7c84-4ba3-9e2b-f5bbe542fc92` completed and returned a signed download URL.

Copy on the design was verified against `pin.md` and is correct and correctly spelled:
"YOU WERE GOING TO SIT THERE ANYWAY." / "get paid to sit in cafés" / "$ per verified scan, you approve the brand, peels off clean" / "LIDQUID.COM".

## What failed

The download, for the 30th run running. This session's egress proxy denies the Canva media hosts with a 403 on CONNECT (organisation network policy), so `curl` cannot fetch the exported PNG:

| host | purpose | result |
|---|---|---|
| `export-download.canva.com` | the actual PNG export | `connect_rejected` — 403 on CONNECT (2 attempts) |
| `design.canva.ai` | candidate thumbnails | `connect_rejected` — 403 on CONNECT |

The proxy's own status endpoint reports both as `connect_rejected` / "gateway answered 403 to CONNECT (policy denial)". A 403 on CONNECT is an egress-policy denial and must not be retried or routed around, so it was not. Canva's export URLs are signed and short-lived (~1–3 hours), so there is no useful link to commit here; the design links above are the durable ones.

**To fix this permanently:** allow `export-download.canva.com` (and `design.canva.ai`) in the environment's network policy. With those two hosts reachable this step is fully automatic and future runs will commit `pin.png` themselves. This is the single highest-value fix available to this routine — it has now cost 30 consecutive pins.

## How to get the file today

1. Open the design (link above) → **Share → Download → PNG** → save as `marketing/queue/2026-09-18/pin.png`; or
2. Re-run the export from a session whose network policy allows `export-download.canva.com`; or
3. Ignore Canva entirely and generate the image from the `image_prompt` in `pin.md`, which is a complete standalone text-to-image prompt and is the intended fallback.

## Fixed during this run

The generator's output needed two corrections, both applied and committed:

- **A garbled fake watermark.** The AI illustration had `@GHAN sHFc2013` baked into it near the bottom of the frame — the same garbled-lettering failure previous runs flagged. It is raster, not text, so it was covered with a colour-matched patch. The patch is very slightly lighter than the surrounding panel if you look for it; it no longer reads as broken text.
- **The wordmark was missing.** The generator omitted `LIDQUID.COM` entirely. It was added at the foot of the pin in bold ink black. Also corrected "cafes" → "cafés".

## Still off-brief — worth a human eye before this ships

The result is a clean, competent pin, but it is not fully the riso/zine look:

- The headline is set in a **serif**, not the chunky display face.
- The palette came out **cream / black / yellow only** — no coral `#ff5d47` or deep teal `#0f766e`.
- **"ANYWAY" is repeated inside the illustration** as graffiti, duplicating the headline's last word. Arguably a nice echo, arguably a mistake — a human should decide.
- The three proof points render as **one comma-separated sentence**, not as three separate doodle pills.
- There is **no washi tape, no hand-drawn outer border and no liquid-drip QR treatment**; the QR is a plain square. The `image_prompt` in `pin.md` describes the intended version properly.

The QR in the image is decorative only and is not scannable.
