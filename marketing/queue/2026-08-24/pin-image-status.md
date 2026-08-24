# Pin image status — 2026-08-24

**`pin.png` was NOT written to this folder.** The design exists and was exported successfully — only the download step is blocked.

## What worked

- Canva MCP tools were available and authenticated.
- Generated 4 pin candidates from the brand-style prompt.
- Created an editable design from the chosen candidate:
  - **Design ID:** `DAHTNJLBZ84`
  - **Title:** "Pinterest Pin - the back of your laptop"
  - **Edit:** https://www.canva.com/d/ujLlwSdETx2a7A7
  - **View:** https://www.canva.com/d/_I-YrUGOL1b_lBD
- Verified the rendered text via `read-design`. It reads:
  > the back of your laptop / is doing nothing. rent it out. / lidquid

  Correct headline, no invented earnings figures, no non-`$` currency.
- Exported a 1000×1500 lossless PNG. The export job succeeded and returned a signed download URL.

## What failed

Downloading the exported PNG into this folder. Every Canva host is refused by this session's egress policy:

```
curl: (56) CONNECT tunnel failed, response 403
```

The agent proxy status endpoint confirms it as a policy denial, not a transient error:

```json
{ "kind": "connect_rejected",
  "detail": "gateway answered 403 to CONNECT (policy denial or upstream failure)",
  "host": "design.canva.ai:443" }
```

Blocked hosts (all returned 403 / no route):
`canva.com`, `www.canva.com`, `design.canva.ai`, `export-download.canva.com`, `document-export.canva.com`

Attempted twice (plain `curl -L`, then `curl` with `--retry` and the proxy CA bundle), on both the candidate thumbnails and the final export URL. The proxy README states policy denials must be reported rather than retried or routed around, so no further attempts were made and TLS verification was left intact.

Because the thumbnails were also unreachable, **the candidate was chosen without visually reviewing the four options** — the choice was verified by reading back the design's text, not its layout. Worth a human glance before publishing.

## What a human needs to do

1. Open the design: https://www.canva.com/d/ujLlwSdETx2a7A7
2. Check the layout looks right (the other 3 candidates are in the same Canva generation job if this one is weak).
3. Download as PNG 1000×1500 and drop it in this folder as `pin.png`.

One nit spotted in the text read-back: the footer renders as **`lidquid`**, not `lidquid.com`. Worth changing to the full domain before publishing, since the pin has no other link on it.

The signed export URL from this run is valid for roughly 16 hours from 2026-08-24 12:12 UTC, but it is on a blocked host, so it is only useful from an unrestricted machine. Re-exporting from the design is easier.

## Fallback

`pin.md` contains a complete text-to-image `image_prompt` in the brand style, including the exact headline, if you'd rather generate the image elsewhere.

## To fix this properly

Add the Canva download hosts (`export-download.canva.com` at minimum, plus `design.canva.ai` for candidate thumbnails) to the session's egress allowlist. Until then this step will fail on every run, and each day's pin will need a manual download.
