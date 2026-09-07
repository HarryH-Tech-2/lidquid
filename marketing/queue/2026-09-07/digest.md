# Digest — 2026-09-07

## a) Repo changes since the previous run

**No changes.** `git log --since='26 hours ago'` returns nothing — the working tree
is at `acfea02`, which landed before this window.

For context, the most recent work on the landing page (all older than 26 hours):

- `acfea02` — landing page refresh: switched currency to `$`, added the
  four-step "How it works" section, reworked the in-the-wild carousel and the
  waitlist form.
- `4737efb` — pointed canonical and social meta URLs at lidquid.com.
- `a8d5f79` / `45b5176` — added the Pinterest Tag, a pagevisit event, and unique
  event IDs on the waitlist signup conversion.
- `eb33575` — added the FAQ section with FAQPage structured data.

## b) Queue status

**1 day of drafts exists** — today's, `2026-09-07`. This is the first run; there
was no `marketing/` directory in the repo before now, so the queue starts here.

Angles covered so far:

| Day | Angle |
|---|---|
| 2026-09-07 | **Unused real estate** — the back of your laptop is the one surface you never look at and the only one strangers do; you already own a billboard, you're just not renting it. |

Angles still unused (rotate through these on following days): coffee money ·
the social / ice-breaker angle · you approve the brand · peels off clean, no
lock-in · cities open by demand, joining is the vote · freelancer & remote-worker
life · student life · café-regular identity · what a "verified scan" actually
means · the sticker line itself ("I get paid every time you scan this").

**Blocked / missing this run:** `pin.png`. The Canva design was generated and
exported fine, but both Canva download hosts are denied by this session's egress
policy (403 on CONNECT), so the file couldn't be pulled into the repo. Details
and the Canva links are in `pin-image-status.md`. The candidate was also chosen
without being able to see it — a human should check it before publishing.

## c) Three things to make next

1. **A "what counts as a verified scan" explainer pin.** The FAQ answer (a real
   person, a real phone, a first-time scan — no repeats, no bots, no scanning it
   yourself in a mirror) is the single most trust-building thing on the site and
   it's currently buried behind a `<details>` toggle. It handles the "this sounds
   like a scam" objection before anyone types it, and the mirror joke is on-voice
   and very screenshot-able. Format: a three-panel tick/cross zine strip.

2. **A city-voting pin aimed at one named city at a time.** "Cities open in order
   of waitlist demand" is the strongest reason to join *today* rather than later,
   and it's the only mechanic on the site with real urgency. A templated pin —
   same layout, city name swapped — turns one design into an ongoing series and
   makes each pin locally searchable on Pinterest. Do **not** claim any city is
   close to opening or quote waitlist counts; the copy is just "your city opens
   when enough people vote for it."

3. **Fix the pin image pipeline before it becomes a daily gap.** Today's run
   produced everything except the actual image, and it'll fail identically
   tomorrow. Two options for a human: allow `export-download.canva.com` in the
   environment's egress policy (the clean fix, and it also restores thumbnail
   previews so candidates can be chosen on merit rather than blind), or drop
   Canva and treat the `image_prompt` in each `pin.md` as the deliverable.
   Worth deciding now rather than after a week of pinless days.
