import { cn } from "../../utils/cn";

export function Logo({ className, dark = false }: { className?: string; dark?: boolean }) {
  return (
    <a
      href="#home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="relative inline-flex h-9 w-9 items-center justify-center">
        <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-brand-500 via-brand-400 to-blush-500 opacity-90 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105" />
        <span className="relative z-10 font-display text-lg font-bold text-white drop-shadow-sm">
          Lb
        </span>
      </span>
      <span
        className={cn(
          "font-display text-lg font-semibold tracking-tight",
          dark ? "text-white" : "text-ink"
        )}
      >
        Lilly<span className="text-gradient">&amp;</span>bilalart
      </span>
    </a>
  );
}
