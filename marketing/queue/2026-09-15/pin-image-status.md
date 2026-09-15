# pin.png — not generated this run

`pin.png` is **missing** from this folder. The Canva design was created successfully, but it could not be downloaded into the repo.

## What worked

- `generate-design` returned 4 pin candidates in the Lidquid brand style.
- Candidate 1 was converted into a real Canva design.
- The design is **1000 × 1500 px** (2:3), the correct Pinterest pin size.
- Both PNG and JPG export jobs completed successfully on Canva's side.

## What failed

Downloading the exported file. This session's outbound network policy denies the Canva
asset hosts at the proxy — `CONNECT tunnel failed, response 403`:

- `export-download.canva.com:443` — denied (PNG attempt, then JPG attempt)
- `design.canva.ai:443` — denied (candidate thumbnails)

This is an environment egress policy, not a transient network error or a Canva problem, so
retrying from this session will keep failing until the policy allows those hosts.

## The design (open it in Canva)

| | |
|---|---|
| design id | `DAHVRBHrYPQ` |
| title | Pinterest Pin - Lidquid |
| size | 1000 × 1500 px |
| edit url | https://www.canva.com/d/o5NvUpZ4C__YhmP |
| view url | https://www.canva.com/d/lVnO3BO_Qj4Od1- |

The signed export URLs the agent received are omitted here deliberately — they expire within
hours and are not worth committing. Re-export from the Canva editor instead.

## ⚠️ Nobody has looked at this design yet

The agent could not fetch the thumbnail either, so **the pin has not been visually checked by
anyone**. Before this is used, open it in Canva and confirm:

1. **The headline reads exactly `wait, what is that?`** — AI image generation frequently garbles
   rendered text. This is the most likely thing to be wrong.
2. The handwriting line reads `it's my lid. it's ad space. i get paid.`
3. The footer reads `lidquid.com`.
4. **No invented figures** appear anywhere — no rate per scan, no monthly earnings, no user
   counts. The only money phrasing allowed is `$ per verified scan`. If the generator added a
   number, delete it.
5. Currency symbols are `$`, never `£`.
6. The QR is decorative only and is not presented as scannable.

## To finish this by hand

1. Open the edit url above.
2. Fix anything from the checklist.
3. Download as PNG at 1000 × 1500.
4. Save it to `marketing/queue/2026-09-15/pin.png`.

## Fallback if Canva is a dead end

`pin.md` contains a complete `image_prompt` written for any text-to-image tool, with the exact
headline text to render. It is a standalone substitute for this design.

## To fix this for future runs

Allow `export-download.canva.com` and `design.canva.ai` in the environment's network policy, so
the agent can download its own exports and see its own thumbnails.
