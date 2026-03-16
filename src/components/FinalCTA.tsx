import { ArrowRight, Phone } from "lucide-react";
import site from "@/data/site.json";

const { finalCTA, business } = site;

export default function FinalCTA() {
  return (
    <section
      id="book"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${site.colors.primary} 0%, #163a6b 100%)` }}
    >
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
        style={{ background: site.colors.secondary, transform: "translate(30%, -30%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{ background: site.colors.secondary, transform: "translate(-30%, 30%)" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div
          className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
          style={{ backgroundColor: "rgba(43,183,163,0.15)", color: site.colors.secondary }}
        >
          {finalCTA.sectionLabel}
        </div>

        <h2
          className="text-3xl md:text-5xl font-extrabold text-white mb-5 max-w-2xl mx-auto leading-tight"
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
        >
          {finalCTA.headline}
        </h2>

        <p className="text-lg max-w-xl mx-auto mb-10" style={{ color: "rgba(255,255,255,0.75)" }}>
          {finalCTA.subtext}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            id="final-book-btn"
            href={business.phoneHref}
            className="inline-flex items-center justify-center gap-2 text-white px-8 py-4 rounded-full font-semibold text-base transition-all hover:-translate-y-1 hover:shadow-xl"
            style={{ backgroundColor: site.colors.secondary, boxShadow: "0 8px 30px rgba(43,183,163,0.35)" }}
          >
            {finalCTA.primaryCTA}
            <ArrowRight size={18} />
          </a>
          <a
            id="final-call-btn"
            href={business.phoneHref}
            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-base transition-all hover:-translate-y-1 backdrop-blur-sm"
          >
            <Phone size={18} />
            {finalCTA.secondaryCTA}
          </a>
        </div>

        <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>Call us directly at</p>
        <a
          href={business.phoneHref}
          className="text-2xl font-bold text-white hover:text-teal-300 transition-colors"
        >
          {business.phone}
        </a>
        <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.55)" }}>
          {business.workingHours} · Closes at {business.closingTime}
        </p>
      </div>
    </section>
  );
}
