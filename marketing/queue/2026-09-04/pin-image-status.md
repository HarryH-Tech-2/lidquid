# pin.png — not downloaded

**Status:** the pin design was created, styled and saved in Canva. The PNG file could **not** be written into this folder.

## What worked

- Generated a Pinterest pin (1000×1500, 2:3) via the Canva MCP tools.
- The first AI-generated result was unusable: the embedded illustration contained garbled, duplicated headline text ("wait, what is / wait, what is, that ?") and an off-voice line, "The perfect café conversation starter for everyone".
- So the pin was rebuilt from clean vector shapes in the brand palette: cream #f6f1e7 ground, ink #1c1a17 headline, a laptop seen from behind with a chunky QR whose three finder squares are sun yellow / coral / deep teal, a liquid-drip melt at the QR's bottom edge, and slight -1.5° rotations.
- Final pin reads, top to bottom: **Lidquid** in a yellow badge · headline **"Wait, what IS that?"** · laptop + QR motif · *the four best words in the café* · *your lid · their ad · your money* (teal) · **lidquid.com** (coral).
- The design was committed in Canva and exported to PNG successfully.

## What failed

Downloading the exported PNG. This session's outbound traffic goes through a policy-enforcing egress proxy, and both Canva asset hosts are blocked by the org's network policy:

- `design.canva.ai` → `CONNECT tunnel failed, response 403`
- `export-download.canva.com` → `CONNECT tunnel failed, response 403`

Per the environment's proxy guidance, a 403 from the egress proxy is an organization policy denial that must be reported rather than retried or routed around, so no further download attempts were made. This is an environment limitation, not a Canva or design failure.

## How to get the image

1. Open the design in Canva — design ID **`DAHUPDjb6i0`**, titled *"Pinterest Pin - Wait, what IS that?"* — and download it as PNG (1000×1500).
2. Save it into this folder as `pin.png`.

Alternatively, the `image_prompt` in `pin.md` is a complete, self-contained text-to-image prompt and remains the documented fallback.

## To unblock future runs

Allowlist `export-download.canva.com` (and `design.canva.ai` for design previews) in the environment's network policy. Everything else in the Canva step already works end to end.
