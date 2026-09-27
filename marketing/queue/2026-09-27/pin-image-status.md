# pin.png — not committed

**status:** the Canva design was created and exported successfully, but the PNG could not be downloaded into the repo.

## what worked
- Canva MCP tools were available.
- Design created: **Lidquid pin — "your lid is doing nothing"**, Pinterest Pin format (1000×1500).
  - design id: `DAHWZKIketU`
  - open / edit: https://canva.link/8z0su6w12d6xs4b
- PNG export job succeeded (1000×1500, lossless, page 1) and returned a signed download URL.

## what failed
Downloading the export into `marketing/queue/2026-09-27/pin.png` failed twice with:

```
curl: (56) CONNECT tunnel failed, response 403
export-download.canva.com:443 — connect_rejected
```

This session's outbound network policy does not permit `export-download.canva.com`, so the signed
export URL cannot be fetched from here. This is an environment/egress restriction, not a Canva error —
nothing about the design or the export is broken.

## how a human can finish it
1. Open https://canva.link/8z0su6w12d6xs4b and download as PNG (1000×1500), or
2. re-run this agent in an environment whose network policy allows `export-download.canva.com`.

Either way, drop the file at `marketing/queue/2026-09-27/pin.png`.

## fallback
`pin.md` contains a complete, self-contained `image_prompt` that renders the same pin in the brand
style from any text-to-image tool. Nothing downstream is blocked on this file.
