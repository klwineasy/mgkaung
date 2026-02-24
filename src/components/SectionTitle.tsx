"use client";

import { useEffect, useRef, useState } from "react";

interface SectionTitleProps {
  number: string;
  title: string;
}

export default function SectionTitle({ number, title }: SectionTitleProps) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const iv = setInterval(() => {
      setDisplayed(title.slice(0, ++i));
      if (i >= title.length) clearInterval(iv);
    }, 40);
    return () => clearInterval(iv);
  }, [started, title]);

  return (
    <div ref={ref} className="flex items-center gap-4 mb-12">
      <span className="font-mono text-[0.7rem] text-[#ff00a0] tracking-[0.2em]">
        {number}
      </span>
      <h2 className="font-orbitron text-[clamp(1.2rem,3vw,1.8rem)] font-bold text-white tracking-[0.05em] uppercase min-w-[200px]">
        {displayed}
        {displayed.length < title.length && (
          <span className="animate-blink">_</span>
        )}
      </h2>
      <div className="flex-1 h-px bg-gradient-to-r from-[rgba(0,245,255,0.18)] to-transparent max-w-[400px]" />
    </div>
  );
}
