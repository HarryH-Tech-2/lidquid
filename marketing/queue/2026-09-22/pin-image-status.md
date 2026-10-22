# pin.png — not generated (needs a human step)

**status:** the Canva design EXISTS and looks right. Only the file download failed.

## what happened
1. Canva MCP generated four pin candidates — fine.
2. Tried to preview the candidate thumbnails (`design.canva.ai`) → **blocked**: the session's egress proxy rejected the CONNECT (`connect_rejected`, organization network policy). So the candidate was picked without a visual check.
3. Created an editable design from candidate 1 and confirmed by reading it back that the text renders as intended:
   > "The back of your laptop is doing nothing." / "so rent it out, peels off clean." / "Lidquid" / "$ per verified scan" / "lidquid.com"
4. Exported it as PNG, 1000×1500, lossless — the export **succeeded** and returned a signed URL.
5. Downloading that URL (`export-download.canva.com`) → **blocked**, same proxy policy. Retried once, same 403 on the CONNECT tunnel.

Both blocked hosts are Canva CDNs that this environment's network policy doesn't allow. Nothing here is fixable from inside the session — no amount of retrying will get the bytes across.

## the design (open and download manually)
- design id: `DAHV7OQOtEk`
- edit: https://www.canva.com/design/DAHV7OQOtEk
- already sized 1000×1500 (2:3). Share → Download → PNG, save as `marketing/queue/2026-09-22/pin.png`.

Worth eyeballing before use: it was generated without a visual check, and AI text rendering in generated posters can mangle letterforms. The QR on it is decorative only.

## fallback
`pin.md` → `image_prompt` is a complete text-to-image prompt for the same pin if you'd rather regenerate it elsewhere.

## to unblock future runs
Allow `export-download.canva.com` (and ideally `design.canva.ai` for thumbnail previews) in the environment's network policy. Then this step becomes automatic.
