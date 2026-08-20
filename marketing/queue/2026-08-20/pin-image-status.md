# Pin image status — 2026-08-20

**`pin.png` was NOT written to this folder.** The design itself exists and is finished in Canva — only the download step failed.

## What worked

- Generated the pin in Canva at the correct Pinterest size, **1000 × 1500 px (2:3)**.
- Rebuilt it to brand: cream ground, LIDQUID wordmark, headline "your laptop lid is dead space. / rent it out.", the laptop-from-behind illustration with a QR sticker melting into liquid drips, a "scan me" starburst badge, three doodle pills (`$ per verified scan`, `peels off clean`, `you approve the brand`) and `lidquid.com`.
- Committed and saved in Canva.

**Design:** `DAHS3hNG8mA` — https://www.canva.com/d/o-8MPl3MdNuEoO9

## What failed

The download. This session's egress policy blocks both Canva asset hosts:

| Host | Purpose | Result |
|---|---|---|
| `design.canva.ai` | candidate thumbnails | `CONNECT tunnel failed, response 403` |
| `export-download.canva.com` | PNG export download | `CONNECT tunnel failed, response 403` |

The PNG export job itself **succeeds** — Canva returns a valid signed URL — but `curl` cannot reach the host to fetch it. The agent proxy's own guidance is that a 403 on CONNECT is an organisation egress-policy denial and must not be retried or routed around, so it was not.

Note that Canva's export URLs are short-lived (signed, ~1 hour), so no useful link can be committed here; the design link above is the durable one.

## What a human needs to do

Open the design and **Share → Download → PNG**, then drop the file in this folder as `pin.png`. It is already the right size and needs no further edits.

## To fix this permanently

Allow `export-download.canva.com` (and `design.canva.ai` for thumbnails) in the environment's network policy. With those two hosts reachable, this step is fully automatic and future runs will commit `pin.png` themselves.

## Fallback

`pin.md` contains a complete `image_prompt` that reproduces this pin in any text-to-image tool if the Canva design is ever lost.

## One thing worth knowing for future runs

Canva's image generator baked **garbled fake text** into the illustration's doodle pills — "PEEL SOFF", "DIEP CUENUR", "$ PER VEERFIED SFIANN". That is normal for AI image models and would have shipped a broken-looking pin. It was fixed by patching over the garbled areas and setting real text elements on top. Future runs should assume any AI-generated art needs its lettering checked and replaced with real type.
