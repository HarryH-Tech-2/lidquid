# Digest — 2026-09-17

## a) repo changes since the previous run

**No changes.** `git log --since='26 hours ago' --oneline` returned nothing. The most recent commit on `main` is `28f5809` "Landing page conversion overhaul, GA4 funnel events, brand lead form, SEO files" from 2026-09-15 — two days before this run, so it falls outside the window.

For context (not in the window, but useful since this is the first digest): the landing page currently carries the conversion overhaul — the earnings slider with its "illustrative only" disclaimer, the four-step how-it-works, the social / ice-breaker section, the for-brands block with the budget form, the FAQ with FAQPage structured data, and GA4 + Pinterest tag funnel events.

## b) queue status

- **Days of drafts in `marketing/queue/`: 1** — this is the first one. There was no `marketing/` directory in the repo before this run; it was created here.
- **Angles covered so far:**
  - `2026-09-17` — **dead space**: the back of your laptop is the one surface in the room that faces everyone and earns nothing. ("might as well charge rent.")
- **Angles still unused** (rotation pool for future days): coffee money · "you approve the brand" · peels off clean / zero residue · the social / ice-breaker angle · cities open by demand — vote with your city · freelancer & remote-worker life · student and campus life · café-regular identity · the brand-side pitch (pay for verified scans, not impressions) · "what counts as a verified scan".

## c) three things to make next

1. **A "you approve every brand" pin + thread.** It's the objection that kills the idea for most people the second they picture a stranger's logo on their laptop, and the landing page answers it hard ("It's your lid; we're just the agent"). Nothing in the queue has addressed the fear yet — day 1 sold the opportunity, day 2 should remove the risk.

2. **A city-vote asset ("your city is on the list, it just isn't first").** The waitlist form has a second step that captures city, and the page says cities open in order of demand — that's a genuine mechanic, not a marketing line, and it makes sharing self-interested: recruiting your city moves it up. A pin or IG post built purely around "joining is the vote" gives the waitlist a reason to spread beyond the person who signed up.

3. **A close-up sticker/QR visual with the sticker line as the whole image.** The sticker copy — "I get paid every time you scan this." — is the single best piece of writing the brand owns, and it works with zero context: a tight crop of the vinyl with liquid-drip QR, no explanation, no logo until the bottom. Pinterest rewards a strong single-image idea, and it gives the account a recognisable visual signature to repeat.

## d) blockers / what's missing

- **`pin.png` is missing.** The Canva design was built and exported fine (1000×1500, design `DAHVdDtzFvU`), but this environment's network policy returns 403 on every Canva media host, so the PNG could not be downloaded into the repo. Full detail, links and three ways to recover the file are in `pin-image-status.md`. The `image_prompt` in `pin.md` is a complete standalone fallback.
- **Canva's first generation was unusable** and was discarded — it ignored the brief and produced its own copy ("Laptop Etiquette", "No Privacy") over a stock laptop photo. The second attempt honoured the exact text. Worth knowing for future runs: pin the literal strings in the prompt and expect to strip Canva's `reallygreatsite.com` placeholders afterwards.
- No previous-day queue folders existed to differentiate against, so day 1's "must be new" check was trivially satisfied. From day 2 onward the angle list in section (b) is the reference to diff against.
