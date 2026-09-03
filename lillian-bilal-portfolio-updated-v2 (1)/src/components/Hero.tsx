import { motion } from "framer-motion";
import { Button } from "./ui/Button";

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-16 sm:pt-40 lg:pt-44 lg:pb-24"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/70 via-cream to-cream" />
        <div className="animate-blob absolute -top-24 -left-24 h-[30rem] w-[30rem] rounded-full bg-gradient-to-br from-brand-300/40 to-blush-400/30 blur-3xl" />
        <div
          className="animate-blob absolute top-10 right-[-10rem] h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-amber-soft/40 to-blush-400/30 blur-3xl"
          style={{ animationDelay: "-6s" }}
        />
        <div
          className="animate-blob absolute bottom-[-8rem] left-1/3 h-[26rem] w-[26rem] rounded-full bg-gradient-to-br from-mint-soft/30 to-brand-300/30 blur-3xl"
          style={{ animationDelay: "-12s" }}
        />
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(124,92,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(124,92,255,0.06) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left column */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="relative z-10"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/70 px-4 py-1.5 text-sm font-medium text-brand-700 shadow-sm backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
                </span>
                Now booking for 2026 picture book seasons
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-balance mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4.2rem]"
            >
              Where stories become{" "}
              <span className="text-gradient">unforgettable art</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-ink/60 sm:text-xl"
            >
              Premium children's book illustrations and cover design for
              self-published authors and brands. We turn your manuscript into
              a visually breathtaking book children will fall in love with.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button size="lg" href="#cta">
                Start Your Book Project
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Button>
              <Button size="lg" variant="secondary" href="#portfolio">
                View the Portfolio
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
            >
              <div className="flex -space-x-3">
                {[
                  "/images/portfolio/childrens-book/IMG_3016.jpeg",
                  "/images/portfolio/childrens-book/IMG_2507.jpeg",
                ].map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt="Happy client"
                    loading="lazy"
                    className="h-11 w-11 rounded-full border-2 border-white object-cover shadow"
                  />
                ))}
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-gradient-to-r from-brand-500 to-blush-500 text-xs font-bold text-white shadow">
                  +480
                </span>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#F5A623"
                      className="drop-shadow-sm"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-1 text-sm text-ink/60">
                  <span className="font-semibold text-ink">4.98/5</span> from{" "}
                  <span className="font-semibold text-ink">480+</span> happy authors
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - hero visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.15 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="animate-drift-slow relative">
                <div className="rounded-[2rem] bg-gradient-to-br from-brand-300/40 via-white to-blush-300/40 p-2 shadow-2xl shadow-brand-500/20 ring-1 ring-white/60">
                  <img
                    src="/images/portfolio/childrens-book/IMG_3016.jpeg"
                    alt="A whimsical children's book illustration by Lillyandbilalart"
                    className="h-[26rem] w-full max-w-[22rem] rounded-[1.6rem] object-cover sm:h-[30rem] sm:max-w-[26rem]"
                  />
                </div>
              </div>

              {/* floating glass cards */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease }}
                className="animate-drift absolute -right-4 top-8 hidden sm:block"
              >
                <div className="glass rounded-2xl px-4 py-3 shadow-lg" style={{ animationDelay: "-2s" }}>
                  <p className="text-xs font-medium text-ink/50">Cover Design</p>
                  <p className="font-display text-sm font-semibold text-ink">
                    Delivered in 14 days
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease }}
                className="animate-drift absolute -left-6 bottom-16 hidden sm:block"
              >
                <div className="glass rounded-2xl px-4 py-3 shadow-lg" style={{ animationDelay: "-4s" }}>
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-mint-soft to-brand-400 text-white">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs font-medium text-ink/50">Book Approved</p>
                      <p className="font-display text-sm font-semibold text-emerald-600">
                        Amazon-ready
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1, ease }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2"
              >
                <div className="animate-drift rounded-2xl bg-ink px-5 py-3 text-white shadow-xl" style={{ animationDelay: "-1s" }}>
                  <p className="text-xs font-medium text-white/60">Your story, beautifully told</p>
                  <p className="font-display text-sm font-semibold">Children's Book Arts</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
