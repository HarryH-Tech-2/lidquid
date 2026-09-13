# Digest — 2026-09-13

## a) Repo changes since the previous run

`git log --since='26 hours ago' --oneline` → **no changes.** Nothing has landed on `main` in the last 26 hours.

For context, the most recent work on `main` (all older than the window) was a landing-page refresh that switched currency to `$`, added the "How it works" section, and updated the carousel and waitlist form; before that, Pinterest tag tracking and the FAQ section with FAQPage structured data.

## b) Queue status

**Days of drafts in `marketing/queue/`: 1** — today's, `2026-09-13`. This is the first entry; the `marketing/` directory did not exist before this run, so there is no previous queue to compare against.

Angles covered so far:

| day | angle |
| --- | --- |
| 2026-09-13 | cities open by demand — vote with your city |

Worth noting for rotation purposes: three angles are already in use on the live site's own imagery in `assets/` (`wild-coffee-money`, `wild-ad-space`, `wild-cafe-scan`), so "coffee money", "your lid is ad space" and the café-scan shot are visually well-trodden already, even though no queue day has claimed them.

Still unused and available: the social / ice-breaker angle, "you approve every brand", "peels off clean", freelancer & remote-worker life, student life, café-regular identity, and the "no posting, no followers" anti-influencer angle.

## c) Three things to make next

1. **The anti-influencer angle: "no posting. no followers. no promoting."**
   Every other way to make money from attention demands you perform. This one demands you sit still. It's the sharpest genuine differentiator Lidquid has against the whole creator-economy side-hustle category, it's stated plainly on the landing page so there's no claim risk, and it targets the large group of people who want the money but hate being on camera. Strong Pinterest fit — the negative-list format reads well as a chunky stacked headline.

2. **"you approve every brand" — the trust/control objection, answered.**
   The first thing a sceptical reader thinks is "so a company picks what goes on my laptop?" The answer is no, and it's a good one: you see the brand, the design and the rate, and you can say no for any reason. Making a whole day's assets out of the objection turns the biggest hesitation into the hook. Best suited to LinkedIn and a carousel-style pin showing an approve/reject card.

3. **"peels off clean" — a physical-proof pin.**
   The second objection is "will this wreck my laptop?" It's the most visual answer in the set: a corner of vinyl being lifted, zero residue underneath. Removable vinyl, no lock-in, keep what you've earned. This one is worth making as an image-led pin with minimal copy, since the picture does the arguing — and it pairs naturally with a short "what if I want out? peel it off. done." caption.

## Blockers / what's missing from this run

- **`pin.png` was not produced.** The Canva design was generated and verified, but this session's network policy blocks Canva's download hosts (`export-download.canva.com`, `design.canva.ai` — gateway returns `403` to `CONNECT`). Full detail, the design ID, and two ways to finish it are in `pin-image-status.md`. The `image_prompt` in `pin.md` is the working fallback.
- **`gh` CLI is unavailable** in this environment; the pull request was opened via the GitHub MCP tools instead. No functional difference to the output.
