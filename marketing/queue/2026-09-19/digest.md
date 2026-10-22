# Digest — 2026-09-19

## a) Repo changes since the previous run

**No changes.** `git log --since='26 hours ago'` returns nothing — no commits to
the repo in the last 26 hours.

For context, the most recent work on the landing page (all older than this
window) was a conversion overhaul: GA4 funnel events, a brand lead form, SEO
files (`robots.txt`, `sitemap.xml`), the switch to `$` currency, the
"How it works" section, and FAQ structured data. Nothing in that has changed
today, so today's drafts mirror the live page exactly as it stands.

## b) Queue status

**Days of drafts: 1** (this is the first entry in `marketing/queue/`).

Angles covered so far:

| Day | Angle |
|---|---|
| 2026-09-19 | **The ice-breaker** — "wait, what *is* that?" The lid earns money *and* turns quiet café regulars into people you actually know. |

Angles still unused, for rotation on future days:
coffee money · your lid is ad space · you approve the brand · peels off clean,
zero residue · cities open by demand (joining is the vote) · freelancer /
remote-worker life · student life · café-regular identity · the brand-side
pitch (pay per verified scan, not impressions) · what counts as a verified scan.

**Blocker this run:** `pin.png` could not be committed. The Canva design was
created, verified at 1000x1500 and exported successfully, but the session's
egress proxy denied the download with a 403 organization policy error for
`export-download.canva.com` (and `design.canva.ai`, so candidate thumbnails
could not be previewed either). Details and the direct Canva link are in
`pin-image-status.md`. Until those two hosts are allowlisted, every future run
will hit the same wall and the pin image will need a manual download.

## c) Three suggestions for what to make next

1. **Allowlist the two Canva hosts before the next run.**
   `export-download.canva.com` and `design.canva.ai` are the only things
   standing between this agent and a fully automated daily pin. Every other
   step of the image pipeline already works end to end. This is a one-line
   config change that unblocks the single highest-friction part of the whole
   routine, and it compounds — it costs a manual download *every single day*
   until it's fixed.

2. **A "cities open by demand — vote with your city" pin.**
   This is the only CTA on the site that has genuine urgency baked into it, and
   it is currently doing nothing in the marketing. "joining the list literally
   is the vote" is a strong, honest scarcity hook that needs no invented
   numbers, and it converts better than a generic earnings angle because it
   gives the reader a reason to act *today* rather than bookmark. It also
   naturally produces shareable city-specific variants later.

3. **A brand-side asset aimed at marketers, not laptop owners.**
   Everything so far speaks to supply (people with lids). The site has a full
   "for brands" section — pay per verified scan not impressions, owner-approved
   placement, raw vs billable side by side — and none of it is being marketed.
   A LinkedIn-first carousel or single image built on "you pay for scans, not
   impressions nobody can prove" reaches the side of the marketplace that
   actually pays, and LinkedIn is the right channel for it. A pilot needs both
   sides of the marketplace to open a city.
