export default function Background() {
  return (
    <>
      {/* Scanlines */}
      <div
        className="fixed inset-0 pointer-events-none z-[9998]"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)",
        }}
      />

      {/* Grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0 animate-grid-pulse"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,245,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Orbs */}
      <div
        className="fixed w-[600px] h-[600px] rounded-full pointer-events-none z-0 animate-orb-1"
        style={{
          background: "rgba(0,245,255,0.07)",
          filter: "blur(120px)",
          top: "-150px",
          left: "-150px",
        }}
      />
      <div
        className="fixed w-[500px] h-[500px] rounded-full pointer-events-none z-0 animate-orb-2"
        style={{
          background: "rgba(255,0,160,0.07)",
          filter: "blur(120px)",
          bottom: "100px",
          right: "-100px",
        }}
      />
      <div
        className="fixed w-[350px] h-[350px] rounded-full pointer-events-none z-0 animate-orb-3"
        style={{
          background: "rgba(245,230,66,0.04)",
          filter: "blur(120px)",
          top: "40%",
          left: "35%",
        }}
      />

      {/* Side data streams */}
      <div
        className="fixed top-0 right-5 w-px h-screen overflow-hidden z-[5] pointer-events-none"
        style={{ background: "rgba(0,245,255,0.05)" }}
      >
        <span
          className="absolute left-0 w-px h-[60%]"
          style={{
            background:
              "linear-gradient(transparent, #00f5ff, rgba(0,245,255,0.3), transparent)",
            top: "-100%",
            animation: "dataFlow 4s ease-in-out infinite",
          }}
        />
      </div>
      <div
        className="fixed top-0 left-5 w-px h-screen overflow-hidden z-[5] pointer-events-none"
        style={{ background: "rgba(255,0,160,0.05)" }}
      >
        <span
          className="absolute left-0 w-px h-[40%]"
          style={{
            background:
              "linear-gradient(transparent, #ff00a0, rgba(255,0,160,0.3), transparent)",
            top: "-60%",
            animation: "dataFlow 5s ease-in-out infinite 1.5s",
          }}
        />
      </div>
    </>
  );
}
