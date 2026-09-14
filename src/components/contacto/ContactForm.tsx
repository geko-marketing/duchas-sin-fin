"use client";

import { useState } from "react";
import { ArrowRightIcon } from "@/components/icons";

const INTERESTS = [
  "Residencial",
  "Hotel / Spa",
  "Gimnasio",
  "Promotora / Arquitectura",
  "Otro",
];

function Spinner() {
  return (
    <span
      aria-hidden
      className="inline-block h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin"
    />
  );
}

export function ContactForm() {
  const [interes, setInteres] = useState(INTERESTS[0]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    if (!name || !email) {
      setError("Por favor, completa nombre y email.");
      return;
    }
    setLoading(true);
    // Simulación de envío — reemplazar con integración real
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSuccess(true);
  };

  if (success) {
    return (
      <div
        className="rounded-[24px] p-8 sm:p-10 flex flex-col items-center justify-center text-center gap-4"
        style={{
          background: "rgba(11,31,59,0.6)",
          border: "1px solid rgba(0,201,214,0.2)",
          minHeight: 340,
        }}
        role="status"
        aria-live="polite"
      >
        <div className="h-16 w-16 rounded-full bg-cta-gradient grid place-items-center text-white text-[28px]">
          ✓
        </div>
        <h2 className="font-heading font-bold text-white text-[22px]">
          ¡Solicitud enviada!
        </h2>
        <p className="text-[15px] text-[#cfeaf3]/80">
          Nos pondremos en contacto contigo en menos de 24 horas.
        </p>
      </div>
    );
  }

  return (
    <div
      className="rounded-[24px] p-8 sm:p-10"
      style={{
        background: "rgba(11,31,59,0.6)",
        border: "1px solid rgba(0,201,214,0.2)",
      }}
    >
      <h2 className="font-heading font-bold text-white text-[24px] sm:text-[28px] tracking-[-0.01em]">
        Solicita tu Demo Gratuita
      </h2>
      <p className="mt-2 text-[15px] text-[#cfeaf3]/80">
        Completa el formulario y nos pondremos en contacto contigo en menos de
        24 horas.
      </p>

      <form
        className="mt-8 grid gap-5"
        onSubmit={handleSubmit}
        noValidate
      >
        <Field
          id="name"
          label="Nombre completo *"
          placeholder="Tu nombre"
          autoComplete="name"
          required
        />
        <Field
          id="email"
          label="Email *"
          type="email"
          placeholder="tu@email.com"
          autoComplete="email"
          required
        />
        <Field
          id="tel"
          label="Teléfono"
          type="tel"
          placeholder="+34 ..."
          autoComplete="tel"
        />
        <div>
          <label
            htmlFor="interes"
            className="block text-[13px] text-[#cfeaf3]/80 mb-2"
          >
            Tipo de interés
          </label>
          <select
            id="interes"
            name="interes"
            value={interes}
            onChange={(e) => setInteres(e.target.value)}
            className="w-full rounded-xl px-4 py-3.5 text-[15px] text-white bg-[rgba(0,201,214,0.06)] border border-[rgba(0,201,214,0.2)] outline-none focus-visible:border-[#00c9d6] focus-visible:ring-2 focus-visible:ring-[rgba(0,201,214,0.4)] appearance-none transition-colors"
          >
            {INTERESTS.map((opt) => (
              <option key={opt} value={opt} className="bg-[#0b1f3b]">
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="mensaje"
            className="block text-[13px] text-[#cfeaf3]/80 mb-2"
          >
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={4}
            placeholder="Cuéntanos en qué podemos ayudarte"
            className="w-full rounded-xl px-4 py-3.5 text-[15px] text-white placeholder:text-white/40 bg-[rgba(0,201,214,0.06)] border border-[rgba(0,201,214,0.2)] outline-none focus-visible:border-[#00c9d6] focus-visible:ring-2 focus-visible:ring-[rgba(0,201,214,0.4)] transition-colors resize-y"
          />
        </div>

        {error && (
          <div
            role="alert"
            aria-live="assertive"
            className="rounded-xl px-4 py-3 text-[14px] text-[#fecaca]"
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
          disabled={loading}
          aria-busy={loading}
          className="mt-2 w-full btn-primary group disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <Spinner /> Enviando…
            </>
          ) : (
            <>
              Enviar solicitud
              <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

function Field({
  id,
  label,
  placeholder,
  type = "text",
  autoComplete,
  required,
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[13px] text-[#cfeaf3]/80 mb-2">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-xl px-4 py-3.5 text-[15px] text-white placeholder:text-white/40 bg-[rgba(0,201,214,0.06)] border border-[rgba(0,201,214,0.2)] outline-none focus-visible:border-[#00c9d6] focus-visible:ring-2 focus-visible:ring-[rgba(0,201,214,0.4)] transition-colors"
      />
    </div>
  );
}
