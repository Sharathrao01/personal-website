import Image from "next/image";
import SectionHeading from "@/components/section-heading";
import { Quote } from "@/components/quote";
import { testimonials } from "@/lib/data";

const featured = testimonials.filter((t) => t.featured);
const rest = testimonials.filter((t) => !t.featured);

export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading
        eyebrow="About"
        title="One habit of mind, three columns"
        sub="Not a bio — an argument for how the engineering, the leadership, and the practice all come from the same place."
      />

      <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 items-start mb-14">
        <div className="flex flex-col gap-4">
          <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden border border-line">
            <Image
              src="/photos/individual-pics/portrait.jpg"
              alt="Sharath S Rao"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative w-full aspect-[3/4] rounded-sm overflow-hidden border border-line">
            <Image
              src="/photos/individual-pics/developer.jpg"
              alt="Sharath S Rao at work"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 text-[15px] max-w-[62ch]">
          <p>
            I started as an intern writing prompt-engineering frameworks before function-calling
            existed in most LLM APIs, and now lead an 8-engineer team owning architecture for a
            platform serving 24,000+ users. What changed at each step wasn&rsquo;t the curiosity —
            it was the size of the system I was responsible for holding up.
          </p>
          <p>
            Evaluation-Driven Development, the practice I&rsquo;m proudest of at work, is really
            just riyaz applied to code: repeat until the failure stops recurring, then make the
            repetition automatic. That instinct didn&rsquo;t start in a codebase. It started with
            a bamboo flute, a watercolor brush, a patch of soil, and a circle of kids in a
            government-school courtyard who don&rsquo;t care how senior your title is if the
            explanation doesn&rsquo;t land.
          </p>
          <p>
            Leading a team, tuning a RAG pipeline until it holds at 90% accuracy, and teaching a
            raga phrase until it stops slipping are the same discipline wearing different clothes:
            design carefully, tend patiently, hand it off well.
          </p>
        </div>
      </div>

      <SectionHeading
        eyebrow="In their words"
        title="Two strangers, the same word"
        sub="Two people who never met each other independently landed on the same read of the school advisory work."
      />
      <div className="grid md:grid-cols-2 gap-4 mb-10">
        {featured.map((t) => (
          <Quote key={t.name} quote={t.quote} name={t.name} context={t.context} large />
        ))}
      </div>

      <div className="flex flex-col divide-y divide-line border border-line rounded-sm overflow-hidden">
        {rest.map((t) => (
          <div key={t.name} className="bg-bg-raised px-5 py-4">
            <p className="text-sm italic">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-2 font-mono text-xs text-ink-dim">
              <span className="text-ink font-semibold not-italic">{t.name}</span> — {t.context}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
