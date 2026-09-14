export function TecnologiaHero() {
  return (
    <section
      className="relative isolate overflow-hidden pt-[160px] pb-20 lg:pt-[200px] lg:pb-24"
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
        <div className="text-center">
          <span className="pill-cyan-dark">Tecnología avanzada</span>
          <h1 className="mt-10 mx-auto max-w-[920px] font-heading font-black text-white text-[clamp(40px,7vw,80px)] leading-[1.05] tracking-[-0.02em]">
            Innovación en
            <br />
            <span className="text-gradient-cyan inline-block">
              Cada Gota
            </span>
          </h1>
          <p className="mt-8 mx-auto max-w-[720px] text-[#cfeaf3] text-[clamp(16px,1.6vw,20px)] leading-relaxed">
            Un sistema inteligente para un planeta que ya no puede esperar.
          </p>
        </div>
      </div>
    </section>
  );
}
