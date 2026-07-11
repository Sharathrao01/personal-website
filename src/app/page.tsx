import Link from "next/link";
import { proofStats } from "@/lib/data";

const doors = [
  {
    href: "/work",
    tag: "Depth",
    title: "What he builds",
    desc: "Multi-agent LLM systems, RAG pipelines, evaluation-driven development — the engineering, told through outcomes.",
  },
  {
    href: "/leadership",
    tag: "Leadership & strategy",
    title: "How he decides",
    desc: "Owning architecture for an 8-engineer team, pioneering EDD as a CI-integrated practice, product ownership on Zyskie.",
  },
  {
    href: "/beyond",
    tag: "Practice",
    title: "What he tends",
    desc: "Carnatic flute, painting, teaching government-school children, mentoring juniors, gardening.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <div className="font-mono text-xs uppercase tracking-wider text-moss flex items-center gap-2.5">
        <span className="w-5 h-px bg-moss inline-block" />
        GenAI Systems Engineer & Technical Leader
      </div>
      <h1 className="font-display text-4xl md:text-5xl leading-[1.08] mt-4 mb-6 max-w-[18ch]">
        Builds systems that hold up — in production, on a team, and in the ground.
      </h1>
      <p className="text-ink-dim text-lg max-w-[58ch]">
        3+ years architecting multi-agent LLM systems and evaluation-driven pipelines. Equal parts
        engineering depth, team leadership, and the patience that carries over from a flute, a
        garden, and a classroom.
      </p>

      <div className="flex flex-wrap gap-x-10 gap-y-4 mt-10 font-mono">
        {proofStats.map((s) => (
          <div key={s.label}>
            <div className="text-2xl text-moss">{s.value}</div>
            <div className="text-xs text-ink-dim uppercase tracking-wide max-w-[16ch] mt-1">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-16">
        {doors.map((d) => (
          <Link
            key={d.href}
            href={d.href}
            className="group bg-bg-raised border border-line hover:border-moss transition-colors motion-reduce:transition-none rounded-sm p-6 flex flex-col"
          >
            <span className="font-mono text-[11px] uppercase tracking-wider text-ink-dim">
              {d.tag}
            </span>
            <span className="font-display text-lg mt-2 mb-2">{d.title}</span>
            <span className="text-sm text-ink-dim flex-1">{d.desc}</span>
            <span className="mt-4 font-mono text-xs text-moss group-hover:underline">
              Read more →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
