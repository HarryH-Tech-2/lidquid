# Digest — 2026-08-27

## a) repo changes since the previous run

`git log --since='26 hours ago' --oneline` → **no changes.** Nothing has landed in
the repo in the last 26 hours.

For context, the most recent work on `main` (all older than the window) was the
landing page refresh that switched currency to `$`, added the four-step
how-it-works section, and updated the carousel and waitlist form.

## b) queue status

**This is the first entry in the queue.** There was no `marketing/` directory in
the repo before today — this run created `marketing/queue/` from scratch.

- days of drafts in the queue: **1** (2026-08-27)
- angles covered so far:
  - **2026-08-27 — dead space.** The back of your laptop has been blank the whole
    time; it faces strangers all day and earns nothing. Headline: "your lid is
    doing nothing."

**Angles still unused** (for rotation on future days): coffee money · the
social / ice-breaker angle ("wait, what is that?") · you approve every brand ·
peels off clean, zero residue · cities open by demand, joining is the vote ·
freelancer / remote-worker life · student life · café-regular identity ·
what a verified scan actually means · no posting, no followers.

**Existing image assets already in the repo** (`assets/`), worth knowing so pins
don't duplicate them: `wild-ad-space.jpg`, `wild-cafe-scan.jpg`,
`wild-coffee-money.jpg`, `sticker-in-the-wild.webp`, `og-card.jpg`. The ad-space
and coffee-money framings are therefore already represented visually — today's
"doing nothing" angle deliberately sits next to them rather than repeating them.

## c) three suggestions for what to make next

1. **The "wait, what is that?" pin (social / ice-breaker angle).** The landing
   page devotes a whole section to it and no marketing asset uses it yet. It's
   also the only angle that isn't about money, which makes it the natural
   second pin — it reaches people who scroll past side-hustle content. Suggested
   headline: "the sticker that talks to strangers for you."

2. **A "cities open by demand" pin with a vote framing.** The single CTA on the
   site is the waitlist, and the site's own argument for joining is that joining
   *is* the vote for your city. That's a sharper reason to act today than any
   earnings claim, and it's honest about the pilot stage. It also gives us
   something we can repeat per-city later without rewriting the concept.

3. **A short "what counts as a verified scan" explainer card (carousel or
   single image).** The one question that decides whether people trust the whole
   model — real person, real phone, first time, bots don't count. Building trust
   copy now means later posts can say "$ per verified scan" without having to
   re-explain it, and it keeps us clear of inventing rates we don't have.

## missing / blocked

**`pin.png` is missing.** The pin was designed and corrected successfully in
Canva (design ID `DAHTfLhtrqw`), but the export file could not be downloaded into
the repo: this session's egress policy denies both `design.canva.ai` and
`export-download.canva.com` with a 403 at the gateway. Policy denials aren't
retried. A human can export it manually in about thirty seconds — see
`pin-image-status.md` for the design link and the exact steps, plus the
allowlist change that would automate it on future runs.

Worth flagging for review: the Canva generator invented a rate ("$5 per verified
scan") and misspelled the domain ("lidquad.com") in its first output. Both were
caught and fixed before committing the design, but it's a reminder that generated
pin text needs reading every time rather than trusting the prompt.

Nothing is blocked on the copy side — `pin.md`, `social.md` and this digest are
complete.
