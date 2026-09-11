# pin.png — not generated (needs a manual download)

**Status:** the Canva design was created and finished successfully. Only the *download* step failed, so there is no `pin.png` in this folder.

## What worked

- Generated four Pinterest-pin candidates via Canva in the Lidquid riso/zine style, 1000×1500 (2:3) — the exact pin size.
- Promoted the strongest candidate to a real design and made two copy/layout cleanups:
  - removed a stray trailing comma after "— the stranger at the next table,"
  - deleted a small coral decoration that was colliding with the em dash on that line
- Committed those edits and ran a PNG export, which Canva completed successfully.

## What failed

Downloading the exported file into the repo. This session runs in a sandbox whose egress policy denies Canva's CDN hosts — the proxy answers `403` to the CONNECT:

- `design.canva.ai:443` — `connect_rejected` (candidate thumbnails)
- `export-download.canva.com:443` — `connect_rejected` (the finished PNG export)

This is an environment network-policy restriction, not a Canva error and not a transient failure — retrying from this sandbox will keep failing until those hosts are allowed. Both hosts were attempted.

## The design (open it directly)

- **Design ID:** `DAHU5N2NUc4`
- **Edit:** https://www.canva.com/d/vIPnO34NFpC1-w6
- **View:** https://www.canva.com/d/CVRqbImVg6o8J7D

Open either link and use Canva's own Share → Download → PNG to save it as `marketing/queue/2026-09-11/pin.png`. Export at 1000×1500.

## Preview of what it looks like

Warm cream paper with a faint dot grid. Chunky black headline **"wait, what IS that?"**, and under it in smaller bold type *"— the stranger at the next table"*. Centre: a line-drawn laptop seen from behind, closed lid facing the viewer, with a QR sticker on the lid whose three corner finder squares are yellow, coral and teal. A strip of coral washi tape in the top-right, a small ink pot doodle bottom-right. Then "your lid · their ad · your money" and "lidquid.com".

Two honest notes for whoever reviews it: "your lid · their ad · your money" wraps onto two lines, and the type is Canva's own mono-ish face rather than a marker hand — worth nudging by hand in Canva if it matters.

## Fallback

The `image_prompt` in `pin.md` is a complete, self-contained text-to-image prompt for this pin and needs no Canva access. Any image tool can produce the asset from it.

> A direct export URL was also produced this run, but Canva's export links are pre-signed and expire within hours, so it is deliberately not recorded here — it would be dead by the time anyone read it. Use the design links above instead.
