# Digest — 2026-09-10

## a. repo changes since the previous run

**No changes.** `git log --since='26 hours ago' --oneline` returned nothing. The most recent commit on `main` is `acfea02` — *"Landing page refresh: $ currency, How-it-works section, carousel and form updates"* — dated 2026-08-20, roughly three weeks old. Before that, the last bursts of work were the Pinterest Tag + conversion event wiring and the FAQ section with FAQPage structured data.

So the landing page has been stable for three weeks. Worth noting for whoever reviews this: the site currently has one CTA (waitlist: email + city), a four-step How-it-works section, the "spotted in the wild" carousel, the social/ice-breaker section, and a seven-question FAQ.

## b. queue status

**This is day 1 of the queue.** Before this run, `marketing/` did not exist at all — no previous drafts, no prior pin or social copy in the repo.

- Days of drafts in `marketing/queue/`: **1** (`2026-09-10`)
- Angles covered so far: **ad space / unused real estate** — "you already own a billboard (you just sit behind it)"

Angles still untouched, for rotation over the coming days:

| angle | covered? |
| --- | --- |
| ad space / unused real estate | ✅ 2026-09-10 |
| coffee money ("this is how I earn coffee money") | — |
| the social / ice-breaker angle | — |
| you approve the brand | — |
| peels off clean / zero residue | — |
| cities open by demand — vote with your city | — |
| freelancer & remote-worker life | — |
| student life | — |
| café-regular identity | — |
| what counts as a verified scan | — |
| no posting, no followers, no promoting | — |

One asset note: `assets/` already contains three "in the wild" photos named after angles — `wild-ad-space.jpg`, `wild-coffee-money.jpg`, `wild-cafe-scan.jpg` — which maps neatly onto the first three rotation slots if a future day wants a photo-led pin instead of an illustrated one.

**Missing / blocked:** `pin.png` is **not** in this folder. The Canva design was created fine (design ID `DAHUzOmH_a4`, 1000×1500, text verified) and the PNG export succeeded, but every `canva.com` host — `export-download.canva.com`, `design.canva.ai`, `www.canva.com` — is refused by this environment's egress policy with a 403 at the proxy, so the file could not be pulled into the repo. Full detail and a 30-second manual fix in `pin-image-status.md`. Knock-on effect: the candidate thumbnails were unviewable too, so the chosen design has been verified as text and geometry only — **nobody has actually looked at this pin yet.** Worth a glance before it goes anywhere.

## c. three suggestions for what to make next

1. **A "verified scan" explainer pin.** The FAQ answer — a real person, a real phone, a first-time scan, and no, not you in a mirror — is the single funniest and most trust-building thing on the site, and it's currently buried at the bottom of the page. It's also the answer to the sceptic's first thought ("couldn't people just farm this?"). A pin that's mostly one dry list of what doesn't count would travel well and pre-empts the objection before anyone has to ask it.

2. **A city-vote pin with no city named.** "cities open in order of waitlist demand" is the strongest reason to act *today* rather than bookmark, and it's the one claim on the site that makes joining feel like doing something rather than waiting. Build a pin around the vote mechanic — deliberately leaving the city blank, so it reads as an invitation rather than a launch announcement we can't back up. Pair it with a Pinterest description that asks the reader to name their city.

3. **A carousel-style Instagram set on the objection stack.** Three or four frames, one objection each: will it wreck my laptop, do I pick the brand, do I have to post, can I quit. All four answers already exist on the site verbatim, so there's nothing to invent — and the format suits the zine aesthetic better than a single image. This also gives us the first multi-frame asset in the queue, which is useful to have tested before any city actually opens.
