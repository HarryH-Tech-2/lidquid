# pin.png — not downloaded (blocked by network policy)

**Status:** the Canva design was created and exported successfully. The PNG could **not** be saved into this folder, because this session's egress proxy denies the Canva CDN hosts.

## What worked
- Generated 4 Pinterest pin candidates via the Canva MCP tools (`generate-design`, `pinterest_pin`).
- Created an editable design from the first candidate: **"Pinterest Pin - Lidquid"**, design ID `DAHT9ADgMz4`.
- Confirmed PNG export is supported (`get-export-formats`) and ran a 1000×1500 lossless PNG export — the export job returned `status: success` with a download URL.

## What failed
Two separate download attempts were both refused by the egress proxy with `403 connect_rejected` (organization policy denial), so no bytes were ever transferred:

| Attempt | Host | Result |
|---|---|---|
| Candidate thumbnails (×4) | `design.canva.ai:443` | 403 — connect rejected by policy |
| Exported 1000×1500 PNG | `export-download.canva.com:443` | 403 — connect rejected by policy |

The proxy guidance is explicit that policy denials must be reported rather than retried or routed around, so no further download attempts were made.

Because the thumbnails were also unreachable, **the four candidates could not be visually compared** — the first candidate was taken by default. A human should eyeball it before use.

## How to get the image
1. Open the design in Canva: <https://www.canva.com/d/kEMe4PxCqUI6Hun> (edit) · <https://www.canva.com/d/_JNg73twO_Gz7t_> (view)
2. Check it against the brand style and the intended headline (below); the other three candidates are in the same generation job if this one is off.
3. Download as PNG at **1000 × 1500 px** and drop it in this folder as `pin.png`.

Alternatively, use the `image_prompt` in `pin.md` with any text-to-image tool — it is written as a complete standalone fallback.

## Headline the image must carry
```
YOU NEVER SEE
THIS SIDE.
EVERYONE ELSE DOES.
```
Plus the marker line `your lid · their ad · your money` and `lidquid.com`.

## To unblock future runs
Allowlist `export-download.canva.com` (and `design.canva.ai` for candidate previews) in the environment's network policy. Everything else in the Canva flow already works.
