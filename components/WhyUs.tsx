const stats = [
  { value: "28+", label: "Years of Experience" },
  { value: "Digital", label: "X-Ray Technology" },
  { value: "Fast", label: "& Accurate Reports" },
  { value: "₹", label: "Affordable Pricing" },
];

export default function WhyUs() {
  return (
    <section className="py-16 md:py-24 bg-brand-cream border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-brand-border">
          {stats.map((stat) => (
            <div key={stat.label} className="px-4 md:px-8 py-4 text-center first:pl-0 last:pr-0">
              <p className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-brand-dark mb-2">{stat.value}</p>
              <p className="font-inter text-brand-muted text-[10px] md:text-xs tracking-widest uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
