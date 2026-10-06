# Digest — 2026-10-06

## a. repo changes since the previous run

**No changes.** `git log --since='26 hours ago' --oneline` returns nothing — no commits to the repo in the last 26 hours.

For context, the most recent work on `main` (before this window) was a landing-page conversion overhaul: GA4 funnel events, a separate lead form for brands, and SEO files (`robots.txt`, `sitemap.xml`). The page now carries a How-it-works section, an illustrative earnings slider, a social / meeting-people section, an FAQ with FAQPage structured data, and a Pinterest tag with a waitlist-signup conversion event. All currency on the page is `$`.

## b. queue status

- **Days of drafts in the queue: 1** (`marketing/queue/2026-10-06/` — this one). This is the first run, so there was no previous queue folder to differentiate from.
- **Angles covered so far:**
  - `2026-10-06` — the social / ice-breaker angle ("small talk that pays"): the lid earns, and it also turns café regulars into people you know.
- **Angles still unused** (for rotation on following days): coffee money · your lid is ad space · you approve every brand · peels off clean, zero residue · cities open by demand, joining is the vote · freelancer / remote-worker life · student life · café-regular identity · what counts as a verified scan · the brand side (pay for scans, not impressions).
- **Existing art in `assets/`** already covers three of those visually — `wild-ad-space.jpg`, `wild-cafe-scan.jpg`, `wild-coffee-money.jpg`, plus `sticker-in-the-wild.webp` and `og-card.jpg`. The social angle had a landing-page section but no image, which is partly why it was chosen first.

## c. three suggestions for what to make next

1. **A "cities open by demand — vote with your city" pin, as a series.** This is the only mechanic on the site that gives a stranger a reason to act *today* rather than bookmark the idea, and it is the one claim that rewards repetition: one pin per candidate city, same layout, city name swapped. Pinterest rewards near-duplicate pins across boards far better than other channels do, and each one can carry its own `?ref=` so we learn which cities actually have pull before any city opens.

2. **A short vertical video / carousel of the peel test.** "Peels off clean, zero residue" is the single biggest objection in the FAQ and the hardest thing to believe from text alone. A 6–8 second clip of the sticker coming off a bare lid, no voiceover, zine-style title card, kills that objection in a way a still never will — and it is repurposable as an Instagram Reel, a Pinterest idea pin, and an inline answer in the FAQ.

3. **A brand-side one-pager for LinkedIn.** The site has a full "for brands" section and a pricing-request form, but every draft so far speaks to laptop owners. Brands are the side of the marketplace that pays, and the supply of 50 pilot laptops is worthless without one. A single asset built on "pay per verified scan, not impressions nobody can prove" plus "owner-approved placement" would give the LinkedIn slot something to do other than restate the consumer pitch.

## d. blockers / what's missing

- The three draft files completed normally. Repo-change detection and previous-queue comparison ran without issue.
- **`pin.png` is missing.** The Canva design was created and the PNG export succeeded, but downloading the file was blocked: `export-download.canva.com:443` was refused by this session's egress policy (403 on CONNECT). Full detail, the design link, and a 30-second manual workaround are in `pin-image-status.md`. The `image_prompt` in `pin.md` is the standing fallback.
- Action for whoever owns the environment: allowing `export-download.canva.com` in the network policy would let the image step finish unattended on future runs.
