# Digest — 2026-09-15

## a. repo changes since the previous run

**No changes.** `git log --since='26 hours ago' --oneline` returned nothing.

This is the first run of the marketing-drafts agent — there was no `marketing/` directory in the repo before today, so there is no previous run to diff against. For context, the most recent commit on `main` is `acfea02 Landing page refresh: $ currency, How-it-works section, carousel and form updates`, which is what the copy in today's drafts was written against.

Current landing page shape (what the drafts mirror and do not exceed):
- Hero: "Turn your laptop lid into income." Single CTA — waitlist (email + city).
- How it works: join waitlist → approve a brand → stick it on → earn per verified scan.
- Social section: "the part nobody expects" — the sticker as an ice-breaker.
- FAQ: earnings depend on where the laptop lives, real pilot numbers published only after the first city runs; removable vinyl, zero residue; you approve every brand; verified scan = real person, real phone, first time; cities open by waitlist demand; no posting or promoting; peel off any time, keep what you earned.
- Status badge: "Pilot · 50 laptops · one city at a time".

## b. queue status

**Days of drafts in `marketing/queue/`: 1** (today, 2026-09-15).

Angles covered so far:

| day | angle | headline hook |
|---|---|---|
| 2026-09-15 | the ice-breaker / café-social | "wait, what is that?" |

Angles still unused (rotation backlog):
- coffee money — "this is how I earn coffee money"
- your lid is ad space — the tiny-billboard framing
- you approve the brand — control / not-a-sellout angle
- peels off clean — the zero-risk, zero-residue angle
- cities open by demand — "vote with your city"
- freelancer / remote-worker life
- student life
- café-regular identity

## c. three suggestions for what to make next

1. **A "cities open by demand — vote with your city" pin, next run.**
   It is the only angle that makes the CTA itself the payoff: joining the waitlist *is* the action, not a step before it. Every other angle has to argue its way to the CTA. Worth pairing with a pin image built around a hand-drawn tally/leaderboard doodle of city names, which is a different visual shape from today's laptop-and-QR composition, so the two pins don't cannibalise each other in a Pinterest feed.

2. **Reuse the three existing photo assets instead of only generating new pin art.**
   `assets/wild-coffee-money.jpg`, `wild-ad-space.jpg` and `wild-cafe-scan.jpg` already exist and are the "spotted in the wild" carousel images. Real photos outperform generated posters on Instagram specifically, and these map one-to-one onto three future angles. Suggest a future run produce one social post built around an existing asset rather than a Canva poster — no new image generation needed, and it keeps the feed from looking entirely illustrated.

3. **A short FAQ-answering post series, starting with "will it wreck my laptop?"**
   The FAQ section is the most objection-dense copy on the site, and "removable vinyl, zero residue" is the single biggest blocker for anyone who likes their laptop. One post per fair question is a cheap, repeatable format that never needs invented numbers — the answers are already written and approved on the page. Good fit for X/Threads where short answers travel.

## d. blockers / what's missing

- **`pin.png` was not produced this run.** The Canva design was created successfully at the right size (1000 × 1500, design `DAHVRBHrYPQ`) and exported fine on Canva's side, but this session's network policy blocks `export-download.canva.com` and `design.canva.ai` at the proxy (403 on CONNECT), so the file could not be downloaded into the repo and the agent could not even see a thumbnail. Full detail, the Canva links and a pre-publish checklist are in `pin-image-status.md`. **The design has not been looked at by anyone — the rendered headline text needs checking before use.** Fixing this for future runs means allowing those two hosts in the environment's network policy.
- No analytics access this run, so the digest cannot report on how previous drafts performed — only on what has been drafted. If scan/waitlist/Pinterest-tag numbers become available to this agent later, section (b) should grow a performance column.
