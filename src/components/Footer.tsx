import { Phone, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import site from "@/data/site.json";

const { footer, business } = site;

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0F2649" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xl"
                style={{ backgroundColor: site.colors.secondary }}
              >
                {business.name.charAt(0)}
              </div>
              <div>
                <p className="text-lg font-bold text-white leading-tight">
                  {business.name.split(" ").slice(0, 2).join(" ")}
                </p>
                <p className="text-[10px] font-semibold tracking-widest" style={{ color: site.colors.secondary }}>
                  {business.tagline}
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>
              {footer.description}
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={16} style={{ color: site.colors.secondary, flexShrink: 0 }} />
                <a href={business.phoneHref} className="text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {business.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} style={{ color: site.colors.secondary, flexShrink: 0, marginTop: 2 }} />
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {business.address.area},<br />
                  {business.address.city} – {business.address.pincode}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} style={{ color: site.colors.secondary, flexShrink: 0 }} />
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {business.workingHours} · Closes {business.closingTime}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-5 text-base">Quick Links</h4>
            <ul className="space-y-3">
              {footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="text-white font-bold mb-5 text-base">Treatments</h4>
            <ul className="space-y-3">
              {footer.treatments.map((t) => (
                <li key={t}>
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Block */}
          <div>
            <h4 className="text-white font-bold mb-5 text-base">Book an Appointment</h4>
            <p className="text-sm mb-6 leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              Ready to start your recovery journey? Contact us today for a personalized consultation.
            </p>
            <a
              href={business.phoneHref}
              className="w-full inline-flex items-center justify-center gap-2 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
              style={{ backgroundColor: site.colors.secondary }}
            >
              <Phone size={16} />
              Call Now
            </a>
            <a
              href={business.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 w-full inline-flex items-center justify-center gap-2 border px-6 py-3 rounded-full font-semibold text-sm transition-all hover:bg-white/10"
              style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)" }}
            >
              <MapPin size={16} />
              Get Directions
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          <p className="text-xs text-center sm:text-left" style={{ color: "rgba(255,255,255,0.35)" }}>
            {footer.copyright}
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            {business.address.area}, {business.address.city} – {business.address.pincode}
          </p>
        </div>
      </div>
    </footer>
  );
}
