import { Reveal } from "../motion/Reveal";
import { cn } from "../../utils/cn";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left"
      )}
    >
      <Reveal variant="up" index={0}>
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]",
            dark
              ? "bg-white/10 text-brand-100 ring-1 ring-white/20"
              : "bg-brand-50 text-brand-600 ring-1 ring-brand-100"
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand-500 to-blush-500" />
          {eyebrow}
        </span>
      </Reveal>

      <Reveal variant="up" index={1}>
        <h2
          className={cn(
            "text-balance font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl",
            dark ? "text-white" : "text-ink"
          )}
        >
          {title}
        </h2>
      </Reveal>

      {description && (
        <Reveal variant="up" index={2}>
          <p
            className={cn(
              "max-w-2xl text-balance text-base leading-relaxed sm:text-lg",
              dark ? "text-white/70" : "text-ink/60"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
