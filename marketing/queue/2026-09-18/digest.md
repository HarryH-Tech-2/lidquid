# Digest — 2026-09-18

## (a) Repo changes since the previous run

**No changes.** `git log --since='26 hours ago' --oneline` on `main` returns nothing. The most recent commit to `main` is still `28f5809` *"Landing page conversion overhaul, GA4 funnel events, brand lead form, SEO files"*, from 2026-09-16. Nothing in `index.html` or `assets/` moved, so today's drafts mirror the same claims as yesterday's.

## (b) Queue status

**30 days of drafts now exist — 2026-08-20 through 2026-09-18 (today), unbroken.**

Two things about that number are worth a human's attention:

- **All 29 previous days are still sitting in open pull requests (#1–#29). None has been merged or closed.** `main` has no `marketing/` directory at all — every day's work lives only on its own branch. The drafts are piling up, not shipping, and no previous digest appears to have been read. If the queue is meant to feed a posting schedule, nothing has reached it.
- **`pin.png` has never once been committed.** All 30 runs, today included, hit the same wall: the environment's network policy denies `export-download.canva.com` with a 403 on CONNECT, so the exported PNG cannot be fetched. Every day has a `pin-image-status.md` saying so. Allowing that one host makes the step automatic. See this day's `pin-image-status.md` for the detail.

### Angles covered (29 previous days + today)

| angle | days | count |
|---|---|---|
| **dead space / unused real estate / "the side you never see" / "your lid is ad space"** | 08-20, 08-21, 08-23, 08-24, 08-26, 08-27, 08-28, 08-29, 08-31, 09-01, 09-02, 09-05, 09-06, 09-07, 09-10, 09-17 | **16** |
| **social / ice-breaker / "wait, what is that?"** | 08-22, 09-04, 09-08, 09-11, 09-12, 09-14, 09-15 | **7** |
| you approve every brand (the veto) | 09-03, 09-16 | 2 |
| cities open by demand — vote with your city | 08-30, 09-13 | 2 |
| anti-influencer (no posting, no followers) | 08-25 | 1 |
| no lock-in / peels off clean | 09-09 | 1 |
| **café-regular / coffee money — "you were going to sit there anyway"** | **09-18 (today)** | **1** |

**The rotation is badly unbalanced.** Sixteen of thirty days — more than half — are the same "your lid is dead space" argument in different words, and seven more are the ice-breaker angle. Between them those two angles account for 23 of 30 days. Today deliberately breaks that: it is the first day to argue from *the hours you already spend* rather than from the laptop's surface, and the first to use the "coffee money" / café-regular identity that the brand already owns as a tagline.

**Never used yet:** student life; freelancer/remote-worker life as its own story; the "what counts as a verified scan" angle (real person, real phone, first scan — the anti-bot integrity story); and the brand-side pitch (pay for verified scans, not impressions).

## (c) Three suggestions for what to make next

1. **Run the "verified scan" angle next — it is the only major site claim never used in marketing.** The FAQ answers *"a real person, on a real phone, scanning for the first time — repeat scans, bots, and you scanning it yourself in a mirror don't count."* That line is funny, specific, and does a job none of the other angles do: it pre-empts the "is this a scam / can I just scan it myself" objection that any sceptical reader lands on within seconds. Thirty days of drafts have sold the *idea*; none has sold the *integrity*. It also gives the pin a genuinely different image: a phone mid-scan rather than another laptop-from-behind.

2. **Stop generating a new angle each day and cut a week of the winners instead.** With 30 days banked and zero shipped, the bottleneck is plainly review, not supply — and 23 of 30 are two angles, so the pile is shallower than it looks. A single PR holding seven ready-to-post pieces, one per day, picked across *distinct* angles, is far easier to approve in one sitting than 30 separate PRs. Worth asking whether this routine should switch to weekly batches, or pause new drafts until the backlog clears.

3. **Make a reusable brand pin template in Canva and stop regenerating art from scratch.** Every run so far has asked the AI generator for the riso/zine look and every run has got something off-brief — today a serif headline, a missing wordmark, and a garbled `@GHAN sHFc2013` watermark baked into the illustration that had to be patched out by hand. A single hand-built 1000×1500 template with the real fonts, the ink border, the washi tape and the liquid-drip QR, where each day only swaps the headline text, would be faster, on-brand every time, and immune to the garbled-lettering problem. It would also make the blocked-download issue cheaper to live with, since the template could be exported once and reused.
