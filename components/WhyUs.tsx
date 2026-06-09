import { Award, UserCheck, Clock, IndianRupee } from "lucide-react";
import FadeIn from "@/components/FadeIn";

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
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 100}>
              <div
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
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
