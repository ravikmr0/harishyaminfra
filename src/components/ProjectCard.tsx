import { useState } from "react";
import {
  ArrowUpRight,
  Heart,
  MapPin,
  Check,
  ChevronRight,
} from "lucide-react";
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
  locationLabel?: string;
  highlights?: string[];
}

const badgeStyles: Record<string, string> = {
  Featured: "bg-[rgba(178,98,67,0.14)] text-[color:var(--brand-deep)]",
  Premium: "bg-[rgba(40,71,66,0.16)] text-[color:var(--brand-forest)]",
  Flagship: "bg-[rgba(231,199,166,0.42)] text-[color:var(--brand-ink)]",
  "Premium Plus": "bg-[rgba(231,199,166,0.35)] text-[color:var(--brand-ink)]",
  Commercial: "bg-[rgba(29,78,216,0.12)] text-[#1d4ed8]",
  Community: "bg-[rgba(34,197,94,0.12)] text-[#15803d]",
  "New Release": "bg-[rgba(245,158,11,0.16)] text-[#b45309]",
  "New Launch": "bg-[rgba(245,158,11,0.16)] text-[#b45309]",
  Luxury: "bg-[rgba(178,98,67,0.18)] text-[color:var(--brand-deep)]",
  "Green Living": "bg-[rgba(34,197,94,0.14)] text-[#15803d]",
  "Community Living": "bg-[rgba(34,197,94,0.12)] text-[#15803d]",
  "Strategic Location": "bg-[rgba(29,78,216,0.12)] text-[#1d4ed8]",
};

export default function ProjectCard({
  title,
  description,
  image,
  plotSizes,
  priceRange,
  id,
  badge,
  locationLabel,
  highlights = [],
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  // Display first 3 highlights
  const displayedHighlights = highlights.slice(0, 3);

  return (
    <article
      className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[rgba(90,78,62,0.14)] bg-[rgba(255,253,248,0.92)] shadow-[0_28px_90px_-65px_rgba(31,44,43,0.7)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_38px_95px_-55px_rgba(31,44,43,0.75)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative h-60 overflow-hidden bg-[rgba(231,199,166,0.26)]">
        <img
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700"
          src={image}
          style={{ transform: isHovered ? "scale(1.08)" : "scale(1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(31,44,43,0.78)] via-transparent to-transparent" />

        {/* Badge and Favorite Button */}
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

        {/* Location Label */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="inline-flex max-w-full items-center gap-2 rounded-full bg-white/14 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
            <MapPin className="h-3.5 w-3.5" />
            <span className="truncate">{locationLabel ?? "Growth corridor location"}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex h-full flex-col gap-4 p-5 md:p-6">
        {/* Title and Description */}
        <div className="space-y-1.5">
          <h3 className="text-lg font-bold text-[color:var(--brand-ink)] transition-colors duration-300 group-hover:text-[color:var(--brand-deep)]">
            {title}
          </h3>
          <p className="text-xs leading-5 text-[rgba(31,44,43,0.65)] md:text-sm">
            {description}
          </p>
        </div>

        {/* Key Highlights Section */}
        {displayedHighlights.length > 0 && (
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[rgba(31,44,43,0.45)]">
              Key Highlights
            </p>
            <div className="grid grid-cols-1 gap-1.5">
              {displayedHighlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[rgba(231,199,166,0.1)] to-transparent px-3 py-2 transition-all duration-300 hover:from-[rgba(231,199,166,0.2)] hover:to-[rgba(231,199,166,0.05)]"
                >
                  <Check className="h-3.5 w-3.5 flex-shrink-0 text-[color:var(--brand-deep)]" />
                  <span className="text-xs font-medium text-[rgba(31,44,43,0.75)]">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-3 py-1">
          <div className="relative overflow-hidden rounded-lg border border-[rgba(90,78,62,0.12)] bg-gradient-to-br from-white/80 to-[rgba(231,199,166,0.08)] p-3.5 transition-all duration-300 hover:border-[rgba(178,98,67,0.2)] hover:shadow-md">
            <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[rgba(31,44,43,0.45)]">
              Plot Range
            </p>
            <p className="text-base font-bold text-[color:var(--brand-ink)]">
              {plotSizes}
            </p>
          </div>
          <div className="relative overflow-hidden rounded-lg border border-[rgba(178,98,67,0.18)] bg-gradient-to-br from-[rgba(231,199,166,0.12)] to-[rgba(178,98,67,0.05)] p-3.5 transition-all duration-300 hover:border-[rgba(178,98,67,0.3)] hover:shadow-md">
            <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-deep)]">
              Price Start
            </p>
            <p className="text-base font-bold text-[color:var(--brand-deep)]">
              {priceRange}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-auto flex flex-col gap-2 pt-2">
          <Button
            className="w-full gap-1.5 bg-[linear-gradient(135deg,_var(--brand),_var(--brand-deep))] text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(178,98,67,0.3)]"
            onClick={() => navigate(`/project/${id}`)}
          >
            View Full Details
            <ArrowUpRight className="h-4 w-4" />
          </Button>
          <Button
            className="w-full gap-1.5 text-sm font-semibold transition-all duration-300 hover:bg-[rgba(231,199,166,0.15)]"
            onClick={() => navigate("/contact")}
            variant="outline"
          >
            Request Pricing
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </article>
  );
}
