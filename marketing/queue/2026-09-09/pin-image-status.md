# pin.png — not downloaded

**Status:** the Canva design was created and exported successfully, but the PNG could **not** be saved into this folder. `pin.png` is missing.

## What worked
1. `generate-design` (Canva MCP) returned 4 Pinterest pin candidates from the brand-style prompt.
2. Candidate 1 was converted into a real design: **"Pinterest Pin - you own a billboard."**
   - Edit: https://www.canva.com/d/sX5_rsICzmjz0_B
   - View: https://www.canva.com/d/MJ7df3hdRHwQML1
   - Design ID: `DAHUtCpYmBg`
3. `export-design` produced a 1000×1500 PNG and returned a signed download URL.

## What failed
Downloading that URL. The agent sandbox routes all outbound traffic through an egress proxy with a host allowlist, and Canva's asset hosts are not on it:

```
curl: (56) CONNECT tunnel failed, response 403
host: export-download.canva.com:443  — connect_rejected (organization policy)
```

Tried twice; same result. The candidate **thumbnail** host (`design.canva.ai`) is blocked the same way, so the four candidates could not be previewed either — candidate 1 was chosen sight-unseen.

## What a human needs to do
Either:
- open the edit URL above, eyeball it (it was picked blind — check the headline text rendered correctly and the palette held), and download the PNG manually into `marketing/queue/2026-09-09/pin.png`; **or**
- ignore the Canva design and generate the image from the `image_prompt` in `pin.md`, which is the intended fallback and is self-contained.

## To stop this recurring
Add `export-download.canva.com` and `design.canva.ai` to the environment's network allowlist. Until then every day's run will produce a Canva design but no local PNG.
