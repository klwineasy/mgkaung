"use client";

import { useEffect, useState } from "react";

interface BootLine {
  text: string;
  status: "ok" | "warn" | "";
}

const BOOT_LINES: BootLine[] = [
  { text: "BIOS v2.4.1 initializing...", status: "" },
  { text: "Loading kernel modules...", status: "ok" },
  { text: "Mounting filesystem...", status: "ok" },
  { text: "Initializing display driver...", status: "ok" },
  { text: "Checking portfolio integrity...", status: "ok" },
  { text: "Loading KAUNG_LWIN.PROFILE...", status: "ok" },
  { text: "Establishing secure connection...", status: "warn" },
  { text: "Compiling experience data...", status: "ok" },
  { text: "Rendering UI components...", status: "ok" },
  { text: "SYSTEM READY — Welcome.", status: "" },
];

interface BootScreenProps {
  onComplete: () => void;
}

export default function BootScreen({ onComplete }: BootScreenProps) {
  // Store the line objects directly — avoids undefined when indexing a const tuple
  const [visibleLines, setVisibleLines] = useState<BootLine[]>([]);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    let idx = 0;

    function showNext() {
      if (idx >= BOOT_LINES.length) {
        setTimeout(() => {
          setFading(true);
          setTimeout(onComplete, 800);
        }, 400);
        return;
      }
      const line = BOOT_LINES[idx];
      if (!line) return;
      const dur = Math.max(250, line.text.length * 18) + 120;
      setVisibleLines((prev) => [...prev, line]);
      idx++;
      setTimeout(showNext, dur);
    }

    showNext();
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100000] bg-black flex flex-col justify-center items-start px-[10vw] transition-opacity duration-700 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="font-mono text-[clamp(0.65rem,1.2vw,0.88rem)]">
        {visibleLines.map((line, i) => (
          <span
            key={i}
            className="block leading-loose overflow-hidden whitespace-nowrap text-[#00f5ff]"
            style={{
              width: 0,
              animation: `typeIn ${Math.max(0.25, line.text.length * 0.018)}s forwards`,
            }}
          >
            {line.text}
            {line.status === "ok" && (
              <span className="text-[#00ff88]">&nbsp;&nbsp;[OK]</span>
            )}
            {line.status === "warn" && (
              <span className="text-[#f5e642]">&nbsp;&nbsp;[WARN]</span>
            )}
          </span>
        ))}
        <span className="inline-block w-[10px] h-[1.1em] bg-[#00f5ff] align-middle ml-1 animate-blink" />
      </div>
    </div>
  );
}
