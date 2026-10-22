# Digest — 2026-09-02

## a) Repo changes since the previous run

**No changes.** `git log --since='26 hours ago'` returns nothing. The most recent commit on `main` is `acfea02` from 2026-08-20 ("Landing page refresh: $ currency, How-it-works section, carousel and form updates"), which is ~13 days old.

For context, the eight commits on `main` so far built: the waitlist landing page, a social / meeting-people section, the FAQ block with FAQPage structured data, the Pinterest Tag plus a pagevisit conversion event, canonical and social meta pointing at lidquid.com, and the recent refresh that switched currency to `$` and added the four-step "How it works" section.

The landing page is stable, which is fine — but it also means nothing new has shipped for marketing to point at in almost two weeks. See suggestion 3.

## b) Queue status

**This is day 1.** `marketing/` did not exist before this run; this is the first entry in `marketing/queue/`.

- **Days of drafts:** 1 (2026-09-02)
- **Angles covered so far:**
  - `2026-09-02` — **unused ad space** ("your laptop has a blank side; brands will pay for it"). The real-estate framing: you already own the surface, it's already pointed at a room full of people, it has always been blank.

**Angles still open for rotation** (do not repeat 2026-09-02's):
- coffee money / "get paid to sit in cafés"
- the social / ice-breaker angle ("wait, what *is* that?")
- you approve every brand — it's your lid, we're just the agent
- peels off clean, zero residue, no lock-in
- cities open by demand — joining the list is the vote
- freelancer / remote-worker life
- student life
- café-regular identity
- what counts as a verified scan (the anti-bot, real-person angle)
- no posting, no followers, no promoting — the anti-influencer angle

**Known gaps carried forward:**
- `pin.png` is missing for this day. Canva generated and exported it fine, but every Canva domain is blocked by this environment's egress policy (403 at the proxy), so the file could not be downloaded into the repo. Details and both fixes are in `pin-image-status.md`. Until the allowlist is updated, **every future daily run will hit the same wall** — this is the single highest-value thing to fix.
- Because the thumbnail host is also blocked, the Canva candidate was chosen without being seen. Worth eyeballing before publishing.

## c) Three suggestions for what to make next

**1. Fix the Canva egress block before tomorrow's run.**
Add `export-download.canva.com` and `design.canva.ai` to the environment's network allowlist. Right now the agent can create designs but never commit them, so every day ships copy without art and a human has to hand-download the pin. One allowlist change makes the whole daily pipeline actually autonomous. Highest leverage item on this list by a distance.

**2. A "wait, what is that?" pin built on the social angle — and make it a carousel-ready set.**
The landing page already has a whole section arguing the sticker is an ice-breaker, and that's the most emotionally distinct claim Lidquid has: every competitor in the "side hustle" space sells money, nobody sells *meeting the barista*. It's also the claim least well served by a single static pin — it wants two or three panels (the glance → the question → the conversation). Pinterest rewards multi-image pins, and it gives the next few days a natural through-line instead of one-off posters.

**3. A city-vote asset, because it's the only CTA with real urgency.**
"Cities open in order of waitlist demand" is the one place where joining now beats joining later, and nothing in `marketing/` currently dramatises it. Make a pin template with a blank slot for a city name — a hand-drawn map pin, "____ is voting", lidquid.com — so the same artwork can be re-skinned per city and posted into local subreddits, city Instagram tags and coworking Slack groups. It turns one asset into a repeatable local-launch kit, and it gives the waitlist form a reason to be filled in *today*.
