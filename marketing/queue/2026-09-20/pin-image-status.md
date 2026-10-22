# pin.png — not downloaded (egress policy blocked)

**Status: the pin design was created and finished in Canva, but the PNG could not be pulled into this container.**

The design is done — it is not a fallback-to-the-prompt situation. It just needs a manual download.

## The design

- **Design ID:** `DAHVvFxpXHs`
- **Title:** Lidquid pin — the back of your laptop is unemployed (2026-09-20)
- **Size:** 1000 × 1500 px (2:3), cream `#f6f1e7` background
- **Content as committed:** headline "the back of / your laptop is / unemployed"; subline "put it to work — $ per verified scan"; "lidquid.com" top right; illustrated laptop with a QR code on the lid and a teal liquid drip melting off the bottom edge.

Open it from the Canva account this session was authenticated against (search recent designs for the title above, or the design ID), then **Share → Download → PNG** and save it into this folder as `pin.png`.

## What failed

Downloading the exported file. Both Canva file hosts are blocked by this environment's network policy:

```
design.canva.ai:443         → gateway answered 403 to CONNECT (policy denial)
export-download.canva.com:443 → gateway answered 403 to CONNECT (policy denial)
```

`export-design` itself succeeded and returned a signed URL on `export-download.canva.com`; the `curl` of that URL was rejected by the egress proxy, not by Canva. Per the proxy's own guidance, a 403 policy denial is reported rather than retried or routed around, so no further download attempts were made. The export URL is also short-lived (a few hours), so it is not worth recording here.

## To fix this for future runs

Allowlist `export-download.canva.com` (and `design.canva.ai`, which serves the candidate thumbnails) in the environment's network policy. With that host permitted, step 4 of the routine completes end to end and `pin.png` lands in the queue folder automatically.

## Review note

The pin was visually checked via the editor thumbnail before committing, and it reads correctly. Two honest caveats for whoever reviews it:

- The first AI generation came back with off-brief copy — "Unemployed no more / Turn your laptop into art". That was replaced with the correct headline; "turn your laptop into art" is not a claim Lidquid makes and was not kept.
- The layout is more minimal than the full brand spec in `pin.md`: it has the cream paper, the ink headline, the teal laptop, the coral/teal QR and the liquid drip, but not the thick hand-drawn ink border, washi tape, doodle pills or marker handwriting. It's on-palette and on-message, but it is cleaner and less zine-y than the house style. Worth a pass by hand before it goes anywhere near Pinterest.
