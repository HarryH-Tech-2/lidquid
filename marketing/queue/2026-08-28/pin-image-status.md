# pin.png — not committed (blocked download)

**Status:** the pin was designed and exported successfully in Canva. Only the final
step — pulling the PNG bytes into this repo — failed.

## What happened

| Step | Result |
|---|---|
| Generate 4 pin candidates in brand style | ✅ |
| Preview candidate thumbnails (`design.canva.ai`) | ❌ blocked — HTTP 403 at egress proxy |
| Create editable design from candidate 1 | ✅ `DAHTlNxp4OE`, 1000×1500px |
| Inspect rendered text, strip generator junk | ✅ (see below) |
| Commit design | ✅ |
| Export as 1000×1500 lossless PNG | ✅ |
| `curl` the export URL (`export-download.canva.com`) | ❌ blocked — HTTP 403 at egress proxy |

Both failures are the same cause: this session's outbound network policy does not
allow the Canva asset/download hosts. The agent-proxy log records them as
`connect_rejected … gateway answered 403 to CONNECT (policy denial)`. That is an
organisation policy denial, not a transient error, so it was not retried or
routed around.

## The design is finished — just download it by hand

Open the design in Canva and use **Share → Download → PNG**, then save it to
`marketing/queue/2026-08-28/pin.png`:

- Design ID: `DAHTlNxp4OE`
- Title: *Lidquid pin — 2026-08-28 — you own a billboard*
- Edit: https://www.canva.com/d/S0Ksf1Ky8uj55dj
- View: https://www.canva.com/d/VgF9XtvbWCpPxEt

Canva share URLs rotate; if those 404, find it by title in the Canva account.

## Edits already applied to the generated design

The generator left nonsense text in the layout, which was removed before commit:

- deleted a garbled duplicate caption: `"rent your laptop lid scan.`
- deleted a stray word: `sunny`
- deleted a stray fragment: `waitlist` (15px, rotated, floating)
- deleted a small coral pill graphic with unreadable baked-in lettering
- fixed subheadline punctuation and currency: `get paid per verified scan,` → `get paid $ per verified scan.`
- tidied the CTA pill: `join the waitlist...` → `join the waitlist`

Verified rendered copy is now exactly: headline *YOU OWN A BILLBOARD AND IT'S
FACING AWAY FROM YOU*, subhead *rent your laptop lid. / get paid $ per verified
scan.*, CTA *join the waitlist*, footer *lidquid.com*.

## Fallback

If the Canva design is unusable, `image_prompt` in `pin.md` is a complete
text-to-image prompt for regenerating this pin from scratch in any tool.

## Note for review

The QR code in the artwork is decorative only — it is not a real Lidquid code and
must not be presented as scannable.

## To fix this permanently

Allow `export-download.canva.com` (for exports) and `design.canva.ai` (for
candidate thumbnails, so future runs can compare designs before picking one) in
the environment's network policy. Everything else in the Canva flow already works.
