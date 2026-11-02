module.exports = {
  slug: "how-qr-codes-work",
  order: 20,
  audience: "owner",
  nav: "How QR codes work",
  title: "How Do QR Codes Work, and Are They Safe to Scan?",
  h1: "How do QR codes work, and are they safe to scan?",
  description: "A QR code is just a picture of text, usually a web address. How phones read it, what static vs dynamic codes are, and how to scan one safely.",
  published: "2026-11-02",
  about: ["QR codes", "QR code safety", "dynamic QR codes"],
  related: ["what-is-a-verified-scan", "qr-code-sticker-marketing-for-local-businesses", "is-laptop-sticker-advertising-legit"],
  answer: `
    <p><b>A QR code is a square picture that stores a short piece of text, almost always a web address.</b> Your phone camera finds the three big corner squares, reads the pattern of dark and light modules, and turns it back into text. Scanning is safe if you check the address before you open it, because the risk is the link, not the code.</p>`,
  body: `
<h2 id="what-is">What is a QR code?</h2>
<p>A QR (quick response) code is a grid of small dark and light squares that encodes data, most often a URL. It was invented in 1994 for tracking car parts and is now printed on menus, parcels, posters and laptop lids. The code doesn't do anything itself. It is only a way to hand a phone some text without anyone typing it.</p>

<h2 id="how-read">How does a phone read a QR code?</h2>
<p>The camera looks for the three large squares in the corners, which tell it the orientation and size, then reads the rest of the grid as ones and zeros and decodes them into text. If the text looks like a web address, the phone offers to open it.</p>
<p>QR codes include error correction, so a code can still be read when part of it is scuffed, dirty or covered. That's why a slightly worn sticker on a laptop lid usually still scans.</p>

<h2 id="static-dynamic">What's the difference between static and dynamic QR codes?</h2>
<p>A static code stores the final address directly. A dynamic code stores a short address on a tracking service, which then redirects to the real destination. The picture looks the same either way.</p>
<div class="table-wrap"><table>
  <thead><tr><th></th><th>Static</th><th>Dynamic</th></tr></thead>
  <tbody>
    <tr><td>What it stores</td><td>The final destination</td><td>A short redirect link</td></tr>
    <tr><td>Can you change the destination later?</td><td>No</td><td>Yes</td></tr>
    <tr><td>Can it count scans?</td><td>Not by itself</td><td>Yes, via the redirect</td></tr>
    <tr><td>Typical use</td><td>Wi-Fi details, a fixed page</td><td>Ads, campaigns, anything measured</td></tr>
  </tbody>
</table></div>
<p>Lidquid stickers are the dynamic kind: each one has its own code, so a scan can be recorded against that sticker and checked. See <a href="/guides/what-is-a-verified-scan">what counts as a verified scan</a>.</p>

<h2 id="safe">Is it safe to scan a QR code?</h2>
<p>Usually yes. Scanning only reads text. The danger is what the text points to, such as a fake login page or a prompt to install something. Treat a QR code like a link someone handed you on paper.</p>
<ul>
  <li><b>Read the preview.</b> Most phones show the web address before opening it. Check the domain.</li>
  <li><b>Watch for stickers over stickers.</b> In public places, a code can be stuck over a real one. If it looks pasted on, skip it.</li>
  <li><b>Don't enter passwords or card details</b> on a page you reached from an unexpected code.</li>
  <li><b>Be wary of urgency</b>, such as "pay a fine now" or "claim a prize".</li>
</ul>
<div class="callout warn"><b>Rule of thumb:</b> if you wouldn't tap that link in a text from a stranger, don't tap it from a QR code either.</div>

<h2 id="what-sees">What can a site learn when I scan?</h2>
<p>A site you open can see what any website sees: your device type, rough location from your network, and the time. Scanning doesn't hand over your contacts or photos. A dynamic code also lets whoever runs it count that a scan happened.</p>
<p>When someone scans a sticker on a Lidquid laptop, they see the brand's content, not the owner's name or details. Owners likewise don't see who scanned.</p>

<h2 id="stickers">Do QR codes work on stickers and laptop lids?</h2>
<p>Yes, if the code is large enough, high contrast and flat. A square of at least a few centimetres, dark on light, with a blank border around it, scans reliably at arm's length. Glare, curved surfaces and tiny printing are the usual causes of failed scans.</p>
<p>Placement matters too: a code on a laptop lid is only seen by the people sitting behind you. More on that in <a href="/guides/qr-code-sticker-marketing-for-local-businesses">QR code sticker marketing for local businesses</a>.</p>

<h2 id="own">How do I make my own QR code?</h2>
<p>Use a generator, type in the address, and download the image. For a code you'll print and can't easily replace, consider a dynamic one so you can fix the destination later. Always scan your printed version with a phone before you rely on it, and note that your own test scans may inflate any count.</p>

<h2 id="types">What can a QR code actually contain?</h2>
<p>Mostly a web address, but also plain text, a phone number, an email draft, a calendar event or Wi-Fi login details. Phones decide what to offer based on the format. A web address opens a browser prompt; Wi-Fi details offer to join a network. Either way, your phone shows you what it found and waits for you to confirm, so read that prompt rather than tapping through.</p>

<h2 id="size">How much data fits in a QR code?</h2>
<p>A lot less than people expect for a clean scan. The biggest codes hold a few thousand characters, but the more data you pack in, the denser and harder to read the grid becomes. That's why marketing codes use a short link instead of a long address: a short link makes a chunkier, more forgiving pattern that scans quickly from a few feet away, even from the back of a laptop lid across a café table.</p>

<h2 id="spot-fake">How can you spot a suspicious QR code?</h2>
<p>Look at the surroundings first. A code on a parking meter, a parcel you didn't order or an unexpected letter deserves more doubt than one on a brand's own shop window. Then check the preview address: odd spellings, extra words or a long string of random characters are warning signs. If you're unsure, search for the company yourself and go to its real site instead of the code.</p>

<h2 id="earn">Can a QR code on my laptop earn money?</h2>
<p>It can, in principle, if a brand pays for scans. Lidquid is a pre-launch pilot of 50 laptops, opening one city at a time, that pays owners per verified scan for a brand they approve. There are no published earnings yet. As an <i>illustration only</i>: 3 scans a day, 5 days a week, at $0.50 each is roughly $32 a month. Read <a href="/guides/is-laptop-sticker-advertising-legit">whether laptop sticker advertising is legit</a> before you sign up for anything.</p>
`,
  faqs: [
    { q: "Can a QR code hack my phone just by scanning it?", a: "Scanning only reads text. Harm usually comes from opening a malicious link or entering details on a fake page, so check the address before you tap." },
    { q: "Do QR codes expire?", a: "A static code never expires, but the page it points to can disappear. A dynamic code can stop working if the service behind it is switched off or unpaid." },
    { q: "Can someone track me by scanning a QR code?", a: "The site you open can see ordinary web details like device type and rough location, as any website can. The scan doesn't give it your contacts or files." },
    { q: "Why won't my QR code scan?", a: "Common causes are a code that's too small, low contrast, glare, a curved surface or no blank border. Make it larger and flatter." },
    { q: "Are free QR code generators safe?", a: "Static codes from a generator are fine. Be careful with free dynamic codes, which can stop working or add ads if you stop paying." },
    { q: "Can a QR code on a laptop earn money?", a: "Possibly. Lidquid is a pilot that pays per verified scan for a brand you approve, opening one city at a time, with no earnings published yet." }
  ]
};
