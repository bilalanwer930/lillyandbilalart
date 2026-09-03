import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./motion/Reveal";
import { SectionHeader } from "./ui/SectionHeader";

const faqs = [
  {
    q: "How long does a full children's book take?",
    a: "A standard 32-page picture book typically takes 6–10 weeks from start to finish. Covers average just 14 days. If you're on a deadline, our expedited 48-hour cover sprint can have your cover ready in as little as two days.",
  },
  {
    q: "Will I fully own the illustrations?",
    a: "Absolutely. Every plan includes complete, exclusive copyright transferred to you upon final payment. You're free to publish, merchandise, and license your art anywhere in the world with zero royalties back to us.",
  },
  {
    q: "Can I see a sample before I commit?",
    a: "Of course. We start every project with at least two concept directions and a prototype spread so you can see exactly what you're getting. You'll also receive a free style-guide sample before you sign anything.",
  },
  {
    q: "Do you work with Amazon KDP and other printers?",
    a: "Yes! We prepare files that meet Amazon KDP, IngramSpark, and most offset printers' exact specifications — including bleed, margins, trim, and embedded fonts. Our covers are also optimized so they look gorgeous as tiny thumbnails.",
  },
  {
    q: "What styles can you replicate or create?",
    a: "We create original art in watercolor, gouache, whimsical, storybook, modern minimalist, and soft digital styles. If you have a style reference from another book, we can match its mood and energy with an entirely original, legal result.",
  },
  {
    q: "What if I don't love a revision?",
    a: "Our included revision rounds exist precisely for that. We iterate until you're delighted — and if you're still not happy after those rounds, we'll discuss unlimited tweaks at a small per-round rate. We've never had a client walk away unsatisfied.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-gradient-to-b from-white to-brand-50/30 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Answers, before you even ask"
          description="Everything you need to know about working with Lillyandbilalart. Still curious? Reach out anytime."
        />

        <div className="mt-14 space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.q} index={i}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-brand-100 bg-white shadow-lg shadow-brand-500/5"
                      : "border-brand-50 bg-white/60 hover:border-brand-100"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-base font-semibold text-ink sm:text-lg">
                      {faq.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 bg-gradient-to-r from-brand-500 to-blush-500 text-white"
                          : "bg-brand-50 text-brand-600"
                      }`}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M12 5v14" /><path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="px-6 pb-6">
                          <p className="text-sm leading-relaxed text-ink/60">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
