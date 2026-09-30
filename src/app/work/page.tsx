"use client";

import { useState } from "react";
import SectionHeading from "@/components/section-heading";
import { Card } from "@/components/card";
import { workEntries, education } from "@/lib/data";

export default function Work() {
  const [view, setView] = useState<"roles" | "projects">("roles");

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading
        eyebrow="Proof"
        title="Work"
        sub="Two lenses on the same three years — role-first for seniority, project-first for craft. Same underlying data, re-sorted."
      />

      <div
        role="tablist"
        aria-label="Work view"
        className="inline-flex border border-line rounded-sm overflow-hidden font-mono text-xs uppercase tracking-wider mb-10"
      >
        <button
          role="tab"
          aria-selected={view === "roles"}
          onClick={() => setView("roles")}
          className={`px-4 py-2 transition-colors ${
            view === "roles" ? "bg-moss text-bg" : "bg-bg-raised text-ink-dim hover:text-ink"
          }`}
        >
          Roles
        </button>
        <button
          role="tab"
          aria-selected={view === "projects"}
          onClick={() => setView("projects")}
          className={`px-4 py-2 transition-colors border-l border-line ${
            view === "projects" ? "bg-moss text-bg" : "bg-bg-raised text-ink-dim hover:text-ink"
          }`}
        >
          Projects
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {workEntries.map((e) =>
          view === "roles" ? (
            <Card key={e.role}>
              <div className="flex flex-wrap justify-between items-baseline gap-2">
                <h3 className="font-display text-lg">{e.role}</h3>
                <span className="font-mono text-xs text-ink-dim">{e.period}</span>
              </div>
              <div className="flex flex-wrap justify-between items-baseline gap-2 text-ink-dim text-sm italic mb-3">
                <span>{e.org}</span>
                <span>{e.location}</span>
              </div>
              <ul className="list-disc pl-4 space-y-1.5 text-[15px]">
                {e.roleBullets.map((b) => (
                  <li key={b} className="marker:text-moss">
                    {b}
                  </li>
                ))}
              </ul>
            </Card>
          ) : (
            <Card key={e.projectTitle}>
              <h3 className="font-display text-lg">{e.projectTitle}</h3>
              <div className="text-ink-dim text-sm italic mb-3">{e.projectSubtitle}</div>
              <ul className="list-disc pl-4 space-y-1.5 text-[15px]">
                {e.projectBullets.map((b) => (
                  <li key={b} className="marker:text-moss">
                    {b}
                  </li>
                ))}
              </ul>
            </Card>
          )
        )}
      </div>

      <div className="mt-10 flex flex-col gap-1">
        <span className="font-mono text-[11px] uppercase tracking-wider text-ink-dim">
          Education
        </span>
        <p className="text-[15px]">
          {education.degree}, {education.school} ({education.period}) — {education.detail}
        </p>
        <p className="text-sm text-ink-dim">Schooling: {education.schooling}</p>
      </div>
    </div>
  );
}
