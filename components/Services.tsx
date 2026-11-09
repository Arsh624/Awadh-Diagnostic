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
  },
  { icon: Droplets, name: "Complete Blood Count", description: "Full CBC panel with Italian FT-2 Auto Analyser." },
  { icon: Thermometer, name: "Blood Sugar Test", description: "Fasting, PP, and random blood glucose testing." },
  { icon: Activity, name: "ECG", description: "Electrocardiogram for heart rhythm analysis." },
  { icon: FlaskConical, name: "Liver Function Test", description: "Comprehensive LFT panel for liver health." },
  { icon: Microscope, name: "Kidney Function Test", description: "KFT panel including creatinine and urea." },
  { icon: Heart, name: "Thyroid Profile", description: "T3, T4, and TSH thyroid disorder testing." },
  { icon: Stethoscope, name: "Doctor Consultation", description: "In-house qualified doctor available daily." },
];

export default function Services() {
  const featured = services.find((s) => s.featured);
  const rest = services.filter((s) => !s.featured);

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="flex items-end justify-between border-b border-brand-border pb-6 md:pb-8 mb-10 md:mb-16">
          <div>
            <p className="font-inter text-brand-gold text-xs tracking-[0.3em] uppercase mb-3">What We Offer</p>
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-brand-dark">Our Services</h2>
          </div>
        </div>

        {/* Featured Card */}
        {featured && (
          <div className="mb-8 border border-brand-gold p-5 md:p-8 flex flex-col sm:flex-row items-start gap-5 md:gap-8">
            <div className="border border-brand-gold p-4">
              <featured.icon size={28} className="text-brand-gold" />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-3">
                <h3 className="font-playfair font-bold text-2xl text-brand-dark">{featured.name}</h3>
                <span className="font-inter text-brand-gold text-xs tracking-widest uppercase border border-brand-gold px-2 py-0.5">
                  Now Digital
                </span>
              </div>
              <p className="font-inter text-brand-muted text-sm leading-relaxed">{featured.description}</p>
            </div>
          </div>
        )}

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-border">
          {rest.map((service) => (
            <div key={service.name} className="bg-white p-5 md:p-8 hover:bg-brand-cream transition-colors">
              <service.icon size={20} className="text-brand-gold mb-6" />
              <h3 className="font-playfair font-semibold text-brand-dark text-lg mb-2">{service.name}</h3>
              <p className="font-inter text-brand-muted text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
