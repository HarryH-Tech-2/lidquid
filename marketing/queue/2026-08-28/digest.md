# Digest — 2026-08-28

## (a) Repo changes since the previous run

**No changes.** `git log --since='26 hours ago'` is empty. The most recent commit
is `acfea02` from 2026-08-20 — "Landing page refresh: $ currency, How-it-works
section, carousel and form updates" — eight days old. The landing page has been
stable for over a week.

## (b) Queue status

**1 day of drafts exists** — this one. This is the first run of the marketing
agent; the `marketing/` directory did not exist before today and was created by
this run.

Angles covered so far:

| Day | Angle | Headline |
|---|---|---|
| 2026-08-28 | unused real estate / "your lid is ad space" | you own a billboard and it's facing away from you |

Angles **not yet used**, available for rotation:

- coffee money / "this is how I earn coffee money"
- the social / ice-breaker angle ("wait, what is that?")
- you approve every brand — it's your lid, we're just the agent
- peels off clean, zero residue, no lock-in
- cities open by demand — joining the list is the vote
- freelancer / remote-worker life
- student life
- café-regular identity
- what counts as a verified scan (the trust/anti-bot angle)
- no posting, no followers — the anti-influencer angle

### Known gaps in this entry

- **`pin.png` is missing.** The Canva design was generated, cleaned and exported
  successfully, but the export download host is blocked by this session's network
  policy (HTTP 403 at the egress proxy). See `pin-image-status.md` for the design
  link and a manual download step. The `image_prompt` in `pin.md` is the fallback.
- No previous-day drafts existed to differentiate against, so the "must be
  genuinely new" check was trivially satisfied. From tomorrow it becomes real.

## (c) Three suggestions for what to make next

**1. Run the anti-influencer angle next: "no posting. no followers. no promoting."**
Every other side-hustle pitch aimed at this audience asks them to become a
content creator. Lidquid's actual differentiator is that it asks for nothing —
the landing page says so three separate times, so it's clearly the strongest
claim we already own. It also self-selects for the right pilot users: café
regulars who want money without a personal brand. Pairs naturally with a pin that
is mostly negative space and a list of things you don't have to do.

**2. Build a reusable "sticker in the wild" photo template rather than another poster.**
Four of the five files in `assets/` are already in-the-wild photography
(`wild-cafe-scan.jpg`, `wild-coffee-money.jpg`, `wild-ad-space.jpg`,
`sticker-in-the-wild.webp`). Pinterest rewards photo-led pins over pure typography
for lifestyle categories, and we're currently drafting typography-only. A
template that drops a zine-style caption bar onto an existing café photo would
use assets we already have, look less like AI output, and give the queue visual
variety across days instead of five near-identical cream posters.

**3. Draft the "cities open by demand" post as a recurring, city-taggable format.**
The waitlist is the only conversion on the site, and the page states cities open
in order of demand — meaning a post that names a city converts far better than a
generic one, and the same skeleton can be reused indefinitely ("[city], you're
currently Nth in line"). Worth drafting the template now, before there are real
city numbers to plug in, so it's ready the moment there are. Note for the human:
this format must not go live with invented rankings — leave the numbers as
placeholders until real waitlist data exists.
