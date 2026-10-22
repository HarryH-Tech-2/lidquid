# Digest — 2026-09-12

## a) Repo changes since the previous run

**No changes.** `git log --since='26 hours ago'` returns nothing. The most recent commit on `main` is from **2026-08-20**, roughly three weeks ago:

> `acfea02` — Landing page refresh: $ currency, How-it-works section, carousel and form updates

For context, that commit is the one that moved the site's currency to `$`, added the four-step "How it works" section, and reworked the wild-photo carousel and the waitlist form. Nothing has shipped since, so today's drafts are written against a stable landing page.

## b) Queue status

**This is the first day in the queue.** `marketing/` did not exist before this run — no `marketing/queue/` folder, no previous drafts. Created today.

- Days of drafts: **1** (`2026-09-12`)
- Angles covered so far: **the social / ice-breaker angle** — "wait, what is that?", the lid as accidental conversation starter

Angles still unused, for rotation on following days:

- coffee money / "this is how I earn coffee money"
- your lid is ad space (the surface you never look at)
- you approve every brand — you're the editor, not the billboard
- peels off clean, zero residue, no lock-in
- cities open by demand — vote with your city
- freelancer / remote-worker life
- student life
- café-regular identity
- what counts as a verified scan (the anti-bot, anti-mirror-selfie angle)
- no posting, no followers — the anti-influencer pitch

Note on overlap with existing art: `assets/` already ships `wild-coffee-money.jpg`, `wild-ad-space.jpg` and `wild-cafe-scan.jpg`, so those three angles already have photography behind them. Today deliberately avoided all three to keep day one genuinely new — and it means those angles come with free art when their turn comes.

## c) Three suggestions for what to make next

**1. A "what counts as a verified scan" explainer pin.**
The FAQ answer is already the sharpest, funniest copy on the site — real person, real phone, first time, and *"you scanning it yourself in a mirror doesn't count."* That's a visual: a three-panel zine strip, two ticks and one cross. It does real work, too — it's the objection that makes the earnings believable, and it answers "is this a scam" without ever using the word. Best angle for day two because it builds trust before the money angles run.

**2. A city-vote asset, rebuildable weekly.**
"Cities open in order of waitlist demand — joining the list is the vote" is the only mechanic on the site with genuine urgency, and nothing in the queue uses it yet. A pin shaped like a hand-drawn ballot or a leaderboard with blank city slots invites people to name their own city in the comments, which is the cheapest engagement Pinterest and Threads offer. Keep the slots empty — no city names, no counts, nothing that implies a ranking we can't back up.

**3. A "peels off clean" reassurance piece aimed at the expensive-laptop crowd.**
"Will it wreck my laptop" is the fear that stops the exact person we want — someone with a nice machine who sits in cafés all day. Removable vinyl, zero residue, goes on bare lid only, peel it off and keep what you've earned. Visually it's the most satisfying thing the brand owns: a corner mid-peel. Pairs naturally with the LinkedIn audience, where the objection is loudest.

## Missing / blocked this run

- **`pin.png` was not produced.** The Canva design was created, cleaned up and exported successfully, but this session's network policy denies both `design.canva.ai` and `export-download.canva.com` (`403`), so the file could not be downloaded. Full detail and a 30-second manual workaround are in `pin-image-status.md`. The `image_prompt` in `pin.md` is the fallback.
- Nothing else blocked. `pin.md`, `social.md` and this digest are complete.
