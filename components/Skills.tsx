"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { skills, type SkillGroup } from "@/lib/data";
import Reveal from "./Reveal";

function TiltCard({ group, index }: { group: SkillGroup; index: number }) {
  const { pick } = useI18n();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 22 });
  const sy = useSpring(y, { stiffness: 300, damping: 22 });
  const rotateX = useTransform(sy, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(sx, [-0.5, 0.5], ["-8deg", "8deg"]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Reveal delay={index * 0.07}>
      <motion.div
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="print-avoid-break h-full border border-line bg-bg p-7"
      >
        <div style={{ transform: "translateZ(28px)" }}>
          <div className="mb-6 flex items-baseline justify-between">
            <h3 className="text-lg font-bold">{pick(group.cat)}</h3>
            <span className="mono skill-tick text-[0.6rem] text-faint">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <ul className="space-y-3">
            {group.items.map((item, j) => (
              <li key={j}>
                <span className="text-[0.82rem] text-ink/90">{pick(item.name)}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </Reveal>
  );
}

export default function Skills() {
  const { t } = useI18n();

  return (
    <section id="skills" className="section border-b border-line">
      <div className="container">
        <Reveal>
          <span className="eyebrow block">{t("idx.skills")}</span>
          <h2 className="display mt-6 text-[clamp(2.4rem,6vw,4.4rem)]">{t("section.skills")}</h2>
          <p className="lede mt-5">{t("skills.note")}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" style={{ perspective: 1000 }}>
          {skills.map((g, i) => (
            <TiltCard key={i} group={g} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
