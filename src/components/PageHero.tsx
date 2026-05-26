import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  description: string;
  eyebrow?: string;
  image?: string;
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
}

export default function PageHero({
  title,
  description,
  eyebrow,
  image,
  align = "left",
  className,
  children,
}: PageHeroProps) {
  return (
    <section className="section-shell-hero">
      <div className={cn("page-hero", className)}>
        {image && (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-screen"
            style={{ backgroundImage: `url(${image})` }}
          />
        )}

        <div
          className={cn(
            "relative z-10 max-w-4xl",
            align === "center" && "mx-auto text-center",
          )}
        >
          {eyebrow && <p className="page-kicker mb-5">{eyebrow}</p>}
          <h1 className="page-title mb-4">{title}</h1>
          <p className={cn("page-copy", align === "center" && "mx-auto")}>{description}</p>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
