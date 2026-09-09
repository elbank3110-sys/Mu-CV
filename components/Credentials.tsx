"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { certificates, languages, interests, type Cert } from "@/lib/data";
import Reveal from "./Reveal";

function CertModal({ cert, onClose }: { cert: Cert; onClose: () => void }) {
  const { t, pick } = useI18n();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      role="dialog"
      aria-modal="true"
      aria-label={pick(cert.title)}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        className="relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col border border-line bg-bg"
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-4">
          <div>
            <h3 className="text-base font-bold">{pick(cert.title)}</h3>
            <p className="mono mt-1 text-[0.66rem] uppercase tracking-wider text-muted">
              {pick(cert.org)} · {cert.years}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label={t("cred.close")}
            className="grid h-9 w-9 shrink-0 place-items-center border border-line-strong text-lg transition-colors hover:border-ink hover:text-ink"
          >
            ×
          </button>
        </div>
        <div className="overflow-auto p-4 md:p-6">
          <div className="relative mx-auto aspect-[1.414/1] w-full max-w-2xl border border-line bg-surface">
            <Image
              src={cert.full}
              alt={pick(cert.title)}
              fill
              sizes="(max-width: 768px) 92vw, 700px"
              className="object-contain"
            />
          </div>
          <p className="mt-4 text-center text-sm text-muted">{pick(cert.note)}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Credentials() {
  const { t, pick } = useI18n();
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="credentials" className="section border-b border-line bg-surface">
      <div className="container">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="eyebrow block">{t("idx.credentials")}</span>
              <h2 className="display mt-6 text-[clamp(2.4rem,6vw,4.4rem)]">
                {t("section.credentials")}
              </h2>
            </div>
            <p className="lede max-w-[40ch]">{t("cred.note")}</p>
          </div>
        </Reveal>

        {/* certificates */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {certificates.map((cert, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <button
                onClick={() => setOpenIdx(i)}
                className="cert-lift group block h-full w-full border border-line bg-bg p-5 text-start transition-all duration-300 hover:border-ink hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
              >
                <div className="relative mb-5 aspect-[4/3] overflow-hidden border border-line">
                  <Image
                    src={cert.thumb}
                    alt={pick(cert.title)}
                    fill
                    sizes="(max-width: 768px) 92vw, 30vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-bg/10 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="mb-3 flex items-center justify-between">
                  <span className="mono text-[0.62rem] uppercase tracking-[0.13em] text-faint">
                    {cert.year}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-seal" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold leading-snug">{pick(cert.title)}</h3>
                <p className="mono mt-2 text-[0.72rem] text-muted">{pick(cert.org)}</p>
                <span className="mono mt-5 inline-flex items-center gap-2 text-[0.62rem] uppercase tracking-[0.13em] text-faint transition-colors group-hover:text-ink">
                  {t("cred.view")} <span aria-hidden="true">↗</span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        {/* languages + interests */}
        <div className="mt-16 grid grid-cols-1 gap-x-16 gap-y-12 border-t border-line pt-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <span className="eyebrow mb-8 block">{t("section.languages")}</span>
            <div className="space-y-8">
              {languages.map((l, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div>
                    <div className="mb-2 flex items-baseline justify-between">
                      <span className="text-lg font-bold">{pick(l.name)}</span>
                      <span className="mono text-[0.68rem] uppercase tracking-wider text-muted">
                        {pick(l.level)}
                      </span>
                    </div>
                    <div className="h-[3px] w-full overflow-hidden bg-line">
                      <motion.div
                        className="h-full bg-ink"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${l.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                    <p className="mt-3 max-w-[52ch] text-sm text-muted">{pick(l.note)}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <span className="eyebrow mb-4 block">{t("section.interests")}</span>
            <Reveal>
              <p className="mono max-w-[46ch] text-[0.72rem] leading-relaxed tracking-[0.06em] text-faint">
                {interests.map((it) => pick(it)).join(" · ")}
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {openIdx !== null && (
          <CertModal cert={certificates[openIdx]} onClose={() => setOpenIdx(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
