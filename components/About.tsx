"use client";

import { useI18n } from "@/lib/i18n";
import { about, profile, socials } from "@/lib/data";
import Reveal from "./Reveal";

export default function About() {
  const { t, pick, lang } = useI18n();

  return (
    <section id="about" className="section border-b border-line">
      <div className="container">
        <Reveal>
          <span className="eyebrow block">{t("idx.about")}</span>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-[1.5fr_1fr]">
          {/* narrative */}
          <div>
            <Reveal delay={0.05}>
              <h2 className="display text-[clamp(2.4rem,6vw,4.4rem)]">{pick(about.title)}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lede mt-6 max-w-[46ch] font-semibold text-ink">{pick(about.note)}</p>
            </Reveal>
            <Reveal delay={0.16}>
              <p
                className="mt-6 max-w-[62ch] leading-relaxed text-muted"
                dangerouslySetInnerHTML={{ __html: pick(about.p1) }}
              />
            </Reveal>
            <Reveal delay={0.22}>
              <p className="mt-4 max-w-[62ch] leading-relaxed text-muted">{pick(about.p2)}</p>
            </Reveal>
          </div>

          {/* facts card + socials */}
          <Reveal delay={0.18}>
            <div className="border border-line bg-surface p-7">
              <dl className="space-y-5">
                <Fact label={pick(about.facts.based)} value={pick(profile.location)} />
                <Fact label={pick(about.facts.since)} value={profile.established} mono />
                <Fact label={pick(about.facts.langs)} value={pick(about.facts.langsValue)} />
                <div className="flex items-center justify-between gap-4 border-t border-line pt-5">
                  <dt className="eyebrow">{pick(about.facts.status)}</dt>
                  <dd className="mono text-[0.72rem] uppercase tracking-wider text-seal">
                    {pick(about.facts.available)}
                  </dd>
                </div>
              </dl>

              <div className="mt-7 border-t border-line pt-6">
                <span className="eyebrow mb-4 block">{t("section.connect")}</span>
                <ul className="grid grid-cols-2 gap-2">
                  {socials.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between border border-line px-3 py-2 transition-colors hover:border-ink"
                      >
                        <span className="mono text-[0.66rem] uppercase tracking-[0.12em] text-muted group-hover:text-ink">
                          {s.label}
                        </span>
                        <span className="text-faint transition-transform group-hover:translate-x-[2px] group-hover:text-ink" aria-hidden="true">
                          ↗
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Fact({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <dt className="eyebrow">{label}</dt>
      <dd className={`text-sm text-ink ${mono ? "mono" : ""}`}>{value}</dd>
    </div>
  );
}
