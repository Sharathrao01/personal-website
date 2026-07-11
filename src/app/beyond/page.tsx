import Image from "next/image";
import SectionHeading from "@/components/section-heading";
import { hobbies } from "@/lib/data";

export default function Beyond() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading
        eyebrow="Beyond the Build"
        title="What he tends"
        sub="Not a hobbies footer — the training ground for the patience the rest of the site depends on."
      />

      <div className="flex flex-col gap-4">
        {hobbies.map((h) => (
          <div
            key={h.name}
            className="border border-line rounded-sm overflow-hidden bg-bg-raised md:flex"
          >
            {h.photo && (
              <div className="relative w-full md:w-64 aspect-[4/3] md:aspect-auto shrink-0">
                <Image src={h.photo} alt={h.name} fill className="object-cover" />
              </div>
            )}
            <div className="p-6 flex flex-col justify-center">
              <h3 className="font-display text-lg mb-2">{h.name}</h3>
              <p className="text-[15px] mb-2">{h.copy}</p>
              <p className="text-sm text-ink-dim italic">{h.tie}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
