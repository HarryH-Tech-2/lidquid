# Digest — 2026-09-28

## (a) Repo changes since the previous run

**No changes.** `git log --since='26 hours ago'` returns nothing — no commits to the repo in the last 26 hours.

For context, the most recent work on the site (older than this window) was the landing page conversion overhaul: GA4 funnel events, the brand lead form, and the SEO files (`robots.txt`, `sitemap.xml`). The live page currently runs the `v2-2026-09` page variant.

## (b) Queue status

**Days of drafts in the queue: 1** (this one). This is the first run of the marketing-drafts agent — `marketing/` did not exist before today, so there is no prior queue to differentiate against.

**Angles covered so far:**

| day | angle |
|---|---|
| 2026-09-28 | dead space — the back of the lid is the only surface you never look at |

**Angles still unused** (for rotation on following days): coffee money / "get paid to sit in cafés"; the social & ice-breaker angle ("wait, what is that?"); "you approve every brand"; "peels off clean, zero residue"; cities open by demand — joining is the vote; freelancer & remote-worker life; student life; café-regular identity; the for-brands side (pay for verified scans, not impressions); "no posting, no followers, no promoting".

## (c) Three things to make next

1. **The ice-breaker / social angle as a carousel, not a single pin.** The site already has a whole section on this ("Your lid doesn't just earn" — quiet regulars becoming people you actually know), and it is the one claim no competing side-hustle offer can make. It deserves a multi-frame Instagram carousel rather than a one-image pin, because the payoff is a small story: table two over leans across, asks what the sticker is, and now you know the freelancer you've sat near for six months. Pinterest pins sell a proposition; carousels sell a scene.

2. **A "cities open by demand" pin built to be shared into city-specific communities.** Cities opening in order of waitlist demand makes joining a competitive act, which is a genuinely different emotional hook from earning — closer to voting than to a side hustle. A pin template with the city name as the swappable element ("is your city next?") could be reposted into local café, coworking and student subreddits and groups without reading as an ad. Worth drafting the template first, then a city list once the waitlist shows where demand actually sits.

3. **A "peels off clean" reassurance asset aimed at the objection, not the offer.** "Will this wreck my laptop?" is the FAQ most likely to kill a signup, and it is the only concern that is purely physical — a visual medium answers it better than copy does. A close-up-style pin of a corner of vinyl being lifted from a bare lid, with "zero residue" as the whole headline, targets people who already want the money and are stuck on the risk. It also seeds the search terms around removable laptop decals.

## Notes / anything missing

**`pin.png` is missing.** The Canva design was created and exported fine, but this session's network policy blocks `export-download.canva.com`, so the PNG could not be pulled into the repo (two attempts, both `403 CONNECT tunnel failed`). Full detail, the Canva design link, and two ways to finish it by hand are in `pin-image-status.md`. The `image_prompt` in `pin.md` is the standalone fallback.

Allowing `export-download.canva.com` in the environment's network policy would unblock this for every future run.

Copy side is complete: `pin.md`, `social.md` and this digest are all written and within platform limits (pin title 61/100, pin description 483/500, X 237/240, 8 pin hashtags, 11 IG hashtags).

The PR was opened with the GitHub MCP tools rather than `gh pr create` — the `gh` CLI is not available in this environment.
