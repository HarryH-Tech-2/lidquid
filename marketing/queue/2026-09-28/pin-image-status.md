# Pin image status — 2026-09-28

**Result: the Canva design was created successfully, but `pin.png` could NOT be downloaded into the repo.**

## What worked

The pin design was generated in Canva in the brand style, Pinterest Pin portrait format, and exported as a 1000×1500 lossless PNG. The export job returned `status: success`.

- **Canva design:** https://canva.link/4tmsqz9cymxv8qd
- **Design ID:** `DAHWfCuNciI`

## What failed

Downloading the exported PNG into this repo. The export file is served from `export-download.canva.com`, and this session's outbound network policy denies that host:

```
curl: (56) CONNECT tunnel failed, response 403
export-download.canva.com:443 — connect_rejected
(the egress proxy denied the CONNECT (organization policy))
```

Attempted twice, same result both times. This is an environment network-policy block, not a Canva error — nothing about the design or the export was wrong, and the file is sitting ready on Canva's side. Export download URLs are also time-limited, so the link above (the design itself) is the durable route, not the expired export URL.

## What a human should do

Either of these, whichever is quicker:

1. **Open the Canva design** at the link above, eyeball it against `pin.md`, and use Canva's own *Share → Download → PNG* to save it as `marketing/queue/2026-09-28/pin.png`. Check the size is 1000×1500.
2. **Ignore the Canva version** and use the `image_prompt` in `pin.md` in any text-to-image tool. That prompt is written to stand alone and is the intended fallback.

Worth checking the generated design against the brand rules before use — in particular that no dollar figure, rate, or earnings stat has been invented anywhere on the image, and that the palette stayed within cream / ink / sun yellow / coral / teal.

## To unblock this for future runs

Allow `export-download.canva.com` (Canva's export CDN) in the environment's network policy. Without it, every run of this agent will produce the design in Canva but never land the PNG in the repo.
