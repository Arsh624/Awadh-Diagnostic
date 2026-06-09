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
