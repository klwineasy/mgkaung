"use client";

import { useRef, useState } from "react";
import type { Experience } from "@/types/resume";

interface ExperienceCardProps {
  exp: Experience;
  index: number;
}

export default function ExperienceCard({ exp, index }: ExperienceCardProps) {
  const isEven = index % 2 === 1;
  const cardRef = useRef<HTMLDivElement>(null);
  const [sweeping, setSweeping] = useState(false);

  const handleMouseEnter = () => setSweeping(true);
  const handleMouseLeave = () => setSweeping(false);

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden transition-all duration-300 group"
      style={{
        background: "rgba(0,245,255,0.04)",
        border: `1px solid rgba(0,245,255,0.18)`,
        borderLeft: `3px solid ${isEven ? "#ff00a0" : "#00f5ff"}`,
        clipPath: "polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 0 100%)",
        transform: "translateX(0)",
      }}
      onMouseOver={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateX(8px)";
        (e.currentTarget as HTMLElement).style.background = isEven
          ? "rgba(255,0,160,0.04)"
          : "rgba(0,245,255,0.06)";
        (e.currentTarget as HTMLElement).style.boxShadow = isEven
          ? "-5px 0 25px rgba(255,0,160,0.18)"
          : "-5px 0 25px rgba(0,245,255,0.18)";
      }}
      onMouseOut={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
        (e.currentTarget as HTMLElement).style.background = "rgba(0,245,255,0.04)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* Corner notch */}
      <span
        className="absolute top-0 right-0 w-0 h-0"
        style={{
          borderStyle: "solid",
          borderWidth: "0 22px 22px 0",
          borderColor: `transparent rgba(0,245,255,0.1) transparent transparent`,
        }}
      />

      {/* Sweep line */}
      <span
        className="absolute top-0 left-0 h-[2px] w-full transition-all duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${isEven ? "#ff00a0" : "#00f5ff"}, transparent)`,
          transform: sweeping ? "translateX(200%)" : "translateX(-200%)",
          transition: "transform 0.55s ease",
        }}
      />

      <div className="p-7 pl-8">
        <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
          <h3 className="font-orbitron text-[0.88rem] font-bold text-white tracking-[0.04em]">
            {exp.title}
          </h3>
          <span
            className="font-mono text-[0.68rem] text-[#f5e642] px-3 py-1 tracking-[0.1em] animate-date-pulse"
            style={{
              background: "rgba(245,230,66,0.08)",
              border: "1px solid rgba(245,230,66,0.2)",
            }}
          >
            {exp.period}
          </span>
        </div>

        <p
          className="font-rajdhani text-[0.85rem] tracking-[0.1em] uppercase font-semibold mb-3"
          style={{ color: isEven ? "#ff00a0" : "#00f5ff" }}
        >
          {exp.company} · {exp.location}
        </p>

        <ul className="space-y-[7px]">
          {exp.bullets.map((bullet, i) => (
            <li
              key={i}
              className="text-[0.92rem] text-[#c8e8f0] font-light leading-relaxed pl-[18px] relative"
            >
              <span
                className="absolute left-0 top-[3px] text-[0.7rem]"
                style={{ color: isEven ? "#ff00a0" : "#00f5ff" }}
              >
                ▸
              </span>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
