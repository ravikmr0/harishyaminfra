import { cn } from "@/lib/utils";

interface BrandMarkProps {
  className?: string;
  compact?: boolean;
  inverted?: boolean;
}

export default function BrandMark({
  className,
  compact = false,
  inverted = false,
}: BrandMarkProps) {
  const containerClass = compact ? "gap-3" : "gap-4";
  const monogramClass = compact ? "h-11 w-11 rounded-2xl text-sm" : "h-14 w-14 rounded-[1.35rem] text-base";
  const titleClass = compact ? "text-lg" : "text-xl md:text-2xl";
  const eyebrowClass = compact ? "text-[9px] tracking-[0.26em]" : "text-[10px] tracking-[0.32em]";

  return (
    <div className={cn("inline-flex items-center", containerClass, className)}>
      <div
        className={cn(
          "flex items-center justify-center border shadow-[0_18px_45px_-30px_rgba(0,0,0,0.55)]",
          monogramClass,
          inverted
            ? "border-white/20 bg-white/10 text-white"
            : "border-[rgba(141,74,51,0.18)] bg-[linear-gradient(135deg,_rgba(178,98,67,0.14),_rgba(231,199,166,0.42))] text-[color:var(--brand-ink)]",
        )}
      >
        <span className="font-accent font-extrabold uppercase tracking-[0.34em]">HI</span>
      </div>

      <div className="min-w-0">
        <p
          className={cn(
            "font-accent font-semibold uppercase",
            eyebrowClass,
            inverted ? "text-white/65" : "text-[rgba(31,44,43,0.56)]",
          )}
        >
          Land, Living, Legacy
        </p>
        <p
          className={cn(
            "font-display leading-none",
            titleClass,
            inverted ? "text-white" : "text-[color:var(--brand-ink)]",
          )}
        >
          Harishyam Infra
        </p>
      </div>
    </div>
  );
}
