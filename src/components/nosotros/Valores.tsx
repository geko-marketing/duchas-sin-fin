import {
  SparklesIcon,
  HeartIcon,
  LeafIcon,
  ZapIcon,
} from "@/components/icons";

const VALUES = [
  {
    Icon: SparklesIcon,
    title: "Innovación",
    body: "Tecnología de vanguardia al servicio del medio ambiente",
  },
  {
    Icon: HeartIcon,
    title: "Compromiso",
    body: "Con nuestros clientes y con el planeta",
  },
  {
    Icon: LeafIcon,
    title: "Sostenibilidad",
    body: "Cada decisión pensada para el futuro",
  },
  {
    Icon: ZapIcon,
    title: "Eficiencia",
    body: "Máximo impacto con mínimo desperdicio",
  },
];

export function Valores() {
  return (
    <section
      className="py-20 lg:py-24"
      style={{
        background: "linear-gradient(180deg, #0b1f3b 0%, #020b18 100%)",
      }}
    >
      <div className="container-page">
        <div className="text-center">
          <span className="pill-cyan-dark">Lo que nos mueve</span>
          <h2 className="mt-7 font-heading font-black text-white text-[clamp(32px,5vw,56px)] leading-[1.1] tracking-[-0.02em]">
            Nuestros <span className="text-gradient-brand">Valores</span>
          </h2>
          <p className="mt-6 mx-auto max-w-[640px] text-[#cfeaf3]/70 text-[17px] leading-relaxed">
            Los principios que guían cada decisión que tomamos
          </p>
        </div>

        <div className="mt-16 mx-auto max-w-[1100px] grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(({ Icon, title, body }) => (
            <article
              key={title}
              className="value-card rounded-2xl p-8 text-center"
            >
              <div
                className="mx-auto h-14 w-14 rounded-xl grid place-items-center bg-cta-gradient text-white"
                aria-hidden
              >
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-heading font-bold text-white text-[20px]">
                {title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[rgb(203,213,225)]">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        .value-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(0,201,214,0.2);
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
        }
        .value-card:hover {
          border-color: rgba(0,201,214,0.55);
          box-shadow: 0 16px 40px rgba(0,201,214,0.22);
          transform: translateY(-6px);
        }
        @media (prefers-reduced-motion: reduce) {
          .value-card { transition: none; }
          .value-card:hover { transform: none; }
        }
      `}</style>
    </section>
  );
}
