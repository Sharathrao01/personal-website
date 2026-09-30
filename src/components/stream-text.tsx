import type { ReactNode } from "react";

type Token = string | { em: string };

// Renders text the way an LLM streams it: word by word, each blurring in, with a
// blinking caret at the end. Pure CSS, so the full text is in the HTML for SEO.
export default function StreamText({
  tokens,
  start = 0.35,
  step = 0.07,
}: {
  tokens: Token[];
  start?: number;
  step?: number;
}) {
  const words: ReactNode[] = [];
  let i = 0;
  for (const t of tokens) {
    const parts = typeof t === "string" ? t.split(" ").filter(Boolean) : [t.em];
    for (const w of parts) {
      const delay = `${start + i * step}s`;
      words.push(
        <span key={i} className="inline-block animate-token" style={{ animationDelay: delay }}>
          {typeof t === "string" ? (
            w
          ) : (
            <em className="font-serif text-[1.2em] italic text-accent">{w}</em>
          )}
        </span>,
        " ",
      );
      i++;
    }
  }
  return (
    <>
      {words}
      <span
        aria-hidden
        className="ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-[3px] animate-caret bg-accent"
      />
    </>
  );
}
