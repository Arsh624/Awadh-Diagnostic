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
