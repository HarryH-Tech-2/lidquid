# Digest — 2026-08-26

## a. Repo changes since the previous run

**No changes.** `git log --since='26 hours ago' --oneline` returned nothing.

For context, this is the **first** marketing run, so there's no previous run to diff against. The most recent commit on `main` is `acfea02` — "Landing page refresh: $ currency, How-it-works section, carousel and form updates" — which predates this window. That commit is worth knowing about because it's the one that moved the site to `$` currency and added the four-step "How it works" section, both of which today's drafts mirror.

## b. Queue status

**Days of drafts: 1** (this one). `marketing/queue/` did not exist before today; it was created by this run.

There was also no `marketing/` folder at all — no prior assets to reuse. The only existing marketing imagery lives in `assets/` (`og-card.jpg`, `sticker-in-the-wild.webp`, `wild-ad-space.jpg`, `wild-cafe-scan.jpg`, `wild-coffee-money.jpg`), which is off-limits to this agent and used by the landing page carousel.

**Angles covered so far:**

| Day | Angle | Headline |
|---|---|---|
| 2026-08-26 | dead space — the back of your lid is the one surface you never look at and everyone else does | "the side you never see" |

**Angles still unused** (for rotation on following days):
- coffee money / "get paid to sit in cafés"
- your lid is ad space (the plain tiny-billboard framing)
- the social / ice-breaker angle ("your café, but social")
- you approve every brand — the control angle
- peels off clean, zero residue — the risk-reversal angle
- cities open by demand — vote with your city
- freelancer & remote-worker life
- student life
- café-regular identity
- what counts as a verified scan (the trust/anti-bot angle)

Note: today's angle was deliberately chosen to *avoid* the four taglines already in use on the site, so day one doesn't burn the obvious "coffee money" hook.

## c. Three suggestions for what to make next

1. **Run the "you approve every brand" angle next, aimed at the sceptic.** The single biggest objection to a stranger's sticker on your laptop is "what if it's a brand I hate?" The site answers this well in the FAQ, but no marketing asset leads with it. A pin built on control rather than money would reach people who bounce off side-hustle content — and it's the natural counterweight to today's pin, which is pure curiosity. Suggested hook direction: the veto, not the payout.

2. **Build a reusable pin template rather than generating each day from scratch.** Every run currently makes a brand-new Canva design from a text prompt, which means the visual identity drifts day to day and each pin is a coin flip on quality — made worse right now because thumbnails can't even be previewed. A single Canva brand template with two swappable text fields (headline + handwritten subline) would make daily output consistent and let a run swap copy in seconds. This is also the cheapest fix for the image pipeline being unreliable.

3. **Unblock the image pipeline before adding more channels.** Right now the drafts land but the images don't (see `pin-image-status.md`) — every day of drafts will need a human to open Canva and export by hand. Allowing `export-download.canva.com` at the proxy turns this from a manual step into a finished asset. Worth doing before the queue grows, because the cost repeats daily and compounds.

## Known gaps in this run

- `pin.png` is missing — Canva export succeeded, download was blocked by network policy. Full detail and the design URLs are in `pin-image-status.md`.
- The pin candidate was chosen without seeing it, because the thumbnail host is blocked too. **Review the design visually before publishing.**
