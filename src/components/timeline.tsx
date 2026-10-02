"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import type { Experience } from "@/lib/data";

// Vertical timeline whose line draws itself as you scroll through it.
export default function Timeline({ items }: { items: Experience[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 22 });

  return (
    <ol ref={ref} className="relative flex flex-col gap-10 pl-8 md:gap-14 md:pl-0">
      <span aria-hidden className="absolute bottom-2 left-[7px] top-2 w-px bg-line md:left-1/2" />
      <motion.span
        aria-hidden
        style={{ scaleY }}
        className="absolute bottom-2 left-[7px] top-2 w-px origin-top bg-gradient-to-b from-accent via-moss-200 to-saffron md:left-1/2"
      />

      {items.map((e, i) => {
        const right = i % 2 === 1;
        return (
          <li key={e.role + e.period} className="relative md:grid md:grid-cols-2 md:gap-16">
            <motion.span
              aria-hidden
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "0px 0px -30% 0px" }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="absolute -left-8 top-6 grid size-[15px] place-items-center rounded-full border border-accent bg-bg md:left-1/2 md:-translate-x-1/2"
            >
              <span className="size-[7px] rounded-full bg-accent shadow-[0_0_12px_var(--accent)]" />
            </motion.span>

            <motion.div
              initial={{ opacity: 0, x: right ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -15% 0px" }}
              transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
              className={right ? "md:col-start-2" : "md:col-start-1"}
            >
              <div className="card card-glow card-interactive p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-saffron">{e.period}</p>
                <h3 className="mt-2 text-lg font-semibold leading-snug text-ink">{e.role}</h3>
                <p className="text-sm text-accent">{e.org}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-dim">{e.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                  {e.tags.map((t) => (
                    <li key={t} className="tag">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </li>
        );
      })}
    </ol>
  );
}
