"use client";

import { useMemo, useState } from "react";
import {
  CheckIcon,
  DownloadIcon,
  HomeIcon,
  HotelIcon,
} from "@/components/icons";

type Mode = "home" | "hotel";

const FEATURES = [
  "Cálculo en tiempo real basado en tu consumo",
  "Estimación de ROI personalizada",
  "Informe detallado descargable en PDF",
];

export function Calculator() {
  const [mode, setMode] = useState<Mode>("home");
  const [people, setPeople] = useState(3);
  const [minutes, setMinutes] = useState(8);
  const [waterPrice, setWaterPrice] = useState(2.5);
  const [energyPrice, setEnergyPrice] = useState(0.15);

  const results = useMemo(() => {
    const flow = mode === "home" ? 9 : 12; // L/min
    const dailyL = people * minutes * flow;
    const monthlyL = dailyL * 30;
    const savedL = Math.round(monthlyL * 0.8);
    const kWh = Math.round((savedL / 1000) * 6.5);
    const moneyMonth =
      (savedL / 1000) * waterPrice + kWh * energyPrice;
    const co2 = Math.round((kWh * 0.3) / 1);
    return {
      litres: savedL,
      kWh,
      money: moneyMonth.toFixed(2),
      co2,
    };
  }, [mode, people, minutes, waterPrice, energyPrice]);

  return (
    <section className="bg-deep-gradient py-24 lg:py-28">
      <div className="container-page">
        <div className="text-center">
          <span className="pill-cyan-dark">Calculadora de ahorro</span>
          <h2 className="mt-7 font-heading font-black text-white text-[clamp(32px,5vw,56px)] leading-[1.1] tracking-[-0.02em]">
            Calcula tu ahorro orientativo
          </h2>
          <p className="mt-6 mx-auto max-w-[640px] text-[#cfeaf3] text-[17px] leading-relaxed">
            Calcula tu ahorro personalizado en agua, energía y dinero
          </p>
        </div>

        {/* Features chips */}
        <div className="mt-12 mx-auto max-w-[820px] grid gap-4 sm:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f}
              className="flex items-start gap-3 rounded-2xl border border-[rgba(255,255,255,0.1)] bg-white/5 backdrop-blur-sm p-5"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cta-gradient">
                <CheckIcon className="h-3.5 w-3.5 text-white" />
              </span>
              <span className="text-[14px] text-[#cfeaf3] leading-snug">{f}</span>
            </div>
          ))}
        </div>

        {/* Calculator card */}
        <div className="mt-12 mx-auto max-w-[1060px] rounded-[30px] bg-white/[0.98] p-8 sm:p-12 lg:p-16 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.4)]">
          <h3 className="text-center font-heading font-black text-[#0b1f3b] text-[28px] sm:text-[32px]">
            Calcula tu ahorro
          </h3>

          {/* Type selector */}
          <div className="mt-8 mx-auto inline-flex w-full max-w-md p-1.5 rounded-full bg-[rgba(0,201,214,0.1)]">
            <ModeButton
              icon={<HomeIcon className="h-4 w-4" />}
              label="Hogar"
              active={mode === "home"}
              onClick={() => setMode("home")}
            />
            <ModeButton
              icon={<HotelIcon className="h-4 w-4" />}
              label="Hotel"
              active={mode === "hotel"}
              onClick={() => setMode("hotel")}
            />
          </div>

          {/* Inputs */}
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <Slider
              label={mode === "home" ? "Número de personas en el hogar" : "Habitaciones del hotel"}
              value={people}
              min={1}
              max={mode === "home" ? 8 : 200}
              step={1}
              onChange={setPeople}
              valueLabel={
                mode === "home"
                  ? `${people} ${people === 1 ? "persona" : "personas"}`
                  : `${people} habitaciones`
              }
            />
            <Slider
              label="Minutos promedio por ducha"
              value={minutes}
              min={3}
              max={20}
              step={1}
              onChange={setMinutes}
              valueLabel={`${minutes} minutos`}
            />
            <Slider
              label="Precio del agua (€/m³)"
              value={waterPrice}
              min={1}
              max={5}
              step={0.1}
              onChange={setWaterPrice}
              valueLabel={`€${waterPrice.toFixed(2)}`}
            />
            <Slider
              label="Precio de la energía (€/kWh)"
              value={energyPrice}
              min={0.05}
              max={0.5}
              step={0.01}
              onChange={setEnergyPrice}
              valueLabel={`€${energyPrice.toFixed(2)}`}
            />
          </div>

          {/* Results grid */}
          <div className="mt-10 grid gap-4 grid-cols-2 lg:grid-cols-4">
            <ResultCard value={results.litres.toLocaleString("es-ES")} label="Litros/mes" />
            <ResultCard value={results.kWh.toString()} label="kWh/mes" />
            <ResultCard value={`€${results.money}`} label="Ahorro/mes" />
            <ResultCard value={`${results.co2} kg`} label="CO₂/mes" />
          </div>

          {/* CTA */}
          <div className="mt-10 flex justify-center">
            <button type="button" className="btn-primary group">
              <DownloadIcon className="h-5 w-5" />
              Descargar informe completo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ModeButton({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex-1 rounded-full px-5 py-3 text-[15px] font-bold flex items-center justify-center gap-2 transition-all ${
        active
          ? "bg-cta-gradient-2 text-white shadow-[0_8px_20px_rgba(0,201,214,0.35)]"
          : "text-[#2f6e8b] hover:text-[#0b1f3b]"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  valueLabel,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (n: number) => void;
  valueLabel: string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <label className="block">
      <div className="flex items-baseline justify-between">
        <span className="text-[14px] font-semibold text-[#0b1f3b]">{label}</span>
        <span className="text-[15px] font-bold text-gradient-brand">
          {valueLabel}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full h-2 rounded-full appearance-none cursor-pointer slider-input"
        style={{
          background: `linear-gradient(to right, #00c9d6 0%, #2563eb ${pct}%, #e0f2fe ${pct}%, #e0f2fe 100%)`,
        }}
      />
      <style jsx>{`
        .slider-input::-webkit-slider-thumb {
          appearance: none;
          height: 22px;
          width: 22px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00c9d6, #2563eb);
          border: 3px solid #ffffff;
          box-shadow: 0 4px 12px rgba(0, 201, 214, 0.4);
          cursor: pointer;
        }
        .slider-input::-moz-range-thumb {
          height: 22px;
          width: 22px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00c9d6, #2563eb);
          border: 3px solid #ffffff;
          box-shadow: 0 4px 12px rgba(0, 201, 214, 0.4);
          cursor: pointer;
        }
      `}</style>
    </label>
  );
}

function ResultCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-[rgba(0,201,214,0.15)] bg-[#f0f9ff] p-5 text-center">
      <div className="font-heading font-black text-[clamp(24px,3vw,36px)] text-gradient-brand leading-none">
        {value}
      </div>
      <div className="mt-2 text-[13px] font-medium text-[#2f6e8b]">{label}</div>
    </div>
  );
}
