# Digest — 2026-09-21

## a) Repo changes since the previous run

**No changes.** `git log --since='26 hours ago' --oneline` on `main` returns nothing. The last commit to `main` is still `28f5809` from 2026-09-15 ("Landing page conversion overhaul, GA4 funnel events, brand lead form, SEO files"), six days ago. The live copy this queue mirrors has not moved.

## b) Queue status

**34 days of drafts exist**, one per day from 2026-08-20 through today, with no gaps.

**None of them have been merged.** All 33 previous days are sitting on unmerged `marketing/*` branches with open PRs (#1–#32 and counting); `marketing/` does not exist on `main` at all. That is the single most useful fact in this digest: the pipeline is producing on schedule and nothing is coming out the other end. Every day's output is also, by design, written without being able to see whether the previous day's was any good, because none of it has been reviewed.

### Angles covered so far

| Angle | Days | Count |
|---|---|---|
| dead space / ad space / the side you never see / you own a billboard | 08-20, 08-21, 08-23, 08-24, 08-26, 08-27, 08-28, 08-29, 08-31, 09-01, 09-02, 09-05, 09-06, 09-07, 09-10, 09-17, 09-20 | **17** |
| the ice-breaker / "wait, what is that?" / the café gets social | 08-22, 09-04, 09-08, 09-11, 09-12, 09-14, 09-15, 09-19 | **8** |
| cities open by demand — joining is the vote | 08-30, 09-13 | 2 |
| you approve every brand (the veto) | 09-03, 09-16 | 2 |
| anti-influencer — monetise the laptop, not your personality | 08-25 | 1 |
| no lock-in / peels off clean / quit with a thumbnail | 09-09 | 1 |
| the café habit — you were going to sit there anyway | 09-18 | 1 |
| **the verified scan — what counts, and why you can't cheat it** | **09-21 (today)** | **1** |

Two angles account for 25 of 33 previous days. The rotation the brief asks for is not really happening — it collapses back to "your lid is dead space" whenever nothing forces it elsewhere. Today's angle is genuinely new: it is the first pin about the mechanism that decides whether a scan pays at all, rather than about the surface or the room.

### Still completely unused

Student life · freelancer/remote-worker life as its own hook · the referral loop · the brand-side pitch · what the sticker actually looks like (the site has a customisation carousel nobody has drafted against).

## c) Three suggestions for what to make next

**1. The student angle — and soon.** It is the one audience named in the brief's rotation list that has never run once in 34 days, and September is when campuses fill up. A laptop that lives in a library, a lecture hall and a campus café is exactly the high-dwell, high-footfall lid the pilot wants, and "cities open in order of waitlist demand" turns a university town into a plausible first city. It also reaches people for whom coffee money is real money, without needing to invent a figure to say so.

**2. The referral loop — the only shareable mechanic on the site.** `index.html` has a "copy link — every friend who joins bumps you up" feature in both waitlist forms. Thirty-four days of drafts have never mentioned it. Every other angle asks a stranger to join a list and wait; this one gives someone already on the list a reason to act today and brings a friend with them. It is the cheapest growth loop the product already has and it is being left on the floor.

**3. A brand-side draft — the pilot needs demand, not just supply.** Every draft so far talks to lid owners. The site has a whole "for brands" section, a budget-tiered lead form and a promise to reply within two working days, and none of it has ever been marketed. Fifty approved lids with no brand to put on them is a stalled pilot. Today's LinkedIn post is the first thing in the queue pointed that way — the next step is a proper brand-facing set (LinkedIn carousel or a one-page explainer on "pay per verified scan, not impressions; raw vs billable side by side"), aimed at marketers rather than at Pinterest.

## Blockers to flag

- **`pin.png` was not downloaded — 34th consecutive failure.** `export-download.canva.com` is blocked by this environment's egress policy (403 on CONNECT). The design is finished in Canva and needs a manual download; details and the design ID are in `pin-image-status.md`. This needs a network-policy change, not a drafting change.
- **The AI image generator invented a rate.** It rendered "$8 per verified scan" on a prompt that explicitly forbade invented figures. Caught and corrected before saving. Numbers on any generated asset from this pipeline must be read before use.
- **33 open PRs, nothing merged.** Worth either reviewing a batch or deciding the queue should write to a single long-lived branch instead of one PR per day.
