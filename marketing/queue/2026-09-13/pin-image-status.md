# pin.png — not generated

**Status:** the Canva design was created successfully, but the PNG could not be downloaded into the repo.

## What worked

- Canva MCP tools were available.
- Generated 4 pin candidates in the brand style and promoted one to an editable design.
- Design ID: `DAHVFAbid5s` — title "Riso-Print Pin with Yellow Highlight", 1 page, Pinterest pin format.
- Verified the rendered text reads: "which city gets paid first?" / "cities open in order of demand" / "$ per verified scan" / "joining the list is the vote." / "lidquid.com" — i.e. the headline from `pin.md` rendered correctly.
- Export jobs succeeded on Canva's side, both as PNG (1000×1500, lossless) and as JPG.

## What failed

Downloading the exported file. This cloud session's egress proxy denies outbound connections to Canva's asset hosts by organisation network policy — the gateway answers `403` to `CONNECT`, so `curl` aborts with exit code 56 before any bytes transfer:

- `design.canva.ai:443` → `connect_rejected` (candidate thumbnails)
- `export-download.canva.com:443` → `connect_rejected` (PNG and JPG export downloads)

Two download attempts were made (PNG, then JPG via a fresh export) — both refused at the gateway. This is a network-policy denial, not a TLS or credential problem, so retrying from this session will not help.

## How a human can finish it

1. Open the design in Canva and export it as PNG at 1000×1500, then drop it in at `marketing/queue/2026-09-13/pin.png`. The design is in the Canva account used by this session's MCP connection, named **"Riso-Print Pin with Yellow Highlight"** (design ID `DAHVFAbid5s`).
2. Or regenerate the image from scratch using the `image_prompt` in `pin.md` — it is written as a complete standalone text-to-image prompt and is the intended fallback.

## To fix for future runs

Add `export-download.canva.com` and `design.canva.ai` to the allowed hosts for this environment's network policy (see https://code.claude.com/docs/en/claude-code-on-the-web). Without them, every daily run will produce drafts but no `pin.png`.

_Reminder: any QR code in a generated image is decorative only._
