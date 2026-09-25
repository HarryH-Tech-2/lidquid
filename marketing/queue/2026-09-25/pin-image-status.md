# pin.png — not downloaded (blocked upstream)

**Status: the Canva design exists and looks correct. Only the file download was blocked.**

## What worked
1. Canva MCP tools were available.
2. The 2:3 Pinterest pin was generated in the brand style — design ID `DAHWNDPF63E`.
   - **Edit: https://www.canva.com/d/WpCl7TVqut944sy**
   - **View: https://www.canva.com/d/M8YKMycHQAGxhyi**
3. The rendered text was verified on the design and matches the brief exactly: "you see one side. / the café sees / the other.", "$ per verified scan", "peels off clean", "lidquid.com".
4. The PNG export job succeeded (1000×1500, lossless, page 1) and returned a signed download URL.

## What failed
`curl -L -o marketing/queue/2026-09-25/pin.png <export url>` failed with:

```
curl: (56) CONNECT tunnel failed, response 403
export-download.canva.com:443 — connect_rejected
(the egress proxy denied the CONNECT (organization policy))
```

This session's outbound HTTPS goes through a policy-enforcing egress proxy, and
`export-download.canva.com` is not on this environment's allowlist. The agent proxy's own
README states that 403/407 denials are organisation policy and must not be retried or routed
around, so this was **not** re-attempted — a second attempt would fail identically.

## What a human needs to do (about 30 seconds)
Open https://www.canva.com/d/WpCl7TVqut944sy and hit Share → Download → PNG, then drop the file in
at `marketing/queue/2026-09-25/pin.png`. The export is already configured; nothing needs
redesigning.

## Fallback
The `image_prompt` in `pin.md` is a complete, self-contained text-to-image prompt for the same
pin and can be used with any image generator instead.

## Suggested permanent fix
Add `export-download.canva.com` to the allowed egress hosts for this environment. Without it,
every future run of this agent will produce the design but never the file — so the Canva step
will keep stopping one inch from the finish line.
