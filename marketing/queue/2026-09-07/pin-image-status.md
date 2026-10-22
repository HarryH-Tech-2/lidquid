# pin.png — not downloaded

**Status:** the Canva design was created and exported successfully, but the PNG could not be saved into this folder.

## What worked
- Canva generated 4 pin candidates from the brand-style prompt.
- Candidate 1 was converted into a real design: **"Pinterest Pin - Own Your Space"** (`DAHUhG3mLFA`)
  - Edit: https://www.canva.com/d/0FHy-DYPElJkUnq
  - View: https://www.canva.com/d/3Z9ESh9J6dLSmdd
- PNG export at 1000×1500 succeeded on Canva's side and returned a signed download URL.

## What failed
Downloading the file into the repo. This session's outbound traffic goes through a
policy-enforcing egress proxy, and both Canva asset hosts are denied by it:

```
design.canva.ai:443        — connect_rejected (gateway answered 403 to CONNECT)
export-download.canva.com:443 — connect_rejected (gateway answered 403 to CONNECT)
```

That's an organization egress-policy denial, not a network blip, so it was not
retried or worked around. It also means the candidate thumbnails couldn't be
previewed — candidate 1 was chosen unseen, so **the design needs a human eye
before use.**

## What a human needs to do
1. Open the edit link above, check the design actually matches the brand style
   (cream paper, ink borders, yellow/coral/teal, chunky QR, `lidquid.com`), and
   fix the headline text if the generator mangled it.
2. Download it as PNG (1000×1500) and drop it in as `pin.png`.

Alternatively, ignore the Canva design entirely: `pin.md` contains a complete
`image_prompt` written as the fallback, ready to paste into any text-to-image tool.

To fix this permanently, allow `export-download.canva.com` (and `design.canva.ai`
for thumbnail previews) in the environment's egress policy.
