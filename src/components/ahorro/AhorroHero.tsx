export function AhorroHero() {
  return (
    <section
      className="relative isolate overflow-hidden text-center pt-[160px] pb-20 lg:pt-[200px] lg:pb-24"
      style={{
        background: "linear-gradient(180deg, #020b18 0%, #0b1f3b 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(50% 50% at 30% 20%, rgba(0,201,214,0.15), transparent 60%), radial-gradient(50% 50% at 80% 80%, rgba(37,99,235,0.15), transparent 60%)",
        }}
      />
      <div className="container-page relative">
        <span
          className="inline-flex items-center rounded-full backdrop-blur-md"
          style={{
            background: "rgba(0,201,214,0.15)",
            border: "1.5px solid rgba(0,201,214,0.4)",
            color: "#00c9d6",
            padding: "12px 32px",
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Calculadora de Ahorro
        </span>
        <h1
          className="mt-8 mx-auto max-w-[920px] font-heading font-black text-white text-[clamp(40px,7vw,80px)] leading-[1.2] tracking-[-0.02em]"
        >
          Descubre tu
          <br />
          <span
            className="inline-block"
            style={{
              background: "linear-gradient(135deg, #00c9d6 0%, #2f6e8b 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Potencial de Ahorro
          </span>
        </h1>
        <p className="mt-8 mx-auto max-w-[720px] text-[#cfeaf3]/80 text-[clamp(16px,1.6vw,20px)] leading-relaxed">
          Calcula cuánto puedes ahorrar en agua, energía y dinero con Ducha Sin
          Fin
        </p>
      </div>
    </section>
  );
}
