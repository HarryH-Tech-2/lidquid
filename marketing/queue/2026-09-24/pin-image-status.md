# pin.png — not downloaded

**Status:** the Canva design was created and exported successfully. Only the *download* into this repo failed.

## What worked

- Canva design generated in the brand style with the headline "dead space. / paid space."
- Design ID: `DAHWHCPY0DA`
- Open / edit: https://canva.link/oegpollbbyv2ftz
- Export to PNG (1000×1500, lossless, page 1) returned `status: success` with a signed download URL.

## What failed

Downloading that URL into `marketing/queue/2026-09-24/pin.png`:

```
curl: (56) CONNECT tunnel failed, response 403
export-download.canva.com:443 — connect_rejected
(the egress proxy denied the CONNECT — organization policy)
```

`export-download.canva.com` is not on this session's egress allowlist. Per `/root/.ccr/README.md`, a 403 on CONNECT is an organization policy denial and must be reported rather than retried or routed around — so no further download attempts were made.

## What a human needs to do

Either:

1. **Grab it manually** — open https://canva.link/oegpollbbyv2ftz, download as PNG at 1000×1500, and drop it in this folder as `pin.png`. The export link the API returned is signed and expires roughly 10 hours after 2026-09-24 04:06 UTC, so the design link is the durable route.
2. **Or allowlist the host** — adding `export-download.canva.com` to the environment's egress policy would let future runs of this agent save `pin.png` automatically. Worth doing once; it will block every day otherwise.

## Fallback

`pin.md` contains a complete `image_prompt` — a full text-to-image prompt in the brand style, 2:3 portrait, with the exact headline text to render. That can produce the pin without Canva if preferred.
