"use client";

import { useEffect, useState } from "react";

export const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "leadership", label: "Leadership" },
  { id: "beyond", label: "Beyond the build" },
];

// Desktop-only nav that highlights whichever section is crossing the upper third of the viewport.
export default function SectionNav() {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-30% 0px -65% 0px" },
    );
    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Sections" className="hidden lg:block mt-14">
      <ul className="flex flex-col gap-1">
        {sections.map((s) => {
          const on = active === s.id;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={on ? "true" : undefined}
                className="group flex items-center gap-4 py-2.5"
              >
                <span
                  className={`h-px transition-all duration-300 motion-reduce:transition-none ${
                    on ? "w-16 bg-accent" : "w-8 bg-ink-faint group-hover:w-16 group-hover:bg-ink"
                  }`}
                />
                <span
                  className={`font-mono text-xs uppercase tracking-[0.18em] transition-colors ${
                    on ? "text-ink" : "text-ink-faint group-hover:text-ink"
                  }`}
                >
                  {s.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
