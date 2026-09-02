# Handoff — Landing Page Redesign (done) → Facebook Ads Plan (next phase)

**Status: landing page redesign is done and (pending final confirmation) pushed live.** This next
phase is Facebook Ads marketing to drive traffic to skormastery.com. Read this file first before
doing anything new — it captures everything decided/built in the redesign session so it doesn't
need to be re-explained.

## What was just done (this session)

### Landing page redesign — style pivot to "hard-sell" sales-page format
The user asked to redo `skormastery-landing` (live at **skormastery.com**) away from the original
subtle "premium navy+gold brochure" style, toward an aggressive Malaysian-market sales-letter style
(reference shown: bukulali.onpay.my — bold highlighter text, urgency, bonus stacking, big CTAs).
User explicitly approved going "full hard-sell/urgency tone" — this **supersedes** the earlier
house rule in `HANDOFF-MARKETING.md` that said "avoid casual/rojak tone, keep formal register."
Language stays 100% Bahasa Malaysia, but the tone is now punchier/urgent, not the original subdued
brochure copy. Checkout mechanism was explicitly kept as-is (button linking out to the existing
ToyyibPay payment link) — user considered and declined building an embedded multi-step order form
like the reference site, since that would need backend/Onpay infra they don't have.

### Files changed (repo: `C:\Users\butiksolehah16\OneDrive\Documents\GitHub\skormastery-landing\`)
- `index.html` — full restructure: bold highlighted hero headline, sticky mini-CTA bar, "tension"
  bold-statement block after hero (cost-of-tuition + "hard to find Form 1-3 *online/app* references,
  most focus SPM" + "matrik pembelajaran baharu starts for Form 3 next year" — this is the user's own
  stated motivation for building the app, used as a hook), pain cards restyled, solution section
  turned two-column with a screenshot image, a new **"Kenapa Saya Bina Math Mastery" founder-note
  section** (trust-builder used in place of testimonials, since none exist yet — see below), bonus
  section restyled as 3 colored boxes, pricing section with urgency badge + trust checklist +
  repeated CTA, FAQ with a final CTA push. Logo replaced (see below).
- `style.css` — new design tokens (highlight-yellow marker style, gold-bright, red for
  strikethrough/urgency), Baloo 2 + Inter fonts (Google Fonts), pulse-glow CTA animation, sticky
  bar, cta-banner strips, check-list/check-badge components, all new section layouts. **A real bug
  was fixed**: the original "Sesuai Untuk Keluarga" cards had invisible borders/shadows (looked
  broken) — fixed with stronger border/shadow tokens.
- `script.js` — added scroll listener to show/hide the sticky mini-CTA bar.
- `assets/illustrations/bonus-cover-skor-a-v2.webp` — bonus #2 cover image, replaced with a new
  cover the user supplied mid-session (converted from PNG to webp, resized).
- `assets/Buku-Sifir-Kuasa-Punca-Kuasa.pdf`, `assets/Panduan-Skor-A-Matematik.pdf`,
  `assets/Senarai-Rumus-Penting.pdf` — all 3 bonus PDFs replaced with the user's latest versions
  (same filenames kept, so no links needed updating).
- `assets/icon-m.png` (new file) — the site logo/favicon/brand mark was replaced with a new 3D
  blue/purple/teal "M" arrow-mark logo the user supplied. `index.html` now references
  `assets/icon-m.png` instead of the old `assets/icon.svg` in the `<link rel="icon">`, and in both
  the header and footer `.brand__mark` images. The old `assets/icon.svg` file was left in place
  (unused) rather than deleted.

Content edits made mid-review per user feedback (in order, in case any need re-checking against the
live site): removed a tablet-mockup image from the features section ("no function" — just visual
clutter), swapped a phone screenshot for the hero illustration in the tension section then removed
it entirely to avoid duplicating the hero image, corrected the tension section's copy from "hard to
find physical reference **books**" to "hard to find **online apps/web references**" (this was the
user's actual point — physical books aren't the issue, online options are what's scarce for Form
1-3), changed one instance of "awak" to "anda" for register consistency, and removed the green
checkmark bullets from the "Sesuai Untuk Keluarga" and "Bukan Itu Sahaja Anda Dapat" card sections
(user felt they made those sections look cluttered — checkmarks were kept in the pricing card list
and the pricing-section trust list, just not those two).

### ⚠️ Known process gap from this session — watch for repeat
Mid-session, several rounds of edits were made to the *draft* copy in the cloud workspace and
previewed via a sent HTML file, but were **not immediately re-committed to the actual repo file on
the user's computer** — so the user opened skormastery.com-equivalent local file and didn't see the
founder section / copy fixes that had already been shown in preview. This was caught and fixed (the
final index.html/style.css were re-committed), but it's worth being deliberate next time: after any
edit the user approves, commit it to the device path immediately, don't batch several rounds of
draft-only changes before syncing back.

### Push status
Files were written directly into the local repo folder on the user's computer via the device
bridge. **The user still needs to push via GitHub Desktop** (their only git workflow — never
terminal git, it hangs for them, no credential helper configured) for Vercel to redeploy
skormastery.com: open GitHub Desktop → review changes → Summary field → "Commit to master" →
"Push origin". Confirm with the user whether this final push (including the logo change) has
actually happened before assuming the live site matches the repo.

Separately, the user got confused once mid-session because OneDrive's built-in file preview panel
(the "Download and open" / eye-icon preview UI) renders raw HTML without loading `style.css` or
images — looked like "all the design disappeared." That's expected OneDrive preview behavior, not a
bug. If this comes up again: tell the user to check the *actual* skormastery.com after pushing,
or open the local `index.html` directly in a real browser (right-click → Open with → Chrome), never
trust the OneDrive preview pane for this.

### Bonus-delivery email — drafted, not yet confirmed applied
The 3 bonus PDFs are promised on the landing page as an automatic email attachment/link delivery
after purchase. Per `HANDOFF-MARKETING.md`, this is configured in **ToyyibPay's bill settings**,
"Extra Email Content" field (external dashboard, not code — Claude can't edit it directly, login
required). A full draft email body was given to the user to paste in, including the access code
(`MM2026PAID`), app link, and download links to all 3 bonus PDFs at their `skormastery.com/assets/...`
paths. **Confirm with the user whether they've actually pasted this into ToyyibPay yet** — as of
end of this session it was only handed over as a draft, not confirmed applied.

### Facebook Page cover photo — delivered, not committed anywhere
Built an FB cover photo (1640×624px, matches the landing page's navy/gold branding + hero
illustration) via an HTML/CSS design rendered to PNG with Playwright (no dedicated image-generation
tool was available this session — this workaround reuses existing brand assets/screenshots rather
than generating new artwork). Delivered directly to the user as a downloadable file (not committed
to any repo — it's not part of the website). Two versions were made: one with an "RM39 launch
price" pill (user's first ask), then one without pricing (user asked to remove it). **The final
no-price version is the one the user has** — if this needs regenerating later, the HTML source is
disposable/was not saved anywhere durable; rebuild from scratch using the same brand assets
(`assets/illustrations/hero-student.webp`, navy #1e3a5f / gold #a3752e/#f0b429 palette) if asked
again.

## Business facts confirmed this session (for ad copy / reference)
- Price: **RM39** one-time bundle (Tingkatan 1-3), shown as launch offer vs. struck-through RM49.
  Per earlier handoff, meant to stay low through ~end of 2026, raise later once reviews exist.
- Checkout: ToyyibPay, `https://toyyibpay.com/Math-Mastery-Bundle`, access code `MM2026PAID`
  auto-delivered via ToyyibPay's receipt email (once Extra Email Content is set, see above).
- App: `https://math-mastery-ii.vercel.app` (the actual product/PWA, separate repo/project —
  `C:\Users\butiksolehah16\OneDrive\Documents\MATH MASTERY II\`).
- Landing page: `https://skormastery.com` (repo `skormastery-landing`, this session's focus).
- WhatsApp: 013-921 6335 (general inquiries + the 8 manual beta tester codes BETA2026A–H, expiring
  2026-09-27 — NOT used for paid-customer code delivery, that's email by design).
- **No real customer testimonials exist yet.** User's beta testers are mostly relatives who used
  the free access half-heartedly, so testimonials have been hard to collect. Discussed alternative
  tactics (see below) rather than fabricating any — a founder-note trust section was built instead
  of testimonials for now, being transparent that the product is new with a still-growing user base.
- Product's real differentiator/hook (user's own words, used in landing copy): most online Math
  references/apps in Malaysia focus on SPM; structured Form 1-3 material is hard to find online,
  and it matters more now because Form 3 students face a new "matrik pembelajaran" starting next
  year (2027) — foundations need to be solid earlier, not deferred.

## What this next phase actually is

The user wants to run **Facebook Ads** as the primary/only paid channel for now ("aku ingat nak
terus jual pakai fb ads je la... bab lain aku tak tau nak handle" — feeling overwhelmed by the
other options discussed, wants to focus on just this one channel). Already-discussed prerequisites
before spending on ads:

1. **Facebook Pixel / conversion tracking on the landing page** — not yet installed. Needed before
   ad spend so performance is measurable. Requires the user's Pixel ID from their own Facebook Ads
   Manager (Events Manager) — Claude cannot create/access this, must be requested from the user.
2. **Ad copy drafts** (headline/body/CTA, Bahasa Malaysia) — not yet started this session, was the
   agreed next step when the session ended.
3. **Targeting suggestions** (age/location/interest for Malaysian parents of Tingkatan 1-3 kids) —
   not yet drafted.

## Hard constraint (repeated from `HANDOFF-MARKETING.md`, still true)
No AI/agent can log into the user's Facebook account or authorize ad spend — that's a fundamental
login/payment-authorization limit, not a tool gap. Claude can draft copy, suggest targeting/creative,
and walk the user through Facebook Ads Manager's UI step-by-step (screenshot-guided), but the user
must click through account setup, Pixel install confirmation, and spend approval themselves.

## House rules still in force
- **Bahasa Malaysia**, now in the punchier hard-sell register established this session (not the
  earlier "formal, never rojak" rule — that was explicitly superseded for this redesign, see above).
- **GitHub Desktop only** for any push — guide step by step, never suggest terminal git.
- Visual identity split (app dark "premium teen" vs. landing/ad material navy+gold, parent-facing)
  from `HANDOFF-MARKETING.md` still applies to future ad creative, unless the user says otherwise —
  though note the landing page itself has now shifted bolder/brighter within that navy+gold family.
- Don't fabricate testimonials, purchase-notification tickers, or specific unverified statistics —
  this was raised and respected this session (a real limit, not just a style choice) when the
  bukulali.onpay.my reference's fake "recent buyer" notification popup came up; the founder-note
  approach was used instead.

## Immediate next steps (in likely order)
1. Confirm the redesign is actually live (user has pushed via GitHub Desktop) and looks right on
   the real skormastery.com, not just the local preview.
2. Confirm ToyyibPay's Extra Email Content has been updated with the bonus links.
3. Get the user's Facebook Pixel ID (or help them create one) and add tracking to the landing page.
4. Draft 2-3 Facebook ad copy variants + targeting suggestions.
5. Walk the user through Ads Manager setup, screenshot by screenshot, when they're ready to launch.
