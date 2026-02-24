import type { Certification } from "@/types/resume";

interface CertCardProps {
  cert: Certification;
}

export default function CertCard({ cert }: CertCardProps) {
  return (
    <div
      className="relative overflow-hidden p-8 transition-all duration-300 hover:shadow-[0_0_40px_rgba(245,230,66,0.12)] group"
      style={{
        border: "1px solid rgba(245,230,66,0.25)",
        background: "rgba(245,230,66,0.03)",
        clipPath:
          "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)",
      }}
    >
      <div
        className="font-orbitron text-[2.2rem] font-black text-[#f5e642] mb-3 leading-none animate-icon-pulse group-hover:opacity-90"
        style={{ textShadow: "0 0 20px rgba(245,230,66,0.5)" }}
      >
        AWS
      </div>
      <h3 className="font-rajdhani text-[1.1rem] font-bold text-white mb-2 leading-snug">
        {cert.name}
      </h3>
      <p className="font-mono text-[0.68rem] text-[#f5e642] tracking-[0.15em]">
        {cert.period}
      </p>
      <p className="text-[0.88rem] text-[#5a7a85] mt-3 font-light leading-relaxed">
        {cert.description}
      </p>
    </div>
  );
}
