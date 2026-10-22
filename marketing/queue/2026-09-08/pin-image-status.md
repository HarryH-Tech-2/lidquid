# pin.png — not committed

**Status:** the design was created in Canva successfully, but the PNG could not be downloaded into this repo.

## What worked
- Generated four Pinterest pin candidates in Canva from the brand-style prompt in `pin.md`.
- Turned the first candidate into a real design: **"Hand-drawn Cream Zine Portrait with Laptop"**
  - view: https://www.canva.com/d/egPNybmkZU45LFT
  - edit: https://www.canva.com/d/pXEUbHmtjFm5yg-
- Exported it as a 1000×1500 PNG. The export job succeeded.

## What failed
Downloading the file. This cloud session's egress policy blocks both Canva download hosts:

- `design.canva.ai:443` → `403` on CONNECT (blocked the candidate thumbnails)
- `export-download.canva.com:443` → `403` on CONNECT (blocked the finished PNG)

Two attempts, both refused by the proxy before reaching Canva. This is a network policy on the
environment, not a Canva error — nothing to retry here without allowlisting those hosts.

## Knock-on effect
Because the thumbnails were also blocked, **the four candidates were never visually reviewed** —
candidate 1 was picked blind. Treat the Canva design as unvetted: open the view link above and
check it actually looks on-brand before using it. If it doesn't, regenerate from the
`image_prompt` in `pin.md`.

## To get the image
1. Open the edit link above and download the PNG from Canva directly (fastest), or
2. Regenerate from scratch using the `image_prompt` in `pin.md` — it is written as a complete,
   standalone text-to-image prompt and is the intended fallback.

Then drop the file in as `marketing/queue/2026-09-08/pin.png`.

## For future runs
If these daily drafts should ship with images attached, `design.canva.ai` and
`export-download.canva.com` need adding to the environment's allowed hosts. Otherwise every run
will land here and the `image_prompt` stays the deliverable.
