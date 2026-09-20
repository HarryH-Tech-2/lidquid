# Digest — 2026-09-20

## a) repo changes since the previous run

**No changes.** `git log --since='26 hours ago' --oneline` returned nothing. The most recent commit on `main` is from 2026-09-15: the landing-page conversion overhaul (GA4 funnel events, brand lead form, SEO files). Nothing has landed in the last day.

## b) queue status

- **Days of drafts on file: 1** — this is the first entry in `marketing/queue/`. There was no `marketing/` directory in the repo before today, so this run created it.
- **Angles covered so far:**
  - `2026-09-20` — dead space / "the lid you never look at": the back of the laptop is the one surface the owner never sees and everyone behind them does.
- **Angles still unused** (for rotation): coffee money, ad space, the social/ice-breaker angle, "you approve the brand", "peels off clean", "cities open by demand — vote with your city", freelancer/remote-worker life, student life, café-regular identity, "what counts as a verified scan", the brand-side pitch.

Note for future runs: `assets/` already holds `wild-coffee-money.jpg`, `wild-ad-space.jpg` and `wild-cafe-scan.jpg`, which suggests the coffee-money, ad-space and café-scan angles already have photography behind them on the live site — worth pairing a pin with an existing asset rather than always generating new art.

## c) three suggestions for what to make next

1. **A "cities open by demand — vote with your city" pin.** The site's strongest under-used mechanic is that joining the waitlist *is* the vote, and it's the only part of the offer that rewards urgency without inventing a fake deadline. A pin built around "your city is on the list. is it top of it?" gives people a reason to join today rather than bookmark, and it makes the pilot's one-city-at-a-time constraint feel like scarcity instead of a limitation.

2. **An ice-breaker / "wait, what is that?" carousel for Instagram.** The landing page already has a whole section on the social side — quiet café regulars turning into people you actually know — and it's the one claim that isn't about money, so it reaches people who scroll past side-hustle content. A 3–4 card carousel of overheard café dialogue ending on the sticker would suit the zine voice better than a single static pin.

3. **A brand-side LinkedIn post on what "verified scan" actually means.** Everything in the queue so far talks to laptop owners; the site has a full for-brands section that no draft addresses. "Deduplicated, bot-filtered, self-scans excluded — you see what was rejected and why" is a genuinely differentiated claim against impression-based advertising, and LinkedIn is where the people with a media budget are. It also feeds the brand lead form that the last commit built.

## missing / blocked

**`pin.png` is missing.** The Canva design was generated, corrected and committed successfully, but the exported PNG could not be downloaded into the container: this environment's network policy returns 403 to `export-download.canva.com` (and to `design.canva.ai`, which serves candidate thumbnails). The export itself worked — only the file transfer was blocked. Full detail, the design ID, and the manual download steps are in `pin-image-status.md`. Allowlisting `export-download.canva.com` would make this step work unattended in future runs.

Also worth flagging: the first AI generation returned off-brief copy ("Unemployed no more / Turn your laptop into art"). It was corrected before committing, but it's a reminder that generated pin text needs checking against the claims on `index.html` every run rather than being trusted.
