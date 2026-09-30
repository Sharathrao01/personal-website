import Image from "next/image";
import type { ReactNode } from "react";
import SectionNav from "@/components/section-nav";
import StreamText from "@/components/stream-text";
import CountUp from "@/components/count-up";
import ThemeToggle from "@/components/theme-toggle";
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowUpRight, ArrowRight } from "@/components/icons";
import {
  experience,
  projects,
  openSource,
  awards,
  speaking,
  publications,
  testimonials,
  hobbies,
  proofStats,
  education,
  certifications,
} from "@/lib/data";

const GITHUB = "https://github.com/Sharathrao01";
const LINKEDIN = "https://linkedin.com/in/sharath-s-rao";
const EMAIL = "mailto:sharathsrao4@gmail.com";
const RESUME = "/resume/Sharath_S_Rao.pdf";

export default function Home() {
  return (
    <div className="relative z-10 mx-auto min-h-screen max-w-6xl px-6 md:px-12 lg:px-16">
      <a
        href="#content"
        className="absolute left-0 top-0 -translate-y-full rounded bg-accent px-4 py-2 text-bg focus-visible:translate-y-3"
      >
        Skip to content
      </a>
      <div className="lg:flex lg:justify-between lg:gap-12">
        <Sidebar />
        <main id="content" className="pt-8 pb-24 lg:w-[54%] lg:py-24">
          <About />
          <Experience />
          <Projects />
          <Leadership />
          <Beyond />
          <Footer />
        </main>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <header className="pt-16 md:pt-20 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[42%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <div className="relative size-[88px] animate-rise">
          <div
            aria-hidden
            className="absolute inset-0 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,var(--accent),transparent_30%,var(--saffron)_55%,transparent_75%,var(--accent))] opacity-80"
          />
          <div className="absolute inset-[3px] overflow-hidden rounded-full border-[3px] border-bg">
            <Image
              src="/photos/individual-pics/portrait.jpg"
              alt="Sharath S Rao"
              fill
              sizes="88px"
              className="object-cover object-top"
              priority
            />
          </div>
          <span
            aria-hidden
            title="Open to conversations"
            className="absolute bottom-1 right-1 size-3.5 rounded-full border-2 border-bg bg-moss-400 shadow-[0_0_12px_var(--accent)]"
          />
        </div>

        <h1
          className="text-gradient mt-7 animate-rise text-4xl font-semibold tracking-tight sm:text-5xl"
          style={{ animationDelay: "80ms" }}
        >
          Sharath S Rao
        </h1>
        <h2
          className="mt-3 animate-rise text-lg font-medium text-ink sm:text-xl"
          style={{ animationDelay: "160ms" }}
        >
          GenAI Systems Engineer &amp; Technical Leader
        </h2>
        <p className="mt-4 max-w-sm text-ink-dim">
          <StreamText
            tokens={["I build multi-agent LLM systems that", { em: "hold up" }, "— in production, on a team, and in the ground."]}
          />
        </p>

        <dl className="mt-8 flex animate-rise gap-8" style={{ animationDelay: "400ms" }}>
          {proofStats.map((s) => (
            <div key={s.label} className="flex flex-col">
              <dt className="mt-1 max-w-[14ch] text-xs leading-snug text-ink-faint">{s.label}</dt>
              <dd className="order-first font-mono text-2xl text-ink tabular-nums">
                <CountUp value={s.value} />
              </dd>
            </div>
          ))}
        </dl>

        <SectionNav />
      </div>

      <div className="mt-10 flex animate-rise items-center gap-5 lg:mt-0" style={{ animationDelay: "550ms" }}>
        <Social href={GITHUB} label="GitHub">
          <GitHubIcon />
        </Social>
        <Social href={LINKEDIN} label="LinkedIn">
          <LinkedInIcon />
        </Social>
        <Social href={EMAIL} label="Email">
          <MailIcon />
        </Social>
        <a
          href={RESUME}
          className="border-shimmer ml-2 inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs text-ink transition-colors hover:text-accent"
        >
          Résumé <ArrowUpRight />
        </a>
        <ThemeToggle />
      </div>
    </header>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="text-ink-dim transition-colors hover:text-accent"
    >
      {children}
    </a>
  );
}

function Section({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <section id={id} aria-label={label} className="mb-24 scroll-mt-16 md:mb-32 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-6 bg-bg/80 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only">
        <h2 className="eyebrow font-semibold text-ink">
          {label}
        </h2>
      </div>
      {children}
    </section>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
      {tags.map((t) => (
        <li
          key={t}
          className="tag"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

// Card that lifts on hover while its siblings in the same list fade back (desktop only).
function HoverCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className="group relative transition-opacity duration-300 motion-reduce:transition-none lg:group-hover/list:opacity-50 lg:hover:!opacity-100"
    >
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-surface lg:group-hover:shadow-[inset_0_1px_0_0_var(--line)]" />
      <div className={`relative z-10 ${className}`}>{children}</div>
    </div>
  );
}

function About() {
  return (
    <Section id="about" label="About">
      <div className="reveal flex flex-col gap-4 text-ink-dim">
        <p>
          I started as an intern writing prompt-engineering frameworks before function calling
          existed in most LLM APIs. Today I&rsquo;m <Strong>Technical Head</Strong> at{" "}
          <Strong>TestMySkills.ai</Strong>, leading an 8-engineer team and owning the architecture of
          a platform that serves <Strong>24,000+ users</Strong>. What changed at each step
          wasn&rsquo;t the curiosity — it was the size of the system I was responsible for holding
          up.
        </p>
        <p>
          My day-to-day is <Strong>multi-agent systems on LangGraph</Strong>,{" "}
          <Strong>RAG pipelines</Strong>{" "}tuned until they hold at ~90% accuracy, and the practice
          I&rsquo;m proudest of: <Strong>Evaluation-Driven Development</Strong>, where every past
          failure becomes a permanent regression test that runs before code ships.
        </p>
        <p>
          EDD is really just <em className="font-serif text-[1.15em] italic text-ink">riyaz</em>{" "}
          applied to code — repeat until the failure stops recurring, then make the repetition
          automatic. That instinct didn&rsquo;t start in a codebase. It started with a bamboo flute,
          a watercolor brush, a patch of soil, and a circle of kids in a government-school courtyard
          who don&rsquo;t care how senior your title is if the explanation doesn&rsquo;t land.
        </p>
      </div>
    </Section>
  );
}

function Strong({ children }: { children: ReactNode }) {
  return <span className="font-medium text-ink">{children}</span>;
}

function Experience() {
  return (
    <Section id="experience" label="Experience">
      <ol className="group/list flex flex-col gap-12">
        {experience.map((e) => (
          <li key={e.role + e.period} className="reveal">
            <HoverCard className="sm:grid sm:grid-cols-8 sm:gap-6">
              <p className="mb-2 mt-1 font-mono text-xs uppercase tracking-wide text-ink-faint sm:col-span-2">
                {e.period}
              </p>
              <div className="sm:col-span-6">
                <h3 className="font-medium leading-snug text-ink group-hover:text-accent">
                  {e.role}
                  <span className="text-ink-dim group-hover:text-accent"> · {e.org}</span>
                </h3>
                <p className="mt-2 text-sm text-ink-dim">{e.summary}</p>
                <Tags tags={e.tags} />
              </div>
            </HoverCard>
          </li>
        ))}
      </ol>
      <a
        href={RESUME}
        className="group mt-12 inline-flex items-center gap-2 font-medium text-ink hover:text-accent"
      >
        View full résumé
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
      </a>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" label="Projects">
      <ul className="group/list flex flex-col gap-12">
        {projects.map((p) => (
          <li key={p.name} className="reveal">
            <HoverCard className="sm:grid sm:grid-cols-8 sm:gap-6">
              <div className="mb-3 sm:col-span-2 sm:mb-0">
                <div className="font-mono text-2xl text-saffron">{p.metric}</div>
                <div className="mt-1 text-xs leading-snug text-ink-faint">{p.metricLabel}</div>
              </div>
              <div className="sm:col-span-6">
                <h3 className="font-medium leading-snug text-ink group-hover:text-accent">
                  {p.name}
                  <span className="text-ink-dim group-hover:text-accent"> · {p.kind}</span>
                </h3>
                <p className="mt-2 text-sm text-ink-dim">{p.summary}</p>
                <Tags tags={p.tags} />
              </div>
            </HoverCard>
          </li>
        ))}
      </ul>

      <div className="mt-20">
        <h3 className="flex items-center gap-3 eyebrow text-ink">
          Building in public
          <span className="rounded-full border border-line px-2 py-0.5 text-[10px] normal-case tracking-normal text-ink-faint">
            in progress
          </span>
        </h3>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {openSource.map((r) => (
            <li key={r.name} className="reveal">
              <a
                href={`${GITHUB}/${r.name}`}
                target="_blank"
                rel="noreferrer"
                className="card card-glow card-interactive group flex h-full flex-col p-5"
              >
                <span className="flex items-center gap-2 font-mono text-sm text-ink group-hover:text-accent">
                  <GitHubIcon className="size-4 shrink-0" />
                  {r.name}
                  <ArrowUpRight className="ml-auto size-3.5 shrink-0 text-ink-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent motion-reduce:transition-none" />
                </span>
                <span className="mt-2 flex-1 text-sm text-ink-dim">{r.summary}</span>
                <span className="mt-3 font-mono text-[11px] text-ink-faint">{r.tags.join(" · ")}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

const eddSteps = [
  { n: "01", title: "Capture", body: "A failure case surfaces in eval or production." },
  { n: "02", title: "Store", body: "It's written to the eval database, with expected behaviour." },
  { n: "03", title: "Replay", body: "Every stored case re-runs as a pre-commit check in CI." },
  { n: "04", title: "Ship", body: "Features ship with confidence 95%+ of the time." },
];

function Leadership() {
  return (
    <Section id="leadership" label="Leadership">
      <div className="card card-glow reveal p-6 md:p-8">
        <p className="eyebrow text-saffron">Case study</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight">
          Evaluation-Driven Development
        </h3>
        <p className="mt-3 text-sm text-ink-dim">
          LLM features regress quietly. EDD turns every past mistake into a permanent test: known
          failure cases live in a database and replay automatically before code ships — paired with
          LLM-as-Judge pipelines for hallucination detection across the assessment platform.
        </p>
        <div className="relative mt-8 overflow-hidden rounded-lg">
        <span aria-hidden className="absolute top-0 z-10 hidden h-px w-28 animate-beam bg-gradient-to-r from-transparent via-accent to-transparent sm:block" />
        <span aria-hidden className="absolute bottom-0 z-10 hidden h-px w-28 animate-beam bg-gradient-to-r from-transparent via-saffron to-transparent [animation-delay:1.6s] sm:block" />
        <ol className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-4">
          {eddSteps.map((s, i) => (
            <li key={s.n} className="group/step relative bg-bg p-4 transition-colors hover:bg-surface-hover">
              <span className="font-mono text-[11px] text-accent transition-transform group-hover/step:scale-110 inline-block">{s.n}</span>
              <div className="mt-1 font-medium text-ink">{s.title}</div>
              <p className="mt-1 text-xs leading-relaxed text-ink-dim">{s.body}</p>
              {i < eddSteps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute right-3 top-4 hidden font-mono text-xs text-ink-faint sm:block"
                >
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {awards.map((a) => (
          <figure key={a.title} className="card card-glow card-interactive reveal group overflow-hidden">
            <div className="relative aspect-[4/3]">
              <Image
                src={a.photo}
                alt={`${a.title} ceremony`}
                fill
                sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
            <figcaption className="p-5">
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-medium text-ink">{a.title}</span>
                <span className="font-mono text-xs text-saffron">{a.year}</span>
              </div>
              <div className="mt-1 text-xs text-ink-faint">{a.org}</div>
              <p className="mt-2 text-sm text-ink-dim">{a.detail}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <h3 className="mt-16 eyebrow text-ink">
        Speaking &amp; community
      </h3>
      <ul className="group/list mt-6 flex flex-col gap-10">
        {speaking.map((s) => (
          <li key={s.title} className="reveal">
            <HoverCard className="sm:grid sm:grid-cols-8 sm:gap-6">
              <div className="mb-3 sm:col-span-2 sm:mb-0">
                {s.photo ? (
                  <div className="relative aspect-video overflow-hidden rounded border border-line">
                    <Image src={s.photo} alt="" fill sizes="160px" className="object-cover" />
                  </div>
                ) : (
                  <div className="flex aspect-video items-center justify-center rounded border border-line font-mono text-xs text-ink-faint">
                    150+ attendees
                  </div>
                )}
              </div>
              <div className="sm:col-span-6">
                <h4 className="font-medium text-ink group-hover:text-accent">{s.title}</h4>
                <p className="mt-2 text-sm text-ink-dim">{s.detail}</p>
              </div>
            </HoverCard>
          </li>
        ))}
      </ul>

      <h3 className="mt-16 eyebrow text-ink">Publications</h3>
      <ul className="mt-4 divide-y divide-line border-y border-line">
        {publications.map((p) => (
          <li key={p.title} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <span className="text-sm text-ink">{p.title}</span>
            <span className="shrink-0 font-mono text-[11px] text-ink-faint">{p.venue}</span>
          </li>
        ))}
      </ul>

      <h3 className="mt-16 eyebrow text-ink">In their words</h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {testimonials.map((t, i) => (
          <figure
            key={t.name}
            className={`card card-glow reveal flex flex-col p-6 ${
              i === 0 ? "sm:col-span-2" : ""
            }`}
          >
            <blockquote
              className={`flex-1 font-serif leading-snug text-ink ${
                i === 0 ? "text-2xl" : "text-lg"
              }`}
            >
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-xs text-ink-faint">
              <span className="font-medium text-ink-dim">{t.name}</span> — {t.context}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

function Beyond() {
  return (
    <Section id="beyond" label="Beyond the build">
      <p className="reveal mb-10 text-ink-dim">
        Not a hobbies footer — the training ground for the patience the rest of this page depends
        on.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {hobbies.map((h, i) => (
          <article
            key={h.name}
            className={`card card-glow card-interactive reveal group flex flex-col overflow-hidden ${
              i === 0 ? "sm:col-span-2 sm:flex-row" : ""
            }`}
          >
            {h.photo && (
              <div
                className={`relative aspect-[4/3] shrink-0 ${i === 0 ? "sm:aspect-auto sm:w-2/5" : ""}`}
              >
                <Image
                  src={h.photo}
                  alt={h.name}
                  fill
                  sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
            )}
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-serif text-2xl text-ink">{h.name}</h3>
              <p className="mt-2 text-sm text-ink-dim">{h.copy}</p>
              <div className="mt-auto pt-4">
                <p className="border-l-2 border-accent/50 pl-3 text-sm text-ink">{h.tie}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line pt-10 text-sm text-ink-dim">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="eyebrow text-ink">Education</h2>
          <p className="mt-3 text-ink">{education.degree}</p>
          <p className="mt-1">
            {education.school} · {education.period} · {education.detail}
          </p>
        </div>
        <div>
          <h2 className="eyebrow text-ink">Certifications</h2>
          <ul className="mt-3 flex flex-col gap-1.5">
            {certifications.map((c) => (
              <li key={c.name} className="flex justify-between gap-4">
                <span className="text-ink">{c.name}</span>
                <span className="shrink-0 font-mono text-xs text-ink-faint">{c.issuer}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-shimmer reveal mt-12 rounded-[var(--radius-card)] p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
        <div>
          <p className="text-lg font-medium text-ink">Building something with LLMs?</p>
          <p className="mt-1">I&rsquo;m based in Bangalore and always happy to talk shop.</p>
        </div>
        <a
          href={EMAIL}
          className="mt-4 inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-medium text-bg shadow-[0_0_28px_-6px_var(--accent)] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_0_36px_-4px_var(--accent)] sm:mt-0"
        >
          <MailIcon className="size-4" /> Get in touch
        </a>
      </div>

      <p className="mt-10 text-xs text-ink-faint">
        Built with Next.js and Tailwind CSS. Set in Inter, JetBrains Mono and Instrument Serif.
      </p>
    </footer>
  );
}
