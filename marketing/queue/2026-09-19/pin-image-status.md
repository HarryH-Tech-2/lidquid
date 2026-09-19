# pin.png — not downloaded (blocked by egress policy)

**Status:** the Canva design was created and rendered successfully. Only the *download* into this repo failed.

## What worked
- Generated 4 pin candidates in the Lidquid brand style via Canva.
- Converted the chosen candidate into a real Canva design.
- Verified it: page size **1000 x 1500 px** (2:3) and all headline copy present —
  "wait — what IS that?", "my lid pays me when strangers scan it",
  "you approve the brand", "peels off clean", "lidquid.com".
- Exported it as a 1000x1500 lossless PNG. The export job succeeded.

## What failed
Downloading the exported file into `marketing/queue/2026-09-19/pin.png`.

The session's egress proxy refused the connection with a **403 (organization
egress policy denial)** for both Canva asset hosts:
- `export-download.canva.com:443` — connect_rejected
- `design.canva.ai:443` — connect_rejected (thumbnails, so the candidates could not be previewed either)

This is a network allowlist issue, not a Canva error. The proxy README
(`/root/.ccr/README.md`) states that 403/407 denials must be reported rather
than retried or routed around, so no further download attempts were made.

## How to get the image (30 seconds, human)
Open the design in Canva and hit Share → Download → PNG:

- **Edit:** https://www.canva.com/d/tmaOep7t9GE5URW
- **View:** https://www.canva.com/d/vC6KU67gQVag0Br
- **Design ID:** `DAHVpEgWm8A`

Save it into this folder as `pin.png`.

## Fallback
`pin.md` contains a complete, self-contained `image_prompt` that reproduces this
pin in any text-to-image tool if the Canva design is ever lost.

## To fix permanently
Add `export-download.canva.com` and `design.canva.ai` to the allowed egress
hosts for this environment, and the agent can commit `pin.png` directly on
future runs.
