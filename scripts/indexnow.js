#!/usr/bin/env node
// Tells Bing (and other IndexNow engines) that every URL in sitemap.xml changed.
// Run after a production deploy: node scripts/indexnow.js  (optionally pass specific URLs as args)
const fs = require("fs");
const path = require("path");

const KEY = "8627cd47d4932449f37f7b6159b2dd74";
const host = "www.lidquid.com";
const urls = process.argv.slice(2).length
  ? process.argv.slice(2)
  : [...fs.readFileSync(path.join(__dirname, "..", "sitemap.xml"), "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);

fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key: KEY, keyLocation: `https://${host}/${KEY}.txt`, urlList: urls })
}).then(r => console.log(`IndexNow: HTTP ${r.status} for ${urls.length} URLs`)).catch(e => { console.error(e); process.exit(1); });
