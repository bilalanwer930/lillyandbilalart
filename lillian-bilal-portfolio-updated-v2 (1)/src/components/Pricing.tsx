import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "./motion/Reveal";
import { SectionHeader } from "./ui/SectionHeader";
import { Button } from "./ui/Button";
import { cn } from "../utils/cn";

const plans = [
  {
    name: "Cover Launch",
    tagline: "Perfect for ambitious first covers",
    monthly: 290,
    oneTime: 390,
    featured: false,
    features: [
      "Fully illustrated front & back cover",
      "Print-ready + Kindle-ready files",
      "2 concept directions to choose from",
      "2 rounds of revisions",
      "Browser-optimized thumbnail",
      "48h delivery option available",
    ],
  },
  {
    name: "Full Book Studio",
    tagline: "Our most popular, all-inclusive option",
    monthly: 890,
    oneTime: 1290,
    featured: true,
    features: [
      "Full interior illustration (up to 32 pages)",
      "Front, back & spine cover design",
      "Character & style development",
      "Storyboarding & layout engineering",
      "3 rounds of revisions",
      "Full publishing kit + Amazon specs",
      "Dedicated illustrator + priority support",
    ],
  },
  {
    name: "Series & Brand",
    tagline: "For brands & multi-book authors",
    monthly: 1490,
    oneTime: 2190,
    featured: false,
    features: [
      "Cohesive 3+ book cover series",
      "Signature mascot & character system",
      "Licensing-ready artwork files",
      "Marketing & merch art variations",
      "Dedicated account manager",
      "Volume pricing + ongoing retainer",
    ],
  },
];

export function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "oneTime">("monthly");

  return (
    <section id="pricing" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-blob absolute left-[-8rem] top-40 h-96 w-96 rounded-full bg-gradient-to-br from-brand-300/30 to-mint-soft/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Pricing"
          title="Simple, transparent pricing for serious creators"
          description="Pick a plan and go. Every plan includes full artistic ownership, friendly support, and no hidden fees — ever."
        />

        {/* Toggle */}
        <Reveal className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full border border-brand-100 bg-white p-1.5 shadow-sm">
            {(["monthly", "oneTime"] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setBilling(mode)}
                className={cn(
                  "relative rounded-full px-5 py-2 text-sm font-medium capitalize transition-colors",
                  billing === mode ? "text-white" : "text-ink/60 hover:text-ink"
                )}
              >
                {billing === mode && (
                  <motion.span
                    layoutId="billing-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-600 to-brand-400"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">
                  {mode === "monthly" ? "Starter" : "One-time"}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => {
            const price = billing === "monthly" ? plan.monthly : plan.oneTime;
            return (
              <Reveal key={plan.name} index={i}>
                <div
                  className={cn(
                    "relative flex h-full flex-col rounded-3xl p-8 transition-all duration-500",
                    plan.featured
                      ? "bg-ink text-white shadow-2xl shadow-brand-500/20 lg:-mt-4 lg:mb-[-1rem] lg:py-12"
                      : "border border-brand-50 bg-white shadow-sm hover:-translate-y-2 hover:shadow-xl"
                  )}
                >
                  {plan.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-500 to-blush-500 px-4 py-1 text-xs font-bold text-white shadow-lg">
                      Most Popular
                    </span>
                  )}

                  <h3
                    className={cn(
                      "font-display text-xl font-semibold",
                      plan.featured ? "text-white" : "text-ink"
                    )}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 text-sm",
                      plan.featured ? "text-white/60" : "text-ink/50"
                    )}
                  >
                    {plan.tagline}
                  </p>

                  <div className="mt-6 flex items-end gap-2">
                    <span
                      className={cn(
                        "font-display text-5xl font-bold tracking-tight",
                        plan.featured ? "text-gradient" : "text-ink"
                      )}
                    >
                      ${price}
                    </span>
                    <span
                      className={cn(
                        "pb-1.5 text-sm",
                        plan.featured ? "text-white/60" : "text-ink/50"
                      )}
                    >
                      {billing === "monthly" ? "/book" : "one-time"}
                    </span>
                  </div>

                  <ul className="mt-8 flex-1 space-y-3.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <span
                          className={cn(
                            "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                            plan.featured
                              ? "bg-brand-500/30 text-brand-100"
                              : "bg-brand-50 text-brand-600"
                          )}
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </span>
                        <span className={plan.featured ? "text-white/80" : "text-ink/70"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Button
                      variant={plan.featured ? "primary" : "secondary"}
                      className="w-full"
                      href="#cta"
                    >
                      {plan.featured ? "Get Started" : "Choose Plan"}
                    </Button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 text-center">
          <p className="text-sm text-ink/50">
            Not sure which fits?{" "}
            <a href="#faq" className="font-semibold text-brand-600 hover:text-brand-700">
              Read our FAQs
            </a>{" "}
            or book a free consultation — we'll guide you.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
