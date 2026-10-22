# pin.png — NOT generated in-repo

**Status:** the Canva design was created and exported successfully, but the PNG could not be downloaded into this repo. `pin.png` is missing from this folder.

## What worked
- `generate-design` returned 4 Pinterest-pin candidates in the brand style.
- Candidate 1 was promoted to a real design in the Canva account:
  - **Design ID:** `DAHUDCAmqBk`
  - **Title:** "Pinterest Pin - YOUR LAPTOP HAS A BLANK SIDE."
  - **Edit:** https://www.canva.com/d/gQR92VRczYrbQK4
  - **View:** https://www.canva.com/d/MBDsyCBOgmKklUC
- `export-design` produced a valid 1000×1500 PNG export URL.

## What failed
Downloading the export. This cloud session's egress proxy returns **403 CONNECT (organization policy denial)** for every Canva domain:

```
export-download.canva.com:443 — connect_rejected (403)
design.canva.ai:443          — connect_rejected (403)
www.canva.com:443            — connect_rejected (403)
```

Two download attempts were made; both were rejected at the gateway. The Canva *MCP tools* work fine (they route via the Anthropic MCP proxy), but direct HTTP to Canva hosts is not permitted, so `curl -L -o marketing/queue/2026-09-02/pin.png <export url>` cannot succeed from here. TLS verification was not disabled and `HTTPS_PROXY` was not unset.

The same block also meant the four candidate thumbnails could not be viewed, so **candidate 1 was picked without visual inspection** — worth a look before publishing.

## How to unblock
Pick either:
1. **Manual (fastest):** open the edit link above, download as PNG 1000×1500, drop it in this folder as `pin.png`.
2. **Permanent:** add `export-download.canva.com` and `design.canva.ai` to the environment's network allowlist, so future daily runs can commit the image themselves.

## Fallback
`pin.md` contains a complete `image_prompt` — a full text-to-image prompt in the brand style with the exact headline to render. That can be pasted into any image generator to produce the pin without Canva.
