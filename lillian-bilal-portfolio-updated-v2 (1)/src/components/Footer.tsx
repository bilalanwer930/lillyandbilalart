import { useState } from "react";
import { Logo } from "./ui/Logo";

const columns = [
  {
    title: "Services",
    links: [
      "Book Illustration",
      "Cover Design",
      "Character Development",
      "Storyboarding",
      "Publishing Kit",
      "Brand & Series Art",
    ],
  },
  {
    title: "Company",
    links: ["Portfolio", "Our Process", "Pricing", "Testimonials", "FAQ", "Contact"],
  },
  {
    title: "Resources",
    links: [
      "Amazon KDP Guide",
      "Cover Mockups",
      "Illustrator Styles",
      "Free Consultation",
      "Blog",
      "Help Center",
    ],
  },
];

const socials = [
  {
    name: "Instagram",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "Pinterest",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-1 .2-2.3.5-3.3l1.5-6s-.4-.8-.4-1.9c0-1.8 1-3 2.3-3 1.1 0 1.6.8 1.6 1.8 0 1.1-.7 2.7-1.1 4.2-.3 1.3.6 2.3 1.9 2.3 2.3 0 4-2.4 4-5.8 0-3-2.2-5.1-5.3-5.1-3.6 0-5.7 2.7-5.7 5.5 0 1.1.4 2.3.9 2.9.1.1.1.2.1.3l-.4 1.5c-.1.3-.2.4-.5.2-1.4-.7-2.4-2.8-2.4-4.6 0-3.7 2.7-7.1 7.8-7.1 4.1 0 7.3 2.9 7.3 6.9 0 4.1-2.6 7.4-6.2 7.4-1.2 0-2.3-.6-2.7-1.4l-.7 2.8c-.3 1-1 2.3-1.5 3.1A10 10 0 1 0 12 2z" />
      </svg>
    ),
  },
  {
    name: "Behance",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 10.5a3 3 0 0 0-1-5.5H4v11h4a3 3 0 0 0 1-5.5z" /><path d="M14 7h7" /><path d="M14.5 12a4 4 0 1 1 7 3" />
      </svg>
    ),
  },
  {
    name: "Email",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="3" /><path d="m22 7-10 6L2 7" />
      </svg>
    ),
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setDone(true);
  };

  return (
    <footer id="footer" className="relative overflow-hidden border-t border-brand-50 bg-white">
      <div className="pointer-events-none absolute -top-20 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-brand-100/50 to-transparent blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand + newsletter */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink/60">
              Premium children's book illustration and cover design for authors
              and brands who want their stories to be breathtaking.
            </p>

            <form onSubmit={submit} className="mt-6">
              <label
                htmlFor="newsletter"
                className="text-sm font-semibold text-ink"
              >
                Join the story club
              </label>
              <p className="mt-1 text-xs text-ink/50">
                Monthly art drops & publishing tips. No spam.
              </p>
              <div className="mt-3 flex max-w-sm items-center gap-2 rounded-full border border-brand-100 bg-cream p-1.5 pl-4 transition-colors focus-within:border-brand-300">
                <input
                  id="newsletter"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink/40"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-brand-500 to-blush-500 text-white shadow transition-transform hover:scale-105 active:scale-95"
                >
                  {done ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                  )}
                </button>
              </div>
              {done && (
                <p className="mt-2 text-xs font-medium text-emerald-600">
                  You're in! Welcome to the story club. 🎨
                </p>
              )}
            </form>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-semibold text-ink">{col.title}</h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#home"
                        className="group inline-flex items-center text-sm text-ink/60 transition-colors hover:text-brand-600"
                      >
                        <span className="h-px w-0 bg-brand-400 transition-all duration-300 group-hover:mr-2 group-hover:w-3" />
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-brand-50 pt-8 sm:flex-row">
          <p className="text-xs text-ink/50">
            © {new Date().getFullYear()} Lillyandbilalart. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href="#home"
                aria-label={s.name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-100 text-ink/60 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-600"
              >
                {s.icon}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6 text-xs text-ink/50">
            <a href="#home" className="transition-colors hover:text-ink">
              Privacy
            </a>
            <a href="#home" className="transition-colors hover:text-ink">
              Terms
            </a>
            <a href="#home" className="transition-colors hover:text-ink">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
