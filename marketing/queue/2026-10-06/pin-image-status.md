# pin.png — not generated (download blocked)

**Status:** the Canva design was created successfully. The PNG export was produced successfully. **The download into this repo failed** and `pin.png` is therefore absent.

## What worked

- Canva design created, 2:3 Pinterest pin, in the brand style with the headline **"small talk that pays"**.
  - design id: `DAHXPJH1Yv0`
  - open / edit: https://canva.link/pcjgv08ml9o71ty
- `get-export-formats` confirmed PNG support; the export job returned `status: success` with a signed download URL at 1000×1500, lossless.

## What failed

`curl -L` on the export URL failed with **`curl: (56) CONNECT tunnel failed, response 403`**.

The session's agent proxy recorded the reason:

```
kind:   connect_rejected
detail: gateway answered 403 to CONNECT (policy denial or upstream failure)
host:   export-download.canva.com:443
```

So `export-download.canva.com` is not on this session's allowed egress list. This is an organisation egress-policy denial, not a transient network error — the proxy's own guidance is that 403/407 denials must not be retried or routed around, so it was not retried.

## How a human can finish this in ~30 seconds

1. Open https://canva.link/pcjgv08ml9o71ty
2. Share → Download → PNG, size 1000 × 1500.
3. Save it as `marketing/queue/2026-10-06/pin.png` and push to this branch.

## Fallback

The complete text-to-image prompt in `pin.md` (`image_prompt`) stands as the fallback, and it is also the source of truth for how the Canva design above should look — the two were written from the same spec, so the prompt can be used to regenerate the pin in any image tool without reference to Canva.

## Fix for future runs

Allowing `export-download.canva.com` (and `*.canva.com`) in the environment's network policy would let this agent finish the image step unattended. Everything up to the download already works.
