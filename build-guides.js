#!/usr/bin/env node
// Builds the hand-written guides hub (the site's SEO/AEO content) from content/guides/*.js.
// Owns: guides/**, sitemap.xml, llms.txt. Run: node build-guides.js
// Every page shares guides/guides.css + guides/guides.js and carries GA4, the Pinterest tag
// and a Formspree waitlist/brand form wired the same way as index.html.
const fs = require("fs");
const path = require("path");

const root = __dirname;
const site = "https://www.lidquid.com";
const VARIANT = "guides-2026-10";
const contentDir = path.join(root, "content", "guides");

const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const strip = html => String(html).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
const words = html => strip(html).split(" ").filter(Boolean).length;
const fmtDate = iso => new Date(iso + "T12:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

function write(rel, body) {
  const full = path.join(root, rel);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, body);
}

const guides = fs.readdirSync(contentDir)
  .filter(f => f.endsWith(".js"))
  .map(f => require(path.join(contentDir, f)))
  .sort((a, b) => (a.order || 99) - (b.order || 99));

const bySlug = Object.fromEntries(guides.map(g => [g.slug, g]));
for (const g of guides) {
  for (const k of ["slug", "title", "h1", "description", "answer", "body", "published", "audience"]) {
    if (!g[k]) throw new Error(`${g.slug || "?"}: missing ${k}`);
  }
  if (g.title.length > 65) console.warn(`warn ${g.slug}: title ${g.title.length} chars`);
  if (g.description.length > 160) console.warn(`warn ${g.slug}: description ${g.description.length} chars`);
  for (const r of g.related || []) if (!bySlug[r]) throw new Error(`${g.slug}: unknown related ${r}`);
}

const head = ({ title, description, url, ogType = "article", schema }) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script async src="https://www.googletagmanager.com/gtag/js?id=G-X94FLTZWM8"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-X94FLTZWM8', { page_variant: '${VARIANT}' });
  window.track = function (name, params) {
    try { gtag('event', name, Object.assign({ page_variant: '${VARIANT}' }, params || {})); } catch (e) {}
  };
</script>
<script>
!function(e){if(!window.pintrk){window.pintrk=function(){window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var n=window.pintrk;n.queue=[],n.version="3.0";var t=document.createElement("script");t.async=!0,t.src=e;var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(t,r)}}("https://s.pinimg.com/ct/core.js");
pintrk('load', '2613515361163');
pintrk('page');
</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Archivo:wght@400;500;600;700;900&display=swap">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="${ogType}">
<meta property="og:site_name" content="Lidquid">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${site}/assets/og-card.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${site}/assets/og-card.jpg">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<meta name="theme-color" content="#ffb703">
<link rel="stylesheet" href="/guides/guides.css">
<script type="application/ld+json">
${JSON.stringify(schema, null, 1)}
</script>
</head>`;

const topbar = `<header class="topbar">
  <a class="logo" href="/" aria-label="Lidquid home"><span class="dot" aria-hidden="true">▣</span> Lidquid</a>
  <nav class="topnav" aria-label="Main">
    <a href="/guides">Guides</a>
    <a href="/#how">How it works</a>
    <a href="/#brands" data-track="cta_click" data-loc="guides_topnav_brands">For brands</a>
    <a href="#join" class="btn" data-track="cta_click" data-loc="guides_topnav_join">Join the waitlist</a>
  </nav>
</header>`;

const footer = `<footer class="site-footer">
  <div class="foot-grid">
    <div>
      <a class="logo small" href="/"><span class="dot" aria-hidden="true">▣</span> Lidquid</a>
      <p>Lidquid rents the back of your laptop to a brand you approve. Strangers scan the QR sticker, the brand pays per verified scan, and you earn. Pilot running one city at a time.</p>
    </div>
    <div>
      <h2>For laptop owners</h2>
      <ul>${guides.filter(g => g.audience === "owner").map(g => `<li><a href="/guides/${g.slug}">${esc(g.nav || g.h1)}</a></li>`).join("")}</ul>
    </div>
    <div>
      <h2>For brands</h2>
      <ul>${guides.filter(g => g.audience === "brand").map(g => `<li><a href="/guides/${g.slug}">${esc(g.nav || g.h1)}</a></li>`).join("")}<li><a href="/#brands">Request pilot pricing</a></li></ul>
    </div>
  </div>
  <p class="fine">© 2026 Lidquid · a tiny billboard company · <span class="hand">stickers come off clean, promises don't</span></p>
</footer>
<script src="/guides/guides.js" defer></script>`;

function ownerCta(loc, heading = "Want your lid to earn?") {
  return `<aside class="cta-card" id="${loc === "end" ? "join" : "join-" + loc}">
  <div class="hand kick">free to join · you approve every brand · peel off any time</div>
  <h2>${heading}</h2>
  <p>Lidquid is piloting with 50 laptops, one city at a time. Cities open in order of waitlist demand, so joining is your vote.</p>
  <form class="waitlist" data-waitlist="${loc}" novalidate>
    <div class="field-row">
      <input type="email" name="email" placeholder="you@email.com" aria-label="Email address" autocomplete="email" inputmode="email" required>
      <button class="cta" type="submit">Join the waitlist</button>
    </div>
    <div class="form-error" role="alert"></div>
    <div class="success" hidden>
      <div class="hand">You're on the list ✌️</div>
      <p>We'll email you once, when your city opens. Want to move up? <a href="/#email">Grab your referral link on the homepage</a>.</p>
    </div>
  </form>
</aside>`;
}

function brandCta(loc) {
  return `<aside class="cta-card brand" id="${loc === "end" ? "join" : "join-" + loc}">
  <div class="hand kick">pay per verified scan · not impressions</div>
  <h2>Put your brand on laptops in one city</h2>
  <p>Tell us the city and we'll reply with pilot pricing within two working days.</p>
  <form class="brand-form" data-brand-form="${loc}" novalidate>
    <input type="text" name="company" placeholder="Company" aria-label="Company" autocomplete="organization" required>
    <input type="email" name="email" placeholder="Work email" aria-label="Work email" autocomplete="email" inputmode="email" required>
    <input type="text" name="city" placeholder="Target city" aria-label="Target city" autocomplete="address-level2">
    <button class="cta" type="submit">Request pilot pricing</button>
    <div class="form-error" role="alert"></div>
  </form>
  <div class="brand-success" hidden><div class="hand">Got it — talk soon 🤝</div><p>Pilot pricing for your city lands in your inbox within two working days.</p></div>
</aside>`;
}

function toc(body) {
  const hs = [...body.matchAll(/<h2 id="([^"]+)">(.*?)<\/h2>/g)];
  if (hs.length < 3) return "";
  return `<nav class="toc" aria-label="On this page"><div class="hand">on this page</div><ol>${hs.map(m => `<li><a href="#${m[1]}">${m[2]}</a></li>`).join("")}</ol></nav>`;
}

function guidePage(g) {
  const url = `${site}/guides/${g.slug}`;
  const updated = g.updated || g.published;
  const cta = g.audience === "brand" ? brandCta : ownerCta;
  // Drop a mid-article CTA after the second h2 section.
  let n = 0;
  const body = g.body.replace(/<h2 id=/g, m => (++n === 3 ? cta("mid").replace(/\n/g, "") + "\n" + m : m));
  const faqs = g.faqs || [];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": url + "#article",
        headline: g.h1,
        description: g.description,
        datePublished: g.published,
        dateModified: updated,
        image: g.image ? [`${site}${g.image.src}`, `${site}/assets/og-card.jpg`] : `${site}/assets/og-card.jpg`,
        author: { "@type": "Organization", "@id": `${site}/#org`, name: "Lidquid", url: site + "/" },
        publisher: { "@type": "Organization", "@id": `${site}/#org`, name: "Lidquid", logo: { "@type": "ImageObject", url: `${site}/favicon.svg` } },
        mainEntityOfPage: url,
        wordCount: words(g.answer + g.body),
        about: g.about || undefined
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Lidquid", item: site + "/" },
          { "@type": "ListItem", position: 2, name: "Guides", item: site + "/guides" },
          { "@type": "ListItem", position: 3, name: g.nav || g.h1, item: url }
        ]
      },
      ...(faqs.length ? [{
        "@type": "FAQPage",
        mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: strip(f.a) } }))
      }] : [])
    ]
  };
  const related = (g.related || []).map(s => bySlug[s]);
  return `${head({ title: g.title, description: g.description, url, schema })}
<body data-guide="${g.slug}" data-audience="${g.audience}">
<a class="skip" href="#content">Skip to content</a>
${topbar}
<main id="content">
  <article class="guide">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Lidquid</a> <span>/</span> <a href="/guides">Guides</a> <span>/</span> <span aria-current="page">${esc(g.nav || g.h1)}</span></nav>
    <div class="tag ${g.audience}">${g.audience === "brand" ? "For brands" : "For laptop owners"}</div>
    <h1>${esc(g.h1)}</h1>
    <p class="byline">By the Lidquid team · Updated <time datetime="${updated}">${fmtDate(updated)}</time> · ${Math.max(2, Math.round(words(g.body) / 230))} min read</p>
    <section class="answer" aria-label="Short answer">
      <div class="hand">the short answer</div>
      ${g.answer}
    </section>
    ${g.image ? `<figure class="lead-shot"><img src="${g.image.src}" alt="${esc(g.image.alt)}" width="${g.image.w}" height="${g.image.h}" decoding="async"><figcaption>${esc(g.image.caption || "")}</figcaption></figure>` : ""}
    ${toc(g.body)}
    <div class="prose">
${body}
    </div>
    ${faqs.length ? `<section class="faq" aria-labelledby="faq-h"><h2 id="faq-h">Questions people ask</h2>${faqs.map(f => `<details><summary>${esc(f.q)}</summary><div>${f.a}</div></details>`).join("")}</section>` : ""}
    ${cta("end")}
    ${related.length ? `<section class="related" aria-labelledby="rel-h"><h2 id="rel-h">Keep reading</h2><div class="rel-grid">${related.map(r => `<a class="rel" href="/guides/${r.slug}"><span class="tag ${r.audience}">${r.audience === "brand" ? "For brands" : "For owners"}</span><b>${esc(r.h1)}</b><span>${esc(r.description)}</span></a>`).join("")}</div></section>` : ""}
  </article>
</main>
${footer}
</body>
</html>
`;
}

function hubPage() {
  const url = `${site}/guides`;
  const title = "Laptop Sticker Advertising Guides | Lidquid";
  const description = "Straight answers on getting paid to put a sticker on your laptop, what it earns, how to spot scams, and how brands buy laptop ad space per verified scan.";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "CollectionPage", "@id": url, url, name: "Lidquid guides", description, isPartOf: { "@id": `${site}/#website` } },
      { "@type": "ItemList", itemListElement: guides.map((g, i) => ({ "@type": "ListItem", position: i + 1, url: `${site}/guides/${g.slug}`, name: g.h1 })) },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Lidquid", item: site + "/" }, { "@type": "ListItem", position: 2, name: "Guides", item: url }] }
    ]
  };
  const card = g => `<a class="rel" href="/guides/${g.slug}"><span class="tag ${g.audience}">${g.audience === "brand" ? "For brands" : "For owners"}</span><b>${esc(g.h1)}</b><span>${esc(g.description)}</span></a>`;
  return `${head({ title, description, url, ogType: "website", schema })}
<body data-guide="hub" data-audience="owner">
<a class="skip" href="#content">Skip to content</a>
${topbar}
<main id="content">
  <div class="hub">
    <div class="hand kick">the lidquid field guide</div>
    <h1>Your laptop lid is ad space. <span class="u">Here's how it works.</span></h1>
    <p class="lede">Honest answers about getting paid to put a sticker on your laptop: what it really earns, what to watch out for, and how brands use it to reach people in cafés, campuses and coworking spaces.</p>
    <h2 class="sec">For laptop owners</h2>
    <div class="rel-grid">${guides.filter(g => g.audience === "owner").map(card).join("")}</div>
    <h2 class="sec">For brands</h2>
    <div class="rel-grid">${guides.filter(g => g.audience === "brand").map(card).join("")}</div>
    ${ownerCta("end", "Ready when your city is")}
  </div>
</main>
${footer}
</body>
</html>
`;
}

for (const g of guides) write(`guides/${g.slug}/index.html`, guidePage(g));
write("guides/index.html", hubPage());

const today = new Date().toISOString().slice(0, 10);
const urls = [
  { loc: `${site}/`, lastmod: today, priority: "1.0" },
  { loc: `${site}/guides`, lastmod: today, priority: "0.8" },
  ...guides.map(g => ({ loc: `${site}/guides/${g.slug}`, lastmod: g.updated || g.published, priority: "0.7" }))
];
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod><priority>${u.priority}</priority></url>`).join("\n")}
</urlset>
`);

write("robots.txt", `User-agent: *
Allow: /
Disallow: /*?ref=

# AI answer engines are welcome; see /llms.txt for a summary of the site.
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: Google-Extended
Allow: /

Sitemap: ${site}/sitemap.xml
`);

// IndexNow (Bing, Yandex, Seznam…): key file must be served at the site root. Ping with scripts/indexnow.js after a deploy.
const INDEXNOW_KEY = "8627cd47d4932449f37f7b6159b2dd74";
write(`${INDEXNOW_KEY}.txt`, INDEXNOW_KEY + "\n");

write("404.html", `${head({ title: "Page not found | Lidquid", description: "This Lidquid page doesn't exist.", url: `${site}/404`, ogType: "website", schema: { "@context": "https://schema.org", "@type": "WebPage", name: "Page not found" } }).replace('content="index, follow, max-image-preview:large, max-snippet:-1"', 'content="noindex"')}
<body data-guide="404" data-audience="owner">
${topbar}
<main id="content">
  <div class="hub">
    <div class="hand kick">peeled off clean</div>
    <h1>This page isn't here.</h1>
    <p class="lede">The link may be old. Try the <a href="/">homepage</a> or one of these guides.</p>
    <div class="rel-grid">${guides.slice(0, 6).map(g => `<a class="rel" href="/guides/${g.slug}"><span class="tag ${g.audience}">${g.audience === "brand" ? "For brands" : "For owners"}</span><b>${esc(g.h1)}</b><span>${esc(g.description)}</span></a>`).join("")}</div>
  </div>
</main>
${footer}
</body>
</html>
`);

// llms.txt: a plain-text map for AI answer engines (ChatGPT, Perplexity, Claude, AI Overviews).
write("llms.txt", `# Lidquid

> Lidquid rents the back of your laptop lid to brands. Laptop owners stick on a removable vinyl QR sticker for a brand they approve; strangers in cafés, campuses and coworking spaces scan it; the brand pays per verified scan and the owner earns a share. It is free to join, there is no posting or follower requirement, and owners can peel the sticker off at any time and keep what they've earned. Lidquid is in pilot: 50 laptops, one city at a time, with cities opening in order of waitlist demand. No real earnings figures have been published yet; any numbers on the site are illustrative.

Key facts:
- Owners never pay Lidquid anything. A program that asks you for money up front, or to cash a cheque and send money back, is not Lidquid.
- A verified scan is a real person on a real phone scanning a sticker for the first time; repeat scans from the same device and bot traffic don't count.
- Brands pay only for verified scans, not impressions, and see raw versus billable scans side by side.
- Owners approve the brand, the design and the rate before a sticker ships.

## Main pages
- [Homepage and waitlist](${site}/): how it works, earnings estimator, brand enquiry form, FAQ
- [Guides hub](${site}/guides)

## Guides for laptop owners
${guides.filter(g => g.audience === "owner").map(g => `- [${g.h1}](${site}/guides/${g.slug}): ${g.description}`).join("\n")}

## Guides for brands
${guides.filter(g => g.audience === "brand").map(g => `- [${g.h1}](${site}/guides/${g.slug}): ${g.description}`).join("\n")}
`);

console.log(`Built ${guides.length} guides + hub, sitemap (${urls.length} URLs), llms.txt`);
for (const g of guides) console.log(`  ${String(words(g.answer + g.body)).padStart(5)} words  /guides/${g.slug}`);
