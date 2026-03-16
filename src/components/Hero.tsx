import { Star, ArrowRight, Phone, CheckCircle2, Clock } from "lucide-react";
import site from "@/data/site.json";

const { hero, business } = site;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-20 lg:pt-40 lg:pb-32"
      style={{ background: "linear-gradient(135deg, #EEF4FF 0%, #F8FAFC 60%, #E6FAF8 100%)" }}
    >
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: site.colors.secondary, transform: "translate(40%, -30%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: site.colors.primary, transform: "translate(-30%, 30%)" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Rating Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border mb-6" style={{ borderColor: site.colors.accent }}>
              <div className="flex gap-0.5" style={{ color: "#F59E0B" }}>
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <span className="text-sm font-semibold" style={{ color: site.colors.foreground }}>
                {hero.badge}
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.12] mb-5"
              style={{ fontFamily: "var(--font-poppins), sans-serif", color: site.colors.foreground }}
            >
              {hero.headline}{" "}
              <span style={{ color: site.colors.primary }}>{hero.headlineHighlight}</span>
            </h1>

            <p className="text-lg leading-relaxed mb-8 max-w-[520px]" style={{ color: "#4B5563" }}>
              {hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                id="hero-book-btn"
                href="#book"
                className="inline-flex items-center justify-center gap-2 text-white px-8 py-4 rounded-full font-semibold text-base transition-all hover:-translate-y-1"
                style={{ backgroundColor: site.colors.primary, boxShadow: "0 8px 30px rgba(30,77,140,0.35)" }}
              >
                {hero.primaryCTA}
                <ArrowRight size={18} />
              </a>
              <a
                id="hero-call-btn"
                href={business.phoneHref}
                className="inline-flex items-center justify-center gap-2 bg-white border px-8 py-4 rounded-full font-semibold text-base transition-all hover:-translate-y-1 hover:shadow-md"
                style={{ borderColor: site.colors.accent, color: site.colors.foreground }}
              >
                <Phone size={18} style={{ color: site.colors.secondary }} />
                {hero.secondaryCTA}
              </a>
            </div>

            <div className="flex flex-wrap gap-5">
              {hero.trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <CheckCircle2 size={18} style={{ color: site.colors.secondary }} />
                  <span className="text-sm font-semibold" style={{ color: "#374151" }}>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                src={hero.imageUrl}
                alt={hero.imageAlt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Floating Card */}
            <div
              className="absolute -bottom-4 -left-4 md:left-4 bg-white rounded-2xl shadow-xl p-5 max-w-[230px]"
              style={{ border: `1px solid ${site.colors.accent}` }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#EEF4FF" }}>
                  <Clock size={20} style={{ color: site.colors.primary }} />
                </div>
                <div>
                  <p className="text-xs font-semibold" style={{ color: "#6B7280" }}>Working Hours</p>
                  <p className="text-sm font-bold" style={{ color: site.colors.foreground }}>{business.workingHours}</p>
                </div>
              </div>
              <p className="text-sm font-medium" style={{ color: site.colors.secondary }}>
                Closes at {business.closingTime}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
