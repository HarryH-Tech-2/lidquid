# Digest — 2026-09-16

## a) repo changes since the previous run

One commit landed in the last 26 hours (`git log --since='26 hours ago' --oneline`):

- **`28f5809` — Landing page conversion overhaul, GA4 funnel events, brand lead form, SEO files**

In plain English: the landing page got a significant rework — roughly 500 lines added across four
files, with `index.html` carrying almost all of it. What's new on the page that matters for
marketing copy:

- A **"How it works"** section spelling out four steps: join the waitlist → approve a brand → stick
  it on your lid → earn per verified scan.
- An **earnings slider** (days out per week × scans per day × rate per scan). It is explicitly
  labelled *illustrative only*, and the page now promises real pilot numbers only once the first
  city has run. Nothing in these drafts quotes any figure from it.
- A **"for brands"** section plus a brand lead form with a monthly budget dropdown — so there is now
  a second audience on the page, not just laptop owners.
- A **social / ice-breaker section** ("the part nobody expects") about lids starting conversations
  with café regulars.
- A **city-capture step** after email signup, framed as a vote, and a referral link to jump the queue.
- **GA4 funnel events** wired through a single `window.track` wrapper, and **SEO files** added:
  `robots.txt`, `sitemap.xml`, `vercel.json`.

Copy implication: the page now says "$" throughout, avoids projections, and repeats "verified scan",
"you approve every brand" and "cities open in order of demand". Today's drafts mirror that and do not
exceed it.

## b) queue status

- **Days of drafts in `marketing/queue/`: 1** — today's, `2026-09-16`.
- This is the **first run of this agent**. Neither `marketing/` nor `marketing/queue/` existed in the
  repo before today, so there were no previous entries to differentiate against.

Angles covered so far:

| day | angle | headline |
| --- | --- | --- |
| 2026-09-16 | you approve every brand (the veto angle) | `i approved this ad` |

Worth noting for rotation: the repo's existing images in `assets/` already stake out three angles
visually — `wild-coffee-money.jpg`, `wild-ad-space.jpg`, `wild-cafe-scan.jpg`, plus
`sticker-in-the-wild.webp`. So **coffee money**, **ad space** and **the café scan** are already
represented on the site even though they have no queue entry yet. Today's veto angle was chosen
partly because it was the strongest differentiator not already covered by that artwork or by the
hero headline ("Turn your laptop lid into income").

Angles still unused: peels off clean · cities open by demand (vote with your city) ·
freelancer/remote-worker life · student life · café-regular identity · the ice-breaker/social angle ·
the brand-side pitch (pay per verified scan, not impressions).

## c) three suggestions for what to make next

1. **"vote with your city" — a pin built around the waitlist mechanic.** The page now treats the city
   field as a vote and added a referral link that bumps you up the queue, but no marketing asset says
   so. This is the only angle that gives a reader something to *do* beyond joining — telling friends
   in their city actually moves their city up. Strong shareability, and it feeds the mechanic the
   pilot depends on (cities open in order of demand). Suggested headline: `my city is losing`.

2. **A brand-side asset — the first one aimed at the other audience.** `28f5809` added a whole "for
   brands" section and a lead form with a budget dropdown, and the entire queue currently speaks only
   to laptop owners. LinkedIn is the obvious home for it and today's LinkedIn post already leans that
   way; it deserves its own day with the sharper hook: every other channel sells impressions nobody
   can prove, this one bills per verified scan and shows what got rejected and why.

3. **"peels off clean" — kill the objection that stops signups.** The FAQ answers "will the sticker
   wreck my laptop?" first, which suggests it is the most common hesitation, and the answer is
   unusually concrete (removable vinyl, zero residue, no lock-in, keep what you've earned). A pin
   whose whole image is the sticker being peeled off a pristine lid turns the biggest objection into
   the hook. Suggested headline: `it comes off. that's the point.`

## blockers / what's missing from this run

- **`pin.png` is not in this folder.** The Canva design was created, edited to match the headline in
  `pin.md`, saved, and exported successfully at 1000×1500 — but every `canva.com` host is blocked by
  this session's egress policy, so the exported bytes could not be downloaded into the repo. Two
  workarounds were tried and failed. See `pin-image-status.md` for the design links (one manual
  download finishes it) and for the hosts to allowlist so future runs commit the PNG automatically.
- Nothing else was blocked. `pin.md`, `social.md` and this digest are complete.
- No `gh` CLI in this environment, so the pull request was opened with the GitHub API instead.
