import { Mail, MapPin, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

import BrandMark from "@/components/BrandMark";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Amenities", href: "/amenities" },
];

const exploreLinks = [
  { label: "About Us", href: "/about" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Brochures", href: "/brochures" },
  { label: "Our Team", href: "/agents" },
];

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="px-4 pb-3 pt-7 md:pt-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(160deg,_rgba(31,44,43,0.98),_rgba(40,71,66,0.96)_45%,_rgba(141,74,51,0.94))] text-white shadow-[0_40px_120px_-70px_rgba(0,0,0,0.85)]">
        <div className="grid gap-7 px-6 py-8 md:px-10 md:py-10 lg:grid-cols-[1.2fr,0.8fr,0.8fr,1fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <BrandMark />
              <div>
                <p className="font-display text-lg md:text-xl font-semibold text-white leading-tight">Harishyam Infra</p>
                <p className="font-accent text-xs text-white/70 tracking-wide">Pvt. Ltd.</p>
              </div>
            </div>
            <p className="font-body max-w-md text-[0.95rem] leading-7 text-white/70">
              Thoughtful plotted developments, stronger infrastructure choices, and a buying journey designed to feel
              clear from first call to final site visit.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <Button
                className="bg-white text-[color:var(--brand-ink)] hover:bg-white/90"
                onClick={() => window.open("https://wa.me/919625219769", "_blank")}
              >
                Start on WhatsApp
              </Button>
              <Button
                className="border-white/20 bg-white/10 text-white hover:bg-white/16"
                onClick={() => (window.location.href = "tel:+919625219769")}
                variant="outline"
              >
                Call Sales
              </Button>
            </div>
          </div>

          <div>
            <p className="font-accent mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/55">
              Quick Links
            </p>
            <div className="grid gap-1">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  className="font-body text-left text-[0.96rem] leading-8 text-white/72 transition-colors hover:text-white"
                  onClick={() => navigate(link.href)}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="font-accent mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/55">
              Explore
            </p>
            <div className="grid gap-1">
              {exploreLinks.map((link) => (
                <button
                  key={link.href}
                  className="font-body text-left text-[0.96rem] leading-8 text-white/72 transition-colors hover:text-white"
                  onClick={() => navigate(link.href)}
                >
                  {link.label}
                </button>
              ))}
              <button
                className="font-body text-left text-[0.96rem] leading-8 text-white/72 transition-colors hover:text-white"
                onClick={() => navigate("/careers")}
              >
                Careers
              </button>
            </div>
          </div>

          <div className="surface-card-dark">
            <p className="font-accent mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/55">
              Visit Office
            </p>
            <div className="space-y-3 text-white/72">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-[color:var(--brand-soft)]" />
                <span className="font-body text-[0.92rem] leading-7">+91 9625219769</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-[color:var(--brand-soft)]" />
                <span className="font-body text-[0.92rem] leading-7">info@harishyaminfra.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-[color:var(--brand-soft)]" />
                <span className="font-body text-[0.92rem] leading-7">
                  Tower-A, Bhutani Alphathum,
                  <br />
                  Sector 90, Noida, Uttar Pradesh 201304
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 px-6 py-3 md:px-10">
          <div className="flex flex-col gap-2 text-[0.82rem] text-white/55 md:flex-row md:items-center md:justify-between">
            <p className="font-body">&copy; 2026 Harishyam Infra. Crafted for confident property decisions.</p>
            <div className="flex flex-wrap gap-4">
              <button className="font-body transition-colors hover:text-white" onClick={() => navigate("/privacy-policy")}>
                Privacy Policy
              </button>
              <button className="font-body transition-colors hover:text-white" onClick={() => navigate("/terms-conditions")}>
                Terms & Conditions
              </button>
              <button className="font-body transition-colors hover:text-white" onClick={() => navigate("/contact")}>
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
