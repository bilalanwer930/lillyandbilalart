import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./ui/Logo";
import { Button } from "./ui/Button";
import { cn } from "../utils/cn";

const links = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "mt-4 flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6",
            scrolled
              ? "glass shadow-lg shadow-brand-500/5"
              : "bg-transparent border border-transparent"
          )}
        >
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-ink/70 transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#pricing"
              className="text-sm font-medium text-ink/70 transition-colors hover:text-ink"
            >
              Sign in
            </a>
            <Button size="sm" href="#cta">
              Get a Quote
            </Button>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand-100 bg-white/60 text-ink backdrop-blur lg:hidden"
          >
            <div className="relative h-4 w-5">
              <span
                className={cn(
                  "absolute left-0 top-0 h-0.5 w-5 rounded-full bg-ink transition-all duration-300",
                  open && "top-1.5 rotate-45"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-ink transition-all duration-300",
                  open && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-3 h-0.5 w-5 rounded-full bg-ink transition-all duration-300",
                  open && "top-1.5 -rotate-45"
                )}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-4 mt-3 rounded-2xl glass p-4 shadow-xl lg:hidden"
          >
            <nav className="flex flex-col" aria-label="Mobile">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-xl px-4 py-3 text-base font-medium text-ink transition-colors hover:bg-brand-50 hover:text-brand-700"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="mt-3 border-t border-brand-100/60 pt-3">
                <Button className="w-full" href="#cta">
                  Get a Quote
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
