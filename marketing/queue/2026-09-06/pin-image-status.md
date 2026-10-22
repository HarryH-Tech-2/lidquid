# pin.png — status: NOT downloaded

**What worked.** Canva generated the pin and it is finished and saved in the Canva account.

- design id: `DAHUbGPl4oA`
- title: *Artisanal Laptop Lid Poster with QR Code*
- open it: https://www.canva.com/design/DAHUbGPl4oA/edit
- size: 1000 × 1500 px (2:3), single page
- what it shows: a closed laptop seen from behind on cream riso paper, a QR sticker with a teal frame centred on the lid, headline "YOUR LID / faces the whole café", the line "you've never once seen it" with a coral marker underline, and a solid black bar at the bottom reading "lidquid.com".
- one edit was applied by hand after generation: the headline was completed to "faces the whole café" (Canva had dropped the last word) and sized to 82px to fit.

**What failed.** The download. This cloud session's egress network policy blocks every Canva host, so the exported file could not be saved into the repo:

```
export-download.canva.com:443 — 403 CONNECT (policy denial)
media.canva.com:443           — 403 CONNECT (policy denial)
www.canva.com:443             — 403 CONNECT (policy denial)
design.canva.ai:443           — 403 CONNECT (policy denial)
```

The PNG export itself succeeded on Canva's side — only the transfer into this container was refused. This is the environment's configured network policy, not a Canva error, so retrying won't change it.

**How to get the file.** Either:

1. Open the design above and download it as PNG (1000 × 1500) manually, then drop it in this folder as `pin.png`; or
2. Add `*.canva.com` (specifically `export-download.canva.com`) to the allowed hosts for this environment's network policy, and the next run will save `pin.png` on its own.

**Fallback.** The `image_prompt` in `pin.md` is a complete text-to-image prompt for the same pin and can be used with any image generator instead.
