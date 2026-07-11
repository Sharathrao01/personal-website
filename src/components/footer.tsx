import { certifications } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line mt-20">
      <div className="mx-auto max-w-4xl px-6 py-12 flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <div className="font-mono text-[11px] uppercase tracking-wider text-ink-dim">
            Credentials
          </div>
          <div className="flex flex-col divide-y divide-line border border-line rounded-sm overflow-hidden">
            {certifications.map((c) => (
              <div
                key={c.name}
                className="bg-bg-raised px-4 py-3 flex justify-between items-baseline gap-4"
              >
                <span className="text-sm">{c.name}</span>
                <span className="font-mono text-xs text-ink-dim whitespace-nowrap">
                  {c.issuer} · {c.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-ink-dim">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              className="hover:text-moss transition-colors"
              href="mailto:sharathsrao4@gmail.com"
            >
              sharathsrao4@gmail.com
            </a>
            <a
              className="hover:text-moss transition-colors"
              href="https://linkedin.com/in/sharath-s-rao"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/sharath-s-rao
            </a>
            <a
              className="hover:text-moss transition-colors"
              href="https://github.com/Sharathrao01"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Sharathrao01
            </a>
            <a className="hover:text-moss transition-colors" href="/resume/Sharath_S_Rao.pdf">
              Download résumé
            </a>
          </div>
          <span>Bangalore, India</span>
        </div>
      </div>
    </footer>
  );
}
