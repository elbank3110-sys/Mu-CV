"use client";

import { useI18n } from "@/lib/i18n";
import { experience, education } from "@/lib/data";
import Reveal from "./Reveal";

export default function Experience() {
  const { t, pick } = useI18n();

  return (
    <section id="experience" className="section border-b border-line bg-surface">
      <div className="container">
        <Reveal>
          <span className="eyebrow block">{t("idx.experience")}</span>
          <h2 className="display mt-6 text-[clamp(2.4rem,6vw,4.4rem)]">
            {t("section.experience")}
          </h2>
        </Reveal>

        {/* timeline */}
        <div className="relative mt-14">
          <span
            className="tspine absolute bottom-2 top-2 w-px bg-line ltr:left-[7px] rtl:right-[7px] md:ltr:left-[calc(200px+7px)] md:rtl:right-[calc(200px+7px)]"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-12">
            {experience.map((job, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <article className="print-avoid-break grid grid-cols-1 gap-4 md:grid-cols-[200px_1fr] md:gap-12">
                  <div className="mono flex items-start gap-4 text-sm text-muted md:flex-col md:gap-2">
                    <span className="order-2 md:order-1">
                      {job.from} — {pick(job.to)}
                    </span>
                    <span className="order-1 mt-[5px] inline-block h-[15px] w-[15px] shrink-0 rounded-full border-2 border-seal bg-bg md:order-2 md:hidden" />
                    <span className="order-3 inline-block border border-line-strong px-2 py-[2px] text-[0.6rem] uppercase tracking-widest text-faint">
                      {pick(job.tag)}
                    </span>
                  </div>

                  <div className="relative ltr:pl-8 rtl:pr-8 md:ltr:pl-12 md:rtl:pr-12">
                    <span
                      className="absolute top-[6px] hidden h-[15px] w-[15px] rounded-full border-2 border-seal bg-bg ltr:-left-[0px] rtl:-right-[0px] md:block md:ltr:left-[-5px] md:rtl:right-[-5px]"
                      aria-hidden="true"
                    />
                    <span
                      className="absolute top-[6px] h-[15px] w-[15px] rounded-full border-2 border-seal bg-bg ltr:-left-[0.5px] rtl:-right-[0.5px] md:hidden"
                      aria-hidden="true"
                    />
                    <h3 className="text-[1.4rem] font-bold leading-tight tracking-tight">
                      {pick(job.role)}
                    </h3>
                    <div className="mono mt-2 text-xs uppercase tracking-widest text-ink/70">
                      {pick(job.org)} · {pick(job.place)}
                    </div>
                    <ul className="mt-5 space-y-3">
                      {job.bullets.map((b, j) => (
                        <li key={j} className="relative max-w-[64ch] leading-relaxed text-muted ltr:pl-5 rtl:pr-5">
                          <span className="absolute top-[0.7em] h-[5px] w-[5px] bg-seal ltr:left-0 rtl:right-0" aria-hidden="true" />
                          {pick(b)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* education */}
        <Reveal>
          <h3 className="eyebrow mt-20 mb-8 block border-t border-line pt-10">
            {t("section.education")}
          </h3>
        </Reveal>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {education.map((edu, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="print-avoid-break h-full border border-line bg-bg p-6">
                <div className="mono text-xs text-muted">
                  {edu.from} — {edu.to}
                </div>
                <h4 className="mt-3 text-lg font-bold">{pick(edu.degree)}</h4>
                <div className="mono mt-1 text-xs uppercase tracking-wider text-ink/60">
                  {pick(edu.org)}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{pick(edu.note)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
