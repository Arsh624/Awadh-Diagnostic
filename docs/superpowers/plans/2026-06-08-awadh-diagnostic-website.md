# Awadh Diagnostic Centre Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page Next.js informational website for Awadh Diagnostic Centre, Kanpur, with a services showcase, infinite gallery carousel, Google Maps embed, WhatsApp float button, and social links.

**Architecture:** A single scrollable Next.js 14 App Router page (`app/page.tsx`) that composes independent section components. No backend, no API routes, no auth. All interactivity is client-side (carousel animation, scroll effects, external deep links).

**Tech Stack:** Next.js 14 (App Router), Tailwind CSS v3, Lucide React icons, Google Fonts (Poppins + Inter via `next/font`), `next/image` for optimized images, Vercel for hosting.

---

## File Map

| File | Responsibility |
|---|---|
| `app/layout.tsx` | Root layout, font injection, metadata (title, description, favicon) |
| `app/page.tsx` | Assembles all section components in scroll order |
| `app/globals.css` | Tailwind directives, CSS custom properties, carousel keyframe animation |
| `components/Navbar.tsx` | Sticky top nav: logo, links, WhatsApp CTA, mobile hamburger |
| `components/Hero.tsx` | Full-viewport hero: headline, subtext, two CTA buttons |
| `components/Services.tsx` | Service cards grid with featured Digital X-Ray card |
| `components/WhyUs.tsx` | Four trust-badge stats row |
| `components/Gallery.tsx` | Infinite auto-scroll image carousel, pauses on hover |
| `components/FindUs.tsx` | Google Maps iframe embed + address + Get Directions button |
| `components/Footer.tsx` | Logo, tagline, social icons, copyright |
| `components/WhatsAppBubble.tsx` | Fixed bottom-right floating WhatsApp button |
| `public/logo.png` | Business logo image |
| `public/gallery/interior-1.jpg` | Real interior photo 1 |
| `public/gallery/interior-2.jpg` | Real interior photo 2 |
| `public/gallery/placeholder-*.jpg` | AI placeholder diagnostic centre images (6 files) |
| `tailwind.config.ts` | Extend theme with brand colors, custom font families |
| `next.config.ts` | Standard Next.js config |

---

## Task 1: Project Scaffolding

**Files:**
- Create: `package.json`, `next.config.ts`, `tailwind.config.ts`, `tsconfig.json`, `app/layout.tsx`, `app/globals.css`, `app/page.tsx`

- [ ] **Step 1: Bootstrap Next.js project**

Run in the project root (`C:\Users\archi\OneDrive\Desktop\Projects\Awadh Website`):

```bash
npx create-next-app@14 . --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*"
```

Accept all prompts. This creates the full scaffold.

- [ ] **Step 2: Install Lucide React**

```bash
npm install lucide-react
```

- [ ] **Step 3: Verify dev server starts**

```bash
npm run dev
```

Open `http://localhost:3000` — should show default Next.js page. Then stop the server (`Ctrl+C`).

- [ ] **Step 4: Commit**

```bash
git init
git add .
git commit -m "chore: scaffold Next.js 14 project with Tailwind"
```

---

## Task 2: Tailwind Theme + Global Styles

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`

- [ ] **Step 1: Extend Tailwind with brand colors and fonts**

Replace the contents of `tailwind.config.ts` with:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#D32F2F",
          blue: "#29B6F6",
          charcoal: "#1A1A2E",
          offwhite: "#FDF6F0",
          gray: "#F5F5F5",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "scroll-left": "scroll-left 30s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
```

- [ ] **Step 2: Set global CSS**

Replace `app/globals.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --font-poppins: "Poppins", sans-serif;
  --font-inter: "Inter", sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #FDF6F0;
  font-family: var(--font-inter), sans-serif;
}

@layer utilities {
  .pause-animation {
    animation-play-state: paused;
  }
}
```

- [ ] **Step 3: Commit**

```bash
git add tailwind.config.ts app/globals.css
git commit -m "chore: configure Tailwind brand theme and global styles"
```

---

## Task 3: Root Layout with Fonts and Metadata

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Set up layout with Google Fonts and metadata**

Replace `app/layout.tsx` with:

```tsx
import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Awadh Diagnostic Centre | Kanpur",
  description:
    "Trusted diagnostic centre in Kanpur offering Digital X-Ray, Blood Tests, ECG, Ultrasound, and Doctor Consultation. Visit us at Awadhpuri Road, Kanpur.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Verify it compiles**

```bash
npm run dev
```

Open `http://localhost:3000` — no errors in terminal. Stop server.

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: add root layout with Poppins/Inter fonts and SEO metadata"
```

---

## Task 4: Navbar Component

**Files:**
- Create: `components/Navbar.tsx`

- [ ] **Step 1: Create the Navbar**

Create `components/Navbar.tsx`:

```tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919450123521?text=Hi%2C+I+would+like+to+enquire+about+your+services+at+Awadh+Diagnostic+Centre.";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Find Us", href: "#find-us" },
  { label: "Contact", href: "#footer" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-charcoal/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Awadh Diagnostic Centre"
              width={160}
              height={48}
              className="h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors font-inter"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all hover:scale-105"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-brand-charcoal border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white text-sm font-medium font-inter"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-full text-center"
          >
            WhatsApp Us
          </a>
        </div>
      )}
    </nav>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Navbar.tsx
git commit -m "feat: add sticky Navbar with mobile hamburger menu"
```

---

## Task 5: Hero Section Component

**Files:**
- Create: `components/Hero.tsx`

- [ ] **Step 1: Create Hero component**

Create `components/Hero.tsx`:

```tsx
import { MessageCircle, MapPin } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919450123521?text=Hi%2C+I+would+like+to+enquire+about+your+services+at+Awadh+Diagnostic+Centre.";

const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=19+Lakhanpur+Housing+Society+Awadhpuri+Road+Kanpur+Uttar+Pradesh";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-brand-charcoal overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal via-[#0f1628] to-brand-charcoal" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-red/10 to-brand-blue/10" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <span className="inline-block bg-brand-blue/20 text-brand-blue text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-brand-blue/30 font-inter uppercase tracking-widest">
          Trusted Diagnostic Centre — Kanpur
        </span>

        {/* Headline */}
        <h1 className="font-poppins font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
          Your Health,{" "}
          <span className="text-brand-red">Our Priority</span>
        </h1>

        {/* Subheadline */}
        <p className="font-inter text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Accurate reports, experienced doctors, and state-of-the-art
          diagnostics — all under one roof at Awadhpuri Road, Kanpur.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full text-base transition-all hover:scale-105 shadow-lg shadow-green-500/20 font-poppins"
          >
            <MessageCircle size={20} />
            Chat on WhatsApp
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white font-semibold px-8 py-4 rounded-full text-base transition-all hover:scale-105 font-poppins"
          >
            <MapPin size={20} />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Hero.tsx
git commit -m "feat: add Hero section with headline and CTA buttons"
```

---

## Task 6: Services Section Component

**Files:**
- Create: `components/Services.tsx`

- [ ] **Step 1: Create Services component**

Create `components/Services.tsx`:

```tsx
import {
  Zap,
  Droplets,
  Activity,
  Heart,
  FlaskConical,
  Microscope,
  Thermometer,
  Stethoscope,
} from "lucide-react";

const services = [
  {
    icon: Zap,
    name: "Digital X-Ray",
    description: "High-resolution computerised digital X-Ray with instant results.",
    featured: true,
    badge: "✦ Now Digital",
  },
  {
    icon: Droplets,
    name: "Complete Blood Count",
    description: "Full CBC panel with Italian FT-2 Auto Analyser technology.",
    featured: false,
  },
  {
    icon: Thermometer,
    name: "Blood Sugar Test",
    description: "Fasting, PP, and random blood glucose testing.",
    featured: false,
  },
  {
    icon: Activity,
    name: "ECG",
    description: "Electrocardiogram for heart rhythm and electrical activity.",
    featured: false,
  },
  {
    icon: FlaskConical,
    name: "Liver Function Test",
    description: "Comprehensive LFT panel to assess liver health.",
    featured: false,
  },
  {
    icon: Microscope,
    name: "Kidney Function Test",
    description: "KFT panel including creatinine, urea, and electrolytes.",
    featured: false,
  },
  {
    icon: Heart,
    name: "Thyroid Profile",
    description: "T3, T4, and TSH testing for thyroid disorders.",
    featured: false,
  },
  {
    icon: Stethoscope,
    name: "Doctor Consultation",
    description: "In-house qualified doctor available for consultation.",
    featured: false,
  },
];

export default function Services() {
  const featured = services.find((s) => s.featured);
  const rest = services.filter((s) => !s.featured);

  return (
    <section id="services" className="py-20 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-brand-red text-sm font-semibold uppercase tracking-widest font-inter">
            What We Offer
          </span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-brand-charcoal mt-2">
            Our Services
          </h2>
        </div>

        {/* Featured Card */}
        {featured && (
          <div className="mb-6">
            <div className="relative bg-gradient-to-r from-brand-charcoal to-[#0f1628] rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6 shadow-xl overflow-hidden">
              <div className="absolute top-4 right-4 bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full font-inter">
                {featured.badge}
              </div>
              <div className="bg-brand-blue/20 p-5 rounded-xl">
                <featured.icon size={40} className="text-brand-blue" />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-2xl text-white mb-2">
                  {featured.name}
                </h3>
                <p className="font-inter text-white/70 text-base max-w-lg">
                  {featured.description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {rest.map((service) => (
            <div
              key={service.name}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-gray-100"
            >
              <div className="bg-brand-red/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <service.icon size={22} className="text-brand-red" />
              </div>
              <h3 className="font-poppins font-semibold text-brand-charcoal text-base mb-1">
                {service.name}
              </h3>
              <p className="font-inter text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Services.tsx
git commit -m "feat: add Services section with featured Digital X-Ray card"
```

---

## Task 7: Why Choose Us Section

**Files:**
- Create: `components/WhyUs.tsx`

- [ ] **Step 1: Create WhyUs component**

Create `components/WhyUs.tsx`:

```tsx
import { Award, UserCheck, Clock, IndianRupee } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "15+",
    label: "Years of Experience",
    color: "text-brand-red",
    bg: "bg-brand-red/10",
  },
  {
    icon: UserCheck,
    value: "Qualified",
    label: "In-House Doctors",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
  },
  {
    icon: Clock,
    value: "Fast",
    label: "Report Delivery",
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    icon: IndianRupee,
    value: "Affordable",
    label: "Pricing",
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-brand-red text-sm font-semibold uppercase tracking-widest font-inter">
            Why Patients Trust Us
          </span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-brand-charcoal mt-2">
            Why Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className={`${stat.bg} w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <stat.icon size={26} className={stat.color} />
              </div>
              <div className={`font-poppins font-bold text-2xl ${stat.color} mb-1`}>
                {stat.value}
              </div>
              <div className="font-inter text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/WhyUs.tsx
git commit -m "feat: add Why Choose Us trust badges section"
```

---

## Task 8: Infinite Gallery Carousel

**Files:**
- Create: `components/Gallery.tsx`

- [ ] **Step 1: Add placeholder gallery images**

Download 6 free high-quality medical/diagnostic stock photos from Unsplash and save them to `public/gallery/` as:
- `public/gallery/placeholder-1.jpg` — lab equipment
- `public/gallery/placeholder-2.jpg` — doctor with patient
- `public/gallery/placeholder-3.jpg` — blood test tubes
- `public/gallery/placeholder-4.jpg` — x-ray machine
- `public/gallery/placeholder-5.jpg` — diagnostic equipment
- `public/gallery/placeholder-6.jpg` — waiting area

Also save the two real interior photos (provided by owner) as:
- `public/gallery/interior-1.jpg`
- `public/gallery/interior-2.jpg`

_(If images are not yet available, create a `public/gallery/` folder and the carousel will just show the images that exist. Add images later without code changes.)_

- [ ] **Step 2: Create Gallery component**

Create `components/Gallery.tsx`:

```tsx
"use client";

import Image from "next/image";

const images = [
  { src: "/gallery/interior-1.jpg", alt: "Awadh Diagnostic Centre interior" },
  { src: "/gallery/interior-2.jpg", alt: "Awadh Diagnostic Centre waiting area" },
  { src: "/gallery/placeholder-1.jpg", alt: "Modern lab equipment" },
  { src: "/gallery/placeholder-2.jpg", alt: "Doctor consultation" },
  { src: "/gallery/placeholder-3.jpg", alt: "Blood test laboratory" },
  { src: "/gallery/placeholder-4.jpg", alt: "Digital X-Ray machine" },
  { src: "/gallery/placeholder-5.jpg", alt: "Diagnostic equipment" },
  { src: "/gallery/placeholder-6.jpg", alt: "Patient care" },
];

// Duplicate for seamless infinite loop
const allImages = [...images, ...images];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-brand-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span className="text-brand-blue text-sm font-semibold uppercase tracking-widest font-inter">
          Take a Look Inside
        </span>
        <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-white mt-2">
          Our Centre
        </h2>
      </div>

      {/* Carousel track */}
      <div
        className="flex gap-4 w-max animate-scroll-left hover:pause-animation"
        style={{ willChange: "transform" }}
      >
        {allImages.map((img, i) => (
          <div
            key={i}
            className="relative w-72 h-52 flex-shrink-0 rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="288px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Verify the pause-animation utility is in globals.css**

Ensure `app/globals.css` contains (already added in Task 2):
```css
@layer utilities {
  .pause-animation {
    animation-play-state: paused;
  }
}
```

- [ ] **Step 4: Commit**

```bash
git add components/Gallery.tsx public/gallery/
git commit -m "feat: add infinite auto-scroll gallery carousel"
```

---

## Task 9: Find Us Section

**Files:**
- Create: `components/FindUs.tsx`

- [ ] **Step 1: Create FindUs component**

Create `components/FindUs.tsx`:

```tsx
import { MapPin, Phone, Clock } from "lucide-react";

const MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.0!2d80.3319!3d26.4499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDI2JzU5LjYiTiA4MMKwMTknNTUuMCJF!5e0!3m2!1sen!2sin!4v1000000000000!5m2!1sen!2sin";

const MAPS_DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=19+Lakhanpur+Housing+Society+Awadhpuri+Road+Kanpur+Uttar+Pradesh+India";

export default function FindUs() {
  return (
    <section id="find-us" className="py-20 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-brand-red text-sm font-semibold uppercase tracking-widest font-inter">
            Visit Us
          </span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-brand-charcoal mt-2">
            Find Us
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-80 lg:h-96">
            <iframe
              src={MAPS_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Awadh Diagnostic Centre Location"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            <div className="flex gap-4 items-start">
              <div className="bg-brand-red/10 p-3 rounded-xl flex-shrink-0">
                <MapPin size={22} className="text-brand-red" />
              </div>
              <div>
                <p className="font-poppins font-semibold text-brand-charcoal text-base">
                  Address
                </p>
                <p className="font-inter text-gray-600 text-sm mt-1 leading-relaxed">
                  19-Lakhanpur Housing Society,<br />
                  Awadhpuri Road, Kanpur,<br />
                  Uttar Pradesh, India
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-brand-blue/10 p-3 rounded-xl flex-shrink-0">
                <Phone size={22} className="text-brand-blue" />
              </div>
              <div>
                <p className="font-poppins font-semibold text-brand-charcoal text-base">
                  Phone
                </p>
                <a
                  href="tel:+919450123521"
                  className="font-inter text-brand-blue text-sm mt-1 hover:underline"
                >
                  +91 94501 23521
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-green-100 p-3 rounded-xl flex-shrink-0">
                <Clock size={22} className="text-green-600" />
              </div>
              <div>
                <p className="font-poppins font-semibold text-brand-charcoal text-base">
                  Opening Hours
                </p>
                <p className="font-inter text-gray-600 text-sm mt-1">
                  Mon – Sat: 7:00 AM – 8:00 PM<br />
                  Sunday: 8:00 AM – 2:00 PM
                </p>
              </div>
            </div>

            <a
              href={MAPS_DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-full text-base transition-all hover:scale-105 shadow-lg shadow-brand-red/20 font-poppins w-fit"
            >
              <MapPin size={18} />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
```

> **Note:** The Maps embed URL above uses approximate coordinates for Kanpur. After deployment, replace the `src` value with the actual embed URL from Google Maps by searching for the address and clicking Share → Embed a map.

- [ ] **Step 2: Commit**

```bash
git add components/FindUs.tsx
git commit -m "feat: add Find Us section with Google Maps embed and directions button"
```

---

## Task 10: Footer Component

**Files:**
- Create: `components/Footer.tsx`

- [ ] **Step 1: Create Footer component**

Create `components/Footer.tsx`:

```tsx
import Image from "next/image";
import { Facebook, Mail } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919450123521?text=Hi%2C+I+would+like+to+enquire+about+your+services+at+Awadh+Diagnostic+Centre.";

export default function Footer() {
  return (
    <footer id="footer" className="bg-brand-charcoal border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Logo */}
          <Image
            src="/logo.png"
            alt="Awadh Diagnostic Centre"
            width={160}
            height={48}
            className="h-12 w-auto object-contain"
          />

          {/* Tagline */}
          <p className="font-inter text-white/50 text-sm">
            Awadh Diagnostic Centre — Kanpur
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.facebook.com/awadhdiagnosticcentre"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white/50 hover:text-brand-blue transition-colors"
            >
              <Facebook size={22} />
            </a>
            <a
              href="mailto:placeholder@awadhdiagnostic.com"
              aria-label="Email"
              className="text-white/50 hover:text-brand-red transition-colors"
            >
              <Mail size={22} />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-white/50 hover:text-green-400 transition-colors"
            >
              {/* WhatsApp SVG (Lucide doesn't include it) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <p className="font-inter text-white/30 text-xs">
            © {new Date().getFullYear()} Awadh Diagnostic Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Footer.tsx
git commit -m "feat: add Footer with social links and copyright"
```

---

## Task 11: WhatsApp Floating Bubble

**Files:**
- Create: `components/WhatsAppBubble.tsx`

- [ ] **Step 1: Create WhatsAppBubble component**

Create `components/WhatsAppBubble.tsx`:

```tsx
"use client";

import { useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/919450123521?text=Hi%2C+I+would+like+to+enquire+about+your+services+at+Awadh+Diagnostic+Centre.";

export default function WhatsAppBubble() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl shadow-green-500/30 transition-all hover:scale-105"
      style={{ padding: hovered ? "12px 20px 12px 16px" : "14px" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="white"
        className="flex-shrink-0"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      {hovered && (
        <span className="font-inter font-semibold text-sm whitespace-nowrap">
          Chat with us
        </span>
      )}
    </a>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/WhatsAppBubble.tsx
git commit -m "feat: add floating WhatsApp bubble with hover tooltip"
```

---

## Task 12: Assemble Main Page

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Compose all sections in page.tsx**

Replace `app/page.tsx` with:

```tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import FindUs from "@/components/FindUs";
import Footer from "@/components/Footer";
import WhatsAppBubble from "@/components/WhatsAppBubble";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Gallery />
        <FindUs />
      </main>
      <Footer />
      <WhatsAppBubble />
    </>
  );
}
```

- [ ] **Step 2: Add logo to public directory**

Save the provided logo image as `public/logo.png`.

- [ ] **Step 3: Start dev server and do a full visual check**

```bash
npm run dev
```

Open `http://localhost:3000` and check:
- [ ] Navbar is sticky and shows on scroll
- [ ] Hero renders full height with headline and two buttons
- [ ] Services grid shows Digital X-Ray as featured card
- [ ] Why Choose Us shows 4 badges
- [ ] Gallery carousel auto-scrolls and pauses on hover
- [ ] Find Us shows map + address + Get Directions button
- [ ] Footer shows logo, social icons, copyright
- [ ] WhatsApp bubble is visible bottom-right, expands on hover
- [ ] All anchor links (`#services`, `#gallery`, `#find-us`) scroll correctly
- [ ] Mobile view (resize to 375px): hamburger menu works, layout stacks correctly

- [ ] **Step 4: Fix any visual issues found during check**

Common issues to watch for:
- Images returning 404 → ensure files exist in `public/gallery/`
- Carousel not animating → check `tailwind.config.ts` has the keyframes defined
- Fonts not loading → ensure `next/font` variables are applied in layout body className

- [ ] **Step 5: Commit**

```bash
git add app/page.tsx public/logo.png
git commit -m "feat: assemble full page with all sections"
```

---

## Task 13: Scroll Animations

**Files:**
- Create: `components/FadeIn.tsx`
- Modify: `components/Services.tsx`, `components/WhyUs.tsx`, `components/FindUs.tsx`

- [ ] **Step 1: Create FadeIn wrapper component**

Create `components/FadeIn.tsx`:

```tsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
```

- [ ] **Step 2: Wrap service cards with FadeIn in Services.tsx**

In `components/Services.tsx`, import FadeIn and wrap the featured card and grid:

```tsx
import FadeIn from "@/components/FadeIn";

// Wrap the featured card:
{featured && (
  <FadeIn>
    <div className="mb-6">
      {/* ... existing featured card JSX unchanged ... */}
    </div>
  </FadeIn>
)}

// Wrap each grid card with staggered delay:
{rest.map((service, i) => (
  <FadeIn key={service.name} delay={i * 80}>
    <div className="bg-white rounded-2xl p-6 ...">
      {/* ... existing card JSX unchanged ... */}
    </div>
  </FadeIn>
))}
```

- [ ] **Step 3: Wrap WhyUs badges with FadeIn**

In `components/WhyUs.tsx`, import FadeIn and wrap each badge card with `delay={i * 100}`.

- [ ] **Step 4: Verify animations in browser**

```bash
npm run dev
```

Scroll down — each section's cards should fade in and slide up as they enter the viewport.

- [ ] **Step 5: Commit**

```bash
git add components/FadeIn.tsx components/Services.tsx components/WhyUs.tsx
git commit -m "feat: add scroll-triggered fade-in animations"
```

---

## Task 14: Production Build + Vercel Deploy

**Files:**
- None (deployment config)

- [ ] **Step 1: Run production build to check for errors**

```bash
npm run build
```

Expected: output showing all routes compiled, no type errors, no missing image warnings. Fix any errors before continuing.

- [ ] **Step 2: Push to GitHub**

```bash
git remote add origin https://github.com/YOUR_USERNAME/awadh-diagnostic.git
git push -u origin main
```

_(Create a new GitHub repo first at github.com/new — name it `awadh-diagnostic`, private or public)_

- [ ] **Step 3: Deploy to Vercel**

1. Go to vercel.com → New Project
2. Import the GitHub repo
3. Leave all settings as default (Vercel auto-detects Next.js)
4. Click Deploy

Wait ~2 minutes. Vercel gives you a live URL like `awadh-diagnostic.vercel.app`.

- [ ] **Step 4: Verify live deployment**

Open the Vercel URL and repeat the visual checklist from Task 12 Step 3 on the live site.

- [ ] **Step 5: Commit**

```bash
git add .
git commit -m "chore: production build verified, deployed to Vercel"
```

---

## Placeholders to Fill Before Launch

| Item | Where to update |
|---|---|
| Business email | `components/Footer.tsx` line with `mailto:placeholder@awadhdiagnostic.com` |
| Opening hours | `components/FindUs.tsx` — replace Mon–Sat and Sunday hours |
| Years of experience | `components/WhyUs.tsx` — update `"15+"` value |
| Google Maps embed URL | `components/FindUs.tsx` — replace `MAPS_EMBED` with real embed URL from Google Maps |
| Gallery images | `public/gallery/` — replace placeholder images with real photos |
