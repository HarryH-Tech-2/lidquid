# Digest — 2026-09-26

## a) repo changes since the previous run

**No changes.** `git log --since='26 hours ago' --oneline` returns nothing. The most recent
commit on main is `28f5809` from 2026-09-15 ("Landing page conversion overhaul, GA4 funnel
events, brand lead form, SEO files"), so the site has been stable for about eleven days.

Nothing in the landing copy has moved, which means today's drafts are written against the same
claims as the live page: pilot stage, 50 laptops, one city at a time, cities open in order of
waitlist demand, $ per verified scan, removable vinyl with zero residue, owner approves every
brand, no posting or followers required.

## b) queue status

**This is the first day of drafts.** `marketing/queue/` did not exist before this run — there
is no `marketing/` folder on main at all, so there are no previous days to differentiate from
beyond the assets already shipped in `assets/`.

Days of drafts in the queue: **1** (`2026-09-26`).

Angles covered so far:

| day | angle | headline |
|---|---|---|
| 2026-09-26 | you approve every brand (the veto / door policy) | my lid has a bouncer |

Angles already spoken for by shipped `assets/` artwork, and therefore worth avoiding as a
*headline* angle for a while even though they're still fair game as supporting copy:

- **coffee money** — `wild-coffee-money.jpg`, "this is how I earn coffee money"
- **your lid is ad space** — `wild-ad-space.jpg`
- **the café scan moment** — `wild-cafe-scan.jpg`, `sticker-in-the-wild.webp`

Still untouched, and the obvious rotation for coming days: the social / ice-breaker angle,
"peels off clean", "cities open by demand — vote with your city", freelancer and remote-worker
life, student life, and café-regular identity.

## c) three things to make next

1. **"vote with your city" — the demand-queue angle.** Cities open in order of waitlist
   demand, and the site says joining "literally is the vote". That's the only mechanic on the
   whole page with real urgency in it, and no asset uses it yet. A pin shaped like a ballot or
   a hand-drawn city leaderboard (no real city names ranked, no invented numbers — just empty
   slots) gives people a reason to join *today* rather than bookmarking. Pair it with an
   Instagram story asking "which city?" since the waitlist already has a city step.

2. **"peels off clean" — kill the objection.** The FAQ shows this is one of the two things
   everyone asks before joining (the other is earnings, which we can't answer honestly until
   the pilot runs). A peel-in-progress visual — half-lifted vinyl corner, pristine lid
   underneath, hard offset shadow — does more converting than another money hook, because the
   fear is damage to an expensive laptop. Dry headline candidate: "the scariest part is how
   boring it is."

3. **The ice-breaker angle, aimed at the lonely-remote-work audience.** The site already has a
   whole section on quiet café regulars turning into people you actually know, and it's the
   most emotionally distinctive thing Lidquid has — but it's doing nothing in marketing. This
   also opens up boards and audiences that have no interest in side hustles at all, which is
   where the side-hustle-saturated feeds aren't. Headline candidate: "it earns money and it
   also makes friends, which is frankly showing off."

## blockers / what's missing

The copy is complete and unblocked. **`pin.png` is missing.** The Canva design was created
(`DAHWTOOttwg`) and the 1000×1500 PNG export succeeded, but downloading it into the repo was
refused by this session's egress policy — `export-download.canva.com` returned a 403 at the
proxy, which is an organization network-policy denial, so it was reported rather than retried.
Full detail and two one-minute fixes are in `pin-image-status.md`. Allowing that host for this
scheduled job is the durable fix; until then every run will need the image pulled by hand.
The `image_prompt` in `pin.md` is the documented fallback and is complete.

`gh` is not installed in this environment, so the pull request was opened with the GitHub MCP
tools instead. The PR body is also saved to `PR.md` in this folder for the record.
