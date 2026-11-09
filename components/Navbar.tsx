"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919451426007?text=Hi%2C+I+would+like+to+enquire+about+your+services+at+Awadh+Diagnostic+Centre.";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Find Us", href: "#find-us" },
  { label: "Contact", href: "#footer" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-cream border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo + Brand name */}
          <a href="#" className="flex items-center gap-2 md:gap-3 min-w-0">
            <img
              src="/logo.png"
              alt="Awadh Diagnostic Centre"
              className="h-8 md:h-10 w-auto object-contain flex-shrink-0"
              style={{ mixBlendMode: "multiply" }}
            />
            {/* Mobile: bigger, fits one line */}
            <span className="md:hidden font-inter font-light text-lg tracking-[0.02em] text-brand-dark uppercase whitespace-nowrap">
              Awadh Diagnostic Centre
            </span>
            {/* Desktop: comfortable size that doesn't crowd nav links */}
            <span className="hidden md:inline font-inter font-light text-2xl tracking-[0.1em] text-brand-dark uppercase whitespace-nowrap">
              Awadh Diagnostic Centre
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-brand-muted hover:text-brand-dark text-sm tracking-wide transition-colors font-inter"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-brand-cream text-xs font-semibold px-5 py-2 tracking-widest uppercase transition-all font-inter"
            >
              Enquire
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-brand-dark"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-brand-cream border-t border-brand-border px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-brand-muted hover:text-brand-dark text-sm tracking-wide font-inter"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-brand-dark text-brand-dark text-xs font-semibold px-5 py-2 tracking-widest uppercase text-center font-inter"
          >
            Enquire
          </a>
        </div>
      )}
    </nav>
  );
}
