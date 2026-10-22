# Digest — 2026-09-06

## a) repo changes since the previous run

**No changes.** `git log --since='26 hours ago' --oneline` returns nothing on `main`.

For context, the most recent commit on `main` is `acfea02` — the landing page refresh that moved currency to `$`, added the four-step "How it works" section, and reworked the carousel and the waitlist form. Everything in today's drafts is written against that version of `index.html` and claims nothing it doesn't.

## b) queue status

**Days of drafts: 1.** This is the first entry — `marketing/queue/` did not exist before today, so there is no back catalogue to avoid repeating yet.

Angles covered so far:

| day | angle | hook |
|---|---|---|
| 2026-09-06 | your lid is ad space — the surface you never see | you've never once looked at the back of your own laptop; everyone else in the café has |

Still unused, roughly in the order they'd rotate well:

- coffee money / "this is how I earn coffee money"
- the social angle — the sticker as an ice-breaker, café regulars becoming people you know
- you approve every brand (the veto is the feature)
- peels off clean, zero residue, no lock-in
- cities open by demand — joining the waitlist is the vote for your city
- freelancer / remote-worker life
- student life
- café-regular identity — "my desk is a table by the window"
- what counts as a verified scan (the trust angle: real person, real phone, first time)

## c) what to make next

1. **The "you approve the brand" angle, as a pin.** It's the objection every sceptical reader has — *whose ad is on my laptop?* — and the site already answers it flatly ("you approve every brand before anything ships"). A pin headlined around the veto rather than the money would pull a different reader than today's ad-space framing, and it's the single most reassuring thing Lidquid can say to someone who likes the idea but not the loss of control.

2. **A city-voting post aimed at the waitlist mechanic.** Cities open in order of demand, which makes the CTA unusually shareable — joining isn't just signing up, it's campaigning for your own city. A post that asks people to name their city in the replies would give the waitlist a reason to spread sideways instead of one-to-one, and it costs nothing to test.

3. **A reusable pin template rather than a fresh design each day.** Today burned two Canva generation rounds getting a usable layout, and the generator dropped a word from the headline that had to be fixed by hand. One approved template — headline slot, sub-line slot, QR-on-lid motif, black `lidquid.com` bar — would make every later day a text swap instead of a gamble. Worth doing before the queue gets long enough for the drafts to look inconsistent next to each other.

## missing / blocked this run

- **`pin.png` was not saved.** The Canva design was generated, corrected and exported successfully, but this session's network policy blocks all `canva.com` hosts (403 on CONNECT), so the file could not be downloaded into the repo. Details, the design link, and two ways to fix it are in `pin-image-status.md`. The `image_prompt` in `pin.md` is the fallback.
- **`gh` is not available in this environment**, so the pull request was opened through the GitHub API instead of `gh pr create`. The PR body is also saved as `PR.md` in this folder.
