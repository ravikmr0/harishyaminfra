import { useState } from "react";
import { ArrowUpRight, Heart, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  plotSizes: string;
  priceRange: string;
  id: string;
  badge?: string;
}

const badgeStyles: Record<string, string> = {
  Featured: "bg-[rgba(178,98,67,0.14)] text-[color:var(--brand-deep)]",
  Premium: "bg-[rgba(40,71,66,0.16)] text-[color:var(--brand-forest)]",
  Flagship: "bg-[rgba(231,199,166,0.42)] text-[color:var(--brand-ink)]",
  Commercial: "bg-[rgba(29,78,216,0.12)] text-[#1d4ed8]",
  Community: "bg-[rgba(34,197,94,0.12)] text-[#15803d]",
  "New Release": "bg-[rgba(245,158,11,0.16)] text-[#b45309]",
};

export default function ProjectCard({
  title,
  description,
  image,
  plotSizes,
  priceRange,
  id,
  badge,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  return (
    <article
      className="group overflow-hidden rounded-[1.75rem] border border-[rgba(90,78,62,0.14)] bg-[rgba(255,253,248,0.92)] shadow-[0_28px_90px_-65px_rgba(31,44,43,0.7)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_38px_95px_-55px_rgba(31,44,43,0.75)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-72 overflow-hidden bg-[rgba(231,199,166,0.26)]">
        <img
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700"
          src={image}
          style={{ transform: isHovered ? "scale(1.08)" : "scale(1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(31,44,43,0.78)] via-transparent to-transparent" />

        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
          {badge ? (
            <span
              className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] ${
                badgeStyles[badge] ?? badgeStyles.Featured
              }`}
            >
              {badge}
            </span>
          ) : (
            <span className="rounded-full bg-white/18 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
              Signature Plot
            </span>
          )}

          <button
            aria-label={isFavorite ? "Remove from saved" : "Save project"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/18 text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/28"
            onClick={() => setIsFavorite((prev) => !prev)}
            type="button"
          >
            <Heart
              className={`h-5 w-5 transition-all ${
                isFavorite ? "fill-white text-white" : "text-white/90"
              }`}
            />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/14 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
            <MapPin className="h-3.5 w-3.5" />
            Growth corridor location
          </div>
        </div>
      </div>

      <div className="space-y-6 p-6 md:p-7">
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-[color:var(--brand-ink)] transition-colors duration-300 group-hover:text-[color:var(--brand-deep)]">
            {title}
          </h3>
          <p className="text-sm leading-7 text-[rgba(31,44,43,0.72)] md:text-base">{description}</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-[1.25rem] border border-[rgba(90,78,62,0.12)] bg-white/75 p-4">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[rgba(31,44,43,0.42)]">
              Plot Range
            </p>
            <p className="text-lg font-semibold text-[color:var(--brand-ink)]">{plotSizes}</p>
          </div>
          <div className="rounded-[1.25rem] border border-[rgba(178,98,67,0.16)] bg-[rgba(231,199,166,0.26)] p-4">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-deep)]">
              Price Start
            </p>
            <p className="text-lg font-semibold text-[color:var(--brand-deep)]">{priceRange}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            className="flex-1 bg-[linear-gradient(135deg,_var(--brand),_var(--brand-deep))] text-white"
            onClick={() => navigate(`/project/${id}`)}
          >
            View Details
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
          <Button className="flex-1" onClick={() => navigate("/contact")} variant="outline">
            Request Pricing
          </Button>
        </div>
      </div>
    </article>
  );
}
