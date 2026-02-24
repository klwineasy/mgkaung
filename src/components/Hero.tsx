import type { ResumeData } from "@/types/resume";

interface HeroProps {
  data: ResumeData;
}

export default function Hero({ data }: HeroProps) {
  const { contact } = data;

  return (
    <header className="relative min-h-screen z-10 flex flex-col justify-center px-[8vw] py-16 overflow-hidden">
      {/* Corner brackets */}
      <span className="absolute top-6 left-[8vw] w-[70px] h-[70px] border-t-2 border-l-2 border-[#00f5ff] animate-pulse-glow" />
      <span className="absolute bottom-6 right-[8vw] w-[70px] h-[70px] border-b-2 border-r-2 border-[#ff00a0] animate-pulse-glow [animation-delay:1.5s]" />

      {/* Tag */}
      <p
        className="font-mono text-[0.75rem] text-[#00f5ff] tracking-[0.3em] uppercase mb-5"
        style={{ opacity: 0, animation: "slideRight 0.6s ease forwards 0.2s" }}
      >
        <span className="text-[#ff00a0]">&gt; </span>
        PORTFOLIO // SYSTEM ONLINE
      </p>

      {/* Name */}
      <div
        className="relative"
        style={{ opacity: 0, animation: "slideRight 0.8s ease forwards 0.4s" }}
      >
        <h1
          className="font-orbitron font-black leading-[0.9] text-white tracking-[-0.02em]"
          style={{
            fontSize: "clamp(3.5rem, 10vw, 9rem)",
            textShadow:
              "0 0 40px rgba(0,245,255,0.3), 0 0 80px rgba(0,245,255,0.1)",
          }}
          data-text={data.name}
        >
          {data.name}
          {/* Glitch layers */}
          <span
            aria-hidden
            className="absolute top-0 left-0 w-full font-orbitron font-black text-[#00f5ff] opacity-0"
            style={{
              fontSize: "clamp(3.5rem, 10vw, 9rem)",
              animation: "glitchA 8s infinite 3s",
            }}
          >
            {data.name}
          </span>
          <span
            aria-hidden
            className="absolute top-0 left-0 w-full font-orbitron font-black text-[#ff00a0] opacity-0"
            style={{
              fontSize: "clamp(3.5rem, 10vw, 9rem)",
              animation: "glitchB 8s infinite 3.15s",
            }}
          >
            {data.name}
          </span>
        </h1>

        <h1
          className="font-orbitron font-black leading-[0.9] tracking-[-0.02em] block"
          style={{
            fontSize: "clamp(3.5rem, 10vw, 9rem)",
            color: "#00f5ff",
            WebkitTextStroke: "1px #00f5ff",
            textShadow:
              "0 0 30px #00f5ff, 0 0 70px rgba(0,245,255,0.2)",
          }}
        >
          {data.title}
        </h1>
      </div>

      {/* Subtitle */}
      <p
        className="font-rajdhani text-[clamp(1rem,2vw,1.4rem)] font-light text-[#5a7a85] tracking-[0.15em] uppercase mt-5"
        style={{ opacity: 0, animation: "slideRight 0.8s ease forwards 0.7s" }}
        dangerouslySetInnerHTML={{
          __html: data.tagline.replace(
            "Full-Stack Aspirant",
            '<strong class="text-[#ff00a0] font-semibold">Full-Stack Aspirant</strong>'
          ),
        }}
      />

      {/* Summary */}
      <p
        className="max-w-[580px] text-[1.05rem] text-[#c8e8f0] mt-5 leading-[1.75] font-light"
        style={{ opacity: 0, animation: "slideRight 0.8s ease forwards 0.9s" }}
      >
        {data.summary}
      </p>

      {/* Contact pills */}
      <div
        className="flex flex-wrap gap-3 mt-9"
        style={{ opacity: 0, animation: "slideRight 0.8s ease forwards 1.1s" }}
      >
        {[
          { label: contact.email, href: `mailto:${contact.email}` },
          // { label: contact.phone, href: `tel:${contact.phone.replace(/\D/g, "")}` },
          { label: contact.github, href: `https://${contact.github}` },
          { label: contact.website, href: `https://${contact.website}` },
          { label: contact.location, href: undefined },
        ].map(({ label, href }) =>
          href ? (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="pill">
              {label}
            </a>
          ) : (
            <span key={label} className="pill">{label}</span>
          )
        )}
      </div>

      {/* Corner info */}
      <div
        className="absolute top-8 right-[8vw] font-mono text-[0.65rem] text-[#5a7a85] text-right leading-loose"
        style={{ opacity: 0, animation: "fadeIn 1s ease forwards 1.4s" }}
      >
        {["FRONT-END DEV", "6+ YRS EXP", "AWS CERTIFIED", "PHOENIX, AZ"].map(
          (item) => (
            <div key={item} className="flex items-center justify-end gap-2">
              <span className="block w-[30px] h-px bg-[#5a7a85]" />
              {item}
            </div>
          )
        )}
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: 0, animation: "fadeIn 1s ease forwards 2s" }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-[#00f5ff] to-transparent relative overflow-hidden">
          <span
            className="absolute left-0 w-px h-full bg-gradient-to-b from-transparent via-[#00f5ff] to-transparent"
            style={{ top: "-100%", animation: "scrollDown 1.8s ease-in-out infinite" }}
          />
        </div>
        <span className="font-mono text-[0.6rem] text-[#5a7a85] tracking-[0.2em]">
          SCROLL
        </span>
      </div>
    </header>
  );
}
