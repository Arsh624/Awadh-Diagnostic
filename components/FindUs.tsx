import { MapPin, Phone, Clock } from "lucide-react";

const MAPS_EMBED =
  "https://maps.google.com/maps?q=Awadh+Diagnostic+Centre,+19,+Awadhpuri+Rd,+Lakhanpur,+Kanpur,+Uttar+Pradesh+208024&output=embed&z=16";

const MAPS_DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=Awadh+Diagnostic+Centre+19+Awadhpuri+Rd+Lakhanpur+Kanpur+Uttar+Pradesh+208024+India";

export default function FindUs() {
  return (
    <section id="find-us" className="py-16 md:py-24 bg-brand-cream border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between border-b border-brand-border pb-6 md:pb-8 mb-10 md:mb-16">
          <div>
            <p className="font-inter text-brand-gold text-xs tracking-[0.3em] uppercase mb-3">Visit Us</p>
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-brand-dark">Find Us</h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Map */}
          <div className="h-80 lg:h-96 overflow-hidden">
            <iframe
              src={MAPS_EMBED}
              style={{ border: 0, width: "100%", height: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Awadh Diagnostic Centre Location"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-10">
            <div className="flex gap-5 items-start">
              <MapPin size={18} className="text-brand-gold mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-inter font-semibold text-brand-dark text-sm tracking-wide uppercase mb-1">Address</p>
                <p className="font-inter text-brand-muted text-sm leading-relaxed">
                  19, Awadhpuri Rd, Lakhanpur,<br />Lakhanpur Housing Society, Khyora,<br />Kanpur, Uttar Pradesh 208024
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <Phone size={18} className="text-brand-gold mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-inter font-semibold text-brand-dark text-sm tracking-wide uppercase mb-1">Phone</p>
                <a href="tel:+919451426007" className="font-inter text-brand-muted text-sm hover:text-brand-gold transition-colors">
                  +91 94514 26007
                </a>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <Clock size={18} className="text-brand-gold mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-inter font-semibold text-brand-dark text-sm tracking-wide uppercase mb-1">Hours</p>
                <p className="font-inter text-brand-muted text-sm leading-relaxed">
                  Mon – Sat: 8:15 AM – 8:30 PM<br />Sunday: 8:15 AM – 3:00 PM
                </p>
              </div>
            </div>

            <a
              href={MAPS_DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-brand-dark text-brand-dark text-xs font-semibold px-8 py-4 tracking-widest uppercase hover:bg-brand-dark hover:text-brand-cream transition-all font-inter w-fit"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
