import { motion } from "framer-motion";
import { Reveal } from "./motion/Reveal";
import { SectionHeader } from "./ui/SectionHeader";

const steps = [
  {
    num: "01",
    title: "Discovery & Quote",
    description:
      "Share your manuscript and vision. We propose a style direction, scope, and a clear, no-surprises quote within 2 business days.",
  },
  {
    num: "02",
    title: "Character & Style Direction",
    description:
      "We craft your cast and color palette — two rounds of revisions included, so every character feels perfectly yours.",
  },
  {
    num: "03",
    title: "Illustration & Refinement",
    description:
      "Watch your story come to life scene by scene, with structured review checkpoints so you stay in control at every step.",
  },
  {
    num: "04",
    title: "Final Files & Publish",
    description:
      "Receive print-ready, Kindle-ready files and your full publishing kit — upload and hit publish the same day.",
  },
];

const benefits = [
  {
    stat: "14 days",
    label: "Average cover turnaround",
  },
  {
    stat: "6–10 wks",
    label: "Full 32-page book",
  },
  {
    stat: "2 rounds",
    label: "Free revisions per stage",
  },
  {
    stat: "100%",
    label: "Ownership transferred to you",
  },
];

export function Benefits() {
  return (
    <section id="process" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-blob absolute right-[-8rem] top-20 h-96 w-96 rounded-full bg-gradient-to-br from-blush-300/30 to-amber-soft/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - process steps */}
          <div>
            <SectionHeader
              align="left"
              eyebrow="Simple Process"
              title="From manuscript to masterpiece, without the chaos"
              description="A battle-tested, transparent process designed so you always know what's happening and what's next."
            />

            <div className="mt-10 space-y-4">
              {steps.map((step, i) => (
                <Reveal key={step.num} index={i} variant="left">
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                    className="group relative flex gap-5 rounded-2xl border border-brand-50 bg-white p-6 shadow-sm transition-all duration-300 hover:border-brand-100 hover:shadow-lg"
                  >
                    <div className="flex flex-col items-center">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-blush-500 font-display text-sm font-bold text-white shadow-md">
                        {step.num}
                      </span>
                      {i < steps.length - 1 && (
                        <span className="mt-2 w-px flex-1 bg-gradient-to-b from-brand-200 to-transparent" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink transition-colors group-hover:text-brand-700">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink/60">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right - benefits panel */}
          <div className="lg:sticky lg:top-28">
            <Reveal variant="zoom">
              <div className="relative overflow-hidden rounded-[2rem] bg-ink p-8 text-white shadow-2xl sm:p-10">
                <div className="absolute inset-0 -z-0 overflow-hidden">
                  <div className="animate-blob absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gradient-to-br from-brand-500/50 to-blush-500/40 blur-3xl" />
                  <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-gradient-to-tr from-amber-soft/30 to-brand-400/30 blur-3xl" />
                </div>

                <div className="relative">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-100 ring-1 ring-white/20">
                    Why authors choose us
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-semibold leading-snug sm:text-3xl">
                    Done-for-you art, so you can focus on the story.
                  </h3>
                  <p className="mt-4 text-white/70">
                    No design skills, no stressful dashboards, no late-night
                    Panic over Amazon specs. Just beautiful art and a team that
                    has your back.
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-5">
                    {benefits.map((b, i) => (
                      <motion.div
                        key={b.label}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                        className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                      >
                        <p className="font-display text-2xl font-bold text-gradient">
                          {b.stat}
                        </p>
                        <p className="mt-1 text-xs font-medium text-white/60">
                          {b.label}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-mint-soft to-brand-400 text-white">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 12a9 9 0 1 1-9-9" /><path d="M12 6v6l3 2" />
                        </svg>
                      </span>
                      <div>
                        <p className="text-sm font-semibold">Unlimited communication</p>
                        <p className="text-xs text-white/60">
                          Direct line to your illustrator, always.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
