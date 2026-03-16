import { CheckCircle2, Users, Award, Heart } from "lucide-react";
import site from "@/data/site.json";

const { about } = site;

const statIcons = [<Users key="u" size={22} />, <Award key="a" size={22} />, <Heart key="h" size={22} />];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src={about.imageUrl}
                alt={about.imageAlt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div
              className="absolute -bottom-6 -right-4 md:right-4 bg-white rounded-2xl shadow-xl p-5 flex gap-6"
              style={{ border: `1px solid ${site.colors.accent}` }}
            >
              {about.stats.map((stat, i) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="mx-auto mb-1.5 w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#EEF4FF", color: site.colors.primary }}
                  >
                    {statIcons[i]}
                  </div>
                  <p className="text-xl font-extrabold" style={{ color: site.colors.primary }}>{stat.value}</p>
                  <p className="text-xs font-medium" style={{ color: "#6B7280" }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
              style={{ backgroundColor: "#E6FAF8", color: site.colors.secondary }}
            >
              {about.sectionLabel}
            </div>
            <h2
              className="text-3xl md:text-4xl font-extrabold mb-5 leading-tight"
              style={{ fontFamily: "var(--font-poppins), sans-serif", color: site.colors.foreground }}
            >
              {about.headline}{" "}
              <span style={{ color: site.colors.primary }}>{about.headlineHighlight}</span>
            </h2>
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed mb-4" style={{ color: "#4B5563" }}>{p}</p>
            ))}
            <ul className="space-y-3 mb-8 mt-4">
              {about.highlights.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <CheckCircle2 size={18} style={{ color: site.colors.secondary, flexShrink: 0 }} />
                  <span className="text-sm font-medium" style={{ color: "#374151" }}>{point}</span>
                </li>
              ))}
            </ul>
            <a
              href="#book"
              className="inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-full font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{ backgroundColor: site.colors.primary }}
            >
              {about.ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
