import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Menu, Phone, Search, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

import BrandMark from "@/components/BrandMark";
import SearchModal from "@/components/SearchModal";
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
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerOffset, setHeaderOffset] = useState(96);
  const headerShellRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsSearchOpen(false);
  }, [location.pathname, location.search, location.hash]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented) {
        return;
      }

      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsOpen(false);
        setIsSearchOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useLayoutEffect(() => {
    const shell = headerShellRef.current;
    if (!shell) {
      return;
    }

    const updateHeaderOffset = () => {
      setHeaderOffset(shell.getBoundingClientRect().height);
    };

    updateHeaderOffset();
    window.addEventListener("resize", updateHeaderOffset);

    if (typeof ResizeObserver === "undefined") {
      return () => {
        window.removeEventListener("resize", updateHeaderOffset);
      };
    }

    const resizeObserver = new ResizeObserver(() => {
      updateHeaderOffset();
    });

    resizeObserver.observe(shell);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeaderOffset);
    };
  }, []);

  const navigateTo = (href: string) => {
    navigate(href);
    setIsOpen(false);
  };

  const openSearch = () => {
    setIsOpen(false);
    setIsSearchOpen(true);
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919625219769", "_blank");
  };

  const handleCallClick = () => {
    window.location.href = "tel:+919625219769";
  };

  return (
    <>
      <div aria-hidden="true" style={{ height: `${headerOffset}px` }} />

      <header className="fixed inset-x-0 top-0 z-40">
        <div ref={headerShellRef} className="px-3 pt-3 md:px-4" data-site-header-shell>
          <div
            className={`mx-auto max-w-7xl rounded-[1.75rem] border px-4 transition-all duration-300 ease-out ${
              isScrolled || isOpen || isSearchOpen
                ? "border-[rgba(90,78,62,0.16)] bg-[rgba(255,253,248,0.96)] shadow-[0_20px_50px_-30px_rgba(15,23,42,0.42)] backdrop-blur-xl"
                : "border-white/60 bg-[rgba(251,247,241,0.84)] shadow-[0_28px_70px_-50px_rgba(31,44,43,0.8)] backdrop-blur-xl"
            }`}
          >
            <div className="flex min-h-[76px] items-center justify-between gap-3">
              <button
                aria-label="Go to home"
                className="flex shrink-0 items-center gap-2 text-left transition-transform duration-300 hover:scale-[1.01]"
                onClick={() => navigateTo("/")}
              >
                <BrandMark compact />
                <div className="hidden sm:block">
                  <p className="font-display text-sm font-bold leading-tight text-[color:var(--brand-ink)] md:text-base">
                    Harishyam Infra
                  </p>
                  <p className="font-accent text-[10px] uppercase tracking-widest text-[rgba(31,44,43,0.6)] md:text-xs">
                    Land. Living. Legacy
                  </p>
                </div>
              </button>

              <nav className="hidden xl:flex items-center gap-1 rounded-full border border-[rgba(90,78,62,0.14)] bg-white/70 p-1">
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
                      onClick={() => navigateTo(link.href)}
                    >
                      {link.label}
                    </button>
                  );
                })}
              </nav>

              <div className="hidden lg:flex items-center gap-3">
                <button
                  aria-label="Search the website"
                  className="group flex h-11 w-[250px] items-center justify-between rounded-full border border-[rgba(90,78,62,0.14)] bg-white/80 px-4 text-left shadow-[0_18px_40px_-34px_rgba(31,44,43,0.22)] transition-all duration-300 hover:border-[rgba(178,98,67,0.24)] hover:bg-white xl:w-[320px]"
                  onClick={openSearch}
                  type="button"
                >
                  <span className="flex items-center gap-3 text-[0.95rem] text-[rgba(31,44,43,0.58)]">
                    <Search className="h-4 w-4 text-[rgba(31,44,43,0.42)] transition-transform duration-300 group-hover:scale-110" />
                    Search projects, FAQs, services...
                  </span>
                  <span className="rounded-full border border-[rgba(90,78,62,0.12)] bg-[rgba(247,240,230,0.86)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[rgba(31,44,43,0.55)]">
                    Ctrl K
                  </span>
                </button>

                <Button
                  className="bg-[linear-gradient(135deg,_var(--brand),_var(--brand-deep))] text-white shadow-[0_22px_55px_-30px_rgba(178,98,67,0.9)] transition-transform duration-300 hover:scale-[1.01]"
                  onClick={handleWhatsAppClick}
                >
                  Start Inquiry
                </Button>
              </div>

              <div className="flex items-center gap-2 lg:hidden">
                <Button
                  className="hidden bg-[linear-gradient(135deg,_var(--brand),_var(--brand-deep))] text-white shadow-[0_16px_35px_-24px_rgba(178,98,67,0.85)] sm:inline-flex"
                  size="sm"
                  onClick={handleCallClick}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call
                </Button>
                <button
                  aria-label="Search the website"
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-full border text-[color:var(--brand-ink)] transition-all duration-300 ${
                    isSearchOpen || isScrolled
                      ? "border-[rgba(90,78,62,0.16)] bg-white shadow-[0_16px_35px_-26px_rgba(15,23,42,0.45)]"
                      : "border-[rgba(90,78,62,0.14)] bg-white/70 hover:bg-white"
                  }`}
                  onClick={openSearch}
                  type="button"
                >
                  <Search className="h-5 w-5" />
                </button>
                <button
                  aria-controls="mobile-site-nav"
                  aria-expanded={isOpen}
                  aria-label={isOpen ? "Close menu" : "Open menu"}
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-full border text-[color:var(--brand-ink)] transition-all duration-300 ${
                    isOpen || isScrolled
                      ? "border-[rgba(90,78,62,0.16)] bg-white shadow-[0_16px_35px_-26px_rgba(15,23,42,0.45)]"
                      : "border-[rgba(90,78,62,0.14)] bg-white/70 hover:bg-white"
                  }`}
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`fixed inset-x-0 bottom-0 bg-[rgba(15,23,42,0.18)] backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
            isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          }`}
          style={{ top: `${headerOffset}px` }}
          onClick={() => setIsOpen(false)}
        />

        <div
          className={`relative z-[101] px-3 transition-all duration-300 ease-out md:px-4 lg:hidden ${
            isOpen ? "pointer-events-auto opacity-100 translate-y-0" : "pointer-events-none -translate-y-3 opacity-0"
          }`}
        >
          <div className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-[1.5rem] border border-[rgba(90,78,62,0.16)] bg-[rgba(255,253,248,0.98)] shadow-[0_24px_55px_-30px_rgba(15,23,42,0.45)] backdrop-blur-xl">
            <div className="max-h-[calc(100vh-7.5rem)] overflow-y-auto px-4 py-4">
              <button
                className="mb-4 flex w-full items-center justify-between rounded-[1.1rem] border border-[rgba(90,78,62,0.14)] bg-white px-4 py-3 text-left shadow-[0_18px_40px_-34px_rgba(31,44,43,0.22)] transition-all duration-300 hover:border-[rgba(178,98,67,0.24)]"
                onClick={openSearch}
                type="button"
              >
                <span className="flex items-center gap-3 text-[0.94rem] text-[rgba(31,44,43,0.62)]">
                  <Search className="h-4 w-4 text-[rgba(31,44,43,0.44)]" />
                  Search the full website
                </span>
                <span className="rounded-full bg-[rgba(231,199,166,0.22)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-deep)]">
                  Open
                </span>
              </button>

              <nav id="mobile-site-nav" className="grid gap-2">
                {navLinks.map((link) => {
                  const active = isActive(link.href);

                  return (
                    <button
                      key={link.href}
                      className={`font-accent rounded-[1.1rem] px-4 py-3 text-left text-[0.94rem] font-semibold tracking-[0.01em] transition-all duration-300 ${
                        active
                          ? "bg-[rgba(40,71,66,0.92)] text-white shadow-[0_18px_40px_-28px_rgba(31,44,43,0.85)]"
                          : "bg-white/80 text-[rgba(31,44,43,0.76)] hover:bg-[rgba(231,199,166,0.34)] hover:text-[color:var(--brand-ink)]"
                      }`}
                      onClick={() => navigateTo(link.href)}
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
          </div>
        </div>

        <SearchModal onOpenChange={setIsSearchOpen} open={isSearchOpen} />
      </header>
    </>
  );
}
