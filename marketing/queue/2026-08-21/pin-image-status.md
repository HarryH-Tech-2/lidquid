# pin.png — not committed

**Status:** the pin was designed and exported successfully in Canva. Only the *download into this repo* failed. `pin.png` is therefore missing from this folder.

## What worked
- Generated 4 pin candidates in the Lidquid brand style (riso/zine, cream + ink + yellow/coral/teal).
- Picked the strongest candidate and saved it as a Canva design at **1000 × 1500 px (2:3)** — correct Pinterest ratio.
- Edited it to remove two duplicated labels the generator produced (a truncated second `$ per verified` and a `(Peel off clean)` that repeated `peels off clean`).
- Committed the design and exported it as a lossless PNG at 1000 × 1500.

## What failed
Downloading the exported file. This sandbox routes all outbound HTTPS through an agent proxy, and every Canva host needed for the download is denied by the proxy's network policy:

```
design.canva.ai:443          → CONNECT tunnel failed, response 403
export-download.canva.com:443 → CONNECT tunnel failed, response 403
www.canva.com:443             → unreachable
```

`curl -L -o pin.png <export-url>` returns `curl: (56) CONNECT tunnel failed, response 403`, HTTP 000, 0 bytes. This is an environment network-policy limit, not a Canva error — the Canva MCP tools themselves worked fine throughout, because they call Canva server-side rather than through this container's proxy.

## How to get the image (pick either)

**Option A — open the design in Canva** (recommended; no expiry)
- Design ID: `DAHS7IxIjUY`
- View: https://www.canva.com/d/Bu6ZE6XtK_8KB-a
- Edit: https://www.canva.com/d/thtfs9hY63ARP8R

Download as PNG, save it here as `marketing/queue/2026-08-21/pin.png`.

**Option B — the direct export link** (⚠️ pre-signed, expires ~14:04 UTC on 2026-08-21, so it may already be dead)

```
https://export-download.canva.com/xIjUY/DAHS7IxIjUY/-1/0/0001-1281787482311576963.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH5AO7UJ26%2F20260820%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260820T170538Z&X-Amz-Expires=75527&X-Amz-Signature=5c5a464615d80e99ae655f796b6666c93eed8d25cdd2f5ce0809012eef1210b0&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Fri%2C%2021%20Aug%202026%2014%3A04%3A25%20GMT
```

**Option C — regenerate from scratch:** the full `image_prompt` in `pin.md` is a complete standalone text-to-image prompt and needs no Canva access.

## What the exported pin actually looks like
Cream paper background. Big lowercase display headline over two blocks: `you see one side of your laptop.` then `strangers see the other.` with a rough coral marker swipe behind the second line. Centre: a laptop with a chunky QR sticker, yellow finder-square brackets, drawn in loose black ink. Scattered zine doodles in yellow, coral and teal. Handwritten annotations: `$ per verified scan`, `peels off clean`, `you approve the brand`. Footer: `lidquid.com` reversed out of a solid black bar.

## Housekeeping for the account owner
Selecting a candidate creates a real design in the Canva account, so comparing options left one unused draft behind:

- **Keep:** `DAHS7IxIjUY` — *Indie Riso-Print Laptop Pin with Type Variations* (this is the pin)
- **Safe to delete:** `DAHS7E646Ck` — *Pinterest Pin - you see one side of your laptop* (rejected candidate; its edits were cancelled, nothing was saved to it)

## Suggested fix for future runs
Add `export-download.canva.com`, `media.canva.com` and `www.canva.com` to the environment's proxy allowlist. That single change makes step 4 fully automatic on every subsequent daily run.
