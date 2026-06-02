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
  const imageSize = compact ? "h-11 w-11" : "h-14 w-14";

  return (
    <div className={cn("inline-flex items-center", className)}>
      <img 
        src="/images/logo.jpeg" 
        alt="Harishyam Infra Logo"
        className={cn("object-cover rounded-full", imageSize)}
      />
    </div>
  );
}
