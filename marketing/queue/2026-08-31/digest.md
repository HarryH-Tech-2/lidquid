# Digest — 2026-08-31

## a) Repo changes since the previous run

`git log --since='26 hours ago' --oneline` → **no changes.**

Nothing has landed on `main` in the last 26 hours. For context, the most recent
work (older than the window) was the landing page refresh that switched currency
to `$`, added the "How it works" section, and updated the carousel and waitlist
form — plus earlier Pinterest Tag / conversion-event and FAQ additions. The
copy in today's drafts is written against that current version of `index.html`.

## b) Queue status

**This is the first run — the queue was empty before today.** `marketing/` did
not exist; this run created `marketing/queue/`.

- **Days of drafts: 1** (`2026-08-31`)
- **Angles covered so far:**
  - `2026-08-31` — **"the surface you never see"** (ad-space angle). Hook: your
    laptop has two screens and you only ever look at one; the back of the lid
    faces the whole café for free. Headline: *"you've been staring at the wrong
    side of your laptop"*.

**Angles still untouched** (for rotation on future days): coffee money · the
social / ice-breaker angle · "you approve every brand" · "peels off clean" ·
cities open by demand — vote with your city · freelancer & remote-worker life ·
student life · café-regular identity · "no posting, no followers" · what counts
as a verified scan.

## c) Three suggestions for what to make next

1. **Tomorrow's pin: the ice-breaker angle ("your café, but social").** This is
   the strongest un-used angle and the one the landing page itself calls "the
   part nobody expects" — the earning is the hook, but the section about quiet
   regulars becoming people you actually know is the emotionally distinctive
   bit. It also reaches a second audience (people who work alone and feel it)
   without leaning on money claims, which keeps it safe on the no-fabricated-
   numbers rule. Headline direction: *"my laptop introduced me to four people
   this week."*

2. **A "cities open by demand" post built as a call to vote.** Every other angle
   ends at "join the waitlist"; this one gives the waitlist an actual reason to
   act *today* rather than later, because joining is literally the vote that
   moves a city up the queue. It's the only angle with built-in urgency that
   doesn't require inventing scarcity. Works especially well on X/Threads, where
   people will reply with their own city and generate a thread.

3. **Settle the pin-image pipeline before adding more draft days.** Today's
   Canva export was blocked by the environment's network policy (see
   `pin-image-status.md`), and candidates couldn't even be previewed, so the
   design was picked blind. Every future run hits the same wall and the queue
   fills with copy that has no art. Cheapest fix is allowing
   `export-download.canva.com` and `design.canva.ai` in the environment's
   network policy; failing that, decide that `image_prompt` is the deliverable
   and drop the Canva step from the routine so runs stop half-failing.

## Known gaps in this run

- **`pin.png` was not produced.** The Canva design was created and exported
  successfully, but the download is blocked by this session's egress proxy
  (403 at CONNECT, twice). Details and three ways to resolve it are in
  `pin-image-status.md`. The `image_prompt` in `pin.md` is the fallback.
- The chosen Canva candidate has **not been visually reviewed** — thumbnails
  were unreachable — so it may not match the brand palette or render the
  headline correctly. Treat it as unverified until someone opens it.
- No previous days existed to differentiate against, so the "must be genuinely
  new" check was trivially satisfied today. From tomorrow it becomes real.
