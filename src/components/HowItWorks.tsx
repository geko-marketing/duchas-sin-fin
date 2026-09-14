import Link from "next/link";
import {
  ArrowRightIcon,
  DropletIcon,
  FilterIcon,
  RecycleIcon,
} from "@/components/icons";

const STEPS = [
  {
    n: 1,
    title: "Captura",
    desc: "El agua usada se recoge en tiempo real durante tu ducha mediante un sistema de captación inteligente",
    Icon: DropletIcon,
  },
  {
    n: 2,
    title: "Tratamiento",
    desc: "Sistema de filtrado avanzado de 3 pasos que garantiza agua limpia y segura para su reutilización",
    Icon: FilterIcon,
  },
  {
    n: 3,
    title: "Recirculación",
    desc: "El agua tratada vuelve con la misma temperatura y presión, lista para usar de nuevo",
    Icon: RecycleIcon,
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-light-gradient py-24 lg:py-28 scroll-mt-[64px]">
      <div className="container-page">
        <div className="text-center">
          <span className="pill-cyan-light">Cómo funciona</span>
          <h2 className="mt-7 font-heading font-black text-[#0b1f3b] text-[clamp(32px,5vw,56px)] leading-[1.1] tracking-[-0.02em]">
            Tecnología circular en{" "}
            <span className="text-gradient-brand">3 pasos</span>
          </h2>
          <p className="mt-6 mx-auto max-w-[640px] text-[#2f6e8b] text-[17px] leading-relaxed">
            Un sistema inteligente diseñado para reducir tu huella hídrica y
            aumentar tu confort.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {STEPS.map(({ n, title, desc, Icon }) => (
            <article key={n} className="card-light text-center group">
              <div className="relative mx-auto h-20 w-20">
                <div className="absolute inset-0 rounded-2xl bg-cta-gradient-2 blur-md opacity-40 group-hover:opacity-70 transition-opacity" />
                <div className="relative h-full w-full rounded-2xl bg-cta-gradient flex items-center justify-center">
                  <Icon className="h-9 w-9 text-white" />
                </div>
              </div>

              <div className="mt-7 text-gradient-brand font-heading font-black text-[44px] leading-none">
                {n}
              </div>
              <h3 className="mt-3 font-heading font-bold text-[#0b1f3b] text-[24px]">
                {title}
              </h3>
              <p className="mt-4 text-[#2f6e8b] text-[15px] leading-relaxed">
                {desc}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link href="/tecnologia" className="btn-primary group">
            Explorar tecnología completa
            <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
