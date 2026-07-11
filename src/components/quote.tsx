export function Quote({
  quote,
  name,
  context,
  large = false,
}: {
  quote: string;
  name: string;
  context: string;
  large?: boolean;
}) {
  return (
    <div className="bg-bg-raised border border-line rounded-sm p-6">
      <blockquote
        className={`font-display italic leading-snug ${large ? "text-xl md:text-2xl" : "text-base"}`}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="mt-3 font-mono text-xs text-ink-dim">
        <span className="text-ink font-semibold not-italic">{name}</span> — {context}
      </div>
    </div>
  );
}
