# Digest — 2026-08-21

## a) Repo changes since the previous run

One commit in the last 26 hours:

```
acfea02 Landing page refresh: $ currency, How-it-works section, carousel and form updates
```

In plain English: the landing page had a decent-sized pass. Currency was switched to `$` throughout, and today's drafts follow that everywhere. A four-step **How it works** section was added — join the waitlist → approve a brand → stick it on your lid → earn per verified scan — which is now the clearest statement of the product on the site. The in-the-wild image carousel and the waitlist form were also updated; the carousel now loops seamlessly and the post-signup state pushes a referral link ("every friend who joins with your link bumps you up").

Worth noting for future copy: the FAQ commits to *"We'll publish real pilot numbers once the first city has run — no made-up projections."* That's a public promise not to invent figures, which is exactly why no rate, earnings total, or scan volume appears anywhere in today's drafts.

## b) Queue status

**This is the first entry in the queue.** `marketing/` did not exist before this run; there were no previous days to differentiate against.

| Day | Angle | Pin headline |
|---|---|---|
| 2026-08-21 | the perspective flip — the lid is the one surface *you* never see and everyone behind you does | you see one side of your laptop. strangers see the other. |

Angles **not yet used**, kept as the rotation pool for coming days:

- coffee money / "this is how I earn coffee money"
- the social / ice-breaker angle ("wait, what *is* that?")
- you approve the brand
- peels off clean, zero residue
- cities open by demand — vote with your city
- freelancer & remote-worker life
- student life
- café-regular identity
- no posting, no followers, no promoting

Note that `assets/` already ships three in-the-wild photos — `wild-coffee-money.jpg`, `wild-ad-space.jpg`, `wild-cafe-scan.jpg` — so the coffee-money and ad-space angles already have imagery on the live site. Today's angle was chosen partly to avoid repeating those.

## c) Three suggestions for what to make next

**1. A "vote with your city" pin, next run.**
The site's only CTA is email + city, and the FAQ says cities open in order of waitlist demand — "joining the list literally is the vote." No asset anywhere makes that mechanic visible. A pin built on a ballot-paper or hand-drawn map motif ("your city doesn't open until enough of you ask") converts curiosity directly into the one action the site wants, and it gives waitlist joiners a reason to recruit others — which the referral copy added in `acfea02` already rewards.

**2. A "peels off clean" proof asset.**
"Will the sticker wreck my laptop?" is the second FAQ and the biggest objection standing between interest and signup, and right now it's answered in words only. A three-panel strip or a short vertical clip — sticker on, mid-peel, bare lid — answers it in about a second and is reusable across Pinterest, IG Stories and the FAQ section itself. This is the highest-value *missing* asset, not just the next post.

**3. An angle ledger at `marketing/angles.md`.**
Each daily run currently has to re-read every previous queue folder and re-derive what's been covered, which gets slower and less reliable as the queue grows. A single append-only file — date, angle, headline, channel — makes rotation a lookup instead of an inference, and doubles as the record of which angles actually earned clicks once `?ref=` data comes back.

## Anything missing from this run

**`pin.png` is not in this folder.** The pin was designed, corrected and exported at the right size in Canva, but this sandbox's proxy denies every Canva download host (`403` on CONNECT), so the file could not be pulled into the repo. Full detail, the Canva design link, the direct export URL and three ways to recover the image are in `pin-image-status.md`. The `image_prompt` in `pin.md` is a complete fallback that needs no Canva access.

Everything else in the run completed: `pin.md`, `social.md`, this digest, the branch, and the PR.
