"use client";

import { useI18n } from "@/lib/i18n";
import { stats, aiStack } from "@/lib/data";
import Reveal from "./Reveal";

export default function StatsStrip() {
  const { pick, lang } = useI18n();
  const ribbon = [...aiStack, ...aiStack];

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

      {/* AI stack — a quiet marquee, the modern signal */}
      <div className="marquee-row overflow-hidden border-t border-line py-3">
        <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap will-change-transform">
          {ribbon.map((tool, i) => (
            <span key={i} className="mono text-[0.7rem] uppercase tracking-[0.2em] text-faint">
              {lang === "ar" ? "معزّز بـ" : "Augmented with"} {tool}
              <span className="ms-10 text-seal">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
