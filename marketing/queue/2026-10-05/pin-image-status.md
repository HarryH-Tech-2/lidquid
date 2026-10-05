# pin.png — not generated

**Status:** the Canva design was created successfully. Only the **download** step failed, so there is no `pin.png` in this folder.

## The design exists and is ready to look at

- **Open / edit:** https://canva.link/wi70ug5fkhrtfxv
- **Design ID:** `DAHXJBaIv58`
- **Format:** Pinterest Pin, portrait (2:3)
- **Headline rendered:** "rent the side you never see"

Export to PNG also succeeded on Canva's side — the export job returned a valid download URL.

## What actually failed

Fetching that download URL from this session. Both attempts returned the same error:

```
curl: (56) CONNECT tunnel failed, response 403
export-download.canva.com:443 — connect_rejected
(the egress proxy denied the CONNECT (organization policy))
```

This is the cloud session's **outbound network policy**, not a Canva problem and not a transient failure — `export-download.canva.com` is not on the allowlist for this environment, so the file can never be pulled down from here regardless of retries.

The signed download URL is deliberately **not** recorded in this repo: it carries an AWS request signature, and it expires roughly 11 hours after the export ran anyway.

## How to get the PNG (pick one)

1. **Easiest — download it from Canva by hand.** Open the design link above, then Share → Download → PNG, and save it as `marketing/queue/2026-10-05/pin.png`. Set size to 1000 × 1500 px if it isn't already.
2. **Fix it for future runs.** Add `export-download.canva.com` to the allowed egress hosts for this environment's network policy. Once that's allowed, the whole step runs unattended — see https://code.claude.com/docs/en/claude-code-on-the-web for how the environment's network policy is configured.

## Fallback

The `image_prompt` in `pin.md` is a complete, self-contained text-to-image prompt in the brand style and produces the same pin independently of Canva. Nothing is blocked on this file — the pin copy, alt text, link and board suggestion in `pin.md` are all final and reviewable as they stand.
