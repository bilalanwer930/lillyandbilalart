import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const easeOut = [0.22, 1, 0.36, 1] as const;

const variants: Record<
  string,
  Variants
> = {
  up: {
    hidden: { opacity: 0, y: 32 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: easeOut, delay: i * 0.08 },
    }),
  },
  left: {
    hidden: { opacity: 0, x: -40 },
    show: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: easeOut, delay: i * 0.08 },
    }),
  },
  right: {
    hidden: { opacity: 0, x: 40 },
    show: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: easeOut, delay: i * 0.08 },
    }),
  },
  zoom: {
    hidden: { opacity: 0, scale: 0.9 },
    show: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: easeOut, delay: i * 0.08 },
    }),
  },
};

interface RevealProps {
  children: ReactNode;
  variant?: keyof typeof variants;
  index?: number;
  className?: string;
  once?: boolean;
}

export function Reveal({
  children,
  variant = "up",
  index = 0,
  className,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      custom={index}
      variants={variants[variant]}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.25, margin: "0px 0px -60px 0px" }}
    >
      {children}
    </motion.div>
  );
}
