import { Star, Quote } from "lucide-react";
import site from "@/data/site.json";

const { testimonials, business } = site;
const avatarColors = [site.colors.primary, site.colors.secondary, site.colors.primary, site.colors.secondary];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: "#E6FAF8", color: site.colors.secondary }}
          >
            {testimonials.sectionLabel}
          </div>
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-4 max-w-2xl mx-auto leading-tight"
            style={{ fontFamily: "var(--font-poppins), sans-serif", color: site.colors.foreground }}
          >
            {testimonials.headline}{" "}
            <span style={{ color: site.colors.primary }}>{testimonials.headlineHighlight}</span>
          </h2>
          <div className="inline-flex items-center gap-3 mt-2">
            <div className="flex gap-1" style={{ color: "#F59E0B" }}>
              {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <span className="text-xl font-extrabold" style={{ color: site.colors.foreground }}>
              {business.rating.toFixed(1)}
            </span>
            <span className="text-sm" style={{ color: "#6B7280" }}>
              from {business.reviewCount} Google Reviews
            </span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.items.map((t, idx) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 border flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ borderColor: site.colors.accent }}
            >
              <Quote size={28} fill="currentColor" style={{ color: site.colors.accent }} />
              <p className="text-sm leading-relaxed flex-1" style={{ color: "#374151" }}>
                &ldquo;{t.review}&rdquo;
              </p>
              <div className="flex gap-0.5" style={{ color: "#F59E0B" }}>
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: "#F3F4F6" }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: avatarColors[idx % avatarColors.length] }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: site.colors.foreground }}>{t.name}</p>
                  <p className="text-xs" style={{ color: "#9CA3AF" }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
