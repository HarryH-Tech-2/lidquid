# Digest — 2026-08-29

## a) Repo changes since the last run

`git log --since='26 hours ago' --oneline` → **no changes.**

The repo has been quiet. The most recent commit is `acfea02` from 2026-08-20, "Landing page refresh: $ currency, How-it-works section, carousel and form updates" — nine days old and already live before this run started. Nothing has shipped since.

Worth noting: this is the **first** run of the marketing-drafts agent. There was no `marketing/` directory in the repo at all, so this run created `marketing/queue/` from scratch. Every future run has a baseline to compare against now.

## b) Queue status

- **Days of drafts in the queue: 1** (`2026-08-29`)
- **Angles covered so far:**
  - `2026-08-29` — **the side you never see.** The back of the laptop as dead ad space: the only surface you own that faces everyone except you. Headline: "YOUR LID IS DOING NOTHING."
- **Angles still unused** (for rotation on future days): coffee money · the social / ice-breaker angle · you approve every brand · peels off clean, zero residue · cities open by demand (vote with your city) · freelancer & remote-worker life · student life · café-regular identity · what counts as a verified scan · no posting, no followers.

## What's missing from this run

All three text drafts (`pin.md`, `social.md`, `digest.md`) are complete. **`pin.png` is not in the folder.**

The pin was designed in Canva successfully — 1000 × 1500, on-brand, reviewed and corrected (the generator duplicated "you pick the brand.", which was removed and saved). It's design `DAHTrN_0EFo`, editable at https://www.canva.com/d/sHzE0oqhA40vNOF. What failed was purely the download: this session's network policy returns `403` at CONNECT for every Canva host, including `export-download.canva.com` where the signed PNG lives. Swapping the URL to the reachable `s3.amazonaws.com` fails on `SignatureDoesNotMatch` because SigV4 signs the host header. Full detail in `pin-image-status.md`.

**A human needs to open the Canva link and download the PNG into this folder** — or use the `image_prompt` in `pin.md`, which is written to stand alone in any image generator.

Worth fixing before tomorrow: unless `export-download.canva.com` is added to the environment's allowlist, every future run will hit this same wall.

## c) Three things to make next

1. **A "cities open by demand" pin, city-agnostic but built to be duplicated.**
   Right now the site's only CTA is email + city, and the FAQ says outright that joining the list *is* the vote — but none of today's drafts lead with that. A pin whose headline is the mechanic ("your city opens when enough of you ask") gives people a reason to act *today* rather than bookmark. Build it as a template with one swappable word so it can be re-cut per city once the waitlist shows where demand actually is. No city names until the data says so — don't invent them.

2. **The ice-breaker angle, as its own post — not a footnote.**
   `index.html` has a whole section on it ("the part nobody expects") and it's the one claim that isn't about money, which makes it the one that survives a sceptical reader. "a tiny billboard that also happens to break the ice" is a stronger hook for Instagram and Threads than any earnings framing, and it dodges the trust problem of talking about money with no published numbers. Pair it with the café-regular identity angle later in the rotation.

3. **An objection-killer set, one objection per asset.**
   The FAQ is doing the heaviest lifting on the page and none of it has been turned into social yet. Three obvious singles: "will it wreck my laptop?" (peels clean, zero residue), "what counts as a verified scan?" (real person, real phone, first time — and no, not you in a mirror), and "what if I want out?" (peel it off, keep what you earned). Each is short, concrete, quotable, and needs zero numbers — which matters while there are no pilot figures to publish. Run them as a mini-series across three consecutive days.

## Constraints honoured this run

- No earnings figures, rates, or stats invented. Only "$ per verified scan", which the landing page already claims.
- Currency is `$` throughout; no `£` or `GBP`.
- No fabricated testimonials, press mentions, or partner brands.
- Nothing outside `marketing/queue/2026-08-29/` was touched.
