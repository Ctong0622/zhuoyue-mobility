# Product Requirements Document: Zhuoyue Mobility Website

**Status:** Draft v1
**Date:** 2026-09-23
**Author:** Product/Engineering (based on client brief from Liming)

## 1. Overview

Zhuoyue Mobility is a car rental business in China specializing in EV and new-energy vehicles (e.g., Li Auto i6/i8/L7, Xiaomi SU7 Max/YU7, ZEEKR 007GT, ONVO L90). The company needs a marketing/lead-generation website that lets customers browse rental vehicles and submit a rental request. The client (Liming) then follows up by phone and confirms via WeChat — the site does not process payments or finalize bookings itself.

## 2. Goals

- Present Zhuoyue Mobility's brand and vehicle fleet in a simple, modern, EV/tech-inspired design.
- Let visitors browse available vehicles with enough detail to decide.
- Let visitors submit a rental request that reaches Liming reliably.
- Keep the technical footprint minimal (no backend/database) so it's cheap to build, host, and maintain.

## 3. Non-Goals / Out of Scope (v1)

- No online payment processing or deposit collection.
- No automated booking confirmation, calendar, or real-time availability/conflict checking.
- No customer accounts, login, or booking history.
- No CMS/admin panel — vehicle data is updated manually by the developer/client via a data file.
- No ID/license photo upload — text fields only.
- No China-specific CDN/ICP filing — standard global static hosting (e.g., Vercel/Netlify).
- No map/geolocation-based address input.

## 4. Target Audience

- Customers needing vehicles for **family travel**.
- Customers needing vehicles for **business trips**.
- Primary market: mainland Chinese customers (site is bilingual, see §7.5).

## 5. Information Architecture

Three pages, shared header/nav and footer across all:

1. **Home** (`index.html`)
2. **Cars** (`cars.html`)
3. **Rent / Contact** (`rent.html`)

Shared nav: Logo | Home | Cars | Rent/Contact
Shared footer: Phone | WeChat | Address

## 6. Technical Approach

- **Architecture:** Static HTML/CSS/JS site (or static site generator). No backend server, no database.
- **Vehicle data:** Stored in a local JSON/data file, updated manually when cars, prices, or availability change.
- **Form handling:** Rent/Contact form submits via a third-party static form service (e.g., Formspree or Netlify Forms), which emails the submission directly to Liming. No submissions are stored in a database.
- **Hosting:** Static host such as Vercel or Netlify; custom domain purchased separately.
- **Analytics:** Lightweight analytics tool (e.g., Google Analytics or Plausible) to track page views and form submissions. No fixed numeric KPI target for v1 — goal is visibility into the Home → Cars → Rent funnel.

## 7. Page Specifications

### 7.1 Home Page

| Section | Content |
|---|---|
| Hero | Large hero image/banner, tagline ("Rent for a better tomorrow" per sketch), primary CTA button "Browse Cars" |
| Intro | Short company introduction |
| Featured Vehicles | 3 vehicle cards, each: photo, model name, daily price. Featured status is a manually-set flag (`featured: true`) per vehicle in the data file, giving Liming control over which cars are promoted |
| Why Choose Us | 3 value props, locked for v1: **Eco-friendly** (EV/new-energy fleet), **Family travel**, **Business travel** — icon + 1 sentence each |
| Footer | Phone, WeChat, address |

### 7.2 Cars Page

- Simple static grid of all vehicle cards — **no filters or sorting in v1**.
- Each card displays:
  - Photo
  - Model name
  - Daily rental price
  - Availability status (Available / Booked / Maintenance — manually updated flag)
  - Number of seats
  - Driving range (km)
  - Vehicle type (SUV / Sedan)
  - "Rent" button
- Clicking "Rent" on a card navigates to the Rent/Contact page with that vehicle **pre-selected** in the "Select Vehicle" field (still editable by the customer).

### 7.3 Rent / Contact Page

Rental request form fields:

1. Select Vehicle (dropdown, pre-filled if navigated from a Cars page "Rent" button)
2. Phone number
3. ID number (text field, no upload)
4. Driver's license number (text field, no upload)
5. Pickup location (free text)
6. Drop-off location (free text)
7. Pickup date & time
8. Return date & time
9. Consent checkbox: "I agree my information will be used to process this rental request" (required to submit)
10. Submit button

On submit: form data is emailed to Liming via the form service. No confirmation logic occurs on-site — Liming follows up by phone, then confirms via WeChat.

Footer: Phone | WeChat | Address (same as Home/Cars).

## 8. Data Model (Vehicle)

Manually maintained JSON entries, one per vehicle:

```json
{
  "id": "string",
  "model": "string",          // e.g. "Li Auto L7"
  "type": "SUV | Sedan",
  "pricePerDay": "number",
  "availability": "Available | Booked | Maintenance",
  "seats": "number",
  "rangeKm": "number",
  "photo": "path/url",
  "featured": "boolean"
}
```

## 9. Localization

- **Bilingual launch:** Simplified Chinese and English, with a language toggle in the nav.
- All static copy (nav, hero, value props, form labels) and vehicle data (model names, type labels) require both language versions at launch.

## 10. Privacy & Security Considerations

- ID number and driver's license number are collected as plain text (no file/photo upload), reducing storage/security complexity.
- Form must be served over HTTPS.
- Consent checkbox required before submission.
- No submission data is retained on the site or in a database — it exists only in the email sent to Liming via the form service.
- Recommend documenting this data flow to the client for their own compliance awareness (e.g., PIPL considerations for Chinese users), though full legal compliance review is out of scope for this engagement.

## 11. Known Limitations (to communicate to client)

- Vehicle availability is manually maintained; the site cannot prevent double-booking automatically. Liming must verify availability manually when confirming rentals by phone.
- No real-time inventory or pricing sync — any change requires a manual data file update.

## 12. Success Metrics

- Number of rental request form submissions received.
- Basic traffic visibility (page views, Home → Cars → Rent funnel) via analytics tool.
- No fixed numeric target set for v1 launch.

## 13. Open Items for Design/Content Phase

- Final hero image/copy, "Why Choose Us" icon designs and supporting sentences.
- Full vehicle roster with confirmed prices, photos, seats, and range for each model.
- Chinese translations for all copy and vehicle data.
