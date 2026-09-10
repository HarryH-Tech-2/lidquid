# pin.png — not generated (blocked)

**Status:** the pin design WAS created in Canva successfully. The PNG could not be downloaded into this repo, so `pin.png` is missing from this folder.

## What worked

- Canva MCP tools were available and authenticated.
- `generate-design` (design_type `pinterest_pin`) returned four candidates for the brief in `pin.md`.
- Candidate 1 was converted into a real, editable design: **design ID `DAHUzOmH_a4`**, 1 page, 1000×1500 px.
- `read-design` confirms the rendered text is correct and on-brief:
  - `You already own` / `a billboard` (chunky display type, second line rotated −3.2°)
  - `you just sit behind it.` (marker-handwriting font, rotated −1.8°)
  - `lidquid.com` (bottom, on the washi-tape strip) plus a small `lidquid.` wordmark
  - a `$` doodle among the sticker/QR motifs
- `get-export-formats` confirms PNG is supported, and `export-design` **succeeded** — it returned a signed download URL for a 1000×1500 lossless PNG.

## What failed

Downloading the exported file. Every `canva.com` host is refused by this environment's egress policy:

```
export-download.canva.com:443 — connect_rejected
  (gateway answered 403 to CONNECT — organization policy)
design.canva.ai:443          — connect_rejected  (same; blocked the candidate thumbnails too)
www.canva.com:443            — connect_rejected  (403)
```

Tried twice against `export-download.canva.com` with the live signed URL, plus a reachability probe against `www.canva.com`. All three hosts return 403 at the proxy CONNECT stage, which is a network-policy denial rather than anything wrong with the export. The Canva MCP tools themselves are unaffected because they reach Canva over a different relay — only direct HTTP egress from this container is blocked.

A side effect worth knowing: the candidate thumbnails were also unviewable, so the chosen candidate was picked and verified from `read-design`'s text and element geometry, not by looking at it.

## How a human can finish this in ~30 seconds

1. Open the design: **https://www.canva.com/design/DAHUzOmH_a4** (it's in the Lidquid Canva account, titled *"Vibrant Riso-Print Pinterest Pin Design"*).
2. Eyeball it — it has not been seen by a human or by the agent, only read as text.
3. Download as PNG at 1000×1500 and drop it in as `marketing/queue/2026-09-10/pin.png`.

## Fallback

The `image_prompt` in `pin.md` is complete and self-contained — it can be pasted into any text-to-image tool to produce the pin independently of Canva.

## To unblock future runs

Allow `export-download.canva.com` (and ideally `design.canva.ai`, so candidate thumbnails can be reviewed before one is picked) in the environment's network policy. Everything else in the Canva step already works end to end.
