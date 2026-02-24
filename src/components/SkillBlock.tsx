import type { SkillGroup } from "@/types/resume";

interface SkillBlockProps {
  group: SkillGroup;
}

const variantStyles = {
  cyan: {
    tag: "text-[#00f5ff] border-[rgba(0,245,255,0.15)] bg-[rgba(0,245,255,0.05)] hover:border-[#00f5ff] hover:shadow-[0_0_12px_rgba(0,245,255,0.3)]",
    fill: "bg-[rgba(0,245,255,0.1)]",
  },
  pink: {
    tag: "text-[#ff00a0] border-[rgba(255,0,160,0.2)] bg-[rgba(255,0,160,0.04)] hover:border-[#ff00a0] hover:shadow-[0_0_12px_rgba(255,0,160,0.3)]",
    fill: "bg-[rgba(255,0,160,0.1)]",
  },
  yellow: {
    tag: "text-[#f5e642] border-[rgba(245,230,66,0.2)] bg-[rgba(245,230,66,0.04)] hover:border-[#f5e642] hover:shadow-[0_0_12px_rgba(245,230,66,0.3)]",
    fill: "bg-[rgba(245,230,66,0.1)]",
  },
};

export default function SkillBlock({ group }: SkillBlockProps) {
  const v = variantStyles[group.variant];

  return (
    <div
      className="relative p-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,245,255,0.08)]"
      style={{
        background: "rgba(0,245,255,0.04)",
        border: "1px solid rgba(0,245,255,0.18)",
        clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
      }}
    >
      {/* Corner notch */}
      <span
        className="absolute top-0 right-0 w-0 h-0"
        style={{
          borderStyle: "solid",
          borderWidth: "0 12px 12px 0",
          borderColor: "transparent rgba(0,245,255,0.12) transparent transparent",
        }}
      />

      <p className="font-mono text-[0.65rem] text-[#ff00a0] tracking-[0.3em] uppercase mb-4">
        {group.category}
      </p>

      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className={`font-mono text-[0.72rem] px-3 py-[5px] border tracking-[0.04em] transition-all duration-200 relative overflow-hidden group cursor-default hover:text-white ${v.tag}`}
          >
            <span
              className={`absolute inset-0 ${v.fill} scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300`}
            />
            <span className="relative">{skill}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
