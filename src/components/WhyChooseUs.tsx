import { Shield, Cpu, Sparkles, Star, LucideIcon } from "lucide-react";
import site from "@/data/site.json";

const { whyChooseUs } = site;

const iconMap: Record<string, LucideIcon> = { Shield, Cpu, Sparkles, Star };
const bgColorsAlt = ["#EEF4FF", "#E6FAF8", "#EEF4FF", "#E6FAF8"];
const fgColorsAlt = [site.colors.primary, site.colors.secondary, site.colors.primary, site.colors.secondary];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28" style={{ backgroundColor: site.colors.background }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: "#EEF4FF", color: site.colors.primary }}
          >
            {whyChooseUs.sectionLabel}
          </div>
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-4 max-w-2xl mx-auto leading-tight"
            style={{ fontFamily: "var(--font-poppins), sans-serif", color: site.colors.foreground }}
          >
            {whyChooseUs.headline}{" "}
            <span style={{ color: site.colors.primary }}>{whyChooseUs.headlineHighlight}</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#6B7280" }}>
            {whyChooseUs.subheadline}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.features.map((f, idx) => {
            const Icon = iconMap[f.icon] ?? Shield;
            return (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-7 border text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: site.colors.accent }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: bgColorsAlt[idx], color: fgColorsAlt[idx] }}
                >
                  <Icon size={28} />
                </div>
                <h3
                  className="text-base font-bold mb-3"
                  style={{ color: site.colors.foreground, fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
