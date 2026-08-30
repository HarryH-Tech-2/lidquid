# Digest — 2026-08-30

## a) Repo changes since the previous run

**No changes.** `git log --since='26 hours ago'` is empty. The most recent commit to `main` is from 2026-08-20 — the landing page refresh that switched currency to `$`, added the four-step "How it works" section, and reworked the carousel and waitlist form. `main` has been static for ten days.

## b) Queue status

**11 days of drafts now exist — and none of them are on `main`.**

This is worth stating plainly, because it's the biggest thing this run found. The working tree had no `marketing/` directory at all, which initially looked like a first run. It isn't: there are ten previous branches (`marketing/2026-08-20` … `2026-08-29`), each with its own open PR, none merged. Every day's drafts are sitting in an unreviewed PR queue. That also means each daily run starts blind unless it deliberately goes and reads the unmerged branches — which is exactly how the second problem below happened.

### Angles covered

| Day | Angle | Family |
|---|---|---|
| 08-20 | dead space / the unused asset you own and never look at | **dead space** |
| 08-21 | the perspective flip — you see one side, strangers see the other | **dead space** |
| 08-22 | the social / accidental ice-breaker angle | social |
| 08-23 | ad space you already own — a billboard you sit behind | **dead space** |
| 08-24 | dead space / unused real estate | **dead space** |
| 08-25 | anti-influencer — monetise your laptop, not your personality | anti-content |
| 08-26 | dead space — the side you never look at and everyone else does | **dead space** |
| 08-27 | dead space — the side of your laptop you never see | **dead space** |
| 08-28 | unused real estate / your lid is ad space | **dead space** |
| 08-29 | the side you never see — "your lid is doing nothing" | **dead space** |
| 08-30 | **cities open by demand — joining the waitlist is the vote** | waitlist mechanic |

**Eight of the ten previous days are the same angle** wearing different headlines. 08-27's own notes even claim it's "day 1 of the rotation — nothing else has used this yet," which was already false by six days. The rotation instruction has not been holding, most likely because each run couldn't see the others' work.

Today's first draft made the same mistake — it was written as an anti-content pin ("no posting. no followers. just a sticker.") before the unmerged branches were checked, at which point it turned out to duplicate 08-25. It was rewritten to the waitlist-vote angle, which nothing has used.

**Still genuinely unused:** what a "verified scan" actually means · you approve the brand (the veto as the headline) · peels off clean / no lock-in · coffee money · student life · freelancer & remote-worker life · café-regular identity.

**Missing from today's folder:** `pin.png`. The Canva design was created and exported, but this session's network policy blocks `export-download.canva.com`, so the file couldn't be downloaded — three attempts across two hosts, all denied. See `pin-image-status.md`. Given every previous day almost certainly hit the same wall, the whole queue is likely image-less.

## c) Three suggestions for what to make next

**1. Merge or close the ten open PRs before generating an eleventh day.**
This is the one that matters more than any content idea. A queue of eleven unreviewed PRs isn't a content pipeline, it's a backlog that makes every future run worse — the agent can't see what's been done, so it repeats itself, which is precisely what produced eight near-identical "dead space" pins. Either merge the good ones to `main` so future runs can read them normally, or close the duds. If merging daily is too much friction, have the agent commit straight to a single long-lived `marketing` branch instead of a new branch per day; then each run sees the full history for free.

**2. Make the "what counts as a verified scan" explainer next.**
The biggest trust gap for someone hitting this cold is "what stops someone scanning their own sticker 400 times?" The FAQ answers it well and drily — *you scanning it in a mirror doesn't count* — but that's buried at the bottom of the page and completely absent from social. A three-panel zine strip (real person / real phone / first time) turns the most sceptical question into the most charming asset, and it needs no invented numbers to work. It's also structurally different from a poster-with-a-headline, which the queue has eleven of.

**3. Build a reusable Canva pin template rather than generating from scratch daily.**
Every run so far has spent its image step on a generative gamble it can't even preview — thumbnails are blocked, so candidates get picked blind. One brand-locked template with a single editable headline field turns the daily image into a text swap: cheaper, faster, consistent across the whole Pinterest board, and it removes the "did the AI mangle the copy?" review step. Worth doing before the queue grows further, since visual consistency compounds on Pinterest. Pair it with allowlisting `export-download.canva.com` so the PNG can actually land in the repo.
