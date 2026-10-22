# Pin image status — 2026-10-02

**`pin.png` was NOT committed.** The Canva design was created successfully; only the file download failed.

## What worked

The pin design exists in Canva and is ready to review and download by hand:

- **Design ID:** `DAHW3Eh1LiA`
- **Title:** Lidquid Pinterest Pin
- **Edit:** https://www.canva.com/d/FTYyzXGyV5_nZct
- **View:** https://www.canva.com/d/-HYBTaVDAeZBfzL

Verified against the brief: single page, **1000 × 1500 px** (2:3), and the rendered text reads exactly:

```
the side
you never
see
faces the whole café
I get paid every time you scan this.
peels off clean
you pick the brand
lidquid.com
```

PNG export also succeeded on Canva's side — the export job returned a valid download URL.

## What failed

Downloading that export URL into the repo. Two attempts, both rejected identically by this session's egress proxy:

```
curl: (56) CONNECT tunnel failed, response 403
export-download.canva.com:443 — connect_rejected
(the egress proxy denied the CONNECT (organization policy) or could not reach the destination)
```

This is a network-policy block on `export-download.canva.com` in the remote execution environment, not a Canva error and not a problem with the design. Nothing in the repo can fix it; the host needs to be reachable from the session, or the file has to be downloaded manually.

I did not attempt to route around the policy block.

## How to finish this by hand

1. Open the view link above.
2. Share → Download → PNG, size 1000 × 1500.
3. Save it as `marketing/queue/2026-10-02/pin.png`.

## Fallback

The `image_prompt` in `pin.md` is a complete, self-contained text-to-image prompt for the same pin in the brand style, if you'd rather regenerate the image elsewhere than download this one.

## For whoever runs this next

If `export-download.canva.com` stays blocked, this will fail every day. Worth either allowlisting that host for the session's proxy, or switching step 4 to a generation path whose output can be written straight to disk.
