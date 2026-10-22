# Digest — 2026-08-23

## a) Repo changes since the previous run

**No changes.** `git log --since='26 hours ago' --oneline` returned nothing.

For context, the most recent commit on `main` is `acfea02` — "Landing page refresh: $ currency, How-it-works section, carousel and form updates" — but it predates this window. The landing page currently carries the four-step "How it works" section, the social / ice-breaker section, the in-the-wild carousel, and a seven-question FAQ. All copy in today's drafts is drawn from those and doesn't exceed them.

## b) Queue status

**1 day of drafts exists — this is the first entry.** There was no `marketing/` directory in the repo before this run; it was created today.

| Day | Angle | Pin headline |
|---|---|---|
| 2026-08-23 | ad space you already own | you own a billboard. you've just been sitting behind it. |

Angles **not yet used**, for rotation on following days:

- coffee money / "this is how I earn coffee money"
- the social + ice-breaker angle ("wait, what *is* that?")
- you approve every brand — it's your lid, we're just the agent
- peels off clean, zero residue, no lock-in
- cities open by demand — joining the list is the vote
- freelancer / remote-worker life
- student life
- café-regular identity
- what counts as a verified scan (the anti-bot, real-person angle)
- no posting, no followers — the anti-influencer angle

## c) Three suggestions for what to make next

**1. Run the "wait, what is that?" social angle next.**
It's the single most differentiated thing Lidquid has and the landing page already commits a whole section to it ("the part nobody expects"). Every other laptop-sticker or side-hustle pitch competes on money; none of them competes on *meeting the freelancer two tables over*. It also sidesteps the earnings question entirely, which is useful while there are no pilot numbers to publish. Pinterest's café/coworking-aesthetic audience is a natural fit.

**2. Make a "vote with your city" pin aimed at a specific city, and template it.**
Cities open in order of waitlist demand, so demand concentration is the actual business constraint — a generic national pin spreads signups thinly across cities that then all sit below threshold. One pin design with a swappable city name turns Pinterest's geo-ish targeting into a lever, and gives a reason to post more than one pin a day without repeating an angle. Worth checking with a human first on which cities to name, so the drafts don't imply a launch commitment.

**3. Write the anti-influencer post: "no posting, no followers, no promoting."**
Every "monetise yourself" pitch asks for an audience. Lidquid explicitly doesn't, and that's a sharp, funny contrast that suits the dry voice — the whole job is sitting in a café exactly as you already do. This plays especially well on LinkedIn and X, where side-hustle fatigue is high, and it needs no numbers to land.

## Blockers / what's missing from this run

- **`pin.png` was not produced.** The Canva design was created, edited and exported fine, but downloading the file into the repo is blocked by this session's egress policy — both `design.canva.ai` and `export-download.canva.com` return 403 at CONNECT. Organisation policy denials must be reported, not routed around, so no workaround was attempted. Full detail, the Canva links to download it by hand, and the design's known gaps vs. the brand spec are in `pin-image-status.md`.
- I could not visually review the four generated candidates before picking one, for the same reason — the candidate thumbnails are served from the blocked host. The chosen design was verified through the Canva API's structured read and the after-edit thumbnails the edit tool returns inline, which is how the two copy/art problems noted in `pin-image-status.md` were caught.
- Worth a human deciding: if pin images are wanted daily, either allowlist `export-download.canva.com` for this session's egress policy, or drop the Canva step and generate pins from the `image_prompt` in `pin.md` instead.
