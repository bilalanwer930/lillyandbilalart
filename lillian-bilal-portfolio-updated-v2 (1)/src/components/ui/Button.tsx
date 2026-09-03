import { motion } from "framer-motion";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  href?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-300/60 disabled:opacity-60 disabled:pointer-events-none select-none";

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variants = {
    primary:
      "text-white bg-gradient-to-r from-brand-600 via-brand-500 to-brand-400 shadow-lg shadow-brand-500/30 hover:shadow-xl hover:shadow-brand-500/40 hover:-translate-y-0.5 active:translate-y-0",
    secondary:
      "text-ink bg-white border border-brand-100 shadow-sm hover:border-brand-300 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 glass",
    ghost: "text-ink hover:bg-ink/5",
  };

  const content = (
    <>
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      {variant === "primary" && (
        <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/25 to-white/0 opacity-0 transition-opacity duration-500 [background-position:-200%_0] group-hover:opacity-100 group-hover:animate-[shimmer_1.2s_linear]" />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileTap={{ scale: 0.97 }}
        className={cn(base, sizes[size], variants[variant], className)}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <button
      className={cn(base, sizes[size], variants[variant], className)}
      {...props}
    >
      {content}
    </button>
  );
}
