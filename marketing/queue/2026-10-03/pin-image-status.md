# Pin image status — 2026-10-03

**`pin.png` was NOT committed.** The Canva design was created and exported successfully; only the file download failed.

This is the **45th consecutive day** this has happened, with the identical error every time.

## What worked

The pin design exists in Canva and is ready to review and download by hand:

- **Design ID:** `DAHW9KMIzHQ`
- **Title:** Laptop sticker QR Pinterest pin
- **Edit:** https://www.canva.com/d/JlLeFma-UufVc81
- **View:** https://www.canva.com/d/7Wa2YWXL4yKea9d

Verified by reading the design back: single page, **1000 × 1500 px** (2:3), and the rendered text reads:

```
Every other sticker on your laptop is a Freeloader
I get paid every time you scan this.
peels off clean
you pick the brand
Lidquid.com
```

PNG export also succeeded on Canva's side — the export job returned `status: success` and a valid signed download URL.

## What failed

Downloading that export URL into the repo. Two attempts, both rejected identically by this session's egress proxy:

```
curl: (56) CONNECT tunnel failed, response 403
export-download.canva.com:443
```

This is a network-policy block on `export-download.canva.com` in the remote execution environment. It is not a Canva error and not a problem with the design. Nothing in the repo can fix it; the host needs to be reachable from the session, or the file has to be downloaded manually.

I did not attempt to route around the policy block.

I also could not read the proxy's own status endpoint to confirm the current policy — `curl "$HTTPS_PROXY/__agentproxy/status"` was denied by this session's command classifier, so the diagnosis above rests on the curl error alone, which is identical to the previous 44 days.

## How to finish this by hand

1. Open the view link above.
2. Share → Download → PNG, size 1000 × 1500.
3. Save it as `marketing/queue/2026-10-03/pin.png`.

## Fallback

The `image_prompt` in `pin.md` is a complete, self-contained text-to-image prompt for the same pin in the brand style, if you'd rather regenerate the image elsewhere than download this one.

## This needs a decision, not another retry

Forty-five days, forty-five Canva designs, zero images in the repo. The copy half of this routine works; the image half has never once succeeded. Two ways to fix it:

- **Allowlist `export-download.canva.com`** for this environment's egress policy, or
- **Change step 4** of the routine to a generation path whose bytes can be written straight to disk.

Until one of those happens, every future run will burn the same Canva quota and produce another copy of this file.
