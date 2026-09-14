import { CheckIcon } from "@/components/icons";

const REASONS = [
  {
    n: "01",
    title: "El Problema",
    body: "El consumo de agua en los hogares españoles es insostenible. Una ducha promedio consume 124 litros de agua y 2.5 kWh de energía. Con más de 18 millones de hogares en España, el impacto ambiental y económico es enorme.",
    quote:
      "Siempre nos han dicho que para cuidar el planeta hay que renunciar. Renunciar al confort, al tiempo, a la experiencia. Nosotros venimos a demostrar lo contrario.",
  },
  {
    n: "02",
    title: "La Solución",
    body: "Tecnología registrada, diseño elegante y retorno de la inversión claro.",
    quote:
      "Un sistema patentado que recicla el agua en tiempo real, permitiendo duchas infinitas con un consumo mínimo: 80% menos de agua y 70% menos de energía.",
  },
  {
    n: "03",
    title: "Oportunidad de Mercado",
    body: "El mercado de soluciones sostenibles para el hogar está en pleno crecimiento. La sostenibilidad ya no es opcional para la sociedad, es una exigencia. Con regulaciones cada vez más estrictas y una conciencia ambiental en aumento, Ducha Sin Fin está posicionada para liderar esta transformación.",
    quote: null,
  },
];

const PHASES = [
  {
    n: "FASE 1",
    title: "Desarrollo y Certificación",
    quarter: "Q1 2026",
    description: "Prototipo funcional y certificaciones CE",
    status: { label: "Completado", kind: "done" as const },
  },
  {
    n: "FASE 2",
    title: "Producción Piloto",
    quarter: "Q2 2026",
    description: "Primera serie de 100 unidades",
    status: { label: "En Progreso", kind: "active" as const },
  },
  {
    n: "FASE 3",
    title: "Lanzamiento Comercial",
    quarter: "Q3 2026",
    description: "Distribución nacional y expansión",
    status: null,
  },
  {
    n: "FASE 4",
    title: "Expansión Internacional",
    quarter: "Q4 2026",
    description: "Entrada en mercados europeos",
    status: null,
  },
];

const FUNDS = [
  {
    title: "Investigación y Desarrollo",
    subtitle: "80% de cada donación",
    pct: "80%",
    body: "Prototipado, certificaciones, ingeniería y mejora continua del sistema",
  },
  {
    title: "Marketing y Difusión",
    subtitle: "20% de cada donación",
    pct: "20%",
    body: "Comunicación, visibilidad del proyecto y captación de nuevos apoyos",
  },
];

export function ProjectInfo() {
  return (
    <section
      className="py-24 lg:py-28"
      style={{ backgroundColor: "rgb(2,11,24)" }}
    >
      <div className="container-page">
        {/* A. ¿Por Qué Apoyar? */}
        <div className="text-center">
          <span className="pill-cyan-dark">El proyecto</span>
          <h2 className="mt-7 font-heading font-black text-white text-[clamp(32px,5vw,56px)] leading-[1.1] tracking-[-0.02em]">
            ¿Por Qué Apoyar
            <br />
            <span className="text-gradient-brand">Ducha Sin Fin?</span>
          </h2>
        </div>

        <div className="mt-16 mx-auto max-w-[1080px] flex flex-col gap-10">
          {REASONS.map((r, i) => {
            const right = i % 2 === 1;
            return (
              <article
                key={r.n}
                className={`info-card grid gap-8 md:gap-10 items-start ${
                  right ? "md:grid-cols-[1fr_auto] md:[&>.num]:order-2" : "md:grid-cols-[auto_1fr]"
                }`}
              >
                <div
                  className="num shrink-0 grid place-items-center w-[88px] h-[88px] rounded-2xl text-white font-heading font-black text-[28px]"
                  style={{
                    background:
                      "linear-gradient(135deg, #00c9d6 0%, #06b6d4 100%)",
                    boxShadow: "0 12px 32px rgba(0,201,214,0.35)",
                  }}
                >
                  {r.n}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-[26px] sm:text-[28px] leading-tight">
                    {r.title}
                  </h3>
                  <p className="mt-4 text-[17px] leading-relaxed text-[rgb(203,213,225)]">
                    {r.body}
                  </p>
                  {r.quote && (
                    <blockquote className="mt-5 italic text-[16px] leading-relaxed text-[#e0f2fe] rounded-lg px-6 py-5 border-l-[3px] border-[#00c9d6] bg-[rgba(0,201,214,0.05)]">
                      “{r.quote}”
                    </blockquote>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* B. Roadmap */}
        <div className="mt-28 text-center">
          <span className="pill-cyan-dark">Hoja de ruta</span>
          <h2 className="mt-7 font-heading font-black text-white text-[clamp(32px,5vw,56px)] leading-[1.1] tracking-[-0.02em]">
            Roadmap del{" "}
            <span className="text-gradient-brand">Proyecto</span>
          </h2>
          <p className="mt-6 mx-auto max-w-[680px] text-[#cfeaf3]/70 text-[17px] leading-relaxed">
            Nuestro plan de desarrollo y expansión para los próximos 12 meses
          </p>
        </div>

        <div className="mt-14 mx-auto max-w-[1080px] grid gap-6 md:grid-cols-2">
          {PHASES.map((p) => (
            <article key={p.n} className="phase-card rounded-2xl p-7">
              <div className="flex flex-wrap items-center gap-3">
                <span className="phase-chip">{p.n}</span>
                <span className="text-[13px] font-semibold text-[#00c9d6]">
                  {p.quarter}
                </span>
                {p.status && (
                  <span
                    className={`status-badge ${
                      p.status.kind === "done"
                        ? "status-done"
                        : "status-active"
                    }`}
                  >
                    {p.status.kind === "done" ? (
                      <CheckIcon className="h-3.5 w-3.5" />
                    ) : (
                      <span className="dot" aria-hidden />
                    )}
                    {p.status.label}
                  </span>
                )}
              </div>
              <h3 className="mt-5 font-heading font-bold text-white text-[22px] leading-tight">
                {p.title}
              </h3>
              <p className="mt-3 text-[16px] leading-relaxed text-[rgb(203,213,225)]">
                {p.description}
              </p>
            </article>
          ))}
        </div>

        {/* C. Uso de Fondos */}
        <div id="fondos" className="scroll-mt-28 mt-28 text-center">
          <span className="pill-cyan-dark">Transparencia</span>
          <h2 className="mt-7 font-heading font-black text-white text-[clamp(32px,5vw,56px)] leading-[1.1] tracking-[-0.02em]">
            Uso de <span className="text-gradient-brand">Fondos</span>
          </h2>
          <p className="mt-6 mx-auto max-w-[680px] text-[#cfeaf3]/70 text-[17px] leading-relaxed">
            Transparencia total: así invertiremos cada donación recibida
          </p>
        </div>

        <div className="mt-14 mx-auto max-w-[980px] grid gap-6 md:grid-cols-2">
          {FUNDS.map((f) => (
            <article key={f.title} className="fund-card rounded-2xl p-8">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <h3 className="font-heading font-bold text-white text-[22px] leading-tight">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-[14px] font-semibold uppercase tracking-[0.12em] text-[#00c9d6]">
                    {f.subtitle}
                  </p>
                </div>
                <span className="font-heading font-black text-gradient-brand text-[clamp(40px,5vw,56px)] leading-none">
                  {f.pct}
                </span>
              </div>
              <p className="mt-6 text-[16px] leading-relaxed text-[rgb(203,213,225)]">
                {f.body}
              </p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .info-card {
          background: rgba(11,31,59,0.6);
          border: 1px solid rgba(0,201,214,0.2);
          border-radius: 20px;
          padding: 40px;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
        }
        .info-card:hover {
          border-color: rgba(0,201,214,0.5);
          box-shadow: 0 16px 40px rgba(0,201,214,0.18);
          transform: translateY(-4px);
        }
        .phase-card {
          background: rgba(11,31,59,0.6);
          border: 1px solid rgba(0,201,214,0.2);
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
        }
        .phase-card:hover {
          border-color: rgba(0,201,214,0.5);
          box-shadow: 0 16px 40px rgba(0,201,214,0.2);
          transform: translateY(-4px);
        }
        .phase-chip {
          display: inline-block;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 700;
          color: #00c9d6;
          background: rgba(0,201,214,0.1);
          border: 1px solid rgba(0,201,214,0.3);
          border-radius: 50px;
          padding: 4px 12px;
        }
        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 700;
          border-radius: 50px;
          padding: 4px 10px;
        }
        .status-done {
          color: #22c55e;
          background: rgba(34,197,94,0.12);
          border: 1px solid rgba(34,197,94,0.35);
        }
        .status-active {
          color: #fbbf24;
          background: rgba(251,191,36,0.12);
          border: 1px solid rgba(251,191,36,0.35);
        }
        .status-active .dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #fbbf24;
          box-shadow: 0 0 0 3px rgba(251,191,36,0.25);
          animation: pulse-dot 1.6s ease-in-out infinite;
        }
        .fund-card {
          background: rgba(11,31,59,0.6);
          border: 1px solid rgba(0,201,214,0.2);
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
        }
        .fund-card:hover {
          border-color: rgba(0,201,214,0.5);
          box-shadow: 0 16px 40px rgba(0,201,214,0.18);
          transform: translateY(-4px);
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (prefers-reduced-motion: reduce) {
          .info-card, .phase-card, .fund-card { transition: none; }
          .info-card:hover, .phase-card:hover, .fund-card:hover { transform: none; }
          .status-active .dot { animation: none; }
        }
      `}</style>
    </section>
  );
}
