"use client";

import { useState } from "react";
import { ArrowRightIcon, HeartIcon } from "@/components/icons";

const PRESET_AMOUNTS = [5, 10, 25, 50, 100, 200];
const COUNTRIES = [
  "España",
  "Alemania",
  "Francia",
  "Italia",
  "Portugal",
  "Reino Unido",
  "Países Bajos",
  "Bélgica",
  "Suiza",
  "Austria",
  "Estados Unidos",
  "Canadá",
  "México",
  "Argentina",
  "Colombia",
  "Chile",
];

export function RewardTiers() {
  const [amount, setAmount] = useState<number | "custom">(25);
  const [custom, setCustom] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState(COUNTRIES[0]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [donationType, setDonationType] = useState<"once" | "monthly">("once");

  const final =
    amount === "custom" ? Number(custom || 0) : (amount as number);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!final || final < 1) {
      setError("Selecciona un importe de al menos 1€.");
      return;
    }
    if (!name.trim() || !surname.trim() || !email.trim()) {
      setError("Completa nombre, apellidos y email.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: final,
          name,
          surname,
          email,
          country,
          type: donationType,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        url?: string;
        error?: string;
      };
      if (!res.ok || !data.url) {
        setError(data.error ?? "No se pudo iniciar el pago.");
        setLoading(false);
        return;
      }
      window.location.href = data.url;
    } catch {
      setError("Error de red. Inténtalo de nuevo.");
      setLoading(false);
    }
  };

  return (
    <section
      id="donar"
      className="relative py-24 lg:py-28 scroll-mt-20"
      style={{
        background:
          "linear-gradient(180deg, #020b18 0%, #0b1f3b 50%, #020b18 100%)",
      }}
    >
      <div className="container-page relative">
        <div className="text-center">
          <span className="pill-cyan-dark">Apoya el proyecto</span>
          <h2 className="mt-7 font-heading font-black text-white text-[clamp(32px,5vw,56px)] leading-[1.1] tracking-[-0.02em]">
            Tu Aportación Impulsa
            <br />
            <span className="text-gradient-brand">la Revolución del Agua</span>
          </h2>
          <p className="mt-6 mx-auto max-w-[760px] text-[#cfeaf3]/70 text-[17px] leading-relaxed">
            Cada euro se destina directamente al desarrollo de la primera ducha
            circular de España.
            <br />
            <span className="text-[#00c9d6] font-semibold">
              80% I+D · 20% Marketing
            </span>
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="mt-14 mx-auto max-w-[760px] rounded-[24px] p-8 sm:p-10"
          style={{
            background: "rgba(11,31,59,0.6)",
            border: "1px solid rgba(0,201,214,0.2)",
          }}
        >
          <div
            className="flex rounded-xl overflow-hidden p-1 gap-1 mb-8"
            style={{ background: "rgba(0,201,214,0.04)", border: "1px solid rgba(0,201,214,0.2)" }}
          >
            <button
              type="button"
              onClick={() => setDonationType("once")}
              className={`flex-1 py-2.5 rounded-lg text-[14px] font-semibold transition-all duration-200 ${donationType === "once" ? "text-white" : "text-[#cfeaf3]/60 hover:text-[#cfeaf3]/90"}`}
              style={donationType === "once" ? { background: "rgba(0,201,214,0.2)", border: "1px solid rgba(0,201,214,0.5)" } : {}}
            >
              Una vez
            </button>
            <button
              type="button"
              onClick={() => setDonationType("monthly")}
              className={`flex-1 py-2.5 rounded-lg text-[14px] font-semibold transition-all duration-200 ${donationType === "monthly" ? "text-white" : "text-[#cfeaf3]/60 hover:text-[#cfeaf3]/90"}`}
              style={donationType === "monthly" ? { background: "rgba(0,201,214,0.2)", border: "1px solid rgba(0,201,214,0.5)" } : {}}
            >
              Mensual
            </button>
          </div>

          <div>
            <div className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#00c9d6]">
              Selecciona una cantidad
            </div>
            <div className="mt-4 grid grid-cols-3 sm:grid-cols-6 gap-3">
              {PRESET_AMOUNTS.map((a) => {
                const active = amount === a;
                return (
                  <button
                    key={a}
                    type="button"
                    onClick={() => {
                      setAmount(a);
                      setCustom("");
                    }}
                    className={`amount-btn ${active ? "is-active" : ""}`}
                  >
                    €{a}
                  </button>
                );
              })}
            </div>
            <div className="mt-3 flex flex-col sm:flex-row gap-3 items-stretch">
              <button
                type="button"
                onClick={() => setAmount("custom")}
                className={`amount-btn flex-1 ${amount === "custom" ? "is-active" : ""}`}
              >
                Otra cantidad
              </button>
              {amount === "custom" && (
                <input
                  type="number"
                  min={1}
                  step={1}
                  value={custom}
                  onChange={(e) => setCustom(e.target.value)}
                  placeholder="Importe en €"
                  className="flex-1 rounded-xl px-4 py-3.5 text-[15px] text-white bg-[rgba(0,201,214,0.06)] border border-[rgba(0,201,214,0.2)] outline-none focus-visible:border-[#00c9d6] focus-visible:ring-2 focus-visible:ring-[rgba(0,201,214,0.4)] transition-colors"
                />
              )}
            </div>
            <p className="mt-5 text-center text-[#cfeaf3]/80 text-[15px]">
              Donarás{" "}
              <span className="font-heading font-bold text-[#00c9d6]">
                €{final || 0}{donationType === "monthly" ? "/mes" : ""}
              </span>
            </p>
          </div>

          <div className="mt-10">
            <div className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#00c9d6]">
              Tus datos
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Field
                label="Nombre *"
                placeholder="Tu nombre"
                value={name}
                onChange={setName}
                autoComplete="given-name"
                required
              />
              <Field
                label="Apellidos *"
                placeholder="Tus apellidos"
                value={surname}
                onChange={setSurname}
                autoComplete="family-name"
                required
              />
              <Field
                label="Email *"
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={setEmail}
                autoComplete="email"
                required
                full
              />
              <div className="sm:col-span-2">
                <label className="block">
                  <span className="block text-[13px] text-[#cfeaf3]/80 mb-2">
                    Selecciona tu país *
                  </span>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full rounded-xl px-4 py-3.5 text-[15px] text-white bg-[rgba(0,201,214,0.06)] border border-[rgba(0,201,214,0.2)] outline-none focus-visible:border-[#00c9d6] focus-visible:ring-2 focus-visible:ring-[rgba(0,201,214,0.4)] appearance-none transition-colors"
                  >
                    {COUNTRIES.map((c) => (
                      <option key={c} value={c} className="bg-[#0b1f3b]">
                        {c}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
          </div>

          {error && (
            <div
              role="alert"
              className="mt-6 rounded-xl px-4 py-3 text-[14px] text-[#fecaca]"
              style={{
                background: "rgba(220,38,38,0.1)",
                border: "1px solid rgba(220,38,38,0.35)",
              }}
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !final}
            aria-busy={loading}
            className="mt-10 w-full btn-primary group disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Spinner /> Redirigiendo a pago seguro…
              </>
            ) : (
              <>
                <HeartIcon className="h-5 w-5" />
                {donationType === "monthly" ? `Donar €${final || 0}/mes` : `Donar €${final || 0}`}
                <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>

          <p className="mt-4 text-center text-[12px] text-[#cfeaf3]/55">
            Pago seguro procesado por Stripe. No almacenamos tus datos bancarios.
            {donationType === "monthly" && " Puedes cancelar tu suscripción cuando quieras."}
          </p>
        </form>
      </div>

      <style>{`
        .amount-btn {
          padding: 14px 16px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 700;
          color: #94a3b8;
          background: rgba(0,201,214,0.06);
          border: 1px solid rgba(0,201,214,0.2);
          transition: all 0.25s ease;
        }
        .amount-btn:hover {
          color: #ffffff;
          border-color: rgba(0,201,214,0.5);
          background: rgba(0,201,214,0.12);
        }
        .amount-btn.is-active {
          color: #ffffff;
          border-color: #00c9d6;
          background: linear-gradient(135deg, rgba(0,201,214,0.2), rgba(37,99,235,0.2));
          box-shadow: 0 8px 24px rgba(0,201,214,0.25);
        }
      `}</style>
    </section>
  );
}

function Spinner() {
  return (
    <span
      aria-hidden
      className="inline-block h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin"
    />
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  full = false,
  value,
  onChange,
  autoComplete,
  required,
}: {
  label: string;
  placeholder: string;
  type?: string;
  full?: boolean;
  value: string;
  onChange: (v: string) => void;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="block text-[13px] text-[#cfeaf3]/80 mb-2">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-xl px-4 py-3.5 text-[15px] text-white placeholder:text-white/40 bg-[rgba(0,201,214,0.06)] border border-[rgba(0,201,214,0.2)] outline-none focus-visible:border-[#00c9d6] focus-visible:ring-2 focus-visible:ring-[rgba(0,201,214,0.4)] transition-colors"
      />
    </label>
  );
}
