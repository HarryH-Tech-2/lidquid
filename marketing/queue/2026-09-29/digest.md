# Digest — 2026-09-29

## (a) repo changes since the previous run

No changes. `git log --since='26 hours ago' --oneline` returns nothing — the last commit on main is
`28f5809 Landing page conversion overhaul, GA4 funnel events, brand lead form, SEO files`, which
landed before this window. The landing page copy this run was written against is therefore the
current live copy: pilot framing (50 laptops, one city at a time), "$ per verified scan" with no
published rates, the earnings slider explicitly marked illustrative, and the waitlist-plus-city
form as the only CTA.

## (b) queue status

**Days of drafts in the queue: 1** (this one). This is the first run — `marketing/` did not exist
before today, so there was no previous queue to differentiate against.

**Angles covered so far:**

| day | angle | headline |
|---|---|---|
| 2026-09-29 | social / ice-breaker — the lid earns *and* makes the café talk to you | my laptop made a friend. |

**Angles still open** (for rotation on future days): coffee money · "your lid is ad space" ·
you approve every brand · peels off clean, zero residue · cities open by demand (your city is your
vote) · freelancer & remote-worker life · student life · café-regular identity · the brand-side
pitch (pay per verified scan, not impressions) · "what counts as a verified scan".

**Gaps / missing this run:** `pin.png` is **not** in this folder. The Canva design was generated
and the PNG export succeeded, but downloading it into the repo was blocked by this environment's
egress policy (`export-download.canva.com` returned `CONNECT tunnel failed, response 403` on both
attempts). The design is live at https://canva.link/47u0w784i57rkcg and needs a 30-second manual
download — see `pin-image-status.md` for the steps and for the permanent fix (allowlist that host).
The `image_prompt` in `pin.md` is the fallback if the Canva render isn't right. Note that nobody,
agent included, has actually looked at the rendered pin, so it wants a human eye before it goes out.

Everything else this run completed normally.

## (c) three suggestions for what to make next

1. **A "cities open in order of demand — your city is the vote" pin.** This is the only mechanic on
   the site that gives a reader something to *do* beyond joining, and it turns a waitlist signup
   into a local rivalry. It is also the most shareable angle: people tag their city. Pair it with a
   riso map doodle and a hand-drawn ballot box. Highest expected conversion of the open angles
   because the CTA and the content are the same action.

2. **A "peels off clean, zero residue" explainer pin.** The single biggest unspoken objection is
   "this will wreck my laptop" — it is literally FAQ #2 on the site. A three-panel zine strip
   (stick → work → peel, nothing left behind) answers it visually in the format Pinterest rewards,
   and defuses the objection before the click rather than after it.

3. **A brand-side LinkedIn post on "pay per verified scan, not impressions."** Every asset so far
   talks to laptop owners, but the site has a whole brand funnel (pilot pricing form, raw vs
   billable reporting) with no content pointed at it. LinkedIn is where that buyer is, and
   "deduplicated, bot-filtered, self-scans excluded" is a genuinely differentiated claim we can
   make without inventing a single number.
