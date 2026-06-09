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
