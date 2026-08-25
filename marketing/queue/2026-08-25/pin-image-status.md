# pin.png — not downloaded (network policy, not a Canva failure)

**Status:** the Canva design was created and exported successfully. Only the *download* into this repo failed.

## What worked
- Generated 4 pin candidates via the Canva MCP tools.
- Created an editable design from the first candidate.
- Confirmed the page is **1000 × 1500 px** (2:3 Pinterest ratio) — correct.
- Confirmed PNG export is supported and ran the export job — it returned `status: success` with a signed download URL.

## What failed
Downloading the exported PNG. This session's egress proxy refused the connection with a **403 policy denial** on two Canva hosts:

```
design.canva.ai:443          403 to CONNECT  (candidate thumbnails)
export-download.canva.com:443 403 to CONNECT  (the PNG export)
```

Per the proxy guidance, organization policy denials are not retried or routed around — the blocked hosts are reported instead. This is an allowlist gap in the session's network policy, not a Canva problem, and it will recur on every run until those hosts are permitted.

## How to get the image (30 seconds, manual)
The design is sitting in the Canva account:

- **Design ID:** `DAHTTIOlxH8`
- **Title:** "Vintage Laptop-Themed Zine Poster"
- **Edit:** https://www.canva.com/d/sLJXtqrY2ixicTO
- **View:** https://www.canva.com/d/F1KjsBS-M1R-2xb

Open it, download as PNG (1000 × 1500), and drop it in this folder as `pin.png`.

## Known imperfections in the generated design
Worth a look before publishing — the text layer read back as:

> unemployed, / I get paid every time you scan this. / I get paid every time you scan this. / lidquid / your lid / their ad / peels off clean / .com / the back / of your laptop

So: the headline and the sticker line rendered, but **"I get paid every time you scan this" is duplicated**, and the doodle pills came through incomplete — `$ per verified scan`, `you approve the brand` and the `your money` half of the tagline are missing. Fixable in the Canva editor, or regenerate.

## Fallback
`pin.md` contains a complete `image_prompt` written for any text-to-image model, in full brand style with the exact headline to render. That is the intended fallback and needs no Canva access.

## Suggested fix for future runs
Add `export-download.canva.com` and `design.canva.ai` to the environment's allowed egress hosts. After that this step should complete unattended.
