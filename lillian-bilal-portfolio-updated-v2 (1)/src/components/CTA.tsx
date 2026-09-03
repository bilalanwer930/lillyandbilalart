import { motion } from "framer-motion";
import { Reveal } from "./motion/Reveal";
import { Button } from "./ui/Button";

export function CTA() {
  return (
    <section id="cta" className="relative px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal variant="zoom">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-6 py-16 text-center text-white shadow-2xl shadow-brand-500/20 sm:px-12 sm:py-24">
            {/* ambient decorations */}
            <div className="pointer-events-none absolute inset-0">
              <div className="animate-blob absolute -left-20 -top-20 h-80 w-80 rounded-full bg-gradient-to-br from-brand-500/50 to-transparent blur-3xl" />
              <div
                className="animate-blob absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-gradient-to-bl from-blush-500/40 to-transparent blur-3xl"
                style={{ animationDelay: "-9s" }}
              />
              <div
                className="animate-blob absolute top-0 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-gradient-to-b from-amber-soft/30 to-transparent blur-3xl"
                style={{ animationDelay: "-4s" }}
              />
              {/* decorative sparkles */}
              <div className="animate-drift absolute left-[12%] top-[20%] h-3 w-3 rounded-full bg-amber-soft opacity-70 blur-[1px]" />
              <div className="animate-drift-slow absolute right-[15%] top-[28%] h-2 w-2 rounded-full bg-brand-300 opacity-70 blur-[1px]" />
              <div className="animate-drift absolute bottom-[25%] left-[22%] h-2 w-2 rounded-full bg-blush-400 opacity-70 blur-[1px]" />
            </div>

            <div className="relative mx-auto max-w-2xl">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-100 ring-1 ring-white/20"
              >
                Limited 2026 slots available
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-6 text-balance font-display text-3xl font-semibold leading-tight sm:text-5xl md:text-6xl"
              >
                Your story deserves to be{" "}
                <span className="text-gradient">beautifully told.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-white/70 sm:text-lg"
              >
                Take the first step. Tell us about your book, and we'll send you
                a free style sample a tailored quote plus a countdown-ready
                publishing plan — within 48 hours.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
              >
                <Button size="lg" href="#footer">
                  Get Your Free Quote
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  href="#footer"
                  className="border-transparent bg-white/10 text-white hover:bg-white/20"
                >
                  Book a Free Consultation
                </Button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="mt-8 text-xs font-medium text-white/40"
              >
                No commitment · Free style sample · Ownership transferred to you
              </motion.p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
