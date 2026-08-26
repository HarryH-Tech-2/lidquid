# pin.png — not generated (download blocked)

**Status:** the Canva design was created successfully. The PNG could **not** be downloaded into this repo, so `pin.png` is missing from this folder.

## What worked
- Generated 4 pin candidates via the Canva MCP tools (`generate-design`, `pinterest_pin`).
- Converted one candidate into a real Canva design.
- Requested both a PNG and a JPG export — **both export jobs succeeded** and returned signed download URLs.

## What failed
Downloading the exported file. This session's network policy blocks the Canva asset hosts at the proxy:

```
connect_rejected  design.canva.ai:443        gateway answered 403 to CONNECT (policy denial)
connect_rejected  export-download.canva.com:443  gateway answered 403 to CONNECT (policy denial)
```

Two attempts were made (PNG, then JPG in case it served from a different host). Both returned `http=000 size=0`. This is a network-policy denial, not a transient error or a Canva failure — a retry on a later run will fail the same way until the policy allows `export-download.canva.com`.

Because `design.canva.ai` is also blocked, the candidate thumbnails could not be previewed either, so the chosen candidate was picked without a visual check. **Please eyeball it before publishing.**

## Where the design lives
- **Design ID:** `DAHTZJoO984`
- **Edit:** https://www.canva.com/d/8yx21vcVtzjG9rl
- **View:** https://www.canva.com/d/hprqxskAmzknjpa
- Canva auto-titled it "Pinterest Pin - Discover the hidden potential of your laptop lid!" — that title is off-voice and is not used anywhere in the drafts. Rename it in Canva if you keep the design.

Export it from there at 1000×1500 and drop it in as `marketing/queue/2026-08-26/pin.png` if you want it in the repo.

## Fallback
`pin.md` contains a complete `image_prompt` written in the brand style, with the exact headline text to render. It can be used with any text-to-image tool to produce the pin independently of Canva.

## To fix for future runs
Allow `export-download.canva.com` (and `design.canva.ai` for thumbnail previews) in the environment's network policy. Without that, every daily run will produce the design in Canva but never land the image in the repo.
