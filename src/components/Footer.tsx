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
    <footer className="px-4 pb-4 pt-10 md:pt-14">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(160deg,_rgba(31,44,43,0.98),_rgba(40,71,66,0.96)_45%,_rgba(141,74,51,0.94))] text-white shadow-[0_40px_120px_-70px_rgba(0,0,0,0.85)]">
        <div className="grid gap-10 px-6 py-10 md:px-10 md:py-12 lg:grid-cols-[1.2fr,0.8fr,0.8fr,1fr]">
          <div className="space-y-5">
            <BrandMark inverted />
            <p className="max-w-md text-sm leading-7 text-white/70">
              Thoughtful plotted developments, stronger infrastructure choices, and a buying
              journey designed to feel clear from first call to final site visit.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <Button
                className="bg-white text-[color:var(--brand-ink)] hover:bg-white/90"
                onClick={() => window.open("https://wa.me/919540074200", "_blank")}
              >
                Start on WhatsApp
              </Button>
              <Button
                className="border-white/20 bg-white/10 text-white hover:bg-white/16"
                onClick={() => (window.location.href = "tel:+919540074200")}
                variant="outline"
              >
                Call Sales
              </Button>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-white/55">
              Quick Links
            </p>
            <div className="grid gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  className="text-left text-sm text-white/72 transition-colors hover:text-white"
                  onClick={() => navigate(link.href)}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-white/55">
              Explore
            </p>
            <div className="grid gap-2">
              {exploreLinks.map((link) => (
                <button
                  key={link.href}
                  className="text-left text-sm text-white/72 transition-colors hover:text-white"
                  onClick={() => navigate(link.href)}
                >
                  {link.label}
                </button>
              ))}
              <button
                className="text-left text-sm text-white/72 transition-colors hover:text-white"
                onClick={() => navigate("/careers")}
              >
                Careers
              </button>
            </div>
          </div>

          <div className="surface-card-dark">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-white/55">
              Visit Office
            </p>
            <div className="space-y-4 text-sm text-white/72">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-[color:var(--brand-soft)]" />
                <span>+91 9540074200</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-[color:var(--brand-soft)]" />
                <span>info@harishyaminfra.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-[color:var(--brand-soft)]" />
                <span>
                  Tower-A, Bhutani Alphathum,
                  <br />
                  Sector 90, Noida, Uttar Pradesh 201304
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 px-6 py-4 md:px-10">
          <div className="flex flex-col gap-3 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
            <p>&copy; 2026 Harishyam Infra. Crafted for confident property decisions.</p>
            <div className="flex flex-wrap gap-5">
              <button onClick={() => navigate("/privacy-policy")} className="transition-colors hover:text-white">
                Privacy Policy
              </button>
              <button onClick={() => navigate("/terms-conditions")} className="transition-colors hover:text-white">
                Terms & Conditions
              </button>
              <button onClick={() => navigate("/contact")} className="transition-colors hover:text-white">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
