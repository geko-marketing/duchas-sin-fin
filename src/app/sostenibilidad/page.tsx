import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SostenibilidadHero } from "@/components/sostenibilidad/SostenibilidadHero";
import { ImpactCounter } from "@/components/sostenibilidad/ImpactCounter";

export const metadata: Metadata = {
  title: "Impacto Ambiental: 150.000L Agua Ahorrados por Ducha",
  description:
    "Cada Ducha Sin Fin ahorra 150.000 litros de agua al año y reduce 1,2 toneladas de CO₂. Consulta nuestro impacto ambiental en tiempo real.",
  alternates: {
    canonical: "https://duchasinfin.com/sostenibilidad",
  },
};

export default function SostenibilidadPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <SostenibilidadHero />
        <ImpactCounter />
      </main>
      <Footer />
    </>
  );
}
