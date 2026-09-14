import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectoresHero } from "@/components/sectores/SectoresHero";
import { SectoresGrid } from "@/components/sectores/SectoresGrid";

export const metadata: Metadata = {
  title: "Ducha Eficiente para Hoteles, Gimnasios y Hogares",
  description:
    "Soluciones de ducha sostenible para residencial, hoteles, gimnasios y promotoras. Hasta 80% de ahorro de agua. ROI desde 12 meses.",
  alternates: {
    canonical: "https://duchasinfin.com/sectores",
  },
};

export default function SectoresPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <SectoresHero />
        <SectoresGrid />
      </main>
      <Footer />
    </>
  );
}
