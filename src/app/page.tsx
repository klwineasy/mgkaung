import Background from "@/components/Background";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ExperienceCard from "@/components/ExperienceCard";
import SkillBlock from "@/components/SkillBlock";
import CertCard from "@/components/CertCard";
import Reveal from "@/components/Reveal";
import ClientShell from "@/components/ClientShell";
import { resumeData } from "@/data/resume";

export default function Home() {
  const { experience, skillGroups, certifications, education } = resumeData;

  return (
    <>
      <Background />
      <ClientShell>
        <div className="relative z-10">
          {/* HERO */}
          <Hero data={resumeData} />

          <div className="divider" />

          {/* EXPERIENCE */}
          <section className="relative z-10 px-[8vw] py-20">
            <SectionTitle number="01." title="Work Experience" />
            <div className="grid gap-[3px]">
              {experience.map((exp, i) => (
                <Reveal key={exp.company + exp.period} delay={i * 80}>
                  <ExperienceCard exp={exp} index={i} />
                </Reveal>
              ))}
            </div>
          </section>

          <div className="divider" />

          {/* SKILLS */}
          <section className="relative z-10 px-[8vw] py-20">
            <SectionTitle number="02." title="Technical Skills" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {skillGroups.map((group, i) => (
                <Reveal key={group.category} delay={i * 60}>
                  <SkillBlock group={group} />
                </Reveal>
              ))}
            </div>
          </section>

          <div className="divider" />

          {/* CERTIFICATIONS */}
          <section className="relative z-10 px-[8vw] py-20">
            <SectionTitle number="03." title="Certifications" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, i) => (
                <Reveal key={cert.name} delay={i * 100}>
                  <CertCard cert={cert} />
                </Reveal>
              ))}
            </div>
          </section>

          <div className="divider" />

          {/* EDUCATION */}
          <section className="relative z-10 px-[8vw] py-20">
            <SectionTitle number="04." title="Education" />
            <Reveal>
              <div
                className="relative overflow-hidden max-w-[580px] p-10"
                style={{
                  border: "1px solid rgba(0,245,255,0.18)",
                  background: "rgba(0,245,255,0.04)",
                  clipPath:
                    "polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px))",
                }}
              >
                {/* Spinning conic sweep */}
                <span
                  className="absolute pointer-events-none animate-edu-spin"
                  style={{
                    top: "-50%",
                    left: "-50%",
                    width: "200%",
                    height: "200%",
                    background:
                      "conic-gradient(from 180deg, transparent, rgba(0,245,255,0.025), transparent)",
                  }}
                />
                <h3 className="font-orbitron text-[1.05rem] font-bold text-white mb-2 leading-snug relative z-10">
                  {education.degree}
                </h3>
                <p className="font-rajdhani text-[1rem] text-[#00f5ff] tracking-[0.1em] uppercase font-semibold relative z-10">
                  {education.school}
                </p>
                <p className="font-mono text-[0.7rem] text-[#5a7a85] mt-2 tracking-[0.2em] relative z-10">
                  GRADUATED // {education.graduated}
                </p>
              </div>
            </Reveal>
          </section>

          <div className="divider" />

          {/* FOOTER */}
          <footer className="relative z-10 px-[8vw] py-10 flex justify-between items-center flex-wrap gap-4 border-t border-[rgba(0,245,255,0.18)]">
            <span
              className="font-orbitron text-[0.75rem] font-bold tracking-[0.2em] text-[#00f5ff]"
              style={{ textShadow: "0 0 10px rgba(0,245,255,0.5)" }}
            >
              KAUNG_LWIN.EXE
            </span>
            <span className="font-mono text-[0.65rem] text-[#5a7a85] flex items-center gap-2">
              <span className="w-[7px] h-[7px] rounded-full bg-[#00ff88] animate-dot-pulse shadow-[0_0_8px_#00ff88]" />
              AVAILABLE FOR OPPORTUNITIES // PHOENIX, AZ
            </span>
          </footer>
        </div>
      </ClientShell>
    </>
  );
}
