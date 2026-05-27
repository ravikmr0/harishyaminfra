import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  FileCheck2,
  Heart,
  Landmark,
  MapPinned,
  MapPin,
  ShieldCheck,
  Sparkles,
  Trees,
  UtilityPole,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { featuredProjects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";

const AUTO_SLIDE_MS = 3800;

const descriptionClampStyle = {
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical" as const,
  WebkitLineClamp: 3,
};

const subtitleClampStyle = {
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical" as const,
  WebkitLineClamp: 2,
};

function getHighlightIcon(label: string) {
  const normalized = label.toLowerCase();

  if (normalized.includes("registry")) {
    return FileCheck2;
  }

  if (normalized.includes("loan")) {
    return Landmark;
  }

  if (normalized.includes("gated")) {
    return ShieldCheck;
  }

  if (normalized.includes("water") || normalized.includes("electricity")) {
    return UtilityPole;
  }

  if (normalized.includes("green") || normalized.includes("community")) {
    return Trees;
  }

  if (normalized.includes("growth") || normalized.includes("investment")) {
    return Sparkles;
  }

  return MapPinned;
}

function getBadgeClass(badge: string) {
  switch (badge) {
    case "Featured":
      return "border-[rgba(178,98,67,0.2)] bg-[rgba(255,248,240,0.72)] text-[color:var(--brand-deep)]";
    case "Premium":
      return "border-[rgba(40,71,66,0.18)] bg-[rgba(40,71,66,0.16)] text-[color:var(--brand-forest)]";
    case "New Release":
      return "border-[rgba(178,98,67,0.2)] bg-[rgba(178,98,67,0.14)] text-[color:var(--brand-deep)]";
    case "Flagship":
      return "border-[rgba(231,199,166,0.48)] bg-[rgba(255,248,240,0.7)] text-[color:var(--brand-ink)]";
    case "Community":
      return "border-[rgba(40,71,66,0.14)] bg-[rgba(220,244,233,0.72)] text-[color:var(--brand-forest)]";
    default:
      return "border-[rgba(255,255,255,0.28)] bg-[rgba(255,248,240,0.2)] text-white";
  }
}

type ShowcaseCardProps = {
  index: number;
  isActive: boolean;
  project: Project;
};

function ShowcaseCard({ index, isActive, project }: ShowcaseCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();

  const imageTransform = isHovered
    ? "scale(1.11) translate3d(0,-12px,0)"
    : isActive
      ? "scale(1.05) translate3d(0,-6px,0)"
      : "scale(1) translate3d(0,0,0)";

  return (
    <article
      className={cn(
        "relative h-full animate-fade-in-up opacity-0 transition-[transform,opacity] duration-700 ease-out",
        isActive ? "scale-[1.015] md:-translate-y-2" : "scale-[0.97] md:translate-y-3",
      )}
      style={{
        animationDelay: `${120 + index * 110}ms`,
        animationFillMode: "forwards",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-x-8 bottom-10 top-16 rounded-[2.5rem] blur-3xl transition-all duration-700",
          isActive
            ? "bg-[radial-gradient(circle,_rgba(178,98,67,0.26)_0%,_rgba(231,199,166,0.12)_42%,_transparent_74%)] opacity-100"
            : "bg-[radial-gradient(circle,_rgba(178,98,67,0.14)_0%,_transparent_70%)] opacity-40",
        )}
      />

      <div
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-[2rem] border bg-[linear-gradient(180deg,_rgba(255,255,255,0.82)_0%,_rgba(255,250,244,0.94)_48%,_rgba(255,255,255,0.98)_100%)] shadow-[0_30px_70px_-42px_rgba(31,44,43,0.28)] backdrop-blur-xl transition-all duration-700",
          isActive
            ? "border-[rgba(178,98,67,0.22)] shadow-[0_42px_90px_-45px_rgba(31,44,43,0.36)]"
            : "border-[rgba(90,78,62,0.12)] shadow-[0_26px_65px_-46px_rgba(31,44,43,0.22)]",
          isHovered && "border-[rgba(178,98,67,0.3)] shadow-[0_50px_95px_-42px_rgba(31,44,43,0.34)]",
        )}
      >
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-white/55" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/95 to-transparent" />

        <div className="relative h-[280px] overflow-hidden md:h-[300px]">
          {!imageLoaded ? (
            <div className="absolute inset-0 animate-pulse bg-[linear-gradient(135deg,_rgba(246,238,228,0.96),_rgba(231,199,166,0.58),_rgba(255,251,246,0.98))]" />
          ) : null}

          <img
            alt={project.title}
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-[transform,opacity,filter] ease-out",
              imageLoaded ? "opacity-100" : "opacity-0",
            )}
            decoding="async"
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            src={project.image}
            style={{ transform: imageTransform, transitionDuration: "1400ms" }}
          />

          <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(17,24,24,0.04)_0%,_rgba(17,24,24,0)_28%,_rgba(17,24,24,0.26)_64%,_rgba(17,24,24,0.76)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.24),_transparent_28%)]" />

          <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-5">
            <span
              className={cn(
                "type-ui-label inline-flex items-center rounded-full border px-3.5 py-1.5 text-[10px] backdrop-blur-xl",
                getBadgeClass(project.badge),
              )}
            >
              {project.badge}
            </span>

            <button
              aria-label={isFavorite ? "Remove from saved projects" : "Save project"}
              className={cn(
                "inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/24 bg-white/16 text-white shadow-[0_14px_40px_-26px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:bg-white/24",
                isFavorite && "border-[rgba(255,255,255,0.42)] bg-white/30",
              )}
              onClick={() => setIsFavorite((prev) => !prev)}
              type="button"
            >
              <Heart
                className={cn(
                  "h-5 w-5 transition-all duration-300",
                  isFavorite ? "fill-white text-white" : "text-white/92",
                )}
              />
            </button>
          </div>

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
            <div className="inline-flex max-w-[80%] items-center gap-2 rounded-full border border-white/18 bg-[rgba(255,255,255,0.12)] px-3.5 py-2 text-xs font-medium text-white shadow-[0_18px_50px_-34px_rgba(0,0,0,0.8)] backdrop-blur-xl">
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">{project.location}</span>
            </div>

            <div className="type-ui-label rounded-full border border-white/18 bg-[rgba(23,30,30,0.26)] px-3 py-2 text-[10px] text-white/88 backdrop-blur-xl">
              {project.availablePlots} plots open
            </div>
          </div>
        </div>

        <div className="flex h-full flex-col gap-5 p-6 md:p-7">
          <div className="space-y-3">
            <p className="type-subtitle text-[color:var(--brand-deep)]" style={subtitleClampStyle}>
              {project.subtitle}
            </p>
            <h3 className="type-card-title text-[color:var(--brand-ink)]">
              {project.title}
            </h3>
            <p className="type-body-sm text-[rgba(31,44,43,0.72)]" style={descriptionClampStyle}>
              {project.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-[1.4rem] border border-[rgba(90,78,62,0.12)] bg-white/72 p-4 shadow-[0_18px_40px_-34px_rgba(31,44,43,0.3)] backdrop-blur-sm">
              <p className="type-ui-label mb-1 text-[10px] text-[rgba(31,44,43,0.42)]">
                Plot Size
              </p>
              <p className="text-[1.7rem] font-semibold text-[color:var(--brand-ink)]">{project.plotSizes}</p>
            </div>

            <div className="rounded-[1.4rem] border border-[rgba(178,98,67,0.16)] bg-[linear-gradient(135deg,_rgba(231,199,166,0.22),_rgba(255,248,240,0.84))] p-4 shadow-[0_18px_40px_-34px_rgba(178,98,67,0.32)] backdrop-blur-sm">
              <p className="type-ui-label mb-1 text-[10px] text-[color:var(--brand-deep)]">
                Starting Price
              </p>
              <p className="text-[1.7rem] font-semibold text-[color:var(--brand-deep)]">{project.priceRange}</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <p className="type-ui-label text-[11px] text-[rgba(31,44,43,0.44)]">
                Key Highlights
              </p>
              <span className="type-ui-label rounded-full bg-[rgba(178,98,67,0.08)] px-3 py-1 text-[10px] text-[color:var(--brand-deep)]">
                Luxury Ready
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {project.highlights.slice(0, 6).map((highlight) => {
                const HighlightIcon = getHighlightIcon(highlight);

                return (
                  <div
                    key={highlight}
                    className="group/highlight flex items-center gap-2.5 rounded-[1.15rem] border border-[rgba(90,78,62,0.1)] bg-white/68 px-3 py-3 shadow-[0_16px_40px_-34px_rgba(31,44,43,0.26)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(178,98,67,0.18)] hover:bg-white"
                  >
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,_rgba(178,98,67,0.16),_rgba(231,199,166,0.35))] text-[color:var(--brand-deep)] transition-transform duration-300 group-hover/highlight:scale-105">
                      <HighlightIcon className="h-4 w-4" />
                    </span>
                    <span className="font-body text-sm leading-5 text-[rgba(31,44,43,0.78)]">{highlight}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-auto flex flex-col gap-3 sm:flex-row">
            <Button
              className="group/primary relative flex-1 overflow-hidden rounded-full bg-[linear-gradient(135deg,_var(--brand),_var(--brand-deep))] px-5 py-6 text-white shadow-[0_24px_60px_-34px_rgba(178,98,67,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_30px_70px_-30px_rgba(141,74,51,0.82)]"
              onClick={() => navigate(`/project/${project.id}`)}
              type="button"
            >
              <span className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(255,255,255,0.08),_rgba(255,255,255,0)_38%,_rgba(255,255,255,0.14))]" />
              <span className="absolute -left-1/3 top-0 h-full w-1/3 -skew-x-12 bg-white/20 blur-xl transition-transform duration-700 group-hover/primary:translate-x-[380%]" />
              <span className="relative z-10 inline-flex items-center gap-2 text-base font-semibold">
                View Details
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/primary:-translate-y-0.5 group-hover/primary:translate-x-0.5" />
              </span>
            </Button>

            <Button
              className="group/secondary relative flex-1 overflow-hidden rounded-full border border-[rgba(141,74,51,0.16)] bg-white/76 px-5 py-6 text-[color:var(--brand-ink)] shadow-[0_20px_52px_-36px_rgba(31,44,43,0.28)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(141,74,51,0.26)]"
              onClick={() => navigate("/contact")}
              type="button"
              variant="outline"
            >
              <span className="absolute inset-0 translate-y-full bg-[linear-gradient(135deg,_var(--brand),_var(--brand-deep))] transition-transform duration-500 group-hover/secondary:translate-y-0" />
              <span className="relative z-10 text-base font-semibold transition-colors duration-300 group-hover/secondary:text-white">
                Request Pricing
              </span>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ProjectShowcaseSlider() {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(featuredProjects.length);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateState = () => {
      setSlideCount(api.scrollSnapList().length);
      setActiveIndex(api.selectedScrollSnap());
    };

    updateState();
    api.on("select", updateState);
    api.on("reInit", updateState);

    return () => {
      api.off("select", updateState);
      api.off("reInit", updateState);
    };
  }, [api]);

  useEffect(() => {
    if (!api || isPaused) {
      return;
    }

    const interval = window.setInterval(() => {
      api.scrollNext();
    }, AUTO_SLIDE_MS);

    return () => window.clearInterval(interval);
  }, [api, isPaused]);

  return (
    <section className="section-shell-tight relative overflow-hidden bg-[linear-gradient(180deg,_#fffdfb_0%,_#f7f0e6_100%)]">
      <div className="pointer-events-none absolute inset-0 fine-grid opacity-[0.24]" />
      <div className="pointer-events-none absolute left-[10%] top-16 h-52 w-52 rounded-full bg-[rgba(231,199,166,0.42)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-6 right-[8%] h-64 w-64 rounded-full bg-[rgba(178,98,67,0.14)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="section-heading mb-5 md:mb-6">
          <span className="page-kicker-light mb-4">Luxury Project Showcase</span>
          <h2 className="section-title mb-3">Our Premium Projects</h2>
          <p className="section-copy">
            Discover signature plotted communities designed for premium living, clean connectivity, and future-ready
            investment value.
          </p>
        </div>

        <div className="mb-5 flex flex-col gap-4 md:mb-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/70 bg-white/72 px-3 py-2 shadow-[0_20px_50px_-36px_rgba(31,44,43,0.24)] backdrop-blur-xl">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,_rgba(178,98,67,0.18),_rgba(231,199,166,0.54))] text-sm font-semibold text-[color:var(--brand-deep)]">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="type-ui-label text-[11px] text-[rgba(31,44,43,0.42)]">
                  Featured Collection
                </p>
                <p className="font-body text-sm leading-6 text-[rgba(31,44,43,0.7)]">
                  Auto touring every few seconds with pause-on-hover interaction.
                </p>
              </div>
            </div>

            <div className="type-ui-label inline-flex items-center gap-2 rounded-full bg-[rgba(255,255,255,0.58)] px-3 py-1.5 text-[11px] text-[rgba(31,44,43,0.56)] shadow-[0_16px_40px_-34px_rgba(31,44,43,0.26)] backdrop-blur-lg">
              <Sparkles className="h-3.5 w-3.5 text-[color:var(--brand-deep)]" />
              Swipe, hover, and explore each address in motion
            </div>
          </div>

          <Button
            className="group self-start rounded-full border border-[rgba(141,74,51,0.16)] bg-white/72 px-5 text-[color:var(--brand-ink)] shadow-[0_22px_55px_-38px_rgba(31,44,43,0.25)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(141,74,51,0.24)] hover:bg-white"
            onClick={() => navigate("/projects")}
            type="button"
            variant="outline"
          >
            Explore All Projects
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </div>

        <div
          className="relative"
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setIsPaused(false);
            }
          }}
          onFocusCapture={() => setIsPaused(true)}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Button
            className="absolute left-2 top-1/2 z-20 h-11 w-11 -translate-y-1/2 rounded-full border border-white/55 bg-[rgba(255,255,255,0.5)] text-[color:var(--brand-ink)] shadow-[0_28px_70px_-36px_rgba(31,44,43,0.34)] backdrop-blur-2xl transition-all duration-300 hover:scale-105 hover:border-[rgba(178,98,67,0.22)] hover:bg-white/72 hover:shadow-[0_34px_80px_-34px_rgba(178,98,67,0.28)] md:left-3 md:h-12 md:w-12 lg:h-14 lg:w-14"
            disabled={!api}
            onClick={() => api?.scrollPrev()}
            size="icon"
            type="button"
            variant="outline"
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous project</span>
          </Button>

          <Button
            className="absolute right-2 top-1/2 z-20 h-11 w-11 -translate-y-1/2 rounded-full border border-white/55 bg-[rgba(255,255,255,0.5)] text-[color:var(--brand-ink)] shadow-[0_28px_70px_-36px_rgba(31,44,43,0.34)] backdrop-blur-2xl transition-all duration-300 hover:scale-105 hover:border-[rgba(178,98,67,0.22)] hover:bg-white/72 hover:shadow-[0_34px_80px_-34px_rgba(178,98,67,0.28)] md:right-3 md:h-12 md:w-12 lg:h-14 lg:w-14"
            disabled={!api}
            onClick={() => api?.scrollNext()}
            size="icon"
            type="button"
            variant="outline"
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next project</span>
          </Button>

          <Carousel
            className="w-full"
            opts={{ align: "center", containScroll: false, loop: true }}
            setApi={setApi}
          >
            <CarouselContent className="-ml-4 py-6 md:-ml-5">
              {featuredProjects.map((project, index) => (
                <CarouselItem key={project.id} className="pl-4 basis-full md:pl-5 md:basis-1/2 xl:basis-1/3">
                  <ShowcaseCard index={index} isActive={index === activeIndex} project={project} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="mt-2 flex items-center justify-center gap-2.5">
            {Array.from({ length: slideCount }).map((_, index) => (
              <button
                key={index}
                aria-label={`Go to project slide ${index + 1}`}
                className={cn(
                  "relative h-3 overflow-hidden rounded-full bg-[rgba(90,78,62,0.16)] transition-all duration-500",
                  index === activeIndex ? "w-12" : "w-3 hover:bg-[rgba(178,98,67,0.3)]",
                )}
                onClick={() => api?.scrollTo(index)}
                type="button"
              >
                <span
                  className={cn(
                    "absolute inset-0 rounded-full bg-[linear-gradient(135deg,_var(--brand),_var(--brand-deep))]",
                    index === activeIndex ? "animate-showcase-progress" : "opacity-0",
                  )}
                  style={{
                    animationDuration: `${AUTO_SLIDE_MS}ms`,
                    animationPlayState: isPaused ? "paused" : "running",
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
