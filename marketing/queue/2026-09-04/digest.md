# Digest — 2026-09-04

## (a) Repo changes since the previous run

**No changes.** `git log --since='26 hours ago' --oneline` returns nothing — no commits landed on `main` in the last 26 hours.

For context, the most recent commit on `main` is `acfea02` *"Landing page refresh: $ currency, How-it-works section, carousel and form updates"*. The landing page currently carries: the pilot kicker (50 laptops, one city at a time), the "Turn your laptop lid into income." hero, a four-step How-it-works block, an in-the-wild carousel, a social / meeting-people section, and a seven-question FAQ. Today's drafts mirror those claims and don't exceed them.

## (b) Queue status

**1 day of drafts exists** — this one. `marketing/queue/` did not exist before today, so this is the first entry and the start of the rotation.

Angles covered so far:

| Day | Angle | Headline |
|---|---|---|
| 2026-09-04 | social / ice-breaker | "wait, what IS that?" |

Worth noting for rotation purposes: `assets/` already contains imagery on themes that have **not** yet been used in the queue — `wild-coffee-money.jpg`, `wild-ad-space.jpg`, `wild-cafe-scan.jpg`. Those visual angles (coffee money, ad space, the café scan) exist as images but have no written drafts behind them yet. Today deliberately avoided all three so the queue opens on fresh ground.

Angles still unused, for future days: coffee money · your lid is ad space · you approve the brand · peels off clean, zero residue · cities open by demand (vote with your city) · freelancer / remote-worker life · student life · café-regular identity · "no posting, no followers" · what counts as a verified scan.

### Missing / blocked this run

- **`pin.png` was not produced.** The Canva design was generated, rebuilt in-brand, committed and exported successfully, but the export file could not be downloaded: this session's egress proxy returns 403 for both `export-download.canva.com` and `design.canva.ai`, which is an org network-policy denial. Details and recovery steps are in `pin-image-status.md`. The Canva design ID is `DAHUPDjb6i0`.
- Because `design.canva.ai` is blocked, the four AI candidate previews could not be compared before picking one — the first candidate was taken sight-unseen and then rebuilt from scratch anyway.

## (c) Three suggestions for what to make next

1. **A "cities open by demand" pin, built around the reader's own city.** This is the only angle that turns the pin itself into the CTA — the site's single action is joining the waitlist, and the FAQ already frames joining as literally the vote for your city. A pin whose headline is something like "your city opens when enough people ask" gives scrollers a reason to click *today* rather than filing it under someday-money. It's also the most repeatable format: the same layout can be reshot per city as the pilot expands.

2. **A "peels off clean" objection-killer pin.** "Will this wreck my laptop?" is the single biggest silent objection to putting a sticker on a $2,000 machine, and it's question two in the site's own FAQ — which means it's already known to be a common ask. A pin that answers it visually (removable vinyl, zero residue, peel it off and keep what you've earned) removes the blocker before someone has to go looking for the FAQ. Pairs naturally with the no-lock-in, no-minimum-term message.

3. **A short vertical video or 3–4 frame carousel of the café moment.** Today's angle — the stranger leaning over to ask "wait, what is that?" — is a sequence, not a still: sit down, someone notices, they scan, you get paid. Stills flatten it. A carousel or a few seconds of video would carry the ice-breaker angle far better on Instagram and Pinterest Idea Pins than a single frame can, and the existing `assets/sticker-in-the-wild.webp` and the wild-* photos give a starting point for the frames.
