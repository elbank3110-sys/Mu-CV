"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { profile, hero } from "@/lib/data";
import Reveal from "./Reveal";
import RoleRotator from "./RoleRotator";

export default function Hero() {
  const { lang, pick } = useI18n();

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line pt-[clamp(7rem,15vh,11rem)] pb-[clamp(3rem,7vw,6rem)]"
    >
      <div className="absolute inset-0 hero-grid opacity-60 pointer-events-none" aria-hidden="true" />

      <div className="container relative">
        <div className="flex flex-col-reverse items-start gap-12 md:flex-row md:items-center md:justify-between">
          {/* text column */}
          <div className="flex-1">
            <Reveal>
              <span className="eyebrow kicker-shimmer" data-words>{pick(hero.kicker)}</span>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="display mt-6 text-[clamp(2.6rem,8vw,6.4rem)]">
                {pick(profile.name)}
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-3 text-[clamp(1.4rem,3.4vw,2.4rem)] font-bold leading-[1.05]">
                {pick(hero.lead)} <span>{pick(hero.outline)}</span>
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-6">
                <RoleRotator />
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="lede mt-7">{pick(hero.sub)}</p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
                <a href="#contact" data-magnetic className="btn btn-light">
                  <span>{lang === "ar" ? "تواصل معي" : "Get in touch"}</span>
                  <span aria-hidden="true">↗</span>
                </a>
                <a href={`mailto:${profile.email}`} className="text-link force-ltr">
                  {profile.email}
                </a>
              </div>
            </Reveal>
          </div>

          {/* portrait — medium, framed, monochrome-into-color on hover */}
          <Reveal delay={0.2} className="w-[62%] max-w-[300px] shrink-0 self-center md:w-[320px]">
            <motion.div
              whileHover={{ rotate: -1.5, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="portrait-settle group relative aspect-[3/4] border border-line bg-surface p-2"
            >
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src="/portrait.webp"
                  alt={pick(profile.name)}
                  fill
                  priority
                  sizes="(max-width: 768px) 62vw, 320px"
                  className="object-cover object-top grayscale contrast-[1.08] transition-all duration-700 group-hover:grayscale-0"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
              </div>
              {/* corner ticks */}
              <span className="pointer-events-none absolute -left-[1px] -top-[1px] h-4 w-4 border-l border-t border-ink" />
              <span className="pointer-events-none absolute -bottom-[1px] -right-[1px] h-4 w-4 border-b border-r border-ink" />
              <span className="absolute bottom-3 left-3 mono text-[0.55rem] uppercase tracking-[0.2em] text-ink/80">
                {profile.alias} · EST. {profile.established}
              </span>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
