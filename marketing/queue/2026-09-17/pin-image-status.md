# pin.png — not downloaded

**Status: the pin was designed and exported successfully in Canva, but the PNG could not be pulled into this repo.** The design is finished and waiting in Canva — only the file transfer failed.

## What worked

- Canva design created and committed: **design ID `DAHVdDtzFvU`**, 1 page, **1000 × 1500 px** (correct 2:3 Pinterest ratio).
- Title: *Pinterest Pin - YOUR LID IS FACING THE WHOLE CAFÉ*
- View: https://www.canva.com/d/ynkeig19TtnoDxa · Edit: https://www.canva.com/d/u1re7wihM5bFJ5c
- PNG export job `8ef5c3fc-ca63-4416-bfd7-76769359e40f` completed and returned a signed download URL.

## What failed

This session's egress proxy denied every Canva media host with a 403 on CONNECT (organisation network policy), so `curl` could not retrieve the exported file:

| host | attempt | result |
|---|---|---|
| `design.canva.ai` | candidate thumbnails | `connect_rejected` (403 on CONNECT) |
| `export-download.canva.com` | the actual PNG export | `connect_rejected` (403 on CONNECT) |
| `media.canva.com` | document-image fallback | connection failed (`000`) |
| `s3.amazonaws.com` | signed S3 fallback | `403` — returned an XML error, not an image |

This is a network-policy limitation of the environment, not a Canva failure. Nothing about the design itself needs redoing.

## How to get the file

1. Open the design (link above) and **Share → Download → PNG**, then save it as `marketing/queue/2026-09-17/pin.png`; or
2. Re-run the export from a session whose network policy allows `export-download.canva.com`; or
3. Ignore the Canva version entirely and generate the image from the `image_prompt` in `pin.md`, which is a complete standalone text-to-image prompt and is the intended fallback.

## Note on the design as it stands

Two things a human should look at before this ships:

- **The generator's first pass was unusable.** It ignored the brief entirely and invented its own copy — "Laptop Etiquette", "No Privacy", "Stay Aware" — over a stock photo of a laptop. That attempt was discarded. The second pass, with the exact text pinned in the prompt, is the one that was kept.
- **Canva's template placeholders were replaced, not missed.** The generated layout shipped with `reallygreatsite.com`, `@reallygreatsite` and "Check it out!"; these were edited out and replaced with `LIDQUID.COM`, "your lid · their ad · your money", and "you approve the brand · peels off clean · $ per verified scan".
- **The rendered headline is a shortened variant.** The image reads "YOUR LID IS FACING THE WHOLE CAFÉ"; the pin title in `pin.md` is the longer "the back of your laptop is facing the whole café." The short form was used to keep the type large enough at pin size. Either is fine — just don't ship them as if they're the same line.
- **Off-brief details that remain:** the headline is set in a serif rather than the chunky display face, there is no hand-drawn ink border or washi tape, the QR is a plain small square rather than the chunky liquid-drip treatment, and the headline crowds the laptop illustration slightly. The result reads as a competent generic pin rather than the riso/zine look. The `image_prompt` in `pin.md` describes the intended version properly.
