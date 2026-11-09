# Awadh Diagnostic Centre

Website for **Awadh Diagnostic Centre**, a diagnostic lab on Awadhpuri Road, Kanpur. A one-page site that tells patients what tests are offered, shows the centre, and lets them message the lab on WhatsApp.

**Live:** https://awadh-diagnostic-centre.vercel.app

## What's on the page

- **Hero** with the centre's name and a call to action
- **Services:** digital X-ray, complete blood count, blood sugar, ECG, liver, kidney and thyroid panels, and doctor consultation
- **Why us** and a photo **gallery** carousel
- **Find us:** address and an embedded map
- **Floating WhatsApp button** that opens a pre-filled enquiry message
- Scroll-triggered fade-in animations, responsive down to phone width

## Stack

Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, lucide-react icons. Deployed on Vercel.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Layout

| Path | Contents |
| --- | --- |
| `app/` | Root layout, metadata, global styles, page |
| `components/` | `Hero`, `Services`, `WhyUs`, `Gallery`, `FindUs`, `Footer`, `Navbar`, `WhatsAppBubble`, `FadeIn` |
| `public/` | Logo and gallery images |
| `docs/` | Original design spec and build plan |

## History

An earlier version of this site, built from a blog starter, lives in [awadh_diagnostic](https://github.com/Arsh624/awadh_diagnostic). This repo replaces it.
