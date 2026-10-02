import Image from "next/image";
import type { ReactNode } from "react";
import Navbar from "@/components/navbar";
import NeuralBg from "@/components/neural-bg";
import RotatingWord from "@/components/rotating-word";
import StreamText from "@/components/stream-text";
import CountUp from "@/components/count-up";
import Timeline from "@/components/timeline";
import EddPipeline from "@/components/edd-pipeline";
import TestimonialCarousel from "@/components/testimonial-carousel";
import { Reveal, Magnetic, Tilt } from "@/components/motion";
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowUpRight, ArrowRight } from "@/components/icons";
import {
  experience,
  projects,
  openSource,
  awards,
  changeAgents,
  mentorship,
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
        className="fixed left-4 top-4 z-[70] -translate-y-32 rounded-full bg-accent px-4 py-2 text-bg focus-visible:translate-y-0"
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
        className={`flex shrink-0 gap-3 pr-3 [animation-duration:45s] ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
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

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
      {tags.map((t) => (
        <li key={t} className="tag">
          {t}
        </li>
      ))}
    </ul>
  );
}

// Faint glow in the card corner that swells on hover.
function CornerGlow() {
  return (
    <div
      aria-hidden
      className="absolute -right-16 -top-16 size-48 rounded-full bg-accent/10 blur-3xl transition-transform duration-700 group-hover:scale-150"
    />
  );
}

function Metric({ value, label, big = false }: { value: string; label: string; big?: boolean }) {
  return (
    <div>
      <div
        className={`bg-gradient-to-br from-saffron to-accent bg-clip-text font-mono font-semibold text-transparent ${
          big ? "text-6xl md:text-7xl" : "text-5xl"
        }`}
      >
        {value}
      </div>
      {/* Fixed two-line height so summaries start on the same line across a row. */}
      <p className="mt-1 min-h-[2.5rem] text-sm leading-5 text-ink-faint">{label}</p>
    </div>
  );
}

// Rows of 2 (sm) and 3 (lg, on a six-column grid); a short last row stretches to fill it.
function repoSpan(i: number, n: number) {
  const sm = n % 2 === 1 && i === n - 1 ? "sm:col-span-2" : "";
  const lastRow = n % 3;
  const lg = lastRow && i >= n - lastRow ? (lastRow === 2 ? "lg:col-span-3" : "lg:col-span-6") : "lg:col-span-2";
  return `${sm} ${lg}`;
}

function Projects() {
  const [featured, ...rest] = projects;
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

        {/* Featured project across the full width, then three equal cards. */}
        <Reveal>
          <Tilt className="group rounded-[var(--radius-card)]" max={2}>
            <article className="card card-glow relative grid gap-8 overflow-hidden p-7 md:grid-cols-[1.6fr_1fr] md:items-center md:p-10">
              <CornerGlow />
              <div>
                <p className="eyebrow text-ink-faint">Featured · {featured.kind}</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-ink">{featured.name}</h3>
                <p className="mt-4 leading-relaxed text-ink-dim">{featured.summary}</p>
                <Tags tags={featured.tags} />
              </div>
              <div className="border-line md:border-l md:pl-10">
                <Metric value={featured.metric} label={featured.metricLabel} big />
              </div>
            </article>
          </Tilt>
        </Reveal>

        <div className="mt-5 grid gap-5 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1} className="h-full">
              <Tilt className="group h-full rounded-[var(--radius-card)]" max={4}>
                <article className="card card-glow relative flex h-full flex-col overflow-hidden p-7">
                  <CornerGlow />
                  <p className="eyebrow text-ink-faint">{p.kind}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink">{p.name}</h3>
                  <div className="mt-6">
                    <Metric value={p.metric} label={p.metricLabel} />
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-dim">{p.summary}</p>
                  <Tags tags={p.tags} />
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
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {openSource.map((r, i) => (
            <li key={r.name} className={repoSpan(i, openSource.length)}>
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

// Resting spot for each collage print, and where it fans out to on hover.
const collageSpots = [
  "left-0 top-0 z-10 -rotate-6 group-hover/collage:-translate-x-3 group-hover/collage:-rotate-9",
  "right-0 top-[18%] z-20 rotate-[5deg] group-hover/collage:translate-x-3 group-hover/collage:rotate-[8deg]",
  "bottom-0 left-[16%] z-30 -rotate-1 group-hover/collage:translate-y-2 group-hover/collage:rotate-1",
];

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

        <Reveal className="mt-28">
          <article className="card card-glow group relative overflow-hidden lg:grid lg:grid-cols-[1.15fr_1fr] lg:items-center">
            {/* Framed at the photo's own 4:3 ratio, so the whole room is always visible. */}
            <div className="p-3 sm:p-4 lg:p-5 lg:pr-0">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-line">
                <Image
                  src={changeAgents.photo}
                  alt="Sharath leading a Change Agents committee meeting at Zysk"
                  fill
                  quality={90}
                  sizes="(min-width: 1152px) 600px, (min-width: 1024px) 52vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="relative p-7 pt-4 sm:p-8 sm:pt-5 lg:p-10">
              <p className="eyebrow text-saffron">Culture leadership</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink md:text-3xl">{changeAgents.role}</h3>
              <p className="text-sm text-accent">{changeAgents.org}</p>
              <p className="mt-4 leading-relaxed text-ink-dim">{changeAgents.summary}</p>

              <div className="mt-6 flex items-center gap-4 rounded-2xl border border-saffron/30 bg-saffron-soft px-4 py-3.5">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-saffron-300 to-moss-300 text-black">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden className="size-5">
                    <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15Z" />
                    <path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20v3H6.5A2.5 2.5 0 0 1 4 20.5ZM8 7h8M8 10.5h6" />
                  </svg>
                </span>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-ink-faint">First-ever Zysk magazine</div>
                  <div className="font-serif text-2xl leading-tight text-ink">{changeAgents.magazine}</div>
                </div>
              </div>

              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Committees">
                {changeAgents.committees.map((c, i) => (
                  <li
                    key={c}
                    className="flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-ink transition-colors hover:border-accent/60"
                  >
                    <span className="font-mono text-[11px] text-accent">0{i + 1}</span>
                    {c}
                  </li>
                ))}
              </ul>

              <dl className="mt-8 grid grid-cols-3 gap-3 border-t border-line pt-6">
                {changeAgents.stats.map((s) => (
                  <div key={s.label} className="flex flex-col">
                    <dt className="mt-1 text-xs text-ink-faint">{s.label}</dt>
                    <dd className="order-first bg-gradient-to-br from-saffron to-accent bg-clip-text font-mono text-3xl font-semibold text-transparent">
                      <CountUp value={s.value} />
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>
        </Reveal>

        <Reveal className="mt-10">
          <article className="card card-glow group/collage relative grid items-center gap-8 overflow-hidden p-6 sm:p-8 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="eyebrow text-saffron">{mentorship.eyebrow}</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink">{mentorship.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-dim">{mentorship.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Details">
                {mentorship.tags.map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Overlapping prints that fan out on hover; frames keep the photos' own ratio, so nothing is cropped. */}
            <div className="relative mx-auto h-52 w-full max-w-md sm:h-60">
              {mentorship.photos.map((ph, i) => (
                <figure
                  key={ph.src}
                  className={`absolute aspect-[1600/760] w-[64%] overflow-hidden rounded-lg border-4 border-bg shadow-[0_12px_32px_-12px_rgb(0_0_0/0.6)] ring-1 ring-line transition-all duration-500 ease-out hover:z-40 hover:scale-[1.08] motion-reduce:transition-none ${collageSpots[i]}`}
                >
                  <Image src={ph.src} alt={ph.alt} fill quality={90} sizes="(min-width: 1024px) 300px, 64vw" className="object-cover" />
                </figure>
              ))}
            </div>
          </article>
        </Reveal>

        <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {awards.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.1} className="h-full">
              <figure className="card card-glow card-interactive group flex h-full flex-col overflow-hidden">
                {/* Landscape frame matches the photos, so nothing is upscaled or heavily cropped. */}
                <div className="relative aspect-[3/2] overflow-hidden border-b border-line">
                  <Image
                    src={a.photo}
                    alt={`${a.title} ceremony`}
                    fill
                    quality={90}
                    sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-saffron-300 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-black shadow-lg">
                    {a.year}
                  </span>
                </div>
                <figcaption className="flex flex-1 flex-col p-6">
                  <span className="text-xs text-ink-faint">{a.org}</span>
                  <span className="mt-1.5 text-xl font-semibold tracking-tight text-ink group-hover:text-accent">
                    {a.title}
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-ink-dim">{a.detail}</p>
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

function Testimonials() {
  return (
    <section aria-labelledby="words" className="relative overflow-hidden py-24">
      <Container>
        <Reveal className="mb-10 flex flex-col items-center text-center">
          <h2 id="words" className="eyebrow text-accent">
            In their words
          </h2>
          <p className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            What people I&rsquo;ve worked with <Serif>say.</Serif>
          </p>
        </Reveal>
      </Container>
      <Reveal>
        <TestimonialCarousel items={testimonials} />
      </Reveal>
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
