# pin.png — not downloaded (network policy)

**Status:** the Canva design was created successfully. Only the *file download* failed. `pin.png` is NOT in this folder.

## What worked
- `generate-design` returned 4 Pinterest pin candidates in the brand style.
- Candidate 1 was converted to a real Canva design: **`DAHU_EsR5X0`**, page size **1000 × 1500 px** (correct 2:3).
- Reading the design caught a stray text element the generator had invented — a rotated `1978-2025` label down the right-hand side. It was **deleted** (fabricated detail, against brand rules).
- Headline was set to match `pin.md` exactly: `wait — what IS that?`
- Edits committed. PNG export job ran and **succeeded** — Canva returned a valid download URL.

## What failed
Downloading the exported PNG. This session's egress proxy denies both Canva asset hosts:

| host | attempt | result |
|---|---|---|
| `design.canva.ai` | candidate thumbnails | `403 connect_rejected` (organization network policy) |
| `export-download.canva.com` | final PNG export | `403 connect_rejected` (organization network policy) |

This is an environment restriction, not a Canva or credentials problem. Retrying won't help — it needs either the two hosts allow-listed in the environment's network policy, or a human to open the design and export it manually.

## How a human can finish this in ~30 seconds
1. Open the design in Canva (ID `DAHU_EsR5X0`, titled *"Lidquid pin — 2026-09-12 — wait, what IS that?"*).
2. Share → Download → PNG, 1000 × 1500.
3. Save it into this folder as `pin.png`.

## What the rendered pin looks like
Verified visually from the editor thumbnail before committing:

- Cream paper ground, subtle grain, generous margins.
- Huge hand-drawn marker headline, two lines: `wait —` / `what IS that?` with a rough coral underline swiping under `that`.
- One motif, centred: a hand-drawn laptop, coral lid fill, thick wobbly ink outline — with a chunky QR panel on the lid whose bottom edge melts into liquid drips (the "liquid" in Lidquid).
- Below: `THE STICKER ON MY LID PAYS ME $ PER SCAN`, then `LIDQUID.COM`.
- Checked: dollar sign only, no invented figures, no stats, no partner brand names.

Drift from the brief worth a human's eye: the QR finder squares render as flat ink rather than yellow/coral/teal, there's no thick hand-drawn border frame around the whole pin, the laptop reads as open-and-front-on rather than lid-from-behind, and sun yellow and deep teal don't appear — the pin currently runs cream + ink + coral only. It's on-voice and clean, but it's a two-colour pin, not the full palette.

**Fallback:** the `image_prompt` in `pin.md` is complete and self-contained — it can be pasted into any text-to-image tool to generate the pin instead.
