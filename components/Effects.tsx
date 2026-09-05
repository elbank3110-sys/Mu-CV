"use client";

import { useEffect } from "react";

// Scroll-progress bar (GPU scaleX) + smoothed cursor glow (lerp 0.18).
// Everything is transform-only so it stays at 60fps and never triggers reflow.
export default function Effects() {
  useEffect(() => {
    const bar = document.getElementById("scroll-progress");
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? h.scrollTop / max : 0;
      if (bar) bar.style.transform = `scaleX(${p})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // cursor glow
    const glow = document.getElementById("cursor-glow");
    const cur = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const tgt = { ...cur };
    let raf = 0;
    let visible = false;

    const onMove = (e: MouseEvent) => {
      tgt.x = e.clientX;
      tgt.y = e.clientY;
      if (!visible && glow) {
        glow.style.opacity = "1";
        visible = true;
      }
    };
    const tick = () => {
      cur.x += (tgt.x - cur.x) * 0.18;
      cur.y += (tgt.y - cur.y) * 0.18;
      if (glow) glow.style.transform = `translate(${cur.x}px, ${cur.y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (fine) {
      window.addEventListener("mousemove", onMove, { passive: true });
      raf = requestAnimationFrame(tick);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div id="scroll-progress" className="scroll-progress no-print" aria-hidden="true" />
      <div id="cursor-glow" className="cursor-glow" style={{ opacity: 0 }} aria-hidden="true" />
    </>
  );
}
