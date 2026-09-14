import Link from "next/link";
import { ArrowRightIcon, CheckIcon, HeartIcon } from "@/components/icons";

const STATS = [
  { value: "80%", label: "Fondos a I+D" },
  { value: "20%", label: "Fondos a Marketing" },
  { value: "100%", label: "Transparencia total" },
];

const POINTS = [
  "Tu donación financia investigación y desarrollo real",
  "Transparencia total en el uso de los fondos",
  "Contribuye a un proyecto con impacto real en el medio ambiente",
];

export function CrowdfundingCTA() {
  return (
    <section className="relative overflow-hidden bg-deep-gradient py-24 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(50% 50% at 80% 20%, rgba(0,201,214,0.18), transparent 60%), radial-gradient(50% 50% at 10% 80%, rgba(37,99,235,0.18), transparent 60%)",
        }}
      />
      <div className="container-page relative">
        <div className="text-center">
          <span className="pill-cyan-dark">
            <HeartIcon className="h-3.5 w-3.5" />
            Apoya el cambio
          </span>
          <h2 className="mt-7 font-heading font-black text-white text-[clamp(32px,5vw,56px)] leading-[1.1] tracking-[-0.02em]">
            Impulsa la revolución del agua
          </h2>
          <p className="mt-6 mx-auto max-w-[760px] text-[#cfeaf3] text-[18px] leading-relaxed">
            Estamos desarrollando la primera ducha circular de España, un
            proyecto nacido para cambiar la forma en la que el mundo usa el
            agua.
          </p>
          <p className="mt-4 mx-auto max-w-[760px] text-[#cfeaf3]/80 text-[16px] leading-relaxed">
            Tu donación hace posible un futuro más sostenible. El 80% va directo
            a I+D y el 20% a dar visibilidad al proyecto.
          </p>
        </div>

        <div className="mt-14 mx-auto max-w-[920px] rounded-[28px] border border-[rgba(0,201,214,0.18)] bg-[rgba(0,201,214,0.05)] backdrop-blur-sm p-8 sm:p-12">
          <div className="grid grid-cols-3 gap-4 sm:gap-8">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-gradient-cyan font-heading font-black text-[clamp(32px,4.5vw,56px)] leading-none">
                  {s.value}
                </div>
                <div className="mt-3 text-[13px] sm:text-[14px] font-medium text-[#cfeaf3]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <ul className="mt-12 mx-auto max-w-[720px] grid gap-4">
          {POINTS.map((p) => (
            <li
              key={p}
              className="flex items-start gap-4 rounded-2xl border border-[rgba(0,201,214,0.15)] bg-white/[0.04] p-5"
            >
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cta-gradient">
                <CheckIcon className="h-4 w-4 text-white" />
              </span>
              <span className="text-[15px] text-[#cfeaf3] leading-snug">{p}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-wrap justify-center items-center gap-4">
          <Link href="/donar" className="btn-primary group">
            <HeartIcon className="h-5 w-5" />
            Donar ahora
            <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href="/crowdfunding" className="btn-secondary-light">
            Conocer el proyecto
          </Link>
        </div>
      </div>
    </section>
  );
}
