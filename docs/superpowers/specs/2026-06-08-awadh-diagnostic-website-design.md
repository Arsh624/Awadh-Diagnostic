# Awadh Diagnostic Centre — Website Design Spec

**Date:** 2026-06-08  
**Status:** Approved  
**Tech Stack:** Next.js (App Router), Tailwind CSS, deployed on Vercel (free tier)

---

## Business Details

| Field | Value |
|---|---|
| Business Name | Awadh Diagnostic Centre |
| Address | 19-Lakhanpur Housing Society, Awadhpuri Road, Kanpur, Uttar Pradesh, India |
| WhatsApp / Phone | +91 9450123521 |
| Email | *(placeholder — to be provided by owner)* |
| Facebook | https://www.facebook.com/awadhdiagnosticcentre |

---

## Goal

A single-page informational website to increase online visibility and attract customers in Kanpur. No login, no booking system (future scope). Target load: up to 500 visitors/day — well within Vercel free tier.

---

## Color Palette

| Role | Color | Hex |
|---|---|---|
| Primary Red | Brand red (logo match) | `#D32F2F` |
| Sky Blue | Accent (logo match) | `#29B6F6` |
| Warm Off-White | Page background | `#FDF6F0` |
| Deep Charcoal | Navbar, footer, dark text | `#1A1A2E` |
| Light Gray | Alternate section bg | `#F5F5F5` |

## Typography

- **Headings:** Poppins (Bold/SemiBold) — Google Fonts
- **Body:** Inter (Regular/Medium) — Google Fonts

---

## Page Structure (Single Scrollable Page)

### 1. Navbar (Sticky)
- Left: Logo (existing logo image)
- Right: Nav links — Services, Gallery, Find Us, Contact
- Far right: `Chat on WhatsApp` button (green, small)
- Collapses to hamburger menu on mobile

### 2. Hero Section
- Full-viewport-height
- Background: deep charcoal (`#1A1A2E`) with warm gradient overlay + subtle medical background image
- Headline: *"Your Health, Our Priority"* (Poppins, large, white)
- Subheadline: *"Trusted Diagnostic Centre in Kanpur — Accurate Reports, Experienced Doctors"*
- Two CTA buttons:
  - `Chat on WhatsApp` → green, opens WhatsApp chat
  - `Get Directions` → red outline, opens Google Maps route

### 3. Services Section
- Background: Warm off-white (`#FDF6F0`)
- Section heading: *"Our Services"*
- Responsive grid: 2 columns (mobile) → 4 columns (desktop)
- 8 service cards, each with: icon + service name + one-line description
- **Digital X-Ray** gets a featured wide card with a badge: `✦ Now Digital`

**Services list:**
1. Digital X-Ray *(featured)*
2. Complete Blood Count (CBC)
3. Blood Sugar Test
4. ECG (Electrocardiogram)
5. Liver Function Test (LFT)
6. Kidney Function Test (KFT)
7. Thyroid Profile (T3/T4/TSH)
8. Doctor Consultation *(in-house)*

### 4. Why Choose Us
- Background: Light gray (`#F5F5F5`)
- 4 trust badges in a row (icons + stat + label):
  - `15+ Years` of Experience
  - `Qualified` In-House Doctors
  - `Fast` Report Delivery
  - `Affordable` Pricing
- *(Numbers are placeholders — owner to confirm)*

### 5. Gallery (Infinite Carousel)
- Background: deep charcoal (`#1A1A2E`) for contrast
- Section heading: *"Our Centre"*
- Auto-scrolling left, infinite loop, pauses on hover
- Images:
  - 2 real interior photos (provided by owner)
  - ~6 professional AI-placeholder diagnostic centre images
- Smooth CSS animation loop (no jarring resets)

### 6. Find Us
- Background: Warm off-white (`#FDF6F0`)
- Left column: Google Maps embed (centered on 19-Lakhanpur Housing Society, Awadhpuri Road, Kanpur)
- Right column:
  - Full address
  - Phone number (clickable `tel:` link)
  - Opening hours *(placeholder — owner to confirm)*
  - `Get Directions` button → opens `https://www.google.com/maps/dir/?api=1&destination=19+Lakhanpur+Housing+Society+Awadhpuri+Road+Kanpur+UP`

### 7. Footer
- Background: deep charcoal (`#1A1A2E`)
- Logo + tagline: *"Awadh Diagnostic Centre — Kanpur"*
- Social/contact row: Facebook icon, Email icon (mailto placeholder), WhatsApp icon
- Copyright: `© 2026 Awadh Diagnostic Centre. All rights reserved.`

---

## Floating Elements

### WhatsApp Bubble
- Fixed position: bottom-right corner, always visible
- Green circle with WhatsApp SVG icon
- Hover: slight scale-up + tooltip: *"Chat with us"*
- Link: `https://wa.me/919450123521?text=Hi%2C+I+would+like+to+enquire+about+your+services+at+Awadh+Diagnostic+Centre.`

---

## Interactions & Animations

- **Scroll animations:** Sections fade-in + slide-up as they enter viewport (Intersection Observer, no heavy library)
- **Navbar:** Becomes slightly opaque/blurred on scroll (glassmorphism effect)
- **Service cards:** Lift on hover (box-shadow transition)
- **Carousel:** Pure CSS infinite scroll animation, JS only to pause on hover
- **Buttons:** Scale + color shift on hover

---

## Tech Stack Details

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS v3 |
| Fonts | Google Fonts (Poppins + Inter) via `next/font` |
| Images | `next/image` for optimized loading |
| Map | Google Maps embed iframe (no API key needed) |
| WhatsApp | `wa.me` deep link |
| Hosting | Vercel (free tier — handles 100-500 visits/day easily) |
| Icons | Lucide React |

---

## Out of Scope (Future)

- Appointment booking system
- Patient login / portal
- Blog / health articles
- Online payment
- Logo redesign

---

## Placeholders Needed from Owner

- [ ] Business email address
- [ ] Opening hours (days + times)
- [ ] Years of experience (for "Why Choose Us" badge)
- [ ] More photos if available
