# pin.png status — 2026-08-27

**Result: the pin was designed successfully in Canva, but `pin.png` could not be
downloaded into the repo.** The blocker is network policy, not Canva.

## What worked

- Generated four 1000×1500 (2:3) candidates in the brand style via the Canva MCP
  tools.
- Promoted one to a real design: **design ID `DAHTfLhtrqw`**, titled
  "Lively Riso-Print Poster Featuring Laptop".
- Reviewed the rendered text and **caught two things that would have broken the
  brand rules**, then fixed and committed both:
  - the generator had invented a rate — `"$5 per verified scan."` → corrected to
    `"$ per verified scan."`
  - the domain was misspelled — `"lidquad.com"` → corrected to `"lidquid.com"`
  - also deleted a stray meaningless fragment (`"I rent it"`)
- Confirmed PNG export is supported and the export job succeeded.

The committed design reads, top to bottom: headline **"YOUR LID IS DOING
NOTHING."** in chunky black display type with a sun-yellow offset shadow; a
handwritten "Rent it out."; a teal laptop seen from behind on a coral café table
with a QR sticker on the lid and hand-drawn scan lines radiating from it; a
coffee cup doodle; marker notes "$ per verified scan." and "Peels off clean.";
and hand-lettered **lidquid.com** with a coral underline scribble — all on cream
paper inside a thick hand-drawn ink border.

## What failed

Downloading the exported file. This session's outbound traffic goes through a
policy-enforcing egress proxy, and **both Canva download hosts are denied by the
organization's egress policy**:

```
connect_rejected  design.canva.ai:443          (gateway answered 403 to CONNECT)
connect_rejected  export-download.canva.com:443 (gateway answered 403 to CONNECT)
```

These are organization policy denials (403), not transient errors, so per the
proxy's own guidance they were reported rather than retried or routed around.

## How a human can finish this in ~30 seconds

Open the design in Canva and export it manually, then drop the file in at
`marketing/queue/2026-08-27/pin.png`:

- design ID: `DAHTfLhtrqw`
- edit: https://www.canva.com/d/t0k7Qgm8ZP2QiCz
- view: https://www.canva.com/d/unYeDeGKMlng1cE

Export as PNG, 1000×1500.

If someone wants the download automated on future runs, `export-download.canva.com`
needs adding to the environment's egress allowlist.

## Fallback

The `image_prompt` in `pin.md` is a complete text-to-image prompt and remains the
fallback for producing this pin elsewhere.

## Note

The QR code in the pin is **decorative only** — it is not a scannable code and
must not be presented as one.
