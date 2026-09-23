# Digest — 2026-09-23

## a. repo changes since the previous run

`git log --since='26 hours ago' --oneline` returns nothing — **no changes** in the last 26 hours.

For context, the most recent commit on `main` is `28f5809` "Landing page conversion overhaul, GA4 funnel events, brand lead form, SEO files". The live page now carries: the pilot kicker (50 laptops, one city at a time), a four-step how-it-works, an illustrative earnings slider (explicitly labelled illustrative, with a note that real pilot numbers get published after the first city runs), a sticker-design carousel, the social/ice-breaker section, a for-brands section with a lead form, an eight-question FAQ with FAQPage structured data, and GA4 + Pinterest tag tracking. All claims in today's drafts are drawn from that page and none exceed it.

## b. queue status

- **Days of drafts: 1** — today is the first. `marketing/queue/` did not exist before this run; this run created it.
- **Angles covered so far:**
  - 2026-09-23 — *dead space → ad space*: the back of the laptop is the one screen you never look at, and it faces the whole café all day.
- **Angles still unused** (for rotation): coffee money / "this is how I earn coffee money"; the social/ice-breaker angle ("wait, what is that?"); you approve every brand; peels off clean, zero residue; cities open by demand — joining is the vote; freelancer & remote-worker life; student life; café-regular identity; the brand-side story (pay for verified scans, not impressions).

**Blocked / missing this run:** the pin image. The Canva design was generated successfully (design `DAHWBLP7zIg`, https://canva.link/el8o0znhdig8nv5) and the PNG export job succeeded, but downloading the file was refused by this session's egress proxy — `export-download.canva.com:443` returns 403 on CONNECT, an organisation policy denial. So `pin.png` is **not** in this folder; `pin-image-status.md` has the detail and two ways to get the image. Allowlisting that host would let future runs commit the PNG automatically. Nothing was blocked on the copy side.

## c. three things to make next

1. **The "wait, what is that?" pin — the ice-breaker angle.** The landing page devotes a whole section to it ("the part nobody expects"), and it's the one benefit that isn't money, which makes it the natural second pin: it reaches people who scroll past side-hustle content but stop for café-life and "how to meet people when you work alone". Pinterest boards for remote-work loneliness and third-place culture are a different audience from the passive-income boards today's pin targets.

2. **A city-vote asset — "your city opens when enough people want it."** This is the only mechanic on the page that turns a passive waitlist signup into something people forward to a friend, and there's already a referral link in the form flow. A pin plus an Instagram story-shaped post framed as "vote for your city" would work the demand-ordering into a reason to share, which no asset currently does.

3. **A brand-side LinkedIn post aimed at small local advertisers.** Both sides of the marketplace need filling and every draft so far speaks only to laptop owners. The for-brands pitch — pay per verified scan, owner-approved placement, raw vs billable shown side by side — is unusually concrete for an early-stage ad product, and LinkedIn is where that audience actually is. It would also give the `?ref=li-` links a second, distinct audience to measure against.
