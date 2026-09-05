"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { profile } from "@/lib/data";

// Typewriter that cycles the role + specialist titles.
// Respects reduced-motion (falls back to a static joined string).
export default function RoleRotator() {
  const { lang, pick } = useI18n();

  const words = useMemo(() => {
    const list = [pick(profile.role), ...(lang === "ar" ? profile.titles.ar : profile.titles.en)];
    return list;
  }, [lang, pick]);

  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const reduce = useRef(false);

  useEffect(() => {
    reduce.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (reduce.current) {
      setText(words[0]);
      return;
    }
    const current = words[i % words.length];
    const done = text === current;
    const empty = text === "";

    let delay = deleting ? 40 : 75;
    if (done && !deleting) delay = 1600;
    if (empty && deleting) delay = 250;

    const timer = setTimeout(() => {
      if (!deleting && done) {
        setDeleting(true);
      } else if (deleting && empty) {
        setDeleting(false);
        setI((n) => (n + 1) % words.length);
      } else {
        const next = deleting
          ? current.slice(0, text.length - 1)
          : current.slice(0, text.length + 1);
        setText(next);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, i, words]);

  return (
    <p className="mono flex min-h-[1.4em] items-center gap-2 text-[0.82rem] uppercase tracking-[0.14em] text-ink">
      <span className="inline-block h-[6px] w-[6px] bg-seal" aria-hidden="true" />
      <span>{text}</span>
      {!reduce.current && (
        <span className="ml-[1px] inline-block h-[1em] w-[2px] animate-pulse bg-ink align-middle" aria-hidden="true" />
      )}
    </p>
  );
}
