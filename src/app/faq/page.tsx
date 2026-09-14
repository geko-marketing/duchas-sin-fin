import type { Metadata } from "next";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQHero } from "@/components/faq/FAQHero";
import { FAQSections } from "@/components/faq/FAQSections";
import { FAQContact } from "@/components/faq/FAQContact";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes — Ducha Sin Fin: Producto, Instalación y Precio",
  description:
    "¿Cómo funciona Ducha Sin Fin? ¿Es segura el agua reciclada? ¿Cuánto cuesta? Todas las respuestas sobre la ducha circular, instalación y mantenimiento.",
  alternates: {
    canonical: "https://duchasinfin.com/faq",
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cómo funciona Ducha Sin Fin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ducha Sin Fin captura el agua mientras te duchas, la purifica mediante un sistema de filtración avanzado de 5 etapas, y la recircula manteniendo la temperatura ideal. Esto permite ahorrar hasta un 80% de agua y energía sin comprometer el confort.",
      },
    },
    {
      "@type": "Question",
      name: "¿El agua reciclada es segura e higiénica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutamente. Nuestro sistema de purificación de 5 etapas incluye filtros de sedimentos, carbón activado, UV-C y membranas de ultrafiltración que eliminan el 99.99% de bacterias, virus y contaminantes. El agua reciclada cumple con todos los estándares de calidad del agua potable.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto ahorro realmente con Ducha Sin Fin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Una familia de 4 personas puede ahorrar aproximadamente 150,000 litros de agua al año y reducir el consumo energético en un 75%. Esto se traduce en un ahorro económico de 800-1,200€ anuales, dependiendo de las tarifas locales.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué diferencia hay entre Ducha Sin Fin y una ducha normal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La experiencia de ducha es idéntica en términos de presión, temperatura y confort. La diferencia está en que el 80% del agua se recicla en tiempo real, lo que reduce drásticamente el consumo sin que lo notes.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es difícil instalar Ducha Sin Fin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La instalación debe ser realizada por nuestros técnicos certificados y toma aproximadamente 4-6 horas. Requiere conexión a agua, desagüe y electricidad. Ofrecemos servicio de instalación completo incluido en el precio.",
      },
    },
    {
      "@type": "Question",
      name: "¿Se puede instalar en cualquier baño?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ducha Sin Fin es compatible con la mayoría de baños. Necesitas un espacio mínimo de 90x90cm para la ducha y acceso a toma de agua, desagüe y electricidad (220V). Nuestro equipo realiza una evaluación previa gratuita.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta Ducha Sin Fin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El precio completo (producto + instalación) parte desde 4,500€ para el modelo básico. Ofrecemos diferentes configuraciones y opciones de financiación desde 125€/mes sin intereses.",
      },
    },
    {
      "@type": "Question",
      name: "¿Ofrecen financiación?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, ofrecemos financiación flexible desde 12 hasta 48 meses sin intereses. También trabajamos con entidades bancarias para préstamos verdes con condiciones especiales.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hay subvenciones disponibles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, Ducha Sin Fin es elegible para diversas subvenciones de eficiencia energética y ahorro de agua a nivel autonómico y local. Te ayudamos con toda la gestión de subvenciones.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué garantía tiene Ducha Sin Fin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ofrecemos 2 años de garantía completa del fabricante que cubre defectos de fabricación y funcionamiento. Además, garantía de instalación de 2 años y soporte técnico de por vida.",
      },
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
        suppressHydrationWarning
      />
      <Header />
      <main className="flex-1">
        <FAQHero />
        <FAQSections />
        <FAQContact />
      </main>
      <Footer />
    </>
  );
}
