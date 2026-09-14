export function FAQHero() {
  return (
    <section
      className="relative isolate overflow-hidden text-center pt-[160px] pb-16 lg:pb-20"
      style={{
        background: "linear-gradient(180deg, #020b18 0%, #0b1f3b 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(50% 50% at 30% 20%, rgba(0,201,214,0.18), transparent 60%), radial-gradient(50% 50% at 80% 80%, rgba(37,99,235,0.18), transparent 60%)",
        }}
      />
      <div className="container-page relative">
        <span className="pill-cyan-dark">Centro de Ayuda</span>
        <h1 className="mt-8 mx-auto max-w-[920px] font-heading font-black text-white text-[clamp(40px,7vw,80px)] leading-[1.05] tracking-[-0.02em]">
          Preguntas
          <br />
          <span className="text-gradient-brand inline-block">Frecuentes</span>
        </h1>
        <p className="mt-8 mx-auto max-w-[680px] text-[#cfeaf3]/80 text-[clamp(16px,1.6vw,20px)] leading-relaxed">
          Encuentra respuestas a las preguntas más comunes sobre Ducha Sin Fin.
        </p>
      </div>
    </section>
  );
}
