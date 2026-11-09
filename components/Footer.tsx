const WHATSAPP_URL =
  "https://wa.me/919451426007?text=Hi%2C+I+would+like+to+enquire+about+your+services+at+Awadh+Diagnostic+Centre.";

export default function Footer() {
  return (
    <footer id="footer" className="bg-brand-dark py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-4 text-center md:text-left">
            <img
              src="/logo.png"
              alt="Awadh Diagnostic Centre"
              className="h-10 w-auto object-contain"
              style={{ filter: "brightness(0) invert(1) sepia(0)" }}
            />
            <div>
              <p className="font-playfair font-bold text-lg tracking-wider text-brand-cream">Awadh Diagnostic Centre</p>
              <p className="font-inter text-brand-muted text-xs tracking-widest uppercase">Kanpur, Uttar Pradesh</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 md:gap-8 flex-wrap justify-center md:justify-end">
            <a
              href="https://www.facebook.com/awadhdiagnosticcentre"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-brand-muted hover:text-brand-gold text-xs tracking-widest uppercase transition-colors"
            >
              Facebook
            </a>
            <a
              href="mailto:placeholder@awadhdiagnostic.com"
              className="font-inter text-brand-muted hover:text-brand-gold text-xs tracking-widest uppercase transition-colors"
            >
              Email
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-brand-muted hover:text-brand-gold text-xs tracking-widest uppercase transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <p className="font-inter text-brand-muted text-xs text-center tracking-widest">
            © {new Date().getFullYear()} Awadh Diagnostic Centre. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
