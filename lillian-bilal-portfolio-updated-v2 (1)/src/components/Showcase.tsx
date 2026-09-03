import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./motion/Reveal";
import { SectionHeader } from "./ui/SectionHeader";
import { cn } from "../utils/cn";

type Category = "All" | "Children's Books" | "Book Covers" | "Character Designs" | "Logo Designs";

const folders = [
  { label: "Children's Books", folder: "childrens-book", tag: "Children's Book Illustration" },
  { label: "Book Covers", folder: "book-covers", tag: "Book Cover Design" },
  { label: "Character Designs", folder: "character-designs", tag: "Character Design" },
  { label: "Logo Designs", folder: "logo-designs", tag: "Logo Design" },
] as const;

const filesByFolder: Record<string, string[]> = {
  "childrens-book": [
    "IMG_3016.jpeg", "IMG_2507.jpeg", "IMG_7182 (1).png", "IMG_3021.jpeg", "IMG_0313 - Copy.png",
    "IMG_2916.jpeg", "IMG_2514.jpeg", "IMG_2975.jpeg", "IMG_2509.jpeg", "34cd4a84-d712-483d-97ef-25841f1e6dd0.jpeg",
    "IMG_3014.jpeg", "IMG_2513.jpeg", "IMG_2917.jpeg", "IMG_2918 - Copy.jpeg", "1a6aa9d0-19e1-4ffb-9673-a12d2eed61f2.jpeg",
    "IMG_3017.jpeg", "IMG_2919.jpeg", "IMG_2895.jpeg", "IMG_2915.jpeg", "d6f5d0f7-8383-4c2a-83ce-f88dfb8c65fb.jpeg",
    "IMG_2681.webp", "IMG_2917 - Copy.jpeg", "IMG_2683.webp", "IMG_2977.jpeg", "IMG_3015.jpeg", "57e5a318-b472-4b5f-aec4-449589b1a64e.jpeg",
  ],
  "book-covers": [
    "IMG_2952.jpeg", "IMG_0114.jpeg", "IMG_0584.jpeg", "IMG_3112.jpeg", "IMG_3027.jpeg", "IMG_0831 (1).png",
    "IMG_0581.jpeg", "IMG_2373.jpeg", "IMG_2469.jpeg", "IMG_0585.jpeg", "IMG_3011.jpeg", "IMG_0110.jpeg",
    "IMG_0113.jpeg", "IMG_0588.jpeg", "IMG_2377.jpeg", "IMG_2476.jpeg", "IMG_2371.jpeg", "IMG_1227.png", "IMG_2372.jpeg", "IMG_0577.jpeg",
  ],
  "character-designs": [
    "IMG_1832.jpeg", "IMG_1808.jpeg", "IMG_1948.jpeg", "IMG_2094.jpeg", "IMG_1974.jpeg", "bMmxvm.png", "ZEtrKo.jpeg",
    "IMG_1952.jpeg", "IMG_0582.jpeg", "bfKkIS.png", "IMG_1750.jpeg", "IMG_2126.jpeg", "wEqyEe.png", "IMG_2096.jpeg",
    "IMG_2095.jpeg", "IMG_0810.png", "IMG_0805.png", "IMG_1551.png", "IMG_1751.jpeg", "IMG_1752.jpeg", "yhtEYO.jpeg", "dPoxbH.jpeg",
  ],
  "logo-designs": [
    "IMG_1264.png", "IMG_1295.jpeg", "IMG_1297.jpeg", "IMG_1296.jpeg", "2df5b6c2-1c1a-4bd0-914c-6000b492f76e.jpeg",
    "IMG_2009.jpeg", "IMG_2075.jpeg", "658791038_18072199883330661_3912176049500115745_n.jpg", "IMG_3751.webp", "IMG_6681.png", "cc975915-be0f-417c-8799-430ddd5a50e4.jpeg",
  ],
};

const projects = folders.flatMap(({ label, folder, tag }) =>
  filesByFolder[folder].map((file, index) => ({
    id: `${folder}-${index + 1}`,
    title: `${label} ${index + 1}`,
    category: label as Exclude<Category, "All">,
    image: `/images/portfolio/${folder}/${encodeURIComponent(file).replace(/%20/g, "%20")}`,
    tag,
  }))
);

const categories: Category[] = ["All", ...folders.map((folder) => folder.label as Exclude<Category, "All">)];

export function Showcase() {
  const [filter, setFilter] = useState<Category>("All");
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="relative overflow-hidden bg-gradient-to-b from-white to-brand-50/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Portfolio"
          title="Our latest work"
          description="Explore our original children's book illustrations, book covers, character designs, and logo work. Every piece below is from our portfolio."
        />

        <Reveal className="mt-10 flex justify-center">
          <div className="flex max-w-full flex-wrap justify-center gap-1 rounded-2xl border border-brand-100 bg-white p-1.5 shadow-sm">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setFilter(cat)} className={cn("relative rounded-xl px-4 py-2 text-sm font-medium transition-colors", filter === cat ? "text-white" : "text-ink/60 hover:text-ink")}>
                {filter === cat && <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-600 to-brand-400" transition={{ type: "spring", stiffness: 400, damping: 32 }} />}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.button
                type="button"
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelected(project)}
                className="group relative aspect-[4/5] cursor-zoom-in overflow-hidden rounded-3xl bg-brand-50 text-left shadow-md"
              >
                <img src={project.image} alt={project.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur">{project.tag}</span>
                  <p className="mt-2 text-sm font-medium text-white">View larger</p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
            <motion.div className="relative max-h-[92vh] max-w-5xl overflow-hidden rounded-2xl bg-white p-2 shadow-2xl" initial={{ scale: 0.94, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.94, y: 20 }} onClick={(e) => e.stopPropagation()}>
              <button type="button" aria-label="Close" onClick={() => setSelected(null)} className="absolute right-4 top-4 z-10 rounded-full bg-black/60 px-3 py-2 text-lg text-white backdrop-blur">×</button>
              <img src={selected.image} alt={selected.title} className="max-h-[88vh] max-w-[90vw] rounded-xl object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
