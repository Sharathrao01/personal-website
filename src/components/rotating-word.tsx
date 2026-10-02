"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

// Cycles through words in place: each slides up and un-blurs while the slot
// smoothly resizes to fit, so the surrounding sentence never has a gap.
export default function RotatingWord({ words, interval = 2600 }: { words: string[]; interval?: number }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <motion.span
      layout
      transition={{ layout: { duration: 0.45, ease: [0.2, 0.7, 0.2, 1] } }}
      className="relative inline-flex justify-center whitespace-nowrap align-bottom"
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={words[i]}
          aria-hidden
          className="bg-gradient-to-r from-accent via-moss-200 to-saffron bg-clip-text pb-1 text-transparent"
          initial={{ y: "60%", opacity: 0, filter: "blur(8px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-60%", opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
      <span className="sr-only">{words.join(", ")}</span>
    </motion.span>
  );
}
