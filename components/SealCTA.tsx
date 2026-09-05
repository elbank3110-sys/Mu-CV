"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { seal, STUDIO_URL } from "@/lib/data";
import Reveal from "./Reveal";

// The finale. One bold move, spent in a single place (restraint principle):
// a magnetic stamp that pulls toward the cursor; on hover a rotating seal ring
// with the practice name fades in, then the click "stamps" the visitor through
// to the studio. This is the hook that turns "my data" into "my work".
export default function SealCTA() {
  const { pick, lang } = useI18n();
  const ref = useRef<HTMLAnchorElement>(null);
  const [hover, setHover] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 15 });
  const sy = useSpring(y, { stiffness: 150, damping: 15 });

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const relX = e.clientX - (r.left + r.width / 2);
    const relY = e.clientY - (r.top + r.height / 2);
    const max = 22;
    x.set(Math.max(-max, Math.min(max, relX * 0.25)));
    y.set(Math.max(-max, Math.min(max, relY * 0.25)));
  };
  const onLeave = () => {
    setHover(false);
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="studio"
      className="seal-cta section relative flex flex-col items-center overflow-hidden border-b border-line bg-bg text-center"
    >
      <div className="absolute inset-0 hero-grid opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="container relative z-10 flex flex-col items-center">
        <Reveal>
          <span className="eyebrow">{pick(seal.eyebrow)}</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display mt-6 max-w-[18ch] text-[clamp(2rem,5.5vw,4rem)]">
            {pick(seal.line)}
          </h2>
        </Reveal>

        <Reveal delay={0.16} className="mt-14">
          <div className="relative grid place-items-center">
            {/* rotating seal ring — appears on hover */}
            <motion.svg
              viewBox="0 0 220 220"
              className="pointer-events-none absolute h-[300px] w-[300px] md:h-[380px] md:w-[380px]"
              animate={{ opacity: hover ? 1 : 0, scale: hover ? 1 : 0.82 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <defs>
                <path id="seal-ring" d="M110,110 m-86,0 a86,86 0 1,1 172,0 a86,86 0 1,1 -172,0" fill="none" />
              </defs>
              <g className="animate-seal-spin" style={{ transformOrigin: "110px 110px" }}>
                <text fontSize="9.5" letterSpacing="3.4" fill="var(--seal)" className="mono uppercase">
                  <textPath href="#seal-ring" startOffset="0%">
                    {seal.ring}
                  </textPath>
                </text>
              </g>
            </motion.svg>

            {/* magnetic disc */}
            <motion.a
              ref={ref}
              href={STUDIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={onMove}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={onLeave}
              style={{ x: sx, y: sy }}
              className="group relative grid h-[200px] w-[200px] place-items-center rounded-full border border-line-strong bg-surface/40 backdrop-blur-md transition-colors duration-500 hover:border-seal md:h-[240px] md:w-[240px]"
            >
              <span
                className="absolute inset-4 rounded-full border border-dashed border-faint transition-colors duration-500 group-hover:border-seal/50"
                aria-hidden="true"
              />
              <span className="relative z-10 flex flex-col items-center px-6">
                <span className="display text-[clamp(1.1rem,2.6vw,1.6rem)] leading-tight transition-transform duration-500 group-hover:scale-105">
                  {pick(seal.center)}
                </span>
                <span className="mono mt-3 flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.16em] text-muted">
                  {seal.domain}
                  <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true">
                    ↗
                  </span>
                </span>
              </span>
              <span
                className="absolute inset-0 rounded-full bg-seal/5 opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100"
                aria-hidden="true"
              />
            </motion.a>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <p className="mono mt-14 max-w-[42ch] text-[0.72rem] uppercase leading-relaxed tracking-[0.12em] text-faint">
            {lang === "ar"
              ? "هذه بياناتي. اضغط الختم لترى شغلي كاملًا في الاستوديو."
              : "This is my data. Press the seal to see the full body of work in the studio."}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
