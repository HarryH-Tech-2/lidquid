# Digest — 2026-10-02

## a) Repo changes since the previous run

**No changes.** `git log --since='26 hours ago' --oneline` returned nothing.

The most recent commit on `main` is from 2026-09-15: "Landing page conversion overhaul, GA4 funnel events, brand lead form, SEO files" — that landed the current conversion-focused page (hero, how-it-works, the illustrative earnings slider, the social/ice-breaker section, the for-brands block with the budget form, the FAQ, and the SEO files). Nothing has shipped in the last 26 hours, so today's drafts are written against that same page copy.

## b) Queue status

- **Days of drafts in the queue: 1** (today, `2026-10-02`). This is the first run — `marketing/` did not exist before today, so there was no previous queue to differentiate against.
- **Angles covered so far:**
  - `2026-10-02` — **the side you never see** (ad space / the dead surface on the back of your lid). Hook: you have never looked at the back of your own laptop, but the whole café has.

- **Angles still unused** (for rotation on following days): coffee money / "this is how I earn coffee money"; the social & ice-breaker angle ("wait, what *is* that?"); "you approve every brand"; "peels off clean / no commitment"; "cities open by demand — vote with your city"; freelancer & remote-worker life; student life; café-regular identity; the brand-side pitch (pay per verified scan, not impressions); "what counts as a verified scan".

## c) Three suggestions for what to make next

1. **The "wait, what is that?" pin — the ice-breaker angle.** The landing page calls this "the part nobody expects", and it is the one benefit no competing side-hustle can claim: the sticker earns *and* it makes café strangers talk to you. It targets a completely different search intent from today's ad-space angle (loneliness / remote-work isolation / meeting people, rather than money), so it widens the keyword net instead of competing with today's pin. Pair it with an illustration of two laptops at neighbouring tables and a speech bubble.

2. **A "vote with your city" pin built around the waitlist mechanic.** Cities open in order of waitlist demand, which makes joining a low-commitment civic-feeling action rather than a signup — and it gives people a concrete reason to share the link with other people in their city (which is also the referral mechanic already on the page). This is the single most conversion-relevant thing on the site that today's drafts don't touch, and it's naturally shareable in city-specific subreddits and local groups later.

3. **A plain-text, no-image "objection killer" post for X/Threads and LinkedIn.** Short Q&A format answering the three things everyone actually asks first: will it wreck my laptop (removable vinyl, zero residue), do I have to post about it (no), can I pick the brand (yes, you approve every one). The FAQ copy already exists on the page, so this is cheap to produce, it's the format that performs without a design dependency, and it pre-empts the replies the image pins will attract anyway.

## Gaps / notes for the reviewer

- All three suggestions above are angle rotations, not new claims — nothing proposed requires an earnings figure or a stat we don't have.
- Earnings deliberately phrased as "$ per verified scan" throughout. No rates, no monthly totals: the page itself promises real pilot numbers only once the first city has run.
- **`pin.png` is missing.** The Canva design was created and verified (1000x1500, correct headline) and the PNG export succeeded, but downloading it into the repo was blocked twice by this session's egress proxy (`export-download.canva.com:443` -> 403 CONNECT rejected, organization policy). Full detail, the Canva links and manual download steps are in `pin-image-status.md`. The `image_prompt` in `pin.md` remains the fallback.
