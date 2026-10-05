# Digest — 2026-10-05

## (a) Repo changes since the previous run

**No changes.** `git log --since='26 hours ago' --oneline` returned nothing, so nothing has landed on `main` in the last 26 hours.

For context, the most recent work on `main` (older than this window) was the landing page conversion overhaul — GA4 funnel events, a brand lead form, and SEO files (`robots.txt`, `sitemap.xml`) — on top of an earlier refresh that moved all currency to `$`, added the How-it-works section, and wired up Pinterest Tag conversion tracking for waitlist signups.

Worth knowing for anyone reviewing this PR: the Pinterest Tag is already live on the landing page with a waitlist signup conversion event, so pins pushed from this queue should show up as attributed conversions rather than dark traffic. The `?ref=` params in these drafts are additive to that.

## (b) Queue status

**Days of drafts in the queue: 1** (this is the first entry — `marketing/queue/` did not exist before today).

| Day | Angle |
|---|---|
| 2026-10-05 | ad space / the unused surface — "the back of your laptop is the only side you never look at" |

**Angles covered so far:** ad space only.

**Angles still untouched** (for rotation on following days): coffee money · the social / ice-breaker angle · "you approve every brand" · "peels off clean" · cities open by demand — vote with your city · freelancer & remote-worker life · student life · café-regular identity · the brand-side pitch (pay per verified scan, not impressions) · what counts as a verified scan.

## (c) Three suggestions for what to make next

1. **Run the ice-breaker angle next, as a Pinterest-first day.** The landing page devotes a whole section to it ("Your lid doesn't just earn" — quiet café regulars turning into people you actually know) and it is the only claim on the site that isn't about money. That makes it the cleanest possible contrast with today's ad-space pin, and "a sticker that makes strangers talk to you" is a far more pinnable idea than a payout. It also sidesteps the earnings-figure problem entirely, since there are no numbers to avoid.

2. **Build a "what counts as a verified scan" explainer pin — a 4-panel zine strip.** Real person, real phone, first time, and no scanning it yourself in a mirror. This is the single most-asked question in the site's own FAQ, it is genuinely funny in the brand voice, and it does the trust work that every other post has to tiptoe around. A panel format also gives the queue its first non-headline-poster layout, which is useful for testing whether illustrated strips outperform big-type posters on Pinterest.

3. **Make a city-vote asset aimed squarely at the "cities open in order of demand" mechanic.** Everything in the queue so far asks people to join a waitlist, which is a weak verb. "Vote for your city" is a stronger one, it is literally true on this site, and it gives the drafts something to say to the people who join and then wait. Suggest a repeatable template with the city name as the swappable element, so one design can be reshot per city once the first pilot city is picked.

## Blockers / what's missing

- **`pin.png` is missing.** The Canva design was created and exported fine, but this session's egress proxy blocks `export-download.canva.com` (403 on CONNECT, both attempts), so the file could not be downloaded. The design is at https://canva.link/wi70ug5fkhrtfxv and can be downloaded by hand; see `pin-image-status.md` for the full detail and the one-line network-policy fix that would make this step work unattended in future runs. Nothing else was blocked.
- The `image_prompt` in `pin.md` stands as the fallback and reproduces the same pin without Canva.
- No real pilot numbers exist yet, so every draft in this folder deliberately avoids earnings figures and says only "$ per verified scan". Once the first city has run, the site says real numbers will be published — at that point these drafts can be revisited with actual figures.
