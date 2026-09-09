# pin.png — not downloaded (day 21 of 21)

**Status:** the Canva design was created and exported successfully, but the PNG could **not** be saved into this folder. `pin.png` is missing.

**This is not a one-off.** Every one of the 21 days of drafts produced so far (2026-08-20 → today) contains a `pin-image-status.md` and none contains a `pin.png`. The Canva download step has never succeeded, not once, since the agent started running. Every day the agent burns a Canva generation and export, then throws the result away.

## What worked
1. `generate-design` returned 4 Pinterest pin candidates from the brand-style prompt.
2. Candidate 1 became a real design: **"Pinterest Pin - your notice period is one peel."**
   - Edit: https://www.canva.com/d/Hrkg1s0thHL1-AT
   - View: https://www.canva.com/d/lCKV3aONeXSeELu
   - Design ID: `DAHUtPud7So`
3. `export-design` produced a 1000×1500 PNG and returned a signed download URL.

## What failed
Downloading it. All outbound traffic goes through an egress proxy with a host allowlist, and Canva's asset hosts are not on it:

```
curl: (56) CONNECT tunnel failed, response 403
export-download.canva.com:443 — connect_rejected (organization policy)
design.canva.ai:443        — connect_rejected (organization policy)
```

Tried twice, per the runbook. The second host being blocked means candidate **thumbnails** can't be fetched either, so the four candidates were never seen and candidate 1 was picked blind — true on every previous day too.

The signed URL also expires in about 8 hours, so it is not worth pasting here for later use.

## The fix (one-time, stops this recurring forever)
Add these two hosts to the environment's network allowlist:

- `export-download.canva.com`
- `design.canva.ai`

Until that happens, every future run will keep producing a Canva design and no local image. If allowlisting isn't possible, the honest move is to drop step 4 from the agent's prompt and rely on the `image_prompt` in `pin.md`, rather than repeating a step that has failed 21 times.

## What to do with today's pin in the meantime
Either open the edit URL above, check it (it was chosen sight-unseen — verify the headline text rendered correctly and the palette held), and save the PNG manually as `marketing/queue/2026-09-09/pin.png`; or generate the image from the `image_prompt` in `pin.md`, which is self-contained and is the intended fallback.
