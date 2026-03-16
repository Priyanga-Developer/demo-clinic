import site from "@/data/site.json";

const { approach } = site;

export default function Approach() {
  return (
    <section id="approach" className="py-20 lg:py-28" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
              style={{ backgroundColor: "#E6FAF8", color: site.colors.secondary }}
            >
              {approach.sectionLabel}
            </div>
            <h2
              className="text-3xl md:text-4xl font-extrabold mb-5 leading-tight"
              style={{ fontFamily: "var(--font-poppins), sans-serif", color: site.colors.foreground }}
            >
              {approach.headline}{" "}
              <span style={{ color: site.colors.primary }}>{approach.headlineHighlight}</span>
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: "#4B5563" }}>
              {approach.subheadline}
            </p>
            <div className="space-y-7">
              {approach.steps.map((step) => (
                <div key={step.num} className="flex gap-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-extrabold flex-shrink-0"
                    style={{ backgroundColor: "#EEF4FF", color: site.colors.primary }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <h3
                      className="text-base font-bold mb-1"
                      style={{ color: site.colors.foreground, fontFamily: "var(--font-poppins), sans-serif" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                src={approach.imageUrl}
                alt={approach.imageAlt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div
              className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl px-6 py-4"
              style={{ border: `1px solid ${site.colors.accent}` }}
            >
              <p className="text-3xl font-extrabold" style={{ color: site.colors.primary }}>
                {approach.steps.length}-Step
              </p>
              <p className="text-sm font-medium" style={{ color: "#6B7280" }}>Recovery Process</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
