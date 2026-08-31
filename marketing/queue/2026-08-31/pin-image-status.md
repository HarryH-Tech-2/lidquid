# pin.png — not downloaded (2026-08-31)

**Status:** the Canva design was created successfully, but the PNG could not be downloaded into the repo.

## What worked
- `generate-design` (pinterest_pin) returned 4 candidates from the brand-style prompt.
- `create-design-from-candidate` created an editable design.
  - **Design ID:** `DAHT3O9zLqM`
  - **Edit:** https://www.canva.com/d/2gp5s_bCKRD3TcH
  - **View:** https://www.canva.com/d/weukiWfVhEazna7
- `get-export-formats` confirmed PNG is supported.
- `export-design` succeeded and returned a signed 1000×1500 PNG download URL.

## What failed
Downloading the exported file. This cloud session's egress proxy denies Canva's
asset domains at the CONNECT stage (HTTP 403, `connect_rejected` — organization
network policy), so `curl` cannot fetch them:

- `export-download.canva.com:443` — 403, attempted twice
- `design.canva.ai:443` — 403 (candidate thumbnails, so the four candidates
  could not be previewed before one was picked)

This is an environment network-policy restriction, not a Canva error. Nothing
was retried beyond the two attempts, and no workaround was attempted.

## What a human should do
Pick whichever is easiest:

1. **Open the design and download it manually** from the edit URL above, save as
   `marketing/queue/2026-08-31/pin.png`. Worth eyeballing regardless — the
   candidate was chosen blind, without a visual preview, so it has not been
   checked against the brand palette or confirmed to render the headline text
   correctly.
2. **Allow the Canva domains** (`export-download.canva.com`, `design.canva.ai`)
   in the session environment's network policy so future runs can download
   automatically.
3. **Ignore Canva entirely** and generate the image from the `image_prompt` in
   `pin.md`, which is written as a complete, self-contained text-to-image prompt.

The pin copy in `pin.md` is unaffected and ready to review.
