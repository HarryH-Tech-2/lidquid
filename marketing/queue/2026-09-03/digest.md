# Digest — 2026-09-03

## a) Repo changes since the previous run

**No changes.** `git log --since='26 hours ago' --oneline` returns nothing.

`main` is still at `acfea02` — "Landing page refresh: $ currency, How-it-works
section, carousel and form updates" — dated 2026-08-20. That's 14 days without a
commit. The eight commits on `main` built, in order: the waitlist landing page, a
social / meeting-people section, the FAQ block with FAQPage structured data, the
Pinterest Tag plus a pagevisit conversion event, canonical and social meta
pointing at lidquid.com, and the currency/how-it-works refresh.

Nothing new has shipped for marketing to point at in two weeks.

## b) Queue status

**15 days of drafts now exist — but none of them are on `main`.**

Every daily run has committed to its own `marketing/<date>` branch and opened a
PR. All 14 previous PRs (#1–#14) are **still open**. Nothing has been merged or
closed since the first one on 2026-08-20.

That has caused a real problem, and it's the main finding of this run:

> **Each run has been reading a fresh clone of `main`, where `marketing/` does
> not exist — so every run has concluded it was day 1 and picked the most
> obvious angle available.**

Yesterday's digest states this outright: *"This is day 1. `marketing/` did not
exist before this run."* It was day 14.

The result is a badly collapsed rotation. Angles actually used:

| Day | Angle |
|---|---|
| 2026-08-20 | dead space / unused asset |
| 2026-08-21 | the side you never see (dead space) |
| **2026-08-22** | **social / ice-breaker** |
| 2026-08-23 | ad space you already own (dead space) |
| 2026-08-24 | dead space |
| **2026-08-25** | **anti-influencer** |
| 2026-08-26 | the side you never see (dead space) |
| 2026-08-27 | dead space |
| 2026-08-28 | unused real estate / your lid is ad space (dead space) |
| 2026-08-29 | your lid is doing nothing (dead space) |
| **2026-08-30** | **cities open by demand** |
| 2026-08-31 | the surface you never see (dead space) |
| 2026-09-01 | the side you never see (dead space) |
| 2026-09-02 | unused ad space (dead space) |
| **2026-09-03 (today)** | **you approve every brand — the veto** |

**11 of the 14 previous days are the same "dead space / your lid is ad space"
pitch with a different headline.** Only three days broke out of it. Today is the
fourth distinct angle in fifteen days.

This run found the previous days by listing the remote `marketing/*` branches
directly rather than trusting the working tree. Any future run needs to do the
same, or merge the backlog — see suggestion 1.

**Angles still genuinely unused:**

- coffee money / "get paid to sit in cafés"
- peels off clean, zero residue, no lock-in (reversibility on its own)
- what counts as a verified scan — the real-person / anti-bot angle
- freelancer / remote-worker life
- student life
- café-regular identity
- "no posting, no followers" as its own pitch, separate from anti-influencer
- the referral mechanic (every friend who joins bumps you up the list)

**Known gaps carried forward:**

- `pin.png` is missing again. Canva generated and exported it fine; every Canva
  domain is 403-blocked by this environment's egress policy, so the file can't be
  downloaded into the repo. Details in `pin-image-status.md`. **Two consecutive
  days lost to this.**
- The Canva candidate was picked without being seen — the thumbnail host is
  blocked too.

## c) Three suggestions for what to make next

**1. Clear the PR backlog, or the rotation will collapse again tomorrow.**

This is the highest-leverage item on the list and it isn't a content idea — it's
the bug that has been costing roughly one usable draft per day for two weeks. The
14 open PRs only add files under `marketing/queue/`; they touch nothing else and
cannot conflict with each other. Merging them makes every future run see the real
history in its working tree. If they're being held open deliberately for review,
then the fix instead belongs in the agent's prompt: fetch `refs/heads/marketing/*`
and read the prior `pin.md` files *before* choosing an angle. Either fix works.
Neither costs anything. Without one of them, day 16 will be "the side of your
laptop you never see" for the twelfth time.

**2. Generate the pin locally instead of via Canva.**

The Canva egress block has now eaten two days, and asking for an allowlist change
is a request to someone else that may never land. The pin is flat vector art —
cream ground, dot grid, chunky type, a QR block, two doodle pills — and the exact
brand tokens (`#f6f1e7`, `#1c1a17`, `#ffb703`, `#ff5d47`, `#0f766e`, Gochi Hand,
Archivo) are already sitting in `index.html`. A small committed script that
renders an SVG template to a 1000×1500 PNG would produce a real image every
single day, with no external dependency, no 403, and no human hand-download. It
would also make the pins visually consistent, which four days of different Canva
candidates will not be. Keep Canva for one-offs where art direction matters.

**3. Turn the FAQ into a seven-pin "fair questions" series.**

Today's veto angle came straight out of the FAQ block, and it's the first draft in
two weeks that answers an objection instead of restating the premise. There are
six more questions sitting there unused — will it wreck my laptop, what counts as
a verified scan, what if I want out, when does my city open. Each is a pin: the
question in chunky display type on cream, the answer as one handwritten line.
Objection-handling content outperforms premise-restating content on Pinterest
because it matches what people actually search, the answers are already written
and already true, and the page carries FAQPage structured data — so the pins and
the search snippets would finally say the same thing. It also gives the next week
a built-in rotation that cannot collapse back into "your lid is ad space."
