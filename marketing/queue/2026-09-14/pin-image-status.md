# pin.png — not downloaded (blocked by network policy)

**Status:** the Canva design was created and exported successfully. Only the *download into this repo* failed.

## What worked
- Generated 4 Pinterest-pin candidates in Canva in the Lidquid brand style (cream paper, ink border, chunky headline, laptop-from-behind with yellow QR sticker melting into teal drips, yellow washi-tape footer).
- Picked one, fixed a garbled sub-line ("peels off clean, off" → "you approve the brand · peels off clean"), and committed the edit.
- Exported it as a 1000×1500 lossless PNG. Export job succeeded.

**Canva design id:** `DAHVLKIoU_U`
**Edit URL:** https://www.canva.com/d/xdK8RrvFkdrs6yF
**View URL:** https://www.canva.com/d/kwRrqObM-Nqidli

## What failed
Downloading the exported file into `marketing/queue/2026-09-14/pin.png`. Two attempts, both refused at the egress proxy before any bytes moved:

```
export-download.canva.com:443 — connect_rejected
gateway answered 403 to CONNECT (organization policy)
```

The same policy also blocked `design.canva.ai:443` (candidate thumbnails), which is why the candidate selection was made from the design's text content rather than a visual comparison.

This is an environment network-policy restriction, not a Canva failure. Nothing to fix in Canva.

## To get the image
Either:
1. Open the design URL above in Canva and hit Share → Download → PNG, then drop the file in at `marketing/queue/2026-09-14/pin.png`; or
2. Re-run this job in an environment whose egress policy allows `export-download.canva.com` (and ideally `design.canva.ai`, so candidates can be compared visually); or
3. Use the `image_prompt` in `pin.md` with any text-to-image tool — it's written as a complete standalone prompt and is the intended fallback.

(The signed export URL from this run expires a few hours after 2026-09-14 10:05 UTC, so it is almost certainly dead by the time anyone reads this. Re-export from the design instead.)
