import { CheckIcon } from "@/components/icons";

const ITEMS = [
  "Documentación técnica en preparación",
  "Validación con equipo de ingeniería",
  "Información técnica detallada disponible próximamente",
];

export function TechFeatures() {
  return (
    <section className="py-20 lg:py-24" style={{ background: "#0b1f3b" }}>
      <div className="container-page">
        <div className="text-center">
          <h2 className="font-heading font-black text-white text-[clamp(32px,5vw,56px)] leading-[1.1] tracking-[-0.02em]">
            Tecnología de Vanguardia
          </h2>
          <p className="mt-6 mx-auto max-w-[680px] text-[#cfeaf3] text-[17px] leading-relaxed">
            Cada componente está diseñado para ofrecer la máxima eficiencia
            hídrica y experiencias de alto nivel.
          </p>
        </div>

        <div
          className="mt-16 mx-auto max-w-[820px] rounded-[20px] p-10 sm:p-12"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,201,214,0.1), rgba(37,99,235,0.1))",
            border: "1.5px solid rgba(0,201,214,0.3)",
          }}
        >
          <h3 className="font-heading font-black text-white text-[clamp(22px,3vw,30px)] leading-tight">
            Especificaciones Técnicas en Desarrollo
          </h3>
          <p className="mt-5 text-[#cfeaf3] text-[16px] leading-relaxed">
            Nuestro equipo de ingenieros está finalizando las especificaciones
            técnicas detalladas del sistema. Pronto compartiremos información
            completa sobre cada componente y su funcionamiento.
          </p>

          <ul className="mt-8 grid gap-4">
            {ITEMS.map((it) => (
              <li
                key={it}
                className="flex items-start gap-4 rounded-[15px] p-5 sm:p-6"
                style={{ background: "rgba(255,255,255,0.5)" }}
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cta-gradient">
                  <CheckIcon className="h-4 w-4 text-white" />
                </span>
                <span className="text-[15px] sm:text-[16px] font-medium text-[#0b1f3b] leading-snug">
                  {it}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
