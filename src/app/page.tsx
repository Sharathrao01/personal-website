import Image from "next/image";
import type { ReactNode } from "react";
import Navbar from "@/components/navbar";
import NeuralBg from "@/components/neural-bg";
import RotatingWord from "@/components/rotating-word";
import StreamText from "@/components/stream-text";
import CountUp from "@/components/count-up";
import Timeline from "@/components/timeline";
import EddPipeline from "@/components/edd-pipeline";
import { Reveal, Magnetic, Tilt } from "@/components/motion";
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

const stack = [
  "LangGraph",
  "LangChain",
  "LangSmith",
  "RAG",
  "Multi-agent systems",
  "LLM-as-Judge",
  "pgvector",
  "HNSW",
  "PostgreSQL",
  "MCP",
  "RAGAS",
  "Ollama",
  "DeepSeek",
  "Python",
  "TypeScript",
  "Next.js",
  "NestJS",
  "Prompt engineering",
];

export default function Home() {
  return (
    <>
      <a
        href="#about"
        className="fixed left-4 top-4 z-[70] -translate-y-24 rounded-full bg-accent px-4 py-2 text-bg focus-visible:translate-y-0"
      >
        Skip to content
      </a>
      <Navbar />
      <main className="relative z-10 overflow-x-clip">
        <Hero />
        <StackMarquee />
        <About />
        <ExperienceSection />
        <Projects />
        <Leadership />
        <Testimonials />
        <Beyond />
        <Contact />
      </main>
    </>
  );
}

/* ---------------------------------- Shared ---------------------------------- */

function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

function SectionHeader({
  index,
  eyebrow,
  title,
  sub,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  sub?: string;
}) {
  return (
    <Reveal className="mb-14 max-w-3xl md:mb-20">
      <p className="eyebrow flex items-center gap-3 text-accent">
        <span className="font-mono text-ink-faint">{index}</span>
        <span className="h-px w-10 bg-gradient-to-r from-accent to-transparent" />
        {eyebrow}
      </p>
      <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {sub && <p className="mt-5 max-w-2xl text-lg text-ink-dim">{sub}</p>}
    </Reveal>
  );
}

function Serif({ children }: { children: ReactNode }) {
  return <em className="font-serif font-normal italic text-accent">{children}</em>;
}

function Section({ id, children, className = "" }: { id: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative scroll-mt-24 py-28 md:py-36 ${className}`}>
      {children}
    </section>
  );
}

/* ----------------------------------- Hero ----------------------------------- */

function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pb-24 pt-32">
      <NeuralBg />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,var(--bg)_75%)]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg" />

      <Container className="relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div
            className="flex animate-rise items-center gap-2.5 rounded-full border border-line bg-bg/60 px-4 py-1.5 text-xs text-ink-dim backdrop-blur"
            style={{ animationDelay: "100ms" }}
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping-slow rounded-full bg-accent" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            Technical Head — AI at TestMySkills.ai · Bangalore
          </div>

          <h1
            className="mt-8 animate-rise text-6xl font-semibold leading-[0.95] tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl"
            style={{ animationDelay: "200ms" }}
          >
            <span className="text-aurora inline-block animate-pan pb-2">Sharath S Rao</span>
          </h1>

          <p
            className="mt-8 animate-rise text-2xl font-medium leading-snug text-ink sm:text-3xl md:text-4xl"
            style={{ animationDelay: "350ms" }}
          >
            I build{" "}
            <RotatingWord words={["multi-agent systems", "RAG pipelines", "LLM eval harnesses", "AI platforms"]} />
            <br className="hidden sm:block" /> that <Serif>hold up.</Serif>
          </p>

          <p className="mt-6 max-w-2xl text-base text-ink-dim sm:text-lg">
            <StreamText
              start={0.7}
              step={0.045}
              tokens={[
                "GenAI systems engineer and technical leader — shipping LLM systems to production, leading the team that builds them, and teaching what I learn along the way.",
              ]}
            />
          </p>

          <div
            className="mt-10 flex animate-rise flex-wrap items-center justify-center gap-4"
            style={{ animationDelay: "900ms" }}
          >
            <Magnetic>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-medium text-bg shadow-[0_0_40px_-8px_var(--accent)] transition-shadow hover:shadow-[0_0_56px_-6px_var(--accent)]"
              >
                See my work
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href={RESUME} className="border-shimmer inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-medium text-ink">
                Résumé <ArrowUpRight />
              </a>
            </Magnetic>
          </div>

          <div className="mt-8 flex animate-rise items-center gap-6 text-ink-dim" style={{ animationDelay: "1050ms" }}>
            <IconLink href={GITHUB} label="GitHub">
              <GitHubIcon />
            </IconLink>
            <IconLink href={LINKEDIN} label="LinkedIn">
              <LinkedInIcon />
            </IconLink>
            <IconLink href={EMAIL} label="Email">
              <MailIcon />
            </IconLink>
          </div>

          <dl
            className="mt-16 grid w-full max-w-2xl animate-rise grid-cols-3 gap-3"
            style={{ animationDelay: "1200ms" }}
          >
            {proofStats.map((s) => (
              <div key={s.label} className="card card-glow flex flex-col bg-bg/50 px-3 py-5 backdrop-blur sm:px-5">
                <dt className="mt-1 text-[11px] leading-snug text-ink-faint sm:text-xs">{s.label}</dt>
                <dd className="order-first font-mono text-2xl font-medium tabular-nums text-ink sm:text-4xl">
                  <CountUp value={s.value} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 hidden h-10 w-6 -translate-x-1/2 justify-center rounded-full border border-line-strong pt-2 md:flex"
      >
        <span className="h-2 w-1 animate-scroll-cue rounded-full bg-accent" />
      </a>
    </section>
  );
}

function IconLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="transition-all hover:-translate-y-0.5 hover:text-accent"
    >
      {children}
    </a>
  );
}

/* ---------------------------------- Stack ----------------------------------- */

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="marquee-pause flex overflow-hidden mask-fade-x">
      <ul
        className={`flex shrink-0 gap-3 pr-3 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ ["--marquee-duration" as string]: "45s" }}
      >
        {[...items, ...items].map((t, i) => (
          <li
            key={i}
            aria-hidden={i >= items.length}
            className="flex shrink-0 items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 font-mono text-sm text-ink-dim transition-colors hover:border-accent/50 hover:text-accent"
          >
            <span className="size-1.5 rounded-full bg-accent/70" />
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

function StackMarquee() {
  return (
    <section aria-label="Tech stack" className="relative flex flex-col gap-3 border-y border-line py-8">
      <MarqueeRow items={stack} />
      <MarqueeRow items={[...stack].reverse()} reverse />
    </section>
  );
}

/* ---------------------------------- About ----------------------------------- */

function About() {
  return (
    <Section id="about">
      <Container>
        <div className="grid items-center gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <Reveal className="relative mx-auto w-full max-w-sm">
            <Tilt className="group rounded-[2rem]">
              <div className="card relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                <Image
                  src="/photos/individual-pics/portrait.jpg"
                  alt="Sharath S Rao"
                  fill
                  sizes="(min-width: 768px) 380px, 90vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
              </div>
            </Tilt>
            <div className="card absolute -right-3 top-10 animate-float bg-bg/80 px-4 py-3 backdrop-blur sm:-right-10">
              <div className="font-mono text-xl text-saffron">24,000+</div>
              <div className="text-xs text-ink-faint">users served</div>
            </div>
            <div
              className="card absolute -left-3 bottom-12 animate-float bg-bg/80 px-4 py-3 backdrop-blur sm:-left-10"
              style={{ animationDelay: "-3s" }}
            >
              <div className="font-mono text-xl text-accent">~90%</div>
              <div className="text-xs text-ink-faint">RAG accuracy</div>
            </div>
          </Reveal>

          <div>
            <SectionHeader
              index="01"
              eyebrow="About"
              title={
                <>
                  The system got bigger. <Serif>The curiosity stayed.</Serif>
                </>
              }
            />
            <Reveal delay={0.1} className="-mt-6 flex flex-col gap-5 text-lg leading-relaxed text-ink-dim">
              <p>
                I started as an intern writing prompt-engineering frameworks before function calling existed
                in most LLM APIs. Today I&rsquo;m <B>Technical Head</B> at <B>TestMySkills.ai</B>, leading an{" "}
                <B>8-engineer team</B> and owning the architecture of a platform that serves{" "}
                <B>24,000+ users</B>.
              </p>
              <p>
                My day-to-day is <B>multi-agent systems on LangGraph</B>, <B>RAG pipelines</B>{" "}tuned until they
                hold at ~90% accuracy, and the practice I&rsquo;m proudest of —{" "}
                <B>Evaluation-Driven Development</B>, where every past failure becomes a permanent test.
              </p>
              <p>
                EDD is really just <Serif>riyaz</Serif> applied to code: repeat until the failure stops recurring,
                then make the repetition automatic. That instinct started with a bamboo flute, a watercolor brush, a
                patch of soil, and a circle of kids in a government-school courtyard.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function B({ children }: { children: ReactNode }) {
  return <span className="font-medium text-ink">{children}</span>;
}

/* -------------------------------- Experience -------------------------------- */

function ExperienceSection() {
  return (
    <Section id="experience">
      <Container>
        <SectionHeader
          index="02"
          eyebrow="Experience"
          title={
            <>
              From intern to <Serif>Technical Head</Serif> in three years.
            </>
          }
        />
        <Timeline items={experience} />
        <Reveal className="mt-14 flex justify-center">
          <a href={RESUME} className="group inline-flex items-center gap-2 font-medium text-ink hover:text-accent">
            View full résumé
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </Container>
    </Section>
  );
}

/* --------------------------------- Projects --------------------------------- */

const projectSpan = ["md:col-span-4", "md:col-span-2", "md:col-span-3", "md:col-span-3"];

function Projects() {
  return (
    <Section id="projects">
      <Container>
        <SectionHeader
          index="03"
          eyebrow="Selected work"
          title={
            <>
              Systems in production, <Serif>measured.</Serif>
            </>
          }
          sub="Every project here shipped to real users. The number on each card is the one I'd defend in an interview."
        />

        <div className="grid gap-5 md:grid-cols-6">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 0.1} className={projectSpan[i] ?? "md:col-span-3"}>
              <Tilt className="group h-full rounded-[var(--radius-card)]" max={4}>
                <article className="card card-glow relative flex h-full flex-col overflow-hidden p-7 md:p-8">
                  <div
                    aria-hidden
                    className="absolute -right-16 -top-16 size-48 rounded-full bg-accent/10 blur-3xl transition-transform duration-700 group-hover:scale-150"
                  />
                  <p className="eyebrow text-ink-faint">{p.kind}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink">{p.name}</h3>
                  <div className="mt-6 bg-gradient-to-br from-saffron to-accent bg-clip-text font-mono text-5xl font-semibold text-transparent md:text-6xl">
                    {p.metric}
                  </div>
                  <p className="mt-1 text-sm text-ink-faint">{p.metricLabel}</p>
                  <p className="mt-5 flex-1 text-sm leading-relaxed text-ink-dim">{p.summary}</p>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                    {p.tags.map((t) => (
                      <li key={t} className="tag">
                        {t}
                      </li>
                    ))}
                  </ul>
                </article>
              </Tilt>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-24">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-2xl font-semibold tracking-tight text-ink">Building in public</h3>
            <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-ink-faint">
              in progress
            </span>
          </div>
          <p className="mt-2 text-ink-dim">Open-source GenAI projects I&rsquo;m building commit by commit.</p>
        </Reveal>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {openSource.map((r, i) => (
            <li key={r.name}>
              <Reveal delay={(i % 3) * 0.08} className="h-full">
                <a
                  href={`${GITHUB}/${r.name}`}
                  target="_blank"
                  rel="noreferrer"
                  className="card card-glow card-interactive group flex h-full flex-col p-6"
                >
                  <span className="flex items-center gap-2 font-mono text-sm text-ink group-hover:text-accent">
                    <GitHubIcon className="size-4 shrink-0" />
                    {r.name}
                    <ArrowUpRight className="ml-auto size-3.5 shrink-0 text-ink-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </span>
                  <span className="mt-3 flex-1 text-sm text-ink-dim">{r.summary}</span>
                  <span className="mt-4 font-mono text-[11px] text-ink-faint">{r.tags.join(" · ")}</span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

/* -------------------------------- Leadership -------------------------------- */

function Leadership() {
  return (
    <Section id="leadership">
      <Container>
        <SectionHeader
          index="04"
          eyebrow="Leadership"
          title={
            <>
              Every past failure becomes a <Serif>permanent test.</Serif>
            </>
          }
          sub="Evaluation-Driven Development is the practice I pioneered for our team. LLM features regress quietly, so known failure cases live in a database and replay automatically before code ships — paired with LLM-as-Judge pipelines for hallucination detection."
        />
        <EddPipeline />

        <div className="mt-28 grid gap-5 md:grid-cols-2">
          {awards.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.1}>
              <figure className="card card-glow card-interactive group relative aspect-[4/3] overflow-hidden">
                <Image
                  src={a.photo}
                  alt={`${a.title} ceremony`}
                  fill
                  sizes="(min-width: 768px) 560px, 100vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-saffron-300 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-black">
                      {a.year}
                    </span>
                    <span className="text-xs text-white/70">{a.org}</span>
                  </div>
                  <div className="mt-2 text-2xl font-semibold tracking-tight">{a.title}</div>
                  <p className="mt-1 max-w-md text-sm text-white/75">{a.detail}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {speaking.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className="h-full">
              <article className="card card-glow card-interactive group flex h-full flex-col overflow-hidden">
                <div className="relative aspect-video overflow-hidden border-b border-line">
                  {s.photo ? (
                    <Image
                      src={s.photo}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 360px, 100vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  ) : (
                    <div className="grid size-full place-items-center bg-gradient-to-br from-accent/15 via-transparent to-saffron/15">
                      <div className="text-center">
                        <div className="font-mono text-4xl font-semibold text-ink">150+</div>
                        <div className="text-xs text-ink-faint">attendees</div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex-1 p-6">
                  <h3 className="font-semibold text-ink group-hover:text-accent">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-dim">{s.detail}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <h3 className="eyebrow text-ink-faint">Publications</h3>
          <ul className="mt-5 divide-y divide-line border-y border-line">
            {publications.map((p) => (
              <li
                key={p.title}
                className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
              >
                <span className="flex items-center gap-3 text-ink transition-transform group-hover:translate-x-1">
                  <span className="size-1.5 rounded-full bg-accent opacity-40 transition-opacity group-hover:opacity-100" />
                  {p.title}
                </span>
                <span className="shrink-0 font-mono text-xs text-ink-faint">{p.venue}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}

/* ------------------------------- Testimonials ------------------------------- */

function initials(name: string) {
  return name
    .split(" ")
    .filter((w) => /^[A-Z]/.test(w) && w !== "Dr")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

function Testimonials() {
  return (
    <section aria-labelledby="words" className="relative overflow-hidden py-24">
      <Container>
        <Reveal>
          <h2 id="words" className="eyebrow text-center text-accent">
            In their words
          </h2>
        </Reveal>
      </Container>
      <div className="marquee-pause mt-10 flex overflow-hidden mask-fade-x">
        <ul className="flex shrink-0 animate-marquee gap-5 pr-5" style={{ ["--marquee-duration" as string]: "80s" }}>
          {[...testimonials, ...testimonials].map((t, i) => (
            <li
              key={i}
              aria-hidden={i >= testimonials.length}
              className="card flex w-[20rem] shrink-0 flex-col p-7 sm:w-[28rem]"
            >
              <span aria-hidden className="font-serif text-6xl leading-none text-accent/60">
                &ldquo;
              </span>
              <blockquote className="-mt-4 flex-1 font-serif text-xl leading-snug text-ink">{t.quote}</blockquote>
              <div className="mt-6 flex items-center gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-accent/30 to-saffron/30 text-xs font-semibold text-ink">
                  {initials(t.name)}
                </span>
                <div className="text-sm">
                  <div className="font-medium text-ink">{t.name}</div>
                  <div className="text-xs text-ink-faint">{t.context}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------------------------- Beyond ---------------------------------- */

function Beyond() {
  return (
    <Section id="beyond">
      <Container>
        <SectionHeader
          index="05"
          eyebrow="Beyond the build"
          title={
            <>
              Where the <Serif>patience</Serif> comes from.
            </>
          }
          sub="Not a hobbies footer — the training ground for everything above. Hover a card to see how it shows up at work."
        />
        <div className="grid gap-5 md:grid-cols-6">
          {hobbies.map((h, i) => (
            <Reveal key={h.name} delay={(i % 3) * 0.08} className={h.photo ? "md:col-span-2" : "md:col-span-3"}>
              <article className="card card-glow card-interactive group relative flex h-full min-h-[24rem] flex-col justify-end overflow-hidden">
                {h.photo ? (
                  <>
                    <Image
                      src={h.photo}
                      alt={h.name}
                      fill
                      sizes="(min-width: 768px) 380px, 100vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/5" />
                  </>
                ) : (
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,var(--accent-soft),transparent_55%),radial-gradient(circle_at_10%_90%,var(--saffron-soft),transparent_50%)]"
                  />
                )}
                <div className={`relative p-6 ${h.photo ? "text-white" : ""}`}>
                  <h3 className={`font-serif text-3xl ${h.photo ? "" : "text-ink"}`}>{h.name}</h3>
                  <p className={`mt-2 text-sm leading-relaxed ${h.photo ? "text-white/80" : "text-ink-dim"}`}>
                    {h.copy}
                  </p>
                  <p
                    className={`mt-4 border-l-2 pl-3 text-sm leading-relaxed transition-all duration-500 md:max-h-0 md:overflow-hidden md:opacity-0 md:group-hover:max-h-40 md:group-hover:opacity-100 md:group-focus-within:max-h-40 md:group-focus-within:opacity-100 ${
                      h.photo ? "border-saffron-300 text-white" : "border-accent text-ink"
                    }`}
                  >
                    {h.tie}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ---------------------------------- Contact --------------------------------- */

function Contact() {
  return (
    <Section id="contact" className="pb-12">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-line px-6 py-20 text-center sm:px-12 md:py-28">
            <div
              aria-hidden
              className="absolute inset-0 animate-pan bg-[linear-gradient(120deg,var(--accent-soft),transparent_40%,var(--saffron-soft)_70%,var(--accent-soft))] bg-[length:200%_200%]"
            />
            <div aria-hidden className="absolute inset-0 bg-dots opacity-60" />
            <div className="relative">
              <p className="eyebrow text-accent">06 · Contact</p>
              <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl">
                Let&rsquo;s build something that <Serif>holds up.</Serif>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-ink-dim">
                Building with LLMs, hiring for GenAI, or looking for a speaker for your students? My inbox is open.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Magnetic>
                  <a
                    href={EMAIL}
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-4 font-medium text-bg shadow-[0_0_48px_-8px_var(--accent)] transition-shadow hover:shadow-[0_0_64px_-6px_var(--accent)] sm:px-8 sm:text-lg"
                  >
                    <MailIcon className="size-5" /> sharathsrao4@gmail.com
                  </a>
                </Magnetic>
              </div>
              <div className="mt-8 flex items-center justify-center gap-6 text-ink-dim">
                <IconLink href={GITHUB} label="GitHub">
                  <GitHubIcon className="size-6" />
                </IconLink>
                <IconLink href={LINKEDIN} label="LinkedIn">
                  <LinkedInIcon className="size-6" />
                </IconLink>
              </div>
            </div>
          </div>
        </Reveal>

        <footer className="mt-16 grid gap-10 border-t border-line pt-10 text-sm text-ink-dim md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-semibold text-ink">
              <span className="grid size-7 place-items-center rounded-full bg-gradient-to-br from-accent to-saffron font-mono text-[11px] font-bold text-bg">
                SR
              </span>
              Sharath S Rao
            </div>
            <p className="mt-3">GenAI Systems Engineer &amp; Technical Leader · Bangalore, India</p>
          </div>
          <div>
            <h3 className="eyebrow text-ink-faint">Education</h3>
            <p className="mt-3 text-ink">{education.degree}</p>
            <p className="mt-1">
              {education.school} · {education.period} · {education.detail}
            </p>
          </div>
          <div>
            <h3 className="eyebrow text-ink-faint">Certifications</h3>
            <ul className="mt-3 flex flex-col gap-1.5">
              {certifications.map((c) => (
                <li key={c.name} className="flex justify-between gap-4">
                  <span className="text-ink">{c.name}</span>
                  <span className="shrink-0 font-mono text-xs text-ink-faint">{c.issuer}</span>
                </li>
              ))}
            </ul>
          </div>
        </footer>
        <p className="mt-10 text-center text-xs text-ink-faint">
          Built with Next.js, Tailwind CSS and Motion · Bangalore
        </p>
      </Container>
    </Section>
  );
}
