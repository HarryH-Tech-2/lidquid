# Digest — 2026-09-01

## (a) Repo changes since the previous run

**No changes.** `git log --since='26 hours ago' --oneline` returned nothing.

For context, the most recent commit on `main` is from 2026-08-28: *"Landing page refresh: $ currency, How-it-works section, carousel and form updates"* — the switch to `$`, the new four-step how-it-works section, and carousel/form updates. Nothing has landed since.

## (b) Queue status

**Days of drafts: 1** — today is the first entry in `marketing/queue/`. There was no `marketing/` folder in the repo before this run, so there is no prior work to differentiate from yet.

Angles covered so far:

| Day | Angle | Headline |
|---|---|---|
| 2026-09-01 | the side of your laptop you never see (unused surface you already own) | "you never see this side. everyone else does." |

Angles still unused, for rotation: coffee money · the social / ice-breaker angle · you approve the brand · peels off clean, no lock-in · cities open by demand (vote with your city) · freelancer & remote-worker life · student life · café-regular identity · what counts as a verified scan · no posting, no followers.

### Known gaps this run
- **`pin.png` was not produced.** The Canva design was generated and exported successfully, but the egress proxy denied both `design.canva.ai` and `export-download.canva.com` with 403 policy rejections, so the file could not be downloaded into the repo. Details and the Canva links are in `pin-image-status.md`; the `image_prompt` in `pin.md` is the fallback.
- Because thumbnails were also blocked, the four Canva candidates could not be compared visually — the first was taken by default and needs a human eye before publishing.

## (c) Three things to make next

1. **A "you approve the brand" pin, aimed squarely at the objection.** The single biggest reason someone will refuse this idea is "I'm not putting a random advertiser on my stuff." The FAQ already answers it well ("It's your lid; we're just the agent"), but no asset leads with it. A pin built around approval as *veto power* — you see the brand, the design and the rate, and you can say no for any reason — converts the sceptics rather than the already-sold. Good day-2 contrast with today's angle, which is about the surface, not the control.

2. **A city-voting asset for the waitlist mechanic.** "Cities open in order of waitlist demand — joining the list is the vote" is the strongest thing on the page and it is doing nothing for us socially. It makes joining feel like it *does* something, and it gives people a reason to tag their city and their friends, which is free distribution. Worth a repeatable template — same layout, swappable city name — so it can be re-run whenever a city gets close.

3. **A short "what counts as a verified scan" explainer.** This is the trust question underneath everything: people assume it's a scam or that the numbers are made up. A plain, dry, three-line explanation — real person, real phone, first time; repeat scans and bots don't count — does more for credibility than another hook, and it reinforces the honest position the FAQ already takes ("we'll publish real pilot numbers once the first city has run — no made-up projections"). Works as a carousel or a LinkedIn post where the audience is more sceptical.
