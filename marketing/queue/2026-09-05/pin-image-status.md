# pin.png — not downloaded (blocked by network policy)

**Status:** the Canva design was created successfully. The PNG file could **not** be downloaded into this repo.

## What worked
- Generated 4 pin candidates via the Canva MCP tools.
- Created an editable Canva design from the first candidate.
- Requested a 1000×1500 PNG export — the export job returned `success` with a signed download URL.

## What failed
Downloading the exported file. This cloud session's egress proxy denies CONNECT to Canva's
download hosts by organization network policy — a hard 403 at the gateway, not a transient error:

```
export-download.canva.com:443 — connect_rejected (gateway answered 403 to CONNECT)
design.canva.ai:443          — connect_rejected (gateway answered 403 to CONNECT)
```

Attempted twice, PNG and then JPG (both resolve to `export-download.canva.com`). Same denial each
time. The candidate thumbnails on `design.canva.ai` were blocked too, so the four candidates could
not be previewed before picking — **candidate 1 was chosen unseen**. Worth eyeballing before use.

## The design exists — grab it manually
- **Edit:** https://www.canva.com/d/EDYaTjawko7-WFc
- **View:** https://www.canva.com/d/mOgLTqSk3gHBP0e
- Design ID: `DAHUVG4rPUA` · title: "Pinterest Pin - YOU NEVER SEE THE BACK OF YOUR LAPTOP."

Open it, check the rendered text is spelled right (AI layout tools often mangle headline copy), then
download as PNG 1000×1500 and drop it in at `marketing/queue/2026-09-05/pin.png`.

## Fallback
The `image_prompt` in `pin.md` is complete and self-contained — it can be pasted into any
text-to-image tool to produce the pin instead.

## To fix properly
Allowlist `export-download.canva.com` and `design.canva.ai` in the environment's network policy
(Claude Code on the web → environment settings), and this step will run unattended from tomorrow.
