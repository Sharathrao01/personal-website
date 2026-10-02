"use client";

import { motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

type Testimonial = { quote: string; name: string; context: string };

// Distance from a slide to the track's snap line (its left edge plus scroll-padding).
function offsetOf(track: HTMLElement, slide: HTMLElement) {
  const pad = parseFloat(getComputedStyle(track).scrollPaddingLeft) || 0;
  return slide.getBoundingClientRect().left - track.getBoundingClientRect().left - pad;
}

function slides(track: HTMLElement | null) {
  return (Array.from(track?.children ?? []) as HTMLElement[]).filter((c) => !c.dataset.spacer);
}

function initials(name: string) {
  return name
    .split(" ")
    .filter((w) => /^[A-Z]/.test(w) && w !== "Dr")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

// A snap-scrolling carousel the visitor controls: swipe, drag, arrows, dots or
// keyboard. It auto-advances only when motion is allowed and nobody is interacting.
export default function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const track = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const drag = useRef<{ x: number; left: number; moved: boolean } | null>(null);
  const [onScreen, setOnScreen] = useState(false);

  const goTo = useCallback(
    (i: number) => {
      const el = track.current;
      const list = slides(el);
      if (!el || !list.length) return;
      const n = (i + list.length) % list.length;
      el.scrollTo({ left: el.scrollLeft + offsetOf(el, list[n]), behavior: reduce ? "auto" : "smooth" });
    },
    [reduce],
  );

  // Track which card is closest to the left edge as the user scrolls.
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => {
      const list = slides(el);
      let best = 0;
      let bestDist = Infinity;
      list.forEach((c, i) => {
        const d = Math.abs(offsetOf(el, c));
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      setIndex(best);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // Only auto-advance while the carousel is actually on screen.
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setOnScreen(e.isIntersecting), { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (reduce || paused || !onScreen) return;
    const id = setInterval(() => goTo(index + 1), 5000);
    return () => clearInterval(id);
  }, [index, paused, reduce, onScreen, goTo]);

  return (
    <div
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <ul
        ref={track}
        tabIndex={0}
        aria-label="Testimonials"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            goTo(index + 1);
          } else if (e.key === "ArrowLeft") {
            e.preventDefault();
            goTo(index - 1);
          }
        }}
        onPointerDown={(e) => {
          if (e.pointerType !== "mouse") return;
          drag.current = { x: e.clientX, left: track.current!.scrollLeft, moved: false };
        }}
        onPointerMove={(e) => {
          const d = drag.current;
          if (!d) return;
          const dx = e.clientX - d.x;
          if (Math.abs(dx) > 4) d.moved = true;
          track.current!.style.scrollSnapType = "none";
          track.current!.scrollLeft = d.left - dx;
        }}
        onPointerUp={() => {
          if (!drag.current) return;
          track.current!.style.scrollSnapType = "";
          drag.current = null;
          goTo(index);
        }}
        onPointerLeave={() => {
          if (!drag.current) return;
          track.current!.style.scrollSnapType = "";
          drag.current = null;
          goTo(index);
        }}
        className="flex cursor-grab snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-5 px-5 pb-6 pt-2 [scrollbar-width:none] active:cursor-grabbing sm:scroll-px-8 sm:px-8 lg:scroll-px-[max(2rem,calc((100vw-72rem)/2+2rem))] lg:px-[max(2rem,calc((100vw-72rem)/2+2rem))] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((t, i) => (
          <motion.li
            key={t.name}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${items.length}`}
            animate={{ opacity: index === i ? 1 : 0.55, scale: index === i ? 1 : 0.97 }}
            transition={{ duration: 0.4 }}
            className="card card-glow flex w-[85%] shrink-0 select-none snap-start flex-col p-7 sm:w-[28rem] md:p-8"
          >
            <span aria-hidden className="font-serif text-6xl leading-none text-accent/60">
              &ldquo;
            </span>
            <blockquote className="-mt-4 flex-1 font-serif text-xl leading-snug text-ink md:text-2xl">
              {t.quote}
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-accent/30 to-saffron/30 text-xs font-semibold text-ink">
                {initials(t.name)}
              </span>
              <div className="text-sm">
                <div className="font-medium text-ink">{t.name}</div>
                <div className="text-xs text-ink-faint">{t.context}</div>
              </div>
            </div>
          </motion.li>
        ))}
        {/* Trailing room so the last slide can still snap to the start edge. */}
        <li
          aria-hidden
          data-spacer="1"
          className="w-[max(0px,calc(15%-1.25rem))] shrink-0 sm:w-[max(0px,calc(100%-28rem-1.25rem))]"
        />
      </ul>

      <div className="mx-auto mt-4 flex w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <div className="flex items-center gap-2" role="tablist" aria-label="Choose testimonial">
          {items.map((t, i) => (
            <button
              key={t.name}
              type="button"
              role="tab"
              aria-selected={index === i}
              aria-label={`Show testimonial from ${t.name}`}
              onClick={() => goTo(i)}
              className="group grid h-6 place-items-center"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-300 ${
                  index === i ? "w-8 bg-accent" : "w-1.5 bg-line-strong group-hover:bg-ink-faint"
                }`}
              />
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs tabular-nums text-ink-faint">
            {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </span>
          <ArrowButton dir="prev" onClick={() => goTo(index - 1)} />
          <ArrowButton dir="next" onClick={() => goTo(index + 1)} />
        </div>
      </div>
    </div>
  );
}

function ArrowButton({ dir, onClick }: { dir: "prev" | "next"; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === "prev" ? "Previous testimonial" : "Next testimonial"}
      className="grid size-11 place-items-center rounded-full border border-line text-ink-dim transition-colors hover:border-accent hover:bg-accent-soft hover:text-accent"
    >
      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden className={`size-4 ${dir === "prev" ? "rotate-180" : ""}`}>
        <path
          fillRule="evenodd"
          d="M3 10a.75.75 0 01.75-.75h10.64l-4.2-3.96a.75.75 0 011.02-1.1l5.5 5.25a.75.75 0 010 1.1l-5.5 5.25a.75.75 0 11-1.02-1.1l4.2-3.96H3.75A.75.75 0 013 10z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}
