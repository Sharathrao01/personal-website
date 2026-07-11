import Image from "next/image";
import SectionHeading from "@/components/section-heading";
import { Card } from "@/components/card";
import { awards, publications, speaking } from "@/lib/data";

export default function Leadership() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading
        eyebrow="Leadership & Strategy"
        title="How he decides"
        sub="The part most engineer portfolios leave out: owning architecture for a team, pioneering a practice, and the recognition that followed."
      />

      <Card className="mb-10">
        <span className="font-mono text-[11px] uppercase tracking-wider text-saffron">
          Case study
        </span>
        <h3 className="font-display text-xl mt-2 mb-3">Evaluation-Driven Development</h3>
        <p className="text-[15px] max-w-[65ch]">
          Known failure cases are stored in a database and automatically replayed as pre-commit
          checks — a CI-integrated eval pipeline that turns every past mistake into a permanent
          regression test. The result: confident feature shipping 95%+ of the time, on a platform
          serving 24,000+ users. Paired with LLM-as-Judge pipelines for hallucination detection
          and structured quality gates across the assessment platform.
        </p>
      </Card>

      <Card className="mb-10">
        <span className="font-mono text-[11px] uppercase tracking-wider text-saffron">
          Team & architecture
        </span>
        <h3 className="font-display text-xl mt-2 mb-3">Leading an 8-engineer team</h3>
        <p className="text-[15px] max-w-[65ch]">
          Owns end-to-end architecture (HLD + LLD + UML) across a multi-tenant B2C/B2B platform,
          and led product ownership on Zyskie — a GenAI-powered HRMS covering hiring, workforce
          management, and internal talent discovery, built and shipped with a team of eight.
        </p>
      </Card>

      <div className="grid md:grid-cols-2 gap-4 mb-10">
        {awards.map((a) => (
          <div key={a.title} className="border border-line rounded-sm overflow-hidden bg-bg-raised">
            <div className="relative w-full aspect-[4/3]">
              <Image src={a.photo} alt={a.title} fill className="object-cover" />
            </div>
            <div className="p-5">
              <div className="flex justify-between items-baseline gap-2">
                <h3 className="font-display text-lg">{a.title}</h3>
                <span className="font-mono text-xs text-ink-dim">{a.year}</span>
              </div>
              <div className="text-sm text-ink-dim italic mb-2">{a.org}</div>
              <p className="text-sm">{a.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <SectionHeading eyebrow="Speaking & community" title="Teaching what he builds" />
      <div className="flex flex-col gap-4 mb-10">
        {speaking.map((s) => (
          <div
            key={s.title}
            className="border border-line rounded-sm overflow-hidden bg-bg-raised md:flex"
          >
            {s.photo && (
              <div className="relative w-full md:w-56 aspect-[4/3] md:aspect-auto shrink-0">
                <Image src={s.photo} alt={s.title} fill className="object-cover" />
              </div>
            )}
            <div className="p-5">
              <h3 className="font-display text-lg mb-1">{s.title}</h3>
              <p className="text-sm text-ink-dim">{s.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <SectionHeading eyebrow="Publications" title="Three papers" />
      <div className="flex flex-col divide-y divide-line border border-line rounded-sm overflow-hidden">
        {publications.map((p) => (
          <div key={p.title} className="bg-bg-raised px-5 py-4 flex justify-between items-baseline gap-4">
            <span className="text-sm">{p.title}</span>
            <span className="font-mono text-xs text-ink-dim whitespace-nowrap">{p.venue}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
