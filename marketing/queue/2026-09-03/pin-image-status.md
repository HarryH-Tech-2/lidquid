# pin.png — NOT generated in-repo (same block as 2026-09-02)

**Status:** the Canva design was created and exported successfully. The PNG could
not be downloaded into the repo. `pin.png` is missing from this folder.

## What worked

- `generate-design` returned 4 Pinterest-pin candidates in the brand style.
- Candidate 1 was promoted into the Canva account:
  - **Design ID:** `DAHUJGbsJYc`
  - **Title:** "Handcrafted Zine Style Pinterest Pin - 'YOUR LID'"
  - **Edit:** https://www.canva.com/d/LFSVmanynd2AEP4
  - **View:** https://www.canva.com/d/f3xS687OsiQDQ7y
- `get-export-formats` confirmed PNG support; `export-design` produced a valid
  1000×1500 lossless PNG export URL.

## What failed

Downloading the export. This session's egress proxy still returns **403 CONNECT
(policy denial)** for every Canva host:

```
export-download.canva.com:443 — connect_rejected (403)
www.canva.com:443             — connect_rejected (403)
design.canva.ai:443           — connect_rejected (403)
```

Two download attempts were made (curl, then python urllib); both were rejected at
the gateway, confirmed in the proxy's own `recentRelayFailures` log. The Canva
*MCP tools* work fine — they route via the Anthropic MCP proxy, not this egress
path — so design creation and export succeed and only the file transfer fails.
TLS verification was not disabled and `HTTPS_PROXY` was not unset.

The same block hides the four candidate thumbnails (`design.canva.ai`), so
**candidate 1 was again picked without being seen.** Worth eyeballing the edit
link before publishing.

## Note on the export URL

The signed export URL expires ~6.5 hours after generation (it was set to expire
2026-09-03 14:00 UTC), so it is deliberately not recorded here — it would be dead
by the time anyone read this. Use the edit link above instead; it doesn't expire.

## How to unblock

1. **Manual (fastest):** open the edit link, download as PNG 1000×1500, drop it
   into this folder as `pin.png`.
2. **Permanent:** add `export-download.canva.com` (and `design.canva.ai` for
   thumbnails) to the environment's network allowlist, so future daily runs can
   commit the image themselves. This is the second consecutive day lost to this.

## Fallback

`pin.md` contains a complete `image_prompt` — the full text-to-image prompt in
the brand style with the exact headline to render. It can be pasted into any
image generator to produce the pin without Canva at all.
