import { useState } from "react";
import { Menu, Phone, Search, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

import BrandMark from "@/components/BrandMark";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Amenities", href: "/amenities" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === href;
    }

    if (href === "/projects") {
      return location.pathname === href || location.pathname.startsWith("/project/");
    }

    return location.pathname.startsWith(href);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const normalizedQuery = searchQuery.trim();
    if (!normalizedQuery) {
      return;
    }

    navigate(`/projects?search=${encodeURIComponent(normalizedQuery)}`);
    setSearchQuery("");
    setIsOpen(false);
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919540074200", "_blank");
  };

  const handleCallClick = () => {
    window.location.href = "tel:+919540074200";
  };

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 md:px-4">
      <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-white/55 bg-[rgba(251,247,241,0.78)] px-4 py-3 shadow-[0_28px_70px_-50px_rgba(31,44,43,0.8)] backdrop-blur-xl">
        <div className="flex items-center justify-between gap-3">
          <button
            aria-label="Go to home"
            className="shrink-0 text-left transition-transform duration-300 hover:scale-[1.01]"
            onClick={() => {
              navigate("/");
              setIsOpen(false);
            }}
          >
            <BrandMark compact />
          </button>

          <nav className="hidden xl:flex items-center gap-1 rounded-full border border-[rgba(90,78,62,0.14)] bg-white/55 p-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <button
                  key={link.href}
                  className={`font-accent rounded-full px-4 py-2.5 text-[0.94rem] font-semibold tracking-[0.01em] transition-all duration-300 ${
                    active
                      ? "bg-[color:var(--brand-ink)] text-white shadow-[0_18px_40px_-28px_rgba(31,44,43,0.9)]"
                      : "text-[rgba(31,44,43,0.72)] hover:bg-[rgba(231,199,166,0.34)] hover:text-[color:var(--brand-ink)]"
                  }`}
                  onClick={() => {
                    navigate(link.href);
                    setIsOpen(false);
                  }}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <form className="relative w-[240px] xl:w-[280px]" onSubmit={handleSearch}>
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[rgba(31,44,43,0.46)]" />
              <input
                type="text"
                placeholder="Search projects or locations"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="font-body h-11 w-full rounded-full border border-[rgba(90,78,62,0.14)] bg-white/70 px-11 pr-4 text-[0.95rem] tracking-[-0.01em] text-[color:var(--brand-ink)] outline-none transition-all duration-300 placeholder:text-[rgba(31,44,43,0.42)] focus:border-[rgba(178,98,67,0.35)] focus:bg-white"
              />
            </form>

            <Button
              className="bg-[linear-gradient(135deg,_var(--brand),_var(--brand-deep))] text-white shadow-[0_22px_55px_-30px_rgba(178,98,67,0.9)]"
              onClick={handleWhatsAppClick}
            >
              Start Inquiry
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <Button
              className="hidden bg-[linear-gradient(135deg,_var(--brand),_var(--brand-deep))] text-white sm:inline-flex"
              size="sm"
              onClick={handleCallClick}
            >
              <Phone className="mr-2 h-4 w-4" />
              Call
            </Button>
            <button
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(90,78,62,0.14)] bg-white/70 text-[color:var(--brand-ink)] transition-all duration-300 hover:bg-white"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden">
            <div className="soft-divider my-4" />

            <form className="relative mb-4" onSubmit={handleSearch}>
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[rgba(31,44,43,0.46)]" />
              <input
                type="text"
                placeholder="Search projects or locations"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="font-body h-11 w-full rounded-full border border-[rgba(90,78,62,0.14)] bg-white/75 px-11 pr-4 text-[0.95rem] tracking-[-0.01em] text-[color:var(--brand-ink)] outline-none transition-all duration-300 placeholder:text-[rgba(31,44,43,0.42)] focus:border-[rgba(178,98,67,0.35)]"
              />
            </form>

            <nav className="grid gap-2">
              {navLinks.map((link) => {
                const active = isActive(link.href);

                return (
                  <button
                    key={link.href}
                    className={`font-accent rounded-[1.1rem] px-4 py-3 text-left text-[0.94rem] font-semibold tracking-[0.01em] transition-all duration-300 ${
                      active
                        ? "bg-[rgba(40,71,66,0.9)] text-white shadow-[0_18px_40px_-28px_rgba(31,44,43,0.85)]"
                        : "bg-white/60 text-[rgba(31,44,43,0.76)] hover:bg-[rgba(231,199,166,0.34)] hover:text-[color:var(--brand-ink)]"
                    }`}
                    onClick={() => {
                      navigate(link.href);
                      setIsOpen(false);
                    }}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <Button
                className="bg-[linear-gradient(135deg,_var(--brand),_var(--brand-deep))] text-white"
                onClick={handleWhatsAppClick}
              >
                Start Inquiry
              </Button>
              <Button
                className="border-[rgba(40,71,66,0.22)] text-[color:var(--brand-ink)]"
                onClick={handleCallClick}
                variant="outline"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
