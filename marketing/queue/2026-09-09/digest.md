# Digest — 2026-09-09

## a) Repo changes since the last run

**No changes.** `git log --since='26 hours ago'` is empty. The newest commit on `main` is `acfea02` from 2026-08-20 ("Landing page refresh: $ currency, How-it-works section, carousel and form updates") — about three weeks old. The landing-page copy these drafts mirror is stable.

## b) Queue status

**21 days of drafts now exist (2026-08-20 → 2026-09-09) — and none of them are on `main`.**

Every day's run opens a PR and every one of those PRs is still open. PRs #1–#20 are unmerged; today's is #21. `marketing/` doesn't exist on `main` at all, which is why a fresh checkout looks like an empty slate. The drafts only exist on their branches.

Two systemic problems are visible from the back catalogue, and both need a human decision rather than another day of drafts:

**1. Angle repetition.** The "dead space / the side you never see / your lid is ad space" angle has led **14 of the 20 previous days**:

| Angle | Days | Dates |
|---|---|---|
| dead space / side you never see / ad space you own | **14** | 08-20, 08-21, 08-23, 08-24, 08-26, 08-27, 08-28, 08-29, 08-31, 09-01, 09-02, 09-05, 09-06, 09-07 |
| social / ice-breaker | 3 | 08-22, 09-04, 09-08 |
| anti-influencer | 1 | 08-25 |
| cities open by demand | 1 | 08-30 |
| you approve every brand (the veto) | 1 | 09-03 |
| **no lock-in / the escape hatch** | **1 (today)** | 09-09 |

The instruction to differentiate from previous days can't work when previous days aren't on `main` — each run sees an empty `marketing/` and reaches for the most obvious angle, which is the same one every time. Today's first attempt did exactly that (it was written, then discarded, before checking the open PRs). **The agent's prompt needs to tell it to read the open `marketing/*` branches, not just `marketing/queue/` on disk** — otherwise this repeats indefinitely.

**2. `pin.png` has never once been produced.** All 21 days have a `pin-image-status.md` and zero have a `pin.png`. Canva's download hosts are blocked by the sandbox egress policy. Details and the one-line fix in `pin-image-status.md`.

Angles still genuinely unused: coffee money / café economics · what counts as a verified scan · student life · freelancer & remote-worker life · café-regular identity · "no posting, no followers" (only glanced at on 08-25).

## c) Three things to make next

1. **Merge or close the backlog before making day 22.** Twenty-one unreviewed PRs is the actual bottleneck — not a shortage of drafts. Nothing here has ever reached `main`, so nothing has been published, and the agent is compounding the problem daily by writing against an empty slate. Triage the open PRs (merge the good ones, close the duplicates) and the repetition problem largely solves itself, because the next run will finally be able to see what came before.

2. **A "what counts as a verified scan" explainer pin.** Completely unused across 21 days, and it's the mechanic that makes the whole model credible: a real person, a real phone, a first scan — bots and you-in-a-mirror don't count. It answers the "surely people just spam it" objection that any sceptical reader arrives with, and it justifies why brands pay properly. Strong visual: a hand-drawn ✅/❌ tally.

3. **A coffee-money pin priced in coffees, not currency.** The tagline "this is how I earn coffee money" is already in use but has never led a pin, and the café-economics framing sidesteps the hard rule against inventing rates — you can talk in coffees without ever claiming a number. It also targets the exact person the product needs: the café regular already sitting there five days a week.
