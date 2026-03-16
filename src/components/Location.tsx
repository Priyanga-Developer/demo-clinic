import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import site from "@/data/site.json";

const { location, business } = site;

export default function Location() {
  return (
    <section id="location" className="py-20 lg:py-28" style={{ backgroundColor: site.colors.background }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: "#EEF4FF", color: site.colors.primary }}
          >
            {location.sectionLabel}
          </div>
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-4 max-w-2xl mx-auto leading-tight"
            style={{ fontFamily: "var(--font-poppins), sans-serif", color: site.colors.foreground }}
          >
            {location.headline}{" "}
            <span style={{ color: site.colors.primary }}>{location.headlineHighlight}</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#6B7280" }}>
            {location.subheadline}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Info Card */}
          <div
            className="bg-white rounded-3xl p-8 shadow-sm border flex flex-col gap-6"
            style={{ borderColor: site.colors.accent }}
          >
            <h3
              className="text-xl font-bold"
              style={{ fontFamily: "var(--font-poppins), sans-serif", color: site.colors.foreground }}
            >
              {business.name}
            </h3>
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#EEF4FF", color: site.colors.primary }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: "#374151" }}>Address</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                    {business.address.line1}, {business.address.line2},<br />
                    {business.address.area},<br />
                    {business.address.city} – {business.address.pincode}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#E6FAF8", color: site.colors.secondary }}>
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: "#374151" }}>Phone</p>
                  <a href={business.phoneHref} className="text-sm font-semibold hover:underline" style={{ color: site.colors.primary }}>
                    {business.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#EEF4FF", color: site.colors.primary }}>
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: "#374151" }}>Working Hours</p>
                  <p className="text-sm" style={{ color: "#6B7280" }}>
                    {business.workingHours} &mdash; Closes at {business.closingTime}
                  </p>
                </div>
              </div>
            </div>
            <a
              href={business.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="get-directions-btn"
              className="mt-auto inline-flex items-center justify-center gap-2 text-white px-7 py-3.5 rounded-full font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{ backgroundColor: site.colors.primary }}
            >
              <MapPin size={18} />
              Get Directions
              <ExternalLink size={16} />
            </a>
          </div>

          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-sm border" style={{ borderColor: site.colors.accent, minHeight: "400px" }}>
            <iframe
              title={`${business.name} Location Map`}
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={business.googleMapsEmbed}
              className="w-full h-full min-h-[400px]"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
