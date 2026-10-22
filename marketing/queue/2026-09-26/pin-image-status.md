# pin.png — not committed

`pin.png` is **missing from this folder**. The Canva design exists and the PNG export
succeeded; only the download into the repo was blocked.

## what worked

- **Design created** in the Lidquid brand style, Pinterest Pin portrait format, via the Canva
  MCP tools. Design ID `DAHWTOOttwg`.
- **Open / edit it here:** https://canva.link/homejdscxru8t5c
- **PNG export succeeded** at 1000×1500 px, page 1, lossless. Canva returned a signed
  download URL and reported the export job status as `success`.

## what failed

Downloading that URL into the repo. `curl` could not reach the Canva export CDN:

```
curl: (56) CONNECT tunnel failed, response 403
export-download.canva.com:443 — connect_rejected
```

The session's agent proxy confirms the cause: the egress policy for this session does not allow
`export-download.canva.com`. This is an organization network-policy denial, not a Canva error
and not a transient failure — the proxy README states that 403/407 denials must be reported
rather than retried or routed around, so no retry was attempted and no alternative route was
used. The same call will fail identically until the host is allowed.

## how a human can finish it

Either of these takes about a minute:

1. Open https://canva.link/homejdscxru8t5c and use Canva's own **Share → Download → PNG**, then
   save the file as `marketing/queue/2026-09-26/pin.png`.
2. Or, to unblock this permanently, add `export-download.canva.com` to the allowed egress hosts
   for the environment that runs this scheduled job. Every future run needs it, so option 2 is
   the one worth doing.

Note that the signed export URL Canva returned is short-lived (roughly 22 hours, and it expired
on 2026-09-27), so it has deliberately not been pasted into this repo. Re-exporting from the
design is instant.

## fallback

**The design is not blocking publication.** `pin.md` contains a complete `image_prompt` — a
full text-to-image prompt in the brand style, 2:3 portrait, with the exact headline to render.
That was always the documented fallback, and it can produce the pin without Canva at all.
