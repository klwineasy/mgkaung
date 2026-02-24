"use client";

import { useState } from "react";
import BootScreen from "@/components/BootScreen";
import ParticleCanvas from "@/components/ParticleCanvas";

// In React 19, children is typed via React.ReactNode directly
export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [booted, setBooted] = useState(false);

  return (
    <>
      {!booted && <BootScreen onComplete={() => setBooted(true)} />}
      <ParticleCanvas />
      <div
        style={{
          opacity: booted ? 1 : 0,
          transition: "opacity 1s ease",
        }}
      >
        {children}
      </div>
    </>
  );
}
