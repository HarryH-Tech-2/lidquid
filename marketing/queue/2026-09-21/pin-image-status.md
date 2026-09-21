# pin.png — not downloaded (egress policy blocked)

**Status: the pin design was created, corrected and saved in Canva. The PNG could not be pulled into this container.** The design is finished — this is not a fall-back-to-the-prompt situation. It needs a manual download.

## The design

- **Design ID:** `DAHV1BiEGNM`
- **Title:** Lidquid pin — no, you can't scan your own sticker (2026-09-21)
- **Size:** 1000 × 1500 px (2:3), cream background
- **Content as saved:** headline "no, you can't scan your own sticker"; subline "real person · real phone · first scan / $ per verified scan"; illustrated laptop with a QR code and a yellow/coral liquid drip; "lidquid.com" at the bottom.

Open it from the Canva account this session was authenticated against (search recent designs for the title or the design ID), then **Share → Download → PNG** and save it into this folder as `pin.png`.

## What failed

The download, not the export. `export-design` succeeded and returned a signed URL; the `curl` of that URL was rejected by this environment's egress proxy:

```
export-download.canva.com:443 → gateway answered 403 to CONNECT (policy denial)
```

A plain reachability check on the same host returned the same 403 before any design work started, so this was not a transient failure. Per the proxy's own guidance a 403 policy denial is reported rather than retried or routed around, so no further download attempts were made. The export URL is short-lived (a few hours), so it is not recorded here.

**This is the 34th consecutive run to fail at this step** (every day from 2026-08-20). It is an environment fix, not a drafting one: allowlist `export-download.canva.com` in the network policy and step 4 completes end to end.

## What was caught and fixed

The first generation rendered the subline as **"real person · real phone · $8 per verified scan"**. That figure is fabricated — Lidquid publishes no rate, and inventing one breaks the brand rules. It was replaced with "real person · real phone · first scan / $ per verified scan" before the design was saved. A trailing full stop was also removed from the headline.

Worth knowing: the image model volunteered a fake dollar figure unprompted, on a prompt that explicitly forbade one. Any AI-generated pin from this pipeline needs its numbers read before it goes anywhere.

## Honest caveats for whoever reviews it

The pin is on-message and on-palette, but it is looser than the house style in `pin.md`:

- The laptop is drawn **open and facing the viewer, with the QR on the screen** — not the lid seen from behind, which is the whole point of the product. This is the biggest deviation and the one most worth fixing by hand.
- Missing from the brand spec: the thick hand-drawn ink border, the washi tape, the doodle pills ("no bots / no repeats / no mirrors"), and the crossed-out hand-with-phone that carries the joke.
- There is a **faint ghost of text baked into the background raster**, to the right of the word "sticker". It is part of the generated background image, so it cannot be edited out with the text tools. Masking it with a cream block was tried and reverted — the flat fill read as a visible patch against the paper texture, which looked worse.
- A small scribbled logo mark near the bottom reads ambiguously and may look like "liquid" rather than "Lidquid". Check it at full size.
- Body ink renders as `#2e2e2e` rather than the brand `#1c1a17`.

The `image_prompt` in `pin.md` remains the better spec. If this design gets used, treat it as a rough — or regenerate from the prompt in a tool where the output can actually be inspected at full resolution.
