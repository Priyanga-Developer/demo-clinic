import { Activity, Hand, Heart, Bone, Dumbbell, Zap, LucideIcon } from "lucide-react";
import site from "@/data/site.json";

const { conditions } = site;

const iconMap: Record<string, LucideIcon> = {
  Activity, Hand, Heart, Bone, Dumbbell, Zap,
};

export default function Conditions() {
  return (
    <section id="treatments" className="py-20 lg:py-28" style={{ backgroundColor: site.colors.background }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: "#EEF4FF", color: site.colors.primary }}
          >
            {conditions.sectionLabel}
          </div>
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-4 max-w-2xl mx-auto leading-tight"
            style={{ fontFamily: "var(--font-poppins), sans-serif", color: site.colors.foreground }}
          >
            {conditions.headline}{" "}
            <span style={{ color: site.colors.primary }}>{conditions.headlineHighlight}</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#6B7280" }}>
            {conditions.subheadline}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {conditions.items.map((cond, idx) => {
            const Icon = iconMap[cond.icon] ?? Activity;
            const isEven = idx % 2 === 0;
            return (
              <div
                key={cond.title}
                className="group bg-white rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-default"
                style={{ borderColor: site.colors.accent }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300"
                  style={{
                    backgroundColor: isEven ? "#EEF4FF" : "#E6FAF8",
                    color: isEven ? site.colors.primary : site.colors.secondary,
                  }}
                >
                  <Icon size={28} />
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: site.colors.foreground, fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  {cond.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                  {cond.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
