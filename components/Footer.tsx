"use client";

import { useI18n } from "@/lib/i18n";
import { profile, socials } from "@/lib/data";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-line py-16">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
          <div>
            <a href="#top" className="text-xl font-black tracking-wider">
              BLACK<span className="text-faint">—</span>MAK
            </a>
            <p className="mt-4 max-w-[42ch] text-[0.85rem] text-muted">{t("footer.tagline")}</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 mono text-[0.66rem] uppercase tracking-[0.1em] text-muted" aria-label="Social">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
                {s.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-12 flex flex-col flex-wrap items-start justify-between gap-3 border-t border-line pt-6 mono text-[0.58rem] uppercase tracking-[0.13em] text-faint md:flex-row">
          <span>{t("footer.rights")}</span>
          <span className="force-ltr">{profile.email}</span>
          <span>{t("footer.end")}</span>
        </div>
      </div>
    </footer>
  );
}
