import { motion } from "framer-motion";
import { Reveal } from "./motion/Reveal";
import { SectionHeader } from "./ui/SectionHeader";

const testimonials = [
  {
    quote:
      "Lillyandbilalart took my little bedtime story and turned it into the book I always dreamed my daughter would be proud of. The illustrations made me cry the first time I saw them — genuinely.",
    name: "Amara Johnson",
    role: "Self-published Author · “Fern & the Fox”",
    avatar: "/images/portfolio/childrens-book/IMG_3016.jpeg",
    rating: 5,
  },
  {
    quote:
      "As a business owner, I needed a whole mascot + cover series for our kids' brand. The team delivered a cohesive world that our customers instantly recognize. ROI has been incredible.",
    name: "Marcus Chen",
    role: "Founder, TinyPaw Studios",
    avatar: "/images/portfolio/childrens-book/IMG_2507.jpeg",
    rating: 5,
  },
  {
    quote:
      "The cover design went to #1 in its category on launch week. Print-ready files were flawless on the first submission. Worth every dollar — this isn't just design, it's a partnership.",
    name: "Sofía Alvarez",
    role: "Author · “Rosie's Giant Garden”",
    avatar: "/images/portfolio/childrens-book/IMG_7182%20%281%29.png",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gradient-to-b from-white to-brand-50/30 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Testimonials"
          title="Loved by authors & brands worldwide"
          description="Don't take our word for it — here's what creators say after bringing their stories to life with us."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} index={i}>
              <motion.figure
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="flex h-full flex-col rounded-3xl border border-brand-50 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <svg key={j} width="18" height="18" viewBox="0 0 24 24" fill="#F5A623">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="#d5cdff">
                    <path d="M6.5 5c-2.5 0-4.5 2-4.5 5s2 5.5 4.5 5.5c.8 0 1.4-.2 2-.5-.4 2-1.4 3-3 4l1.4.8c3.9-1.8 5.6-5.6 5.6-9.8C12 7 9.5 5 6.5 5zM19.5 5C17 5 15 7 15 10s2 5.5 4.5 5.5c.8 0 1.4-.2 2-.5-.4 2-1.4 3-3 4l1.4.8c3.9-1.8 5.6-5.6 5.6-9.8C25 7 22.5 5 19.5 5z" />
                  </svg>
                </div>
                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-ink/70">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-brand-50 pt-5">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    loading="lazy"
                    className="h-11 w-11 rounded-full object-cover ring-2 ring-brand-100"
                  />
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-ink/50">{t.role}</p>
                  </div>
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
