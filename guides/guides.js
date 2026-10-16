// Shared behaviour for /guides/ pages: waitlist + brand forms (Formspree), GA4 + Pinterest events,
// first-touch attribution and scroll-depth. Mirrors the wiring in index.html.
(function () {
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xljrdbro";
  const VARIANT = "guides-2026-10";
  const guide = document.body.dataset.guide || "";
  const t = window.track || function () {};

  const qs = new URLSearchParams(location.search);
  const referredBy = qs.get("ref") || "";
  const utm = {};
  ["utm_source", "utm_medium", "utm_campaign", "utm_content"].forEach(k => { if (qs.get(k)) utm[k] = qs.get(k); });
  try {
    if (Object.keys(utm).length || referredBy) localStorage.setItem("lidquid_attr", JSON.stringify({ ...utm, ref: referredBy, at: Date.now() }));
  } catch (e) {}
  function firstTouch() { try { return JSON.parse(localStorage.getItem("lidquid_attr")) || {}; } catch (e) { return {}; } }
  function myRefCode() {
    let code = null;
    try { code = localStorage.getItem("lidquid_ref"); } catch (e) {}
    if (!code) {
      code = Math.random().toString(36).slice(2, 8);
      try { localStorage.setItem("lidquid_ref", code); } catch (e) {}
    }
    return code;
  }
  async function postLead(payload) {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({ ...firstTouch(), ...utm, referred_by: referredBy, page_variant: VARIANT, guide, referrer: document.referrer || "", ...payload })
    });
    if (!res.ok) throw new Error("Submit failed " + res.status);
  }
  const emailOk = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const eventId = p => p + "-" + Date.now() + "-" + Math.random().toString(36).slice(2, 8);
  function fail(form, input, msg) {
    const box = form.querySelector(".form-error");
    if (box) box.textContent = msg;
    if (input) { input.classList.remove("error"); void input.offsetWidth; input.classList.add("error"); input.focus(); }
  }

  let joined = false;
  try { joined = localStorage.getItem("lidquid_joined") === "1"; } catch (e) {}

  document.querySelectorAll("[data-waitlist]").forEach(form => {
    const loc = "guide:" + form.dataset.waitlist;
    const input = form.querySelector("input[type=email]");
    const btn = form.querySelector("button.cta");
    const done = () => { form.querySelector(".field-row").hidden = true; form.querySelector(".success").hidden = false; };
    if (joined) { done(); return; }
    let started = false;
    input.addEventListener("focus", () => { if (!started) { started = true; t("form_start", { form: "waitlist", form_location: loc }); } });
    form.addEventListener("submit", async e => {
      e.preventDefault();
      form.querySelector(".form-error").textContent = "";
      const email = input.value.trim();
      if (!emailOk(email)) return fail(form, input, "That email doesn't look right — try again?");
      btn.disabled = true; btn.textContent = "Adding you…";
      t("waitlist_submit", { form_location: loc });
      try {
        await postLead({ email, ref_code: myRefCode(), source: "lidquid-guide", lead_type: "waitlist", form_location: loc });
        t("generate_lead", { lead_type: "waitlist", form_location: loc, referred: referredBy ? "yes" : "no", currency: "USD", value: 1 });
        if (window.pintrk) { pintrk("load", "2613515361163", { em: email }); pintrk("track", "signup", { event_id: eventId("su"), lead_type: "waitlist" }); }
        try { localStorage.setItem("lidquid_joined", "1"); } catch (e) {}
        joined = true;
        document.querySelectorAll("[data-waitlist]").forEach(f => { f.querySelector(".field-row").hidden = true; f.querySelector(".success").hidden = false; });
      } catch (err) {
        btn.disabled = false; btn.textContent = "Join the waitlist";
        fail(form, null, "Hmm, that didn't go through — try again in a moment.");
        t("form_error", { form: "waitlist", form_location: loc, message: String(err && err.message || err).slice(0, 80) });
      }
    });
  });

  document.querySelectorAll("[data-brand-form]").forEach(form => {
    const loc = "guide:" + form.dataset.brandForm;
    const btn = form.querySelector("button.cta");
    let started = false;
    form.querySelectorAll("input").forEach(el => el.addEventListener("focus", () => { if (!started) { started = true; t("form_start", { form: "brand", form_location: loc }); } }));
    form.addEventListener("submit", async e => {
      e.preventDefault();
      form.querySelector(".form-error").textContent = "";
      const data = Object.fromEntries(new FormData(form));
      if (!data.company.trim()) return fail(form, form.company, "What's the company called?");
      if (!emailOk(data.email.trim())) return fail(form, form.email, "Please use a valid work email.");
      btn.disabled = true; btn.textContent = "Sending…";
      t("brand_submit", { form_location: loc });
      try {
        await postLead({ ...data, source: "lidquid-guide", lead_type: "brand", form_location: loc, _subject: "Lidquid brand pilot enquiry: " + data.company });
        t("generate_lead", { lead_type: "brand", form_location: loc, currency: "USD", value: 50 });
        if (window.pintrk) pintrk("track", "lead", { event_id: eventId("ld"), lead_type: "brand" });
        form.hidden = true;
        form.parentElement.querySelector(".brand-success").hidden = false;
      } catch (err) {
        btn.disabled = false; btn.textContent = "Request pilot pricing";
        fail(form, null, "That didn't send — try again in a moment.");
        t("form_error", { form: "brand", form_location: loc, message: String(err && err.message || err).slice(0, 80) });
      }
    });
  });

  document.querySelectorAll("[data-track]").forEach(el => el.addEventListener("click", () => t(el.dataset.track, { location: el.dataset.loc || "" })));
  document.querySelectorAll(".faq details").forEach(d => d.addEventListener("toggle", () => { if (d.open) t("faq_open", { question: d.querySelector("summary").textContent.slice(0, 80), guide }); }));

  // Scroll depth: did they actually read it?
  const marks = [50, 90]; const hit = {};
  addEventListener("scroll", () => {
    const pct = (scrollY + innerHeight) / document.documentElement.scrollHeight * 100;
    marks.forEach(m => { if (pct >= m && !hit[m]) { hit[m] = 1; t("guide_read", { percent: m, guide }); } });
  }, { passive: true });
})();
