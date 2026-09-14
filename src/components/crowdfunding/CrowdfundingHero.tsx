import Link from "next/link";
import { ArrowRightIcon, HeartIcon, ShieldIcon, SparklesIcon } from "@/components/icons";

const STATS = [
  { value: "80%", label: "Investigación y Desarrollo", Icon: SparklesIcon },
  { value: "20%", label: "Marketing y Difusión", Icon: HeartIcon },
  { value: "100%", label: "Transparencia Total", Icon: ShieldIcon },
];

export function CrowdfundingHero() {
  return (
    <section
      className="relative isolate overflow-hidden text-center pt-[128px] pb-16 lg:pt-[160px] lg:pb-20"
      style={{
        background:
          "linear-gradient(135deg, #020b18 0%, #0b1f3b 50%, #020b18 100%)",
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
        <span className="pill-cyan-dark">
          <HeartIcon className="h-3.5 w-3.5" />
          Donaciones abiertas
        </span>
        <h1 className="mt-8 mx-auto max-w-[920px] font-heading font-black text-white text-[clamp(40px,7vw,80px)] leading-[1.1] tracking-[-0.02em]">
          Impulsa la
          <br />
          <span className="text-gradient-brand inline-block">
            Revolución del Agua
          </span>
        </h1>
        <p className="mt-8 mx-auto max-w-[760px] text-[#cfeaf3]/80 text-[clamp(16px,1.6vw,20px)] leading-relaxed">
          Tu donación financia el desarrollo de la primera ducha circular de
          España. Transparencia total: el 80% va a I+D y el 20% a marketing.
        </p>

        <div className="mt-12 mx-auto max-w-[980px] grid gap-5 sm:grid-cols-3">
          {STATS.map(({ value, label, Icon }) => (
            <div
              key={label}
              className="hero-stat-card rounded-2xl p-6 text-center"
            >
              <div
                className="mx-auto h-12 w-12 rounded-xl flex items-center justify-center bg-cta-gradient text-white"
                aria-hidden
              >
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-4 font-heading font-black text-[40px] leading-none text-gradient-cyan">
                {value}
              </div>
              <div className="mt-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#94a3b8]">
                {label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link href="#donar" className="btn-primary group">
            <HeartIcon className="h-5 w-5" />
            Donar Ahora
            <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href="#fondos" className="btn-secondary-light">
            Ver Uso de Fondos
          </Link>
        </div>
      </div>

      <style>{`
        .hero-stat-card {
          background: rgba(11,31,59,0.6);
          border: 1px solid rgba(0,201,214,0.2);
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .hero-stat-card:hover {
          transform: translateY(-4px);
          border-color: rgba(0,201,214,0.45);
          box-shadow: 0 16px 40px rgba(0,201,214,0.22);
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-stat-card { transition: none; }
          .hero-stat-card:hover { transform: none; }
        }
      `}</style>
    </section>
  );
}
