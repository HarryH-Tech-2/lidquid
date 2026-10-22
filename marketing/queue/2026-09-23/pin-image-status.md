# pin.png — not downloaded

**Status: the Canva design was created successfully. Only the file download failed.**

## What worked

A 1000×1500 Pinterest pin was generated in Canva in the brand style, from the brief in `pin.md`:

- **Design ID:** `DAHWBLP7zIg`
- **Open in Canva:** https://canva.link/el8o0znhdig8nv5
- The PNG export job also succeeded (Canva returned a signed download URL, 1000×1500, lossless).

## What failed

Downloading that PNG into this folder. `curl` to `export-download.canva.com` was refused by this session's egress proxy:

```
curl: (56) CONNECT tunnel failed, response 403
export-download.canva.com:443 — connect_rejected (organization egress policy)
```

A 403 on CONNECT is an organisation policy denial, not a transient error. The proxy's own guidance is to report a blocked host rather than retry it or route around it, so no further download attempts were made. The blocked host is **`export-download.canva.com`** — allowing it would let future runs commit `pin.png` automatically.

## How to get the image

Either of these, whichever is easier:

1. Open https://canva.link/el8o0znhdig8nv5, check the design, and download it as PNG (1000×1500) — then drop it in this folder as `pin.png`.
2. Ignore Canva entirely and use the `image_prompt` at the bottom of `pin.md`, which is a complete standalone text-to-image prompt for the same pin.

Note that the Canva output has not been visually reviewed by this run — it was generated from the brief but never seen, since the export could not be fetched. Worth a look before anything is scheduled.
