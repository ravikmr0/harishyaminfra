import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { featuredProjects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const AUTO_SLIDE_MS = 4200;

const descriptionClampStyle = {
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical" as const,
  WebkitLineClamp: 2,
};

function getBadgeClass(badge: string) {
  switch (badge) {
    case "Featured":
      return "border-[rgba(178,98,67,0.2)] bg-[rgba(255,248,240,0.82)] text-[color:var(--brand-deep)]";
    case "Premium":
      return "border-[rgba(40,71,66,0.18)] bg-[rgba(40,71,66,0.14)] text-[color:var(--brand-forest)]";
    case "New Release":
      return "border-[rgba(178,98,67,0.18)] bg-[rgba(178,98,67,0.12)] text-[color:var(--brand-deep)]";
    case "Flagship":
      return "border-[rgba(231,199,166,0.48)] bg-[rgba(255,248,240,0.84)] text-[color:var(--brand-ink)]";
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
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();

  const imageTransform = isHovered
    ? "scale(1.05) translate3d(0,-4px,0)"
    : isActive
      ? "scale(1.02) translate3d(0,-2px,0)"
      : "scale(1) translate3d(0,0,0)";

  return (
    <article
      className={cn(
        "relative h-full animate-fade-in-up opacity-0 transition-[transform,opacity] duration-700 ease-out",
        isActive ? "scale-[1.01] md:-translate-y-1.5" : "scale-[0.985] md:translate-y-2",
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
          "pointer-events-none absolute inset-x-10 bottom-10 top-20 rounded-[2.5rem] blur-3xl transition-all duration-700",
          isActive
            ? "bg-[radial-gradient(circle,_rgba(178,98,67,0.18)_0%,_rgba(231,199,166,0.08)_42%,_transparent_74%)] opacity-100"
            : "bg-[radial-gradient(circle,_rgba(178,98,67,0.1)_0%,_transparent_70%)] opacity-35",
        )}
      />

      <div
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-[2rem] border bg-[linear-gradient(180deg,_rgba(255,255,255,0.92)_0%,_rgba(255,252,247,0.98)_100%)] shadow-[0_28px_70px_-48px_rgba(31,44,43,0.22)] transition-all duration-700",
          isActive
            ? "border-[rgba(178,98,67,0.2)] shadow-[0_34px_80px_-52px_rgba(31,44,43,0.3)]"
            : "border-[rgba(90,78,62,0.1)]",
          isHovered && "border-[rgba(178,98,67,0.26)] shadow-[0_34px_86px_-50px_rgba(31,44,43,0.28)]",
        )}
      >
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-white/60" />

        <div className="relative h-[240px] overflow-hidden md:h-[260px]">
          {!imageLoaded ? (
            <div className="absolute inset-0 animate-pulse bg-[linear-gradient(135deg,_rgba(246,238,228,0.96),_rgba(231,199,166,0.58),_rgba(255,251,246,0.98))]" />
          ) : null}

          <img
            alt={project.title}
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-[transform,opacity] ease-out",
              imageLoaded ? "opacity-100" : "opacity-0",
            )}
            decoding="async"
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            src={project.image}
            style={{ transform: imageTransform, transitionDuration: "1200ms" }}
          />

          <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(17,24,24,0.02)_0%,_rgba(17,24,24,0)_30%,_rgba(17,24,24,0.18)_65%,_rgba(17,24,24,0.72)_100%)]" />

          <div className="absolute inset-x-0 top-0 p-5">
            <span
              className={cn(
                "type-ui-label inline-flex items-center rounded-full border px-3.5 py-1.5 text-[10px] backdrop-blur-md",
                getBadgeClass(project.badge),
              )}
            >
              {project.badge}
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-5">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/18 bg-[rgba(255,255,255,0.14)] px-3.5 py-2 text-xs font-medium text-white shadow-[0_18px_50px_-34px_rgba(0,0,0,0.8)] backdrop-blur-md">
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">{project.location}</span>
            </div>
          </div>
        </div>

        <div className="flex h-full flex-col gap-2 p-4 md:p-5">
          <div className="space-y-1">
            <h3 className="type-card-title text-[color:var(--brand-ink)]">{project.title}</h3>
            <p className="type-body-sm text-[rgba(31,44,43,0.72)]" style={descriptionClampStyle}>
              {project.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-[1.1rem] border border-[rgba(90,78,62,0.1)] bg-white p-3 shadow-[0_16px_36px_-34px_rgba(31,44,43,0.24)]">
              <p className="text-[9px] mb-0.5 text-[rgba(31,44,43,0.42)]">Plot Size</p>
              <p className="text-[1.1rem] font-semibold text-[color:var(--brand-ink)]">{project.plotSizes}</p>
            </div>

            <div className="rounded-[1.1rem] border border-[rgba(178,98,67,0.14)] bg-[rgba(231,199,166,0.22)] p-3 shadow-[0_16px_36px_-34px_rgba(178,98,67,0.28)]">
              <p className="text-[9px] mb-0.5 text-[color:var(--brand-deep)]">Starting From</p>
              <p className="text-[1.15rem] font-semibold text-[color:var(--brand-deep)]">{project.priceRange}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {project.highlights.slice(0, 4).map((highlight) => (
              <span
                key={highlight}
                className="inline-flex items-center rounded-full border border-[rgba(90,78,62,0.1)] bg-white px-2.5 py-1.5 text-sm text-[rgba(31,44,43,0.76)] shadow-[0_14px_34px_-34px_rgba(31,44,43,0.2)]"
              >
                {highlight}
              </span>
            ))}
          </div>

          <Button
            className="group mt-2 overflow-hidden rounded-full bg-[linear-gradient(135deg,_var(--brand),_var(--brand-deep))] px-5 py-5 text-white shadow-[0_20px_48px_-30px_rgba(178,98,67,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_56px_-28px_rgba(141,74,51,0.72)]"
            onClick={() => navigate(`/project/${project.id}`)}
            type="button"
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold">
              View Project
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Button>
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
    <section
      id="featured-projects"
      className="section-shell-tight relative overflow-hidden bg-[linear-gradient(180deg,_#fffdfb_0%,_#f7f0e6_100%)]"
    >
      <div className="pointer-events-none absolute inset-0 fine-grid opacity-[0.18]" />
      <div className="pointer-events-none absolute left-[10%] top-16 h-48 w-48 rounded-full bg-[rgba(231,199,166,0.32)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-8 right-[8%] h-56 w-56 rounded-full bg-[rgba(178,98,67,0.1)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-5 flex flex-col gap-3 md:mb-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="type-ui-label mb-2 text-[color:var(--brand-deep)]">Featured Projects</p>
            <h2 className="section-title mb-2.5 text-left">Selected Communities</h2>
            <p className="max-w-2xl text-base leading-6 text-[rgba(31,44,43,0.72)] md:text-lg">
              A cleaner overview of our plotted developments with the pricing, plot sizes, and key details that matter.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="inline-flex items-center rounded-full border border-[rgba(141,74,51,0.14)] bg-white/80 px-4 py-2 text-sm font-semibold text-[color:var(--brand-deep)] shadow-[0_18px_40px_-34px_rgba(31,44,43,0.22)]">
              {String(activeIndex + 1).padStart(2, "0")} / {String(slideCount).padStart(2, "0")}
            </div>
            <Button
              className="group rounded-full border border-[rgba(141,74,51,0.14)] bg-white/80 px-5 text-[color:var(--brand-ink)] shadow-[0_18px_40px_-34px_rgba(31,44,43,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(141,74,51,0.24)] hover:bg-white"
              onClick={() => navigate("/projects")}
              type="button"
              variant="outline"
            >
              View All
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </div>
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
            className="absolute left-2 top-1/2 z-20 h-10 w-10 -translate-y-1/2 rounded-full border border-white/55 bg-[rgba(255,255,255,0.7)] text-[color:var(--brand-ink)] shadow-[0_20px_50px_-34px_rgba(31,44,43,0.28)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-[rgba(178,98,67,0.22)] hover:bg-white md:left-3 md:h-11 md:w-11 lg:h-12 lg:w-12"
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
            className="absolute right-2 top-1/2 z-20 h-10 w-10 -translate-y-1/2 rounded-full border border-white/55 bg-[rgba(255,255,255,0.7)] text-[color:var(--brand-ink)] shadow-[0_20px_50px_-34px_rgba(31,44,43,0.28)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-[rgba(178,98,67,0.22)] hover:bg-white md:right-3 md:h-11 md:w-11 lg:h-12 lg:w-12"
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
            <CarouselContent className="-ml-2 py-4 md:-ml-3">
              {featuredProjects.map((project, index) => (
                <CarouselItem key={project.id} className="basis-full pl-2 md:basis-1/2 md:pl-3 xl:basis-1/3">
                  <ShowcaseCard index={index} isActive={index === activeIndex} project={project} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="mt-3 flex items-center justify-center gap-2">
            {Array.from({ length: slideCount }).map((_, index) => (
              <button
                key={index}
                aria-label={`Go to project slide ${index + 1}`}
                className={cn(
                  "relative h-2.5 overflow-hidden rounded-full bg-[rgba(90,78,62,0.16)] transition-all duration-500",
                  index === activeIndex ? "w-10" : "w-2.5 hover:bg-[rgba(178,98,67,0.3)]",
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
