import { Reveal } from "./motion/Reveal";

const brands = [
  "StoryCraft Kids",
  "Little Lighthouse Press",
  "Bloom & Barefoot",
  "Whimsy Works",
  "Paper Moon",
  "TinyPaw Studios",
  "Cloudberry Books",
  "Wonder & Wild",
];

const stats = [
  { value: "480+", label: "Books illustrated" },
  { value: "38", label: "Countries reached" },
  { value: "4.98/5", label: "Average rating" },
  { value: "92%", label: "Repeat clients" },
];

export function SocialProof() {
  return (
    <section className="border-y border-brand-50 bg-white/50 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-ink/40">
            Trusted by self-published authors & leading children's publishers
          </p>
        </Reveal>

        <div className="relative mt-8 overflow-hidden">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-cream to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-cream to-transparent"
            aria-hidden
          />
          <div className="animate-marquee flex w-max gap-14">
            {[...brands, ...brands].map((brand, i) => (
              <span
                key={i}
                className="flex items-center gap-2 font-display text-lg font-medium text-ink/35 transition-colors hover:text-brand-600"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c.9 4.7 4.3 8.1 8 8.1v.6c-3.7 0-8.1 3.4-6 10-9-1.2-9-9.8-9-14.3C6.5.6 10.4.6 12 0zM12 24c-.9-4.7-4.3-8.1-8-8.1v-.6c3.7 0 8.1-3.4 6-10 9 1.2 9 9.8 9 14.3-.5 4.2-4.4 4.2-7 4.4z" />
                </svg>
                {brand}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} index={i} className="text-center">
              <div className="rounded-2xl border border-brand-50 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-500/5">
                <p className="font-display text-3xl font-semibold text-gradient sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-medium text-ink/50">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
