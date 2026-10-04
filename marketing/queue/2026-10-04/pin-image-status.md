# pin.png — not downloaded

**Status:** the Canva design was created and exported successfully, but the PNG could not be downloaded into this folder. `pin.png` is therefore missing from this day's queue entry.

## The design exists — open it here

- **Canva design:** https://canva.link/94k2eu74q4bbwdo
- **Design ID:** `DAHXDGtXjwQ`
- Format: Pinterest Pin, portrait (2:3)

A human can open that link and use Canva's own Share → Download to get the PNG, then drop it in this folder as `pin.png`.

## What failed

The Canva MCP steps all worked:

1. `create-design` — generated the pin from the brand-style brief. ✅
2. `get-export-formats` — confirmed PNG is supported. ✅
3. `export-design` — produced a 1000x1500 lossless PNG and returned a signed download URL on `export-download.canva.com`. ✅
4. `curl -L -o marketing/queue/2026-10-04/pin.png <export url>` — **failed, twice.**

Both download attempts failed identically:

```
curl: (56) CONNECT tunnel failed, response 403
export-download.canva.com:443 — connect_rejected
(the egress proxy denied the CONNECT (organization policy) or could not reach the destination)
```

So this is not a Canva problem and not a bad URL. This cloud session's outbound traffic goes through an agent proxy whose network policy does not allow `export-download.canva.com`, so the signed export URL cannot be fetched from here at all. The signed URL also expires (roughly 20 hours from export), so it isn't worth retrying later from a different session — regenerate the export instead.

## How to fix this for future runs

Either:

- allow `export-download.canva.com` in the remote environment's network policy (the egress allowlist for this environment), so `curl` on the export URL works; or
- accept that the agent can only hand over the Canva design link, and have a human do the final download.

Until one of those happens, every run will get this far and stop at the same place.

## Fallback

`pin.md` contains a complete text-to-image prompt (`## image_prompt`) that reproduces this pin in the brand style at 2:3, including the exact headline to render. That prompt is the intended fallback and needs no Canva access.
