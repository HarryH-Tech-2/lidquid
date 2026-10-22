# pin.png — not downloaded

**Status:** the Canva design was created and exported successfully, but the PNG could **not** be pulled into this repo. `pin.png` is missing from this folder.

## What worked
- `generate-design` (pinterest_pin) returned 4 candidates in the brand style.
- Candidate 1 was promoted to a real design: **"Pinterest Pin - Vote for Your City"**, design ID `DAHTxOwK3ks`
  - edit: https://www.canva.com/d/ZRVjyspH_Lj-4Hj
  - view: https://www.canva.com/d/7XrTy5AhY4SJaqR
- `export-design` succeeded at 1000×1500 PNG, lossless, and returned a signed download URL.

## What failed
Downloading the file. This cloud session's egress policy denies both Canva asset hosts:

```
design.canva.ai:443           — connect_rejected (403 to CONNECT, policy denial)
export-download.canva.com:443 — connect_rejected (403 to CONNECT, policy denial)
```

Three download attempts across two hosts, same denial each time — a network-policy block, not a transient failure, so retrying from this session won't help. It also meant the candidate thumbnails were unreachable, so **candidate 1 was chosen without any visual review**. Worth an eyeball before this goes anywhere.

## How a human can finish it
1. Open the design: https://www.canva.com/d/ZRVjyspH_Lj-4Hj — check it looks on-brand (cream paper, thick ink border, yellow/coral/teal QR finder squares) and that the headline reads **"which city goes first? you vote by joining."** AI layout tools routinely mangle exact copy; fix the text in Canva if it has.
2. Compare against the other three candidates before settling:
   - https://www.canva.com/d/jD0h7tCgqgR0zth
   - https://www.canva.com/d/hsKr6D8EjGin1lT
   - https://www.canva.com/d/D8ibqAyUv1UQJ_s
3. Download as PNG 1000×1500 and drop it in as `marketing/queue/2026-08-30/pin.png`.

## Fallback
The `image_prompt` in `pin.md` is complete and self-contained — paste it into any text-to-image tool to produce the pin instead.

## Note on the earlier discarded design
An earlier design (`DAHTxOLsNL8`, "Tactile Riso-Printed Pinterest Pin") was generated before the angle was corrected. It carries the headline *"no posting. no followers. just a sticker."* — that angle duplicates 2026-08-25's anti-influencer pin, so it was dropped. It's still sitting in the Canva account and can be deleted.

## Fix for future runs
Allowlisting `export-download.canva.com` (and `design.canva.ai` for thumbnail previews) in the environment's network policy would let this step complete unattended. Until then, every run will produce drafts without images.
