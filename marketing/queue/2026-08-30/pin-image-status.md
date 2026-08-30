# pin.png — not downloaded

**Status:** the Canva design was created and exported successfully, but the PNG could **not** be pulled into this repo. `pin.png` is missing from this folder.

## What worked
- `generate-design` (pinterest_pin) returned 4 candidates in the brand style.
- Candidate 1 was promoted to a real design: **"Tactile Riso-Printed Pinterest Pin"**, design ID `DAHTxOLsNL8`
  - edit: https://www.canva.com/d/h-pst-INij885ve
  - view: https://www.canva.com/d/-P83AgEeuxEDZeh
- `export-design` succeeded at 1000×1500 PNG, lossless, and returned a signed download URL.

## What failed
Downloading the file. This cloud session's egress policy denies both Canva asset hosts:

```
design.canva.ai:443        — connect_rejected (403 to CONNECT, policy denial)
export-download.canva.com:443 — connect_rejected (403 to CONNECT, policy denial)
```

Two separate hosts, two separate attempts, same denial — this is a network-policy block, not a transient failure, so retrying from this session won't help. It also meant the four candidate thumbnails couldn't be previewed, so **candidate 1 was picked without visual review** — worth an eyeball before use.

## How a human can finish it
1. Open the design: https://www.canva.com/d/h-pst-INij885ve — check it actually looks on-brand (cream paper, ink borders, yellow/coral/teal QR finder squares) and that the headline reads *"no posting. no followers. just a sticker."* AI layout tools often mangle the exact copy; fix the text in Canva if so.
2. Also worth comparing against the other three candidates before settling:
   - https://www.canva.com/d/NhFGrLGEHuxq9di
   - https://www.canva.com/d/_MFBQ_fppQcQAV9
   - https://www.canva.com/d/OWVm2q1klYyqasl
3. Download as PNG 1000×1500 and drop it in as `marketing/queue/2026-08-30/pin.png`.

## Fallback
The `image_prompt` in `pin.md` is complete and self-contained — it can be pasted into any text-to-image tool to produce the pin instead.

## Fix for future runs
Allowlisting `export-download.canva.com` (and `design.canva.ai` for thumbnail previews) in the environment's network policy would let this step complete unattended.
