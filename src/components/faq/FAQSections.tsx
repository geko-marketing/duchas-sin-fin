"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@/components/icons";

type QA = { q: string; a: string };
type Section = { title: string; qas: QA[] };

const SECTIONS: Section[] = [
  {
    title: "Producto",
    qas: [
      {
        q: "¿Cómo funciona Ducha Sin Fin?",
        a: "Ducha Sin Fin captura el agua mientras te duchas, la purifica mediante un sistema de filtración avanzado de 5 etapas, y la recircula manteniendo la temperatura ideal. Esto permite ahorrar hasta un 80% de agua y energía sin comprometer el confort.",
      },
      {
        q: "¿El agua reciclada es segura e higiénica?",
        a: "Absolutamente. Nuestro sistema de purificación de 5 etapas incluye filtros de sedimentos, carbón activado, UV-C y membranas de ultrafiltración que eliminan el 99.99% de bacterias, virus y contaminantes. El agua reciclada cumple con todos los estándares de calidad del agua potable.",
      },
      {
        q: "¿Cuánto ahorro realmente con Ducha Sin Fin?",
        a: "Una familia de 4 personas puede ahorrar aproximadamente 150,000 litros de agua al año y reducir el consumo energético en un 75%. Esto se traduce en un ahorro económico de 800-1,200€ anuales, dependiendo de las tarifas locales.",
      },
      {
        q: "¿Qué diferencia hay entre Ducha Sin Fin y una ducha normal?",
        a: "La experiencia de ducha es idéntica en términos de presión, temperatura y confort. La diferencia está en que el 80% del agua se recicla en tiempo real, lo que reduce drásticamente el consumo sin que lo notes.",
      },
    ],
  },
  {
    title: "Instalación",
    qas: [
      {
        q: "¿Es difícil instalar Ducha Sin Fin?",
        a: "La instalación debe ser realizada por nuestros técnicos certificados y toma aproximadamente 4-6 horas. Requiere conexión a agua, desagüe y electricidad. Ofrecemos servicio de instalación completo incluido en el precio.",
      },
      {
        q: "¿Se puede instalar en cualquier baño?",
        a: "Ducha Sin Fin es compatible con la mayoría de baños. Necesitas un espacio mínimo de 90x90cm para la ducha y acceso a toma de agua, desagüe y electricidad (220V). Nuestro equipo realiza una evaluación previa gratuita.",
      },
      {
        q: "¿Funciona en pisos antiguos o solo en obra nueva?",
        a: "Funciona en ambos. Tenemos soluciones tanto para retrofit (instalación en baños existentes) como para integración en obra nueva. El sistema se adapta a diferentes configuraciones de fontanería.",
      },
      {
        q: "¿Qué pasa si tengo problemas con la instalación?",
        a: "Ofrecemos garantía de instalación de 2 años. Si surge cualquier problema relacionado con la instalación, nuestro equipo técnico lo resolverá sin coste adicional.",
      },
    ],
  },
  {
    title: "Mantenimiento",
    qas: [
      {
        q: "¿Qué mantenimiento requiere?",
        a: "Recomendamos un mantenimiento profesional cada 6 meses que incluye limpieza de filtros, verificación del sistema UV-C y comprobación general. También hay tareas simples mensuales como enjuagar los pre-filtros.",
      },
      {
        q: "¿Cuánto cuesta el mantenimiento?",
        a: "El mantenimiento semestral cuesta 120€ e incluye todos los filtros y piezas necesarias. También ofrecemos planes de mantenimiento anuales desde 200€/año con descuento.",
      },
      {
        q: "¿Puedo hacer el mantenimiento yo mismo?",
        a: "Algunas tareas básicas sí, como enjuagar pre-filtros o limpiar la mampara. Sin embargo, el mantenimiento técnico (cambio de filtros principales, verificación UV-C) debe ser realizado por personal certificado para mantener la garantía.",
      },
      {
        q: "¿Cada cuánto hay que cambiar los filtros?",
        a: "Los pre-filtros se cambian cada 3 meses, los filtros de carbón activado cada 6 meses, y la membrana de ultrafiltración cada 12-18 meses. Todo está incluido en el plan de mantenimiento.",
      },
    ],
  },
  {
    title: "Costes y Financiación",
    qas: [
      {
        q: "¿Cuánto cuesta Ducha Sin Fin?",
        a: "El precio completo (producto + instalación) parte desde 4,500€ para el modelo básico. Ofrecemos diferentes configuraciones y opciones de financiación desde 125€/mes sin intereses.",
      },
      {
        q: "¿Ofrecen financiación?",
        a: "Sí, ofrecemos financiación flexible desde 12 hasta 48 meses sin intereses. También trabajamos con entidades bancarias para préstamos verdes con condiciones especiales.",
      },
      {
        q: "¿Hay subvenciones disponibles?",
        a: "Sí, Ducha Sin Fin es elegible para diversas subvenciones de eficiencia energética y ahorro de agua a nivel autonómico y local. Te ayudamos con toda la gestión de subvenciones.",
      },
      {
        q: "¿En cuánto tiempo recupero la inversión?",
        a: "El ROI típico es de 4-6 años dependiendo del uso y las tarifas locales. Considerando el ahorro en agua y energía, más las posibles subvenciones, muchos clientes recuperan la inversión en menos de 5 años.",
      },
    ],
  },
  {
    title: "Garantía y Soporte",
    qas: [
      {
        q: "¿Qué garantía tiene Ducha Sin Fin?",
        a: "Ofrecemos 2 años de garantía completa del fabricante que cubre defectos de fabricación y funcionamiento. Además, garantía de instalación de 2 años y soporte técnico de por vida.",
      },
      {
        q: "¿Qué cubre la garantía?",
        a: "La garantía cubre todos los componentes del sistema (bomba, filtros, sensores, electrónica) excepto desgaste normal, uso indebido o falta de mantenimiento. Las reparaciones y piezas están incluidas.",
      },
      {
        q: "¿Tienen servicio técnico 24/7?",
        a: "Ofrecemos soporte telefónico en horario laboral (L-V 9:00-19:00) y servicio de urgencias 24/7 para problemas críticos. Tiempo de respuesta máximo: 24 horas laborables.",
      },
      {
        q: "¿Qué pasa si se estropea?",
        a: "Contacta con nuestro servicio técnico. Si está en garantía, la reparación es gratuita. Fuera de garantía, ofrecemos presupuesto previo. Disponemos de piezas de repuesto y técnicos en toda España.",
      },
    ],
  },
  {
    title: "Sostenibilidad",
    qas: [
      {
        q: "¿Realmente es sostenible reciclar agua?",
        a: "Absolutamente. Reciclar agua reduce la extracción de recursos hídricos, disminuye la energía necesaria para calentar agua nueva y reduce las aguas residuales. Es una de las soluciones más efectivas para hogares sostenibles.",
      },
      {
        q: "¿Qué impacto ambiental tiene?",
        a: "Cada Ducha Sin Fin ahorra 150,000 litros de agua/año y reduce 1.2 toneladas de CO₂/año. Es equivalente a plantar 55 árboles anualmente. El sistema está fabricado con materiales reciclables.",
      },
      {
        q: "¿Tiene certificaciones ambientales?",
        a: "Sí, contamos con certificación CE, ISO 14001 (gestión ambiental), y estamos en proceso de certificación LEED y BREEAM para construcción sostenible.",
      },
      {
        q: "¿Los filtros son reciclables?",
        a: "Sí, trabajamos con un programa de reciclaje de filtros usados. Los recogemos durante el mantenimiento y los enviamos a plantas de reciclaje especializadas sin coste adicional.",
      },
    ],
  },
];

export function FAQSections() {
  const [open, setOpen] = useState<string | null>("0-0");
  return (
    <section
      className="py-20 lg:py-24"
      style={{
        background: "linear-gradient(180deg, #0b1f3b 0%, #020b18 100%)",
      }}
    >
      <div className="container-page">
        <div className="mx-auto max-w-[880px] space-y-14">
          {SECTIONS.map((sec, si) => (
            <div key={sec.title}>
              <h2 className="font-heading font-black text-white text-[clamp(26px,3.4vw,36px)] tracking-[-0.02em]">
                {sec.title}
              </h2>
              <div className="mt-6 space-y-3">
                {sec.qas.map((qa, qi) => {
                  const id = `${si}-${qi}`;
                  const panelId = `panel-${si}-${qi}`;
                  const isOpen = open === id;
                  return (
                    <div key={id} className="faq-item rounded-2xl">
                      <button
                        type="button"
                        id={id}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpen(isOpen ? null : id)}
                        className="w-full flex items-center justify-between gap-5 text-left px-6 py-5 focus-visible:outline-2 focus-visible:outline-[#00c9d6] focus-visible:outline-offset-2 rounded-2xl"
                      >
                        <span className="text-white font-semibold text-[16px] sm:text-[17px] leading-snug">
                          {qa.q}
                        </span>
                        <ChevronDownIcon
                          className={`h-5 w-5 text-[#00c9d6] shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                          aria-hidden
                        />
                      </button>
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={id}
                        className="grid transition-[grid-template-rows] duration-300 ease-out"
                        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                      >
                        <div className="overflow-hidden">
                          <p className="px-6 pb-6 text-[15px] leading-relaxed text-[rgb(203,213,225)]">
                            {qa.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .faq-item {
          background: rgba(11,31,59,0.6);
          border: 1px solid rgba(0,201,214,0.2);
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .faq-item:hover {
          border-color: rgba(0,201,214,0.5);
          box-shadow: 0 12px 32px rgba(0,201,214,0.15);
        }
      `}</style>
    </section>
  );
}
