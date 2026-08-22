# pin.png — not downloaded (blocked by network policy)

**Status:** the Canva design was created and exported successfully. Only the *download* of the PNG bytes into this repo failed.

## What happened
1. `generate-design` (Canva MCP) returned 4 on-brand pin candidates. ✅
2. Candidate 1 was converted to a real design: **"Hand-drawn Laptop Lid Zine with QR Code"**, design ID `DAHTBDkhkDA`. ✅
3. `export-design` produced a 1000×1500 PNG and returned a signed download URL. ✅
4. `curl` of that URL failed: `CONNECT tunnel failed, response 403`. ❌

Two separate Canva hosts are blocked by this session's outbound egress policy:

| host | purpose | result |
| --- | --- | --- |
| `design.canva.ai` | candidate preview thumbnails | 403 at the proxy |
| `export-download.canva.com` | exported PNG download | 403 at the proxy |

A 403 from the agent proxy is an organisation egress-policy denial, not a transient error — the proxy README explicitly says not to retry it or route around it, so no further attempts were made.

Side effect: the candidate thumbnails were also unviewable, so candidate 1 was chosen without a visual comparison of the four options. Worth eyeballing the other three in Canva before committing to this one.

## What a human needs to do (about 30 seconds)
Open the design and download it as PNG (1000 × 1500), then save it as `marketing/queue/2026-08-22/pin.png`:

- Edit: https://www.canva.com/d/ek_fLXJ-_q_qsnd
- View: https://www.canva.com/d/PlInfHo0jwt2b7u

The other three candidates from the same generation job, if this one isn't right:

- https://www.canva.com/d/JPzmUtxoajNn6uQ
- https://www.canva.com/d/J3baLmKAO2tZPmH
- https://www.canva.com/d/25kZ_zsa4DA4_Ha

## Fallback
`image_prompt` in `pin.md` is a complete, standalone text-to-image prompt in the brand style with the exact headline to render — usable in any image tool if the Canva output isn't right.

## To fix this properly
Allow `export-download.canva.com` (and ideally `design.canva.ai` for previews) in the environment's network policy, and this step becomes automatic on future runs.
