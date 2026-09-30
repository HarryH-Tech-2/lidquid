# Digest — 2026-09-30

## a) Repo changes since the previous run

**No changes.** `git log --since='26 hours ago' --oneline` returns nothing — the repo has been quiet for the last 26 hours.

For context, the most recent work on `main` (all older than this window) was a landing-page conversion overhaul: GA4 funnel events, a brand lead form, SEO files (`robots.txt`, `sitemap.xml`), a How-it-works section, the earnings estimator, an FAQ block with FAQPage structured data, and Pinterest Tag tracking with a waitlist-signup conversion event. Worth knowing because the Pinterest Tag is already live, so pins driving traffic will be measurable.

## b) Queue status

**This is the first entry in the queue.** `marketing/` did not exist before today — this run created it.

- Days of drafts in `marketing/queue/`: **1** (2026-09-30)
- Angles covered so far:
  - **2026-09-30 — dead space / unused real estate.** The one surface of your laptop you have never looked at, and everyone behind you has. Headline: "THE BACK OF YOUR LAPTOP IS DEAD SPACE."

Angles still unused, to rotate through on coming days (keep one per day, no repeats):

- coffee money / "this is how I earn coffee money"
- the social + ice-breaker angle ("wait, what is that?") — strong, and the landing page already has a whole section for it
- "you approve every brand" — the control/consent angle
- "peels off clean" — the no-commitment, zero-residue angle
- "cities open by demand — joining is the vote" — urgency and local rivalry
- freelancer / remote-worker life
- student life
- cafe-regular identity ("you are already there five days a week")
- the brand-side angle (pay for verified scans, not impressions) — for LinkedIn especially

## c) Three suggestions for what to make next

1. **A pin built on the "wait, what is that?" ice-breaker angle.** The landing page devotes an entire section to the social side — quiet regulars turning into people you actually know — and no marketing asset uses it yet. It is also the softest sell in the set: it advertises a side effect rather than money, which reaches people who scroll straight past "side hustle" content. Pinterest rewards a distinct visual, and this one can carry two laptops and a speech bubble instead of the lone-lid composition used today.

2. **A "vote with your city" asset aimed at one named city at a time.** Cities open in order of waitlist demand, which makes a genuinely scarce, genuinely local hook — and the waitlist form already captures city. A pin or story template with a swappable city name turns one design into a whole series, and gives a reason to post again next week without a new idea. Pair it with the existing `?ref=` convention so per-city demand is measurable in GA4.

3. **A brand-side LinkedIn post and one-pager.** Everything so far speaks to laptop owners, but the pilot needs advertisers as much as lids, and `index.html` already has a brand lead form with a monthly-budget field feeding it. "Pay for verified scans, not impressions nobody can prove" and "owner-approved placement — welcomed on the lid, not tolerated" are the two lines to build on. LinkedIn is where that audience is, and it is the only channel in this queue not yet pointed at them.

## d) Anything missing from this run

- **Canva pin image: designed successfully, but `pin.png` could not be downloaded.** The sandbox egress proxy returns 403 for both `export-design.canva.com` download hosts (`export-download.canva.com` and `media.canva.com`), so the exported PNG never reached the repo. The design itself is finished and correct in Canva — see `pin-image-status.md` for the design link and a 30-second manual export. Worth allowlisting those two hosts, or every future run will produce drafts without an image.
- One generation error was caught and fixed in Canva: the design first rendered the brand as "lidliquid.com"; corrected to "lidquid.com" and saved.
- No previous queue entries existed to differentiate against, so the "genuinely new angle" check ran against the landing page copy and the taglines already in use rather than against prior drafts.
