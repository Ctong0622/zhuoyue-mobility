# AGENTS.md — Zhuoyue Mobility Website

Instructions for AI coding agents working in this repository.

## Project Purpose & Client Context

Zhuoyue Mobility is a car rental business in China (client: Liming) specializing in EV and
new-energy vehicles (e.g., Li Auto i6/i8/L7, Xiaomi SU7 Max/YU7, ZEEKR 007GT, ONVO L90).
The website is a **lead-generation marketing site**: visitors browse vehicles and submit a
rental request. Zhuoyue Mobility then follows up by phone and confirms via WeChat — the
site itself does **not** process payments or finalize bookings.

Full requirements live in [PRD.md](PRD.md) and [PROPOSAL.md](PROPOSAL.md). **Always consult
those files before making product or scope decisions.** `layout-sketch.png` is the client's
hand-drawn wireframe reference for page layout.

## Site Structure

Static site, three pages, sharing the same header/nav and footer:

1. `index.html` — Home: hero, short intro, 3 featured vehicle cards, "Why Choose Us" (eco-friendly, family travel, business travel).
2. `cars.html` — Cars: simple static grid of **all** vehicles, no filters/sorting.
3. `rent.html` — Rent / Contact: rental request form.

Shared assets:
- `css/style.css` — single shared stylesheet for all pages.
- `js/data.js` — vehicle data array.
- `js/i18n.js` — bilingual translation strings + language toggle logic.
- `js/main.js` — shared nav/lang init and the `renderCarCard()` card renderer.
- `js/home.js`, `js/cars.js`, `js/rent.js` — page-specific logic.

## Design & Styling Direction

Simple, clean, modern, EV/tech-inspired look. Avoid clutter or crowded layouts — the client
explicitly asked for something simpler than typical car rental sites. Keep colors clean
(current palette: green/teal primary with a blue accent, defined as CSS variables in
`css/style.css`). Do not introduce a second visual style or a competing color palette.

## Bilingual Requirement (Chinese / English)

The site must support **Simplified Chinese and English** with a toggle in the nav (default
language is Chinese). All user-facing copy must go through `js/i18n.js`:
- Add new strings to **both** `zh` and `en` blocks in `TRANSLATIONS`.
- Use `data-i18n="key"` (text content) or `data-i18n-placeholder="key"` on elements instead
  of hardcoding text in HTML.
- Never hardcode new user-facing strings directly in HTML or JS — always add a translation key.

## Coding Conventions

- **HTML**: Plain semantic HTML5, no framework/build step. Every page must keep the same
  header/nav/footer structure and script include order (`data.js`, `i18n.js`, `main.js`, then
  the page-specific script).
- **CSS**: All styling goes in `css/style.css`. Do not add inline `style=""` attributes or
  per-page `<style>` blocks, and do not introduce new stylesheets — extend the existing file
  using the existing CSS variables and class naming style (lowercase, hyphenated, e.g.
  `.car-card`, `.form-group`).
- **JavaScript**: Plain vanilla JS (no frameworks, no bundler, no npm dependencies). Keep
  functions small and page-scoped as already organized. Comments should be short one-liners
  explaining *why*, not restating the code.
- Preserve **semantic HTML** — use proper elements (`<header>`, `<nav>`, `<main>`, `<section>`,
  `<article>`, `<footer>`, `<form>`, `<label>` bound to inputs, heading hierarchy, etc.).
  Don't replace semantic tags with generic `<div>`s.

## Responsive / Mobile Requirements

The site must work well on both desktop and mobile. Use the existing responsive patterns in
`css/style.css` (CSS grid with `auto-fill`/`auto-fit`, the `@media (max-width: 640px)`
breakpoint). Test/adjust that breakpoint when adding new layout sections rather than adding
ad hoc breakpoints elsewhere.

## Vehicle Data & Availability

- Vehicle data lives only in `js/data.js`, manually maintained — there is **no CMS, database,
  or admin panel**. Follow the existing object shape (`id`, `model`, `type`, `pricePerDay`,
  `availability`, `seats`, `rangeKm`, `photo`, `featured`).
- `availability` is one of `Available`, `Booked`, `Maintenance` and is a **manually set flag**.
  The site must never attempt automated conflict/double-booking checks — this is an explicit
  out-of-scope limitation per the PRD.
- `featured: true` controls which cars appear in the Home page's featured section (client
  curates this manually). Don't replace this with automatic logic (e.g., "newest" or random).

## Rental Form Behavior

- Fields: select vehicle, phone number, ID number, driver's license number, pickup location,
  drop-off location, pickup date/time, return date/time, consent checkbox, submit.
- Pickup/drop-off are **free-text fields** (no map/autocomplete).
- ID number and driver's license number are **plain text inputs only** — never add file/photo
  upload for these fields.
- The consent checkbox is required before submission.
- Submission goes through a static form service (e.g., Formspree) configured via
  `FORM_ENDPOINT` in `js/rent.js` — there is no custom backend. Do not add server-side code.
- Clicking "Rent" on a vehicle card must continue to link to `rent.html?vehicle=<id>` and
  pre-select that vehicle in the dropdown.

## Constraints — Do NOT Add

- No backend server, database, or admin/CMS panel.
- No user accounts, login, or booking history.
- No payment processing or deposits.
- No automated availability/calendar conflict checking.
- No filters or sorting on the Cars page.
- No ID/license photo or file upload.
- No new frameworks, build tools, or npm dependencies.
- No new stylesheets, inline styles, or per-page `<style>` blocks.
- No China-specific hosting/CDN/ICP filing work (out of scope per PRD).

## Follow the PRD

Before implementing any new feature, page, or behavior, check [PRD.md](PRD.md) (and
[PROPOSAL.md](PROPOSAL.md) for original client intent). If a request isn't covered there,
flag it rather than inventing new scope — this project should stay small and match exactly
what the client asked for.
