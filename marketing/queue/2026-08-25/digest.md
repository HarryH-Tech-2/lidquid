# Digest — 2026-08-25

## a) repo changes since the previous run

**No changes.** `git log --since='26 hours ago' --oneline` returned nothing — no commits to `main` in the last 26 hours.

For context, since this is the first digest, here's where the repo currently stands. The most recent commit is `acfea02` — a landing page refresh that switched the currency to `$`, added the "How it works" four-step section, and updated the carousel and waitlist form. Before that: canonical and social meta URLs pointed at lidquid.com, Pinterest tag tracking added (pagevisit + waitlist signup conversion events, with unique event IDs), an FAQ section with FAQPage structured data, and the social / meeting-people highlight section.

Two things worth noting for marketing purposes:
- **Pinterest conversion tracking is already live** on the site, so pin traffic should be measurable end-to-end once pins go out.
- The site now has **FAQ structured data**, which means the FAQ answers are the most authoritative copy in the repo. Drafts should not contradict them.

## b) queue status

**1 day of drafts exists** (this one). This was the first run — `marketing/` did not exist before today and was created by this run.

Angles covered so far:

| day | angle | headline |
|---|---|---|
| 2026-08-25 | dead space / unused ad space | "the back of your laptop is unemployed" |

Angles still unused, roughly in the order I'd rotate them:

- coffee money / "this is how I earn coffee money"
- the social / ice-breaker angle ("wait, what *is* that?")
- you approve the brand — control and veto
- peels off clean / zero residue — the objection-killer
- cities open by demand — vote with your city
- freelancer + remote-worker life
- student life
- café-regular identity
- verified scan — what actually counts, and why brands trust it

## c) three things to make next

**1. The ice-breaker angle, as the next pin.**
The site itself flags this as "the part nobody expects", and it's the one claim Lidquid has that no other side-hustle pitch can make: the money is the hook, but *meeting the freelancer two tables over* is the thing people screenshot and send to a friend. Every competing "earn passive income" pin is about money. This one isn't, so it will not look like the rest of the feed. Headline direction: "my laptop introduced me to four people this month."

**2. An FAQ-answer mini-series — one pin per objection.**
The FAQ section is already written, already structured-data'd, and every answer is a self-contained hook: *will it wreck my laptop?* → "peels off clean, zero residue." *do I get a say?* → "you approve every brand." *what if I want out?* → "peel it off. done." These are the objections that stop someone joining the waitlist, and answering them one at a time gives four to six days of drafts that stay strictly inside claims the site already makes. Low risk, high reuse.

**3. A "which city are you voting for?" post built for comments.**
Cities open in order of waitlist demand, which makes the CTA genuinely participatory rather than a plain email capture — naming your city is the vote. That's an unusually good fit for Instagram and X, where a post that asks a specific answerable question ("drop your city") gets replies, and replies get reach. It also produces something operationally useful: a public read on which cities are actually asking, which feeds the pilot's rollout order.

## d) blockers / what's missing this run

- **`pin.png` was not downloaded.** The Canva design was generated and exported successfully, but this session's egress proxy returns a 403 policy denial for `export-download.canva.com` and `design.canva.ai`, so the file could not be pulled into the repo. Full detail, the design link, and the manual 30-second workaround are in `pin-image-status.md`. The `image_prompt` in `pin.md` is the intended fallback and is unaffected.
- **Fix for future runs:** allowlist `export-download.canva.com` and `design.canva.ai` in the environment's network policy; this step will otherwise fail identically every day.
- The generated Canva design also has minor text defects (a duplicated line, missing doodle pills) — noted in `pin-image-status.md` for whoever reviews it.
