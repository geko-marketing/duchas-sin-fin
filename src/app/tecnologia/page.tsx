import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TecnologiaHero } from "@/components/tecnologia/TecnologiaHero";
import { TechFeatures } from "@/components/tecnologia/TechFeatures";

export const metadata: Metadata = {
  title: "Sistema de Reciclaje de Agua para Ducha — Tecnología",
  description: "Sistema de filtración de 5 etapas con UV-C, carbón activado y ultrafiltración. Descubre cómo reciclamos el 80% del agua en cada ducha.",
  alternates: {
    canonical: "https://duchasinfin.com/tecnologia",
  },
};

export default function TecnologiaPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <TecnologiaHero />
        <TechFeatures />
      </main>
      <Footer />
    </>
  );
}
