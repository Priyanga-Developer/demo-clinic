"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import Link from "next/link";
import site from "@/data/site.json";

const { business, navbar } = site;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-white/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xl"
            style={{ backgroundColor: site.colors.primary }}
          >
            {business.name.charAt(0)}
          </div>
          <div>
            <p className="text-lg font-heading font-bold leading-tight" style={{ color: site.colors.primary }}>
              {business.name.split(" ").slice(0, 2).join(" ")}
            </p>
            <p className="text-[10px] font-semibold tracking-[0.2em]" style={{ color: site.colors.secondary }}>
              {business.tagline}
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-7">
          {navbar.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: site.colors.foreground }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity"
            style={{ color: site.colors.primary }}
          >
            <Phone size={16} />
            {business.phone}
          </a>
          <a
            href="#book"
            id="nav-book-btn"
            className="text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            style={{ backgroundColor: site.colors.primary }}
          >
            {navbar.ctaLabel}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          id="mobile-menu-toggle"
          className="lg:hidden p-2 rounded-lg"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile navigation"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t shadow-xl px-4 py-5 flex flex-col gap-3">
          {navbar.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2 px-3 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <hr className="my-1 border-gray-100" />
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 py-2 px-3 font-semibold"
            style={{ color: site.colors.primary }}
          >
            <Phone size={18} />
            {business.phone}
          </a>
          <a
            href="#book"
            className="text-white text-center py-3 rounded-xl font-semibold mt-1"
            style={{ backgroundColor: site.colors.primary }}
            onClick={() => setMobileMenuOpen(false)}
          >
            {navbar.ctaLabel}
          </a>
        </div>
      )}
    </nav>
  );
}
