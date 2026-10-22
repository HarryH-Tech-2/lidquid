# pin.png — not downloaded (2026-10-01)

**Status: the Canva design was created and exported successfully. Only the final download into
this repo failed.** There is no `pin.png` in this folder.

## What worked

| Step | Result |
| --- | --- |
| Create 1000×1500 (2:3) Pinterest pin in Canva | ✅ succeeded |
| Confirm PNG is a supported export format | ✅ succeeded |
| Request the PNG export (1000×1500, lossless, page 1) | ✅ succeeded — export job returned `success` |
| `curl -L -o marketing/queue/2026-10-01/pin.png <export url>` | ❌ **failed** |

## What failed

```
curl: (56) CONNECT tunnel failed, response 403
export-download.canva.com:443 — connect_rejected
```

Outbound HTTPS in this session goes through an agent proxy that enforces an organization egress
policy. `curl -sS "$HTTPS_PROXY/__agentproxy/status"` confirms the reason:

```json
{ "kind": "connect_rejected",
  "detail": "gateway answered 403 to CONNECT (policy denial or upstream failure)",
  "host": "export-download.canva.com:443" }
```

`export-download.canva.com` is not on this session's egress allowlist. The proxy README is
explicit that a 403/407 is a deterministic policy denial and must be reported rather than
retried or routed around, so this was **not** retried — a second attempt would fail identically.
This is not a Canva outage and not a problem with the design.

## How a human can finish this in about 30 seconds

The design is live in Canva and ready to download by hand:

- **Design:** https://canva.link/7xlcryqpann5adj
- **Design ID:** `DAHWxClGFS4`

Open it → Share → Download → PNG → save as `marketing/queue/2026-10-01/pin.png`.

Please eyeball the render before it goes anywhere near Pinterest — AI layout tools tend to drift
on brand palettes and on the exact headline wording. It should read, in three stacked lowercase
lines, **"the back / of your laptop / is unemployed"**, with a sun-yellow marker swipe behind
"unemployed", and it should use only cream `#f6f1e7`, ink `#1c1a17`, sun `#ffb703`, coral
`#ff5d47` and teal `#0f766e`. Any QR code in the render is **decorative only** — it is not a real
Lidquid code and must not be presented as scannable.

## Fallback

`pin.md` contains a complete, self-contained `image_prompt` written for any text-to-image tool,
in the brand style, at 2:3 portrait, with the exact headline text to render. That prompt is the
intended fallback path and needs no Canva access.

## To fix this permanently

Add `export-download.canva.com` to the allowed egress hosts for this session's environment.
Every other Canva host the agent touched was already permitted — this one host is the whole
blocker, and clearing it would let future runs commit `pin.png` automatically.
