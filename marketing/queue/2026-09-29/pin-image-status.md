# pin.png — not committed (manual download needed)

**Status: the design was created successfully in Canva. Only the download into this repo failed.**

## What worked

- Canva design generated in the Lidquid riso/zine style, Pinterest Pin portrait format, with the
  headline "my laptop made a friend."
- PNG export job ran and succeeded (1000x1500, lossless, page 1). Canva returned a signed
  download URL.

## What failed

Downloading that URL into the repo. Two attempts, both rejected at the network layer, not by Canva:

```
curl: (56) CONNECT tunnel failed, response 403
export-download.canva.com:443 — connect_rejected
(the egress proxy denied the CONNECT (organization policy) or could not reach the destination)
```

`export-download.canva.com` is not on this cloud environment's network allowlist, so the signed
export URL cannot be fetched from inside the session. This is an environment policy, not a Canva
error and not a problem with the design — re-running the job will fail the same way until the host
is allowed.

## How to get the image (30 seconds, manual)

1. Open the design: **https://canva.link/47u0w784i57rkcg** (design id `DAHWlMiNaRM`)
2. Check it against `pin.md` — same headline, palette and motifs; adjust anything the generator
   drifted on. This was one generation pass and has not been reviewed by a human or by the agent,
   since the agent could not fetch the rendered file to look at it.
3. Share → Download → PNG, 1000 x 1500.
4. Save it into this folder as `pin.png` and add it to this branch.

## Fallback

`pin.md` contains a complete standalone `image_prompt` — a full text-to-image brief in the brand
style with the exact headline text to render. If the Canva design isn't right, that prompt can be
run through any image generator instead.

## To fix this permanently

Add `export-download.canva.com` to the allowed hosts for this environment's network policy, so
future daily runs can commit `pin.png` on their own.
