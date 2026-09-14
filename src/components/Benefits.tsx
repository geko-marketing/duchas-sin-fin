import {
  DropletIcon,
  GlobeIcon,
  HeartIcon,
  LeafIcon,
  TrendingUpIcon,
  ZapIcon,
} from "@/components/icons";

const BENEFITS = [
  {
    title: "Ahorro real y medible desde el primer día",
    desc: "Reduce hasta un 80% el consumo de agua y energía en cada ducha. Menos gasto, más eficiencia, sin cambiar hábitos.",
    badge: "80%",
    Icon: DropletIcon,
  },
  {
    title: "75% menos energía",
    desc: "Ahorro significativo en el calentamiento de agua, reduciendo tu factura energética",
    badge: "75%",
    Icon: ZapIcon,
  },
  {
    title: "Confort garantizado",
    desc: "Disfruta de una ducha larga, envolvente y confortable, con temperatura estable y presión constante. Sostenibilidad que no sacrifica placer.",
    badge: "100%",
    Icon: HeartIcon,
  },
  {
    title: "Retorno de la inversión claro",
    desc: "Especialmente en entornos intensivos (hoteles, gimnasios, residencias), el ahorro operativo se traduce en un ROI atractivo y predecible, con impacto directo en la cuenta de resultados.",
    badge: "ROI",
    Icon: TrendingUpIcon,
  },
  {
    title: "100% sostenible",
    desc: "Reduce la huella hídrica y de carbono de forma tangible. No es solo ahorro: es una decisión responsable que contribuye a los ODS.",
    badge: "ODS",
    Icon: LeafIcon,
  },
  {
    title: "Tendencia imparable",
    desc: "La sociedad ya no pregunta si hay que ahorrar agua, sino cómo hacerlo sin renunciar a la experiencia.",
    badge: "Global",
    Icon: GlobeIcon,
  },
];

export function Benefits() {
  return (
    <section className="bg-light-gradient-rev py-24 lg:py-28">
      <div className="container-page">
        <div className="text-center">
          <span className="pill-cyan-light">Beneficios</span>
          <h2 className="mt-7 font-heading font-black text-[#0b1f3b] text-[clamp(32px,5vw,56px)] leading-[1.1] tracking-[-0.02em]">
            Por qué elegir{" "}
            <span className="text-gradient-brand">Ducha Sin Fin</span>
          </h2>
          <p className="mt-6 mx-auto max-w-[640px] text-[#2f6e8b] text-[17px] leading-relaxed">
            Más que una ducha, una inversión en sostenibilidad y ahorro
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map(({ title, desc, badge, Icon }) => (
            <article
              key={title}
              className="card-light !rounded-[25px] flex flex-col gap-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="relative h-14 w-14 shrink-0">
                  <div className="absolute inset-0 rounded-2xl bg-cta-gradient-2 blur-md opacity-30" />
                  <div className="relative h-full w-full rounded-2xl bg-cta-gradient flex items-center justify-center">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <span className="rounded-full px-3 py-1 text-[13px] font-bold text-gradient-brand bg-[rgba(0,201,214,0.08)] border border-[rgba(0,201,214,0.2)]">
                  {badge}
                </span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-[#0b1f3b] text-[20px] leading-tight">
                  {title}
                </h3>
                <p className="mt-3 text-[#2f6e8b] text-[15px] leading-relaxed">
                  {desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
