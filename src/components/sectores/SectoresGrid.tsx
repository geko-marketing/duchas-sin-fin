import Link from "next/link";
import {
  HomeIcon,
  HotelIcon,
  ZapIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckIcon,
} from "@/components/icons";

const SECTORS = [
  {
    Icon: HomeIcon,
    title: "Residencial",
    body: "Perfecta para hogares que buscan reducir su huella hídrica sin comprometer el confort",
    benefits: [
      "Instalación rápida y sencilla",
      "ROI en menos de 12 meses",
      "Mantenimiento mínimo",
      "Compatible con cualquier baño",
    ],
    stats: [
      { v: "80%", l: "Ahorro agua" },
      { v: "< 12 meses", l: "ROI" },
      { v: "350+", l: "Instalaciones" },
    ],
  },
  {
    Icon: HotelIcon,
    title: "Hoteles & Spas",
    body: "Solución escalable para grandes volúmenes de agua con certificación de sostenibilidad",
    benefits: [
      "Reducción drástica de costes operativos",
      "Certificaciones LEED/BREEAM",
      "Experiencia premium para huéspedes",
      "Monitoreo centralizado",
    ],
    stats: [
      { v: "75%", l: "Ahorro agua" },
      { v: "< 18 meses", l: "ROI" },
      { v: "120+", l: "Instalaciones" },
    ],
  },
  {
    Icon: ZapIcon,
    title: "Gimnasios & Wellness",
    body: "Ideal para instalaciones deportivas con alto tráfico de usuarios",
    benefits: [
      "Resistente a uso intensivo",
      "Higiene garantizada",
      "Ahorro significativo en facturas",
      "Imagen sostenible",
    ],
    stats: [
      { v: "70%", l: "Ahorro agua" },
      { v: "< 15 meses", l: "ROI" },
      { v: "80+", l: "Instalaciones" },
    ],
  },
  {
    Icon: SparklesIcon,
    title: "Promotoras & Arquitectura",
    body: "Integración desde diseño para edificios sostenibles y certificados",
    benefits: [
      "Valor añadido al proyecto",
      "Certificaciones verdes",
      "Diferenciación en el mercado",
      "Soporte técnico completo",
    ],
    stats: [
      { v: "80%", l: "Ahorro agua" },
      { v: "Inmediato", l: "ROI" },
      { v: "50+", l: "Instalaciones" },
    ],
  },
];

export function SectoresGrid() {
  return (
    <section
      className="py-20 lg:py-24"
      style={{
        background: "linear-gradient(180deg, #0b1f3b 0%, #020b18 100%)",
      }}
    >
      <div className="container-page">
        <div className="mx-auto max-w-[1180px] grid gap-8 md:grid-cols-2">
          {SECTORS.map((s) => (
            <article key={s.title} className="sector-card rounded-[24px] p-10">
              <div className="flex items-center gap-5">
                <div
                  className="h-16 w-16 rounded-2xl grid place-items-center bg-cta-gradient text-white shrink-0"
                  aria-hidden
                >
                  <s.Icon className="h-7 w-7" />
                </div>
                <h3 className="font-heading font-black text-white text-[24px] sm:text-[28px] tracking-[-0.01em] leading-tight">
                  {s.title}
                </h3>
              </div>
              <p className="mt-6 text-[16px] leading-relaxed text-[rgb(203,213,225)]">
                {s.body}
              </p>

              <div className="mt-7">
                <div className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#00c9d6]">
                  Beneficios clave
                </div>
                <ul className="mt-4 space-y-2.5">
                  {s.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-[15px] text-[rgb(203,213,225)]"
                    >
                      <CheckIcon className="h-5 w-5 text-[#00c9d6] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {s.stats.map((st) => (
                  <div
                    key={st.l}
                    className="rounded-xl py-4 px-2 text-center"
                    style={{
                      background: "rgba(0,201,214,0.06)",
                      border: "1px solid rgba(0,201,214,0.2)",
                    }}
                  >
                    <div className="font-heading font-black text-[clamp(18px,2vw,22px)] text-gradient-cyan leading-tight">
                      {st.v}
                    </div>
                    <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#94a3b8]">
                      {st.l}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/contacto"
                className="mt-8 inline-flex items-center gap-2 text-[#00c9d6] font-semibold text-[15px] group"
              >
                Solicitar información
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        .sector-card {
          background: linear-gradient(135deg, rgba(0,201,214,0.1), rgba(47,110,139,0.1));
          border: 1px solid rgba(0,201,214,0.3);
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
        }
        .sector-card:hover {
          border-color: rgba(0,201,214,0.6);
          box-shadow: 0 20px 50px rgba(0,201,214,0.22);
          transform: translateY(-6px);
        }
        @media (prefers-reduced-motion: reduce) {
          .sector-card { transition: none; }
          .sector-card:hover { transform: none; }
        }
      `}</style>
    </section>
  );
}
