import Image from "next/image";
import { ArrowRight } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919451426007?text=Hi%2C+I+would+like+to+enquire+about+your+services+at+Awadh+Diagnostic+Centre.";

const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Awadh+Diagnostic+Centre+19+Awadhpuri+Rd+Lakhanpur+Kanpur+Uttar+Pradesh+208024+India";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden">
      {/* Background image — shifted right on mobile to show the lobby logo */}
      <Image
        src="/Lobby.png"
        alt="Awadh Diagnostic Centre lobby"
        fill
        className="object-cover object-[65%] md:object-center"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content — text sits on the left, lobby breathes on the right */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 lg:px-6 w-full">
        <div className="py-14 md:py-24 lg:max-w-2xl">
          <h1 className="font-playfair font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 md:mb-8">
            Your Companion<br />
            <span className="italic text-brand-gold">in Good Health</span>
          </h1>
          <p className="font-inter text-white/75 text-sm md:text-base leading-relaxed max-w-lg mb-8 md:mb-10">
            Awadh Diagnostic Centre is one of the most well established and reputed pathological labs in Kanpur. It has been serving the community for 28 glorious years. It is a fully computerised lab with all the latest pathological apparatuses accompanied by a panel of highly qualified doctors and paramedical staff.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-dark text-xs font-semibold px-8 py-4 tracking-widest uppercase hover:bg-brand-gold hover:text-white transition-all font-inter"
            >
              Chat on WhatsApp
              <ArrowRight size={14} />
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white text-white text-xs font-semibold px-8 py-4 tracking-widest uppercase hover:bg-white hover:text-brand-dark transition-all font-inter"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
