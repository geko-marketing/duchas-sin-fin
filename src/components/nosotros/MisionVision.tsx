import { SparklesIcon, GlobeIcon } from "@/components/icons";

export function MisionVision() {
  return (
    <section
      className="py-20 lg:py-24"
      style={{
        background: "linear-gradient(180deg, #020b18 0%, #0b1f3b 100%)",
      }}
    >
      <div className="container-page">
        <div className="mx-auto max-w-[1100px] grid gap-8 md:grid-cols-2">
          <article className="mv-card rounded-[24px] p-10 sm:p-12">
            <div
              className="h-16 w-16 rounded-2xl grid place-items-center bg-cta-gradient text-white"
              aria-hidden
            >
              <SparklesIcon className="h-7 w-7" />
            </div>
            <h2 className="mt-7 font-heading font-black text-white text-[clamp(28px,3.6vw,40px)] leading-tight">
              Nuestra Misión
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-[rgb(203,213,225)]">
              Hacer la sostenibilidad accesible para todos, combinando
              tecnología de vanguardia, eficiencia energética y diseño
              inteligente para crear soluciones que realmente marquen la
              diferencia.
            </p>
          </article>
          <article className="mv-card rounded-[24px] p-10 sm:p-12">
            <div
              className="h-16 w-16 rounded-2xl grid place-items-center bg-cta-gradient text-white"
              aria-hidden
            >
              <GlobeIcon className="h-7 w-7" />
            </div>
            <h2 className="mt-7 font-heading font-black text-white text-[clamp(28px,3.6vw,40px)] leading-tight">
              Nuestra Visión
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-[rgb(203,213,225)]">
              Un futuro donde cada hogar, hotel y edificio contribuye
              activamente a la conservación del agua y la energía, creando un
              impacto positivo medible en el planeta.
            </p>
          </article>
        </div>
      </div>
      <style>{`
        .mv-card {
          background: linear-gradient(135deg, rgba(0,201,214,0.1), rgba(47,110,139,0.1));
          border: 1px solid rgba(0,201,214,0.2);
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
        }
        .mv-card:hover {
          border-color: rgba(0,201,214,0.5);
          box-shadow: 0 18px 44px rgba(0,201,214,0.22);
          transform: translateY(-6px);
        }
        @media (prefers-reduced-motion: reduce) {
          .mv-card { transition: none; }
          .mv-card:hover { transform: none; }
        }
      `}</style>
    </section>
  );
}
