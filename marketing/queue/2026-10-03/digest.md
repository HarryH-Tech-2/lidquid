# Digest — 2026-10-03

## a. Repo changes since the previous run

**No changes.** `git log --since='26 hours ago' --oneline` returns nothing. `main` is still at `28f5809` ("Landing page conversion overhaul, GA4 funnel events, brand lead form, SEO files"), unchanged since before yesterday's run. No edits to `index.html`, `assets/`, or the SEO files.

## b. Queue status

**45 days of drafts exist**, counting today: `2026-08-20` through `2026-10-03`, unbroken, one folder per day.

**None of them are on `main`.** Every day lives on its own unmerged `marketing/<date>` branch. 44 PRs' worth of drafts are sitting in the queue waiting for a human — nothing has shipped. Worth a look: either the review step has stalled, or the drafts aren't actually the bottleneck and this routine is producing more than the pipeline consumes.

### Angles covered so far

| Angle | Days | Count |
|---|---|---|
| The surface — dead space / ad space / "the side you never see" / "you own a billboard" | 08-20, 08-21, 08-23, 08-24, 08-26, 08-27, 08-28, 08-29, 08-31, 09-01, 09-02, 09-05, 09-06, 09-07, 09-10, 09-17, 09-20, 09-22, 09-23, 09-25, 09-27, 09-28, 09-30, 10-01, 10-02 | **25** |
| The ice-breaker / "wait, what is that?" / café social | 08-22, 09-08, 09-11, 09-12, 09-14, 09-15, 09-19, 09-29 | **8** |
| You approve every brand (the veto) | 09-16, 09-26 | 2 |
| Cities open by demand — vote with your city | 08-30, 09-13 | 2 |
| Anti-influencer (monetise the laptop, not your personality) | 08-25 | 1 |
| No lock-in / peels off clean | 09-09 | 1 |
| Café-regular habit / coffee money | 09-18 | 1 |
| What counts as a verified scan | 09-21 | 1 |
| Sticker economics — the other stickers cost you money | **10-03 (today)** | 1 |
| Not clearly labelled | 09-03, 09-04, 09-24 | 3 |

### Three problems in the existing queue worth fixing

1. **The rotation has collapsed.** 25 of 44 days — 57% — are the same "your lid is dead/ad space" argument in different words. The brief asks for a different angle every day and that has quietly stopped happening.
2. **A verbatim duplicate shipped.** `2026-10-02`'s pin title is character-for-character identical to `2026-09-05`'s: *"You never see the back of your laptop. The whole café does."* Two different days, same headline.
3. **Two days shipped template placeholders as live copy.** `2026-09-24`'s pin title is literally `*(≤100 chars)*` and `2026-09-27`'s is `(≤100 chars — 52)`. Those are instructions from the brief left in the title field. If anyone had published them as-is, that is what would have gone out.

### Pin images

**0 of 44 previous days committed a `pin.png`.** Every single day has a `pin-image-status.md` instead, and the reason is the same every time: the Canva design and PNG export both succeed, but downloading the export URL fails because this session's egress proxy rejects `export-download.canva.com` with `CONNECT tunnel failed, response 403`. This is an environment network-policy block, not a Canva problem and not something the repo can fix. Today's attempt is recorded in this day's `pin-image-status.md`. **This needs a human decision — see suggestion 1.**

## c. Three suggestions for what to make next

1. **Unblock the pin images, or stop generating them.** This is the highest-value fix available and it is not a copy problem. Forty-five days of Canva designs exist in the Canva account and not one has ever reached the repo, because `export-download.canva.com` is blocked by the session proxy. Two ways out: allowlist that host for this environment's egress policy, or change step 4 of the routine to a generation path whose bytes can be written straight to disk. Until one of those happens, every future run will burn the same Canva quota and produce the same status file. *Why:* a pin without an image cannot be published, so the image is the actual bottleneck between this routine and anything going live.

2. **Spend a week on the angles nobody has used.** Three remain completely untouched and all three have real search demand: **student life** (campus libraries, the dorm-to-café circuit — never attempted in 45 days), **the 50-laptop pilot as scarcity** ("there are fifty of these, your city might not be first"), and **the brand-side pitch** (the site has a whole "for brands" section and a pilot-pricing form, and not one of the 45 days has spoken to a brand). *Why:* the owner-side surface angle is saturated past the point of diminishing returns, and the brand side is a funnel the site already supports but the marketing has never fed.

3. **Add a de-duplication check to this routine before writing copy.** A simple one would have caught all three defects in section b: compare the proposed title and angle against every previous `pin.md`, refuse an exact title match, and refuse an angle whose tag has already been used in the last fourteen days. *Why:* the brief already asks for a new angle each day, and it is being violated anyway — a mechanical check is more reliable than the instruction alone, and it is what would have stopped a placeholder string from shipping as a headline twice.
