"use client";

import { useEffect, useRef, useState } from "react";
import { DropletIcon, ZapIcon, LeafIcon, TrendingUpIcon } from "@/components/icons";

type Stat = {
  Icon: typeof DropletIcon;
  target: number;
  label: string;
  detail: string;
  format: "number" | "euro";
};

const STATS: Stat[] = [
  {
    Icon: DropletIcon,
    target: 2_500_000,
    label: "Litros de agua ahorrados",
    detail: "Equivalente a 1,000 piscinas olímpicas",
    format: "number",
  },
  {
    Icon: ZapIcon,
    target: 180_000,
    label: "kWh de energía ahorrados",
    detail: "Suficiente para 60 hogares durante un año",
    format: "number",
  },
  {
    Icon: LeafIcon,
    target: 45_000,
    label: "kg de CO₂ evitados",
    detail: "Equivalente a plantar 2,250 árboles",
    format: "number",
  },
  {
    Icon: TrendingUpIcon,
    target: 320_000,
    label: "Ahorrados por nuestros clientes",
    detail: "Y sigue creciendo cada día",
    format: "euro",
  },
];

function format(n: number, kind: Stat["format"]) {
  const num = Math.round(n).toLocaleString("es-ES");
  return kind === "euro" ? `€${num}` : num;
}

export function ImpactCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;
    if (reduced) {
      setActive(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setActive(true);
            obs.disconnect();
          }
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      className="py-20 lg:py-24"
      style={{
        background: "linear-gradient(180deg, #0b1f3b 0%, #020b18 100%)",
      }}
    >
      <div className="container-page">
        <div className="text-center">
          <span className="pill-cyan-dark">En vivo</span>
          <h2 className="mt-7 font-heading font-black text-white text-[clamp(32px,5vw,56px)] leading-[1.1] tracking-[-0.02em]">
            Nuestro Impacto en{" "}
            <span className="text-gradient-brand">Tiempo Real</span>
          </h2>
          <p className="mt-6 mx-auto max-w-[640px] text-[#cfeaf3]/70 text-[17px] leading-relaxed">
            Cada segundo cuenta. Mira cómo crecen los números.
          </p>
        </div>

        <div
          ref={ref}
          className="mt-16 mx-auto max-w-[1180px] grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {STATS.map((s) => (
            <ImpactCard key={s.label} stat={s} active={active} />
          ))}
        </div>

        <p className="mt-10 text-center text-[13px] text-[#cfeaf3]/60">
          * Datos actualizados en tiempo real basados en nuestras 500+
          instalaciones activas.
        </p>
      </div>
    </section>
  );
}

function ImpactCard({ stat, active }: { stat: Stat; active: boolean }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const dur = 2200;
    let raf = 0;
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(stat.target * eased);
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, stat.target]);

  return (
    <article className="impact-card rounded-2xl p-7 text-center">
      <div
        className="mx-auto h-14 w-14 rounded-xl grid place-items-center bg-cta-gradient text-white"
        aria-hidden
      >
        <stat.Icon className="h-6 w-6" />
      </div>
      <div className="mt-6 font-heading font-black text-gradient-cyan text-[clamp(30px,3.6vw,40px)] leading-none">
        {format(val, stat.format)}
      </div>
      <div className="mt-3 text-white text-[15px] font-semibold leading-snug">
        {stat.label}
      </div>
      <div className="mt-2 text-[13px] text-[#cfeaf3]/70 leading-relaxed">
        {stat.detail}
      </div>
      <style>{`
        .impact-card {
          background: rgba(11,31,59,0.6);
          border: 1px solid rgba(0,201,214,0.2);
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
        }
        .impact-card:hover {
          border-color: rgba(0,201,214,0.55);
          box-shadow: 0 18px 44px rgba(0,201,214,0.22);
          transform: translateY(-6px);
        }
        @media (prefers-reduced-motion: reduce) {
          .impact-card { transition: none; }
          .impact-card:hover { transform: none; }
        }
      `}</style>
    </article>
  );
}
