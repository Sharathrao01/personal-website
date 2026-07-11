import { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-bg-raised border border-line rounded-sm p-6 hover:border-moss transition-colors motion-reduce:transition-none ${className}`}
    >
      {children}
    </div>
  );
}

export function Callout({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-moss-soft border border-line border-l-[3px] border-l-moss rounded-sm px-6 py-5">
      <div className="font-mono text-[11px] uppercase tracking-wider text-moss">{label}</div>
      <p className="mt-2 text-[15px] max-w-none">{children}</p>
    </div>
  );
}
