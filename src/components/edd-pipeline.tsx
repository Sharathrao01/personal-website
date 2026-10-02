"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const steps = [
  { n: "01", title: "Capture", body: "A failure case surfaces in eval or production." },
  { n: "02", title: "Store", body: "It's written to the eval database with the expected behaviour." },
  { n: "03", title: "Replay", body: "Every stored case re-runs as a pre-commit check in CI." },
  { n: "04", title: "Ship", body: "Features ship with confidence 95%+ of the time." },
];

// The four EDD stages light up one after another once the diagram is on screen,
// then a signal keeps looping through them.
export default function EddPipeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });

  return (
    <div ref={ref} className="relative">
      {/* Connector track behind the cards (desktop: horizontal, mobile: vertical). */}
      <div aria-hidden className="absolute left-6 top-6 bottom-6 w-px bg-line md:left-[12.5%] md:right-[12.5%] md:top-[2.15rem] md:bottom-auto md:h-px md:w-auto">
        <motion.div
          className="absolute inset-0 origin-top bg-gradient-to-b from-accent to-saffron md:origin-left md:bg-gradient-to-r"
          initial={{ scaleY: 0, scaleX: 0 }}
          animate={inView ? { scaleY: 1, scaleX: 1 } : {}}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
        {inView && (
          <motion.span
            className="absolute -left-[3px] -top-[3px] hidden size-[7px] rounded-full bg-saffron shadow-[0_0_14px_var(--saffron)] md:block"
            animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 0.6, ease: "easeInOut", delay: 1.8 }}
          />
        )}
      </div>

      <ol className="relative grid gap-4 md:grid-cols-4">
        {steps.map((s, i) => (
          <motion.li
            key={s.n}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 * i, ease: [0.2, 0.7, 0.2, 1] }}
            className="flex gap-4 md:flex-col md:items-center md:text-center"
          >
            <motion.span
              initial={{ boxShadow: "0 0 0 0 transparent" }}
              animate={
                inView
                  ? { boxShadow: ["0 0 0 0 transparent", "0 0 28px 2px var(--accent)", "0 0 10px 0 var(--accent-soft)"] }
                  : {}
              }
              transition={{ duration: 1.2, delay: 0.35 * i + 0.2 }}
              className="relative z-10 grid size-12 shrink-0 place-items-center rounded-full border border-accent/60 bg-bg font-mono text-sm text-accent"
            >
              {s.n}
            </motion.span>
            <div className="card card-glow flex-1 p-5 md:w-full">
              <div className="font-semibold text-ink">{s.title}</div>
              <p className="mt-1 text-sm leading-relaxed text-ink-dim">{s.body}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
