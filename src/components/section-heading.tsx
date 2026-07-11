export default function SectionHeading({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="mb-8">
      <div className="font-mono text-xs uppercase tracking-wider text-moss flex items-center gap-2.5">
        <span className="w-5 h-px bg-moss inline-block" />
        {eyebrow}
      </div>
      <h2 className="font-display text-2xl md:text-3xl mt-2 mb-2">{title}</h2>
      {sub && <p className="text-ink-dim max-w-[62ch] text-[15px]">{sub}</p>}
    </div>
  );
}
