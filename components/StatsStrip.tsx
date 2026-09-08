"use client";

import { useI18n } from "@/lib/i18n";
import { stats } from "@/lib/data";
import Reveal from "./Reveal";

export default function StatsStrip() {
  const { pick } = useI18n();

  return (
    <section aria-label="Facts" className="border-b border-line bg-surface">
      <div className="container grid grid-cols-2 gap-y-8 py-12 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="px-2 text-center md:text-start">
              <div className="display text-[clamp(2.2rem,5vw,3.4rem)] leading-none">{s.value}</div>
              <div className="eyebrow mt-3">{pick(s.label)}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
