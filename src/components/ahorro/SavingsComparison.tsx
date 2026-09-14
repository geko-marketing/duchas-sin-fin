import type { ComponentType, SVGProps } from "react";
import {
  DropletIcon,
  LeafIcon,
  TrendingUpIcon,
  ZapIcon,
} from "@/components/icons";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

type Row = {
  title: string;
  Icon: IconType;
  oldValue: string;
  newValue: string;
  saving: string;
};

const ROWS: Row[] = [
  {
    title: "Ahorro de Agua",
    Icon: DropletIcon,
    oldValue: "150 litros",
    newValue: "30 litros",
    saving: "80%",
  },
  {
    title: "Consumo Energético",
    Icon: ZapIcon,
    oldValue: "4.5 kWh",
    newValue: "0.9 kWh",
    saving: "80%",
  },
  {
    title: "Coste por Ducha",
    Icon: TrendingUpIcon,
    oldValue: "€2.50",
    newValue: "€0.50",
    saving: "80%",
  },
  {
    title: "Emisiones CO₂",
    Icon: LeafIcon,
    oldValue: "2.1 kg",
    newValue: "0.4 kg",
    saving: "81%",
  },
];

export function SavingsComparison() {
  return (
    <section className="py-20 lg:py-24" style={{ background: "#0b1f3b" }}>
      <div className="container-page">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-white text-[clamp(32px,5vw,56px)] leading-[1.1] tracking-[-0.02em]">
            Comparativa de Ahorro
          </h2>
          <p className="mt-4 text-[#cfeaf3]/70 text-[18px] leading-relaxed">
            Ducha tradicional vs. Ducha Sin Fin (por ducha de 10 minutos)
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {ROWS.map(({ title, Icon, oldValue, newValue, saving }) => (
            <article key={title} className="savings-card text-center">
              <div
                className="mx-auto h-16 w-16 rounded-2xl flex items-center justify-center text-white"
                style={{
                  background: "linear-gradient(135deg, #00c9d6, #0b1f3b)",
                }}
              >
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-heading font-extrabold text-white text-[18px]">
                {title}
              </h3>
              <div className="mt-6 flex items-center justify-center gap-4">
                <div className="flex flex-col gap-2">
                  <span className="text-[12px] font-semibold uppercase tracking-[0.05em] text-white/60">
                    Tradicional
                  </span>
                  <span className="text-[20px] font-bold text-white/50 line-through">
                    {oldValue}
                  </span>
                </div>
                <div
                  aria-hidden
                  className="text-[24px] text-[#00c9d6] leading-none"
                >
                  →
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[12px] font-semibold uppercase tracking-[0.05em] text-white/60">
                    Con DSF
                  </span>
                  <span className="text-[20px] font-bold text-[#00c9d6]">
                    {newValue}
                  </span>
                </div>
              </div>
              <div
                className="mt-6 rounded-xl p-4"
                style={{ background: "rgba(0,201,214,0.15)" }}
              >
                <div className="text-[12px] font-semibold uppercase tracking-[0.05em] text-white/70">
                  Ahorro:
                </div>
                <div className="mt-1 font-heading font-black text-[28px] text-[#00c9d6] leading-none">
                  {saving}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center text-[13px] text-white/50">
          * Cálculos basados en datos promedio. Los resultados pueden variar
          según el uso y las tarifas locales.
        </p>
      </div>

      <style>{`
        .savings-card {
          background: linear-gradient(135deg, rgba(0,201,214,0.1), rgba(47,110,139,0.1));
          border: 2px solid rgba(0,201,214,0.3);
          border-radius: 24px;
          padding: 40px 32px;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .savings-card:hover {
          will-change: transform;
        }
        .savings-card:hover {
          border-color: rgba(0,201,214,0.6);
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,201,214,0.4);
        }
        @media (prefers-reduced-motion: reduce) {
          .savings-card { transition: none; }
          .savings-card:hover { transform: none; }
        }
      `}</style>
    </section>
  );
}
