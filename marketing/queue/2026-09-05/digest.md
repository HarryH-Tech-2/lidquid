# Digest — 2026-09-05

## a) Repo changes since the previous run

**No changes.** `git log --since='26 hours ago'` returns nothing. The most recent commit on `main`
is `acfea02` from 2026-08-20, "Landing page refresh: $ currency, How-it-works section, carousel and
form updates" — about two weeks old. The landing page has been stable since then: currency switched
to `$`, the four-step "How it works" section added, the in-the-wild carousel and the waitlist form
updated.

For context on what the page currently claims (this run mirrored it and did not exceed it): pilot ·
50 laptops · one city at a time; cities open in order of waitlist demand; you approve every brand;
removable vinyl, zero residue; earn per verified scan; no posting/followers/promoting; peel off any
time and keep what you've earned. The FAQ explicitly promises real pilot numbers only *after* the
first city runs — so no earnings figures anywhere in today's drafts.

## b) Queue status

**1 day of drafts exists.** This is the first entry — `marketing/queue/` did not exist before today,
and neither did `marketing/`. Nothing to differentiate against yet; from tomorrow this section
should list prior angles so they don't repeat.

Angles covered so far:

| day | angle | headline |
|---|---|---|
| 2026-09-05 | **the side you never see** — your lid faces away from you and toward everyone else | "you never see the back of your laptop. the café does." |

Angles still unused (rough rotation queue): the social / ice-breaker angle ("wait, what is that?"),
"you approve the brand", "peels off clean — the no-commitment angle", "cities open by demand — vote
with your city", freelancer / remote-worker life, student life, café-regular identity, coffee money,
"a tiny billboard company", the verified-scan / anti-bot angle.

## c) Three suggestions for what to make next

1. **Run the ice-breaker angle next, and make it a photo-led pin rather than a typographic one.**
   The landing page's own "the part nobody expects" section is its most distinctive claim — the lid
   turns café regulars into people you actually know — and it's the one thing no competing side-
   hustle pitch can say. It also sidesteps money talk entirely, which matters while there are no
   published pilot numbers. `assets/wild-cafe-scan.jpg` and `assets/sticker-in-the-wild.webp`
   already exist and are on-brand; a pin built on a real photo will outperform a generated one on
   Pinterest, where scannable real-world context beats poster art.

2. **Build a reusable Canva brand template instead of generating a fresh design every day.**
   Today's image step burned four AI candidates and still produced nothing usable in-repo. A single
   1000×1500 template with the cream/dot-grid background, hand-drawn border, headline slot and QR
   motif — created once, then filled per day via `create-design-from-brand-template` — would be
   faster, cheaper, visually consistent across the whole queue, and far less prone to AI mangling
   the headline text. Worth doing before day 3, while there's only one day of drafts to match.

3. **Make a "vote for your city" asset series — one pin per candidate city.**
   The waitlist is the only CTA and the only conversion event on the site, and "cities open in order
   of demand — joining is the vote" is the single strongest reason to join *today* rather than
   later. City-named pins ("[city]: 50 lids. one city at a time.") are highly searchable on
   Pinterest, trivially templatable off suggestion 2, and give the queue a repeatable format for
   thin days. Needs a human to pick the shortlist of cities first.

## Blockers / what's missing from this run

- **`pin.png` was not produced.** The Canva design was created fine, but this session's network
  policy blocks `export-download.canva.com` and `design.canva.ai` with a gateway 403, so the export
  couldn't be downloaded and the candidates couldn't be previewed before picking. Details, the
  design's edit/view URLs, and the fix are in `pin-image-status.md`. The `image_prompt` in `pin.md`
  is the fallback.
- **Candidate 1 was chosen sight-unseen** for the same reason. Someone should check the rendered
  headline text before this pin goes anywhere near Pinterest.
- No `gh` CLI in this environment; the PR was opened via the GitHub MCP tools instead.
