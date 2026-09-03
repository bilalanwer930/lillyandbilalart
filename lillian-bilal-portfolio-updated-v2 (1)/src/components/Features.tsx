import { Reveal } from "./motion/Reveal";
import { SectionHeader } from "./ui/SectionHeader";

const features = [
  {
    title: "Children's Book Illustration",
    description:
      "Full interior illustration in your preferred style — watercolor, whimsical, storybook, or modern. Every scene matched to your manuscript, page by page.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20" /><path d="m4 6 8-4 8 4" /><path d="m4 6 8 4 8-4" /><path d="M4 6v12" /><path d="m4 18 8 4 8-4" />
      </svg>
    ),
    gradient: "from-brand-500 to-brand-300",
    glow: "group-hover:shadow-brand-500/30",
  },
  {
    title: "Book Cover Design",
    description:
      "Stand out on shelves and in search results with an unforgettable cover. Print-ready, Kindle-ready, and browser-optimized thumbnails included.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v4" /><path d="M12 17v4" /><path d="M5 7h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z" /><path d="M8 12h8" />
      </svg>
    ),
    gradient: "from-blush-500 to-blush-300",
    glow: "group-hover:shadow-blush-500/30",
  },
  {
    title: "Character Development",
    description:
      "Memo-worthy characters with consistent design across every page. Style sheets ensure your heroes look identical in scene one and scene forty.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" /><path d="M4 21c0-3.9 3.6-6 8-6s8 2.1 8 6" />
      </svg>
    ),
    gradient: "from-amber-soft to-blush-400",
    glow: "group-hover:shadow-amber-500/30",
  },
  {
    title: "Layout & Storyboarding",
    description:
      "Pacing, composition, and page-turn moments engineered for maximum delight — so the art flows as beautifully as the words.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />
      </svg>
    ),
    gradient: "from-mint-soft to-brand-300",
    glow: "group-hover:shadow-emerald-400/30",
  },
  {
    title: "Full Publishing Kit",
    description:
      "Front & back cover, spine, copyright page, high-res print files and web-optimized assets. Everything Amazon and your printer needs.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16v16H4z" /><path d="M9 4v16" /><path d="M4 9h5" /><path d="M4 15h5" />
      </svg>
    ),
    gradient: "from-brand-400 to-amber-soft",
    glow: "group-hover:shadow-brand-400/30",
  },
  {
    title: "Brand & Series Art",
    description:
      "Run a children's brand or business? We craft cohesive illustration systems, mascots, and cover series that make your work instantly recognizable.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3 2 4 4 1-3 4 1 5-4-2-4 2 1-5-3-4 4-1z" />
      </svg>
    ),
    gradient: "from-blush-400 to-brand-500",
    glow: "group-hover:shadow-blush-500/30",
  },
];

export function Features() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Services"
          title="Every stage of your book's journey, handled with love"
          description="From a single cover to a 40-page fully illustrated masterpiece, we offer everything you need to publish a book you're proud of."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} index={i}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-brand-50 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div
                  className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${feature.gradient} opacity-0 blur-2xl transition-all duration-700 group-hover:opacity-30`}
                />
                <div
                  className={`relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${feature.glow}`}
                >
                  {feature.icon}
                </div>
                <h3 className="relative mt-6 font-display text-xl font-semibold text-ink">
                  {feature.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-ink/60">
                  {feature.description}
                </p>
                <a
                  href="#cta"
                  className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 opacity-70 transition-opacity hover:opacity-100"
                >
                  Learn more
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
