import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/leadership", label: "Leadership & Strategy" },
  { href: "/beyond", label: "Beyond the Build" },
];

export default function Nav() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto max-w-4xl px-6 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-5">
        <Link href="/" className="font-display text-lg">
          Sharath S Rao
        </Link>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-wider text-ink-dim">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-moss transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
