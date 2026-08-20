# Digest — 2026-08-20

## a) repo changes since the previous run

One commit in the last 26 hours: `acfea02` — "Landing page refresh: $ currency, How-it-works section, carousel and form updates".

In plain English, the landing page got a decent-sized rework:

- **Currency switched to `$`** throughout the page. All copy now says "$ per verified scan" — no more £/GBP anywhere. Drafts from here on follow suit.
- **A new four-step "How it works" section**: join the waitlist → approve a brand → stick it on your lid → earn per verified scan. Worth mining for future posts — each step is basically its own hook.
- **A "spotted in the wild" carousel** was added, backed by three new photos in `assets/` (`wild-ad-space.jpg`, `wild-cafe-scan.jpg`, `wild-coffee-money.jpg`) with rotating captions. These are real image assets we can reuse for social rather than always generating art.
- **Waitlist form updates**, including a post-signup state that explains cities open in order of demand and offers a referral link to jump the queue. That referral mechanic is not currently reflected in any marketing copy — it should be.

An earlier commit (`e4e6bfc`, "Layout fixes + marketing automation groundwork") mentions marketing groundwork, but there was no `marketing/` directory in the repo before today.

## b) queue status

- **Days of drafts: 1** (this one). Today is the first run of the marketing-drafts agent — `marketing/queue/` did not exist before, so there is no back catalogue to differentiate against yet.
- **Angles covered so far:**
  - `2026-08-20` — **dead space / the unused asset**: the back of your laptop is the one bit of real estate you own and never look at.
- **Angles still unused** (rotate through these on following days, roughly one per day): coffee money · get paid to sit in cafés · the social / ice-breaker angle ("wait, what is that?") · you approve every brand · peels off clean, zero residue · cities open by demand — joining is the vote · freelancer & remote-worker life · student life · café-regular identity · what counts as a verified scan · no posting, no followers, no promoting · the referral / jump-the-queue mechanic.

## c) three suggestions for what to make next

1. **A pin built on the "wait, what is that?" ice-breaker angle, using `assets/wild-cafe-scan.jpg` instead of generated art.** The landing page dedicates a whole section to the social side — quiet café regulars turning into people you actually know — and that is the most emotionally distinctive thing Lidquid has. It is also the least like every other side-hustle pin on Pinterest, which are all money-first. Using a real photo rather than an AI illustration should also lift saves and click-through, since Pinterest tends to reward photographic pins in the lifestyle boards this belongs in.

2. **A "cities open in order of demand — joining is the vote" post aimed squarely at city-level audiences.** Right now the only CTA is the waitlist, and the waitlist ranking is the actual product mechanic driving launch order. A post that says plainly "your city opens when enough people in it sign up" gives people a reason to both join *and* send it to a friend, which no other angle does. Pair it with a pin template where the city name is the swappable element, so one design can be repeated per city later in the pilot.

3. **A short "peels off clean" explainer — the objection-handler post.** The FAQ shows the first question people have is whether the sticker wrecks their laptop; that fear is the main thing standing between interest and signup. A single-focus post on removable vinyl, zero residue, no lock-in, peel-it-off-and-keep-what-you-earned closes that loop. It also gives us a genuinely different visual: a peel-corner motif rather than a QR motif, which keeps the feed from looking repetitive.

## d) anything missing / blocked

- **`pin.png` is missing.** The pin was designed and finished in Canva at the right size (1000×1500), but this session's egress policy returns 403 on `export-download.canva.com`, so the exported file could not be downloaded into the repo. A 403 on CONNECT is an organisation policy denial, which the proxy's own guidance says not to retry or route around — so it wasn't. Full detail, the design link, and the one-line fix are in `pin-image-status.md`. Allowing that host would make this step automatic from the next run onward.
- **Worth flagging:** Canva's image generator rendered garbled fake words into the illustration's doodle pills ("PEEL SOFF", "DIEP CUENUR", "$ PER VEERFIED SFIANN"). That was caught and fixed by patching over them and setting real type. Every future run should check AI-generated art for nonsense lettering before it ships.
- No earnings figures, rates, or pilot stats are quoted anywhere in today's drafts — the site explicitly promises to publish real pilot numbers only once the first city has run, and nothing has been invented here.
