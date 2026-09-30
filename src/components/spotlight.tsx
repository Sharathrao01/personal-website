"use client";

import { useEffect, useRef } from "react";

// A soft accent glow that follows the cursor on pointer devices.
export default function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia("(pointer: fine)").matches) return;
    const move = (e: PointerEvent) => {
      el.style.background = `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, var(--glow), transparent 80%)`;
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return <div ref={ref} aria-hidden className="pointer-events-none fixed inset-0 z-0" />;
}
