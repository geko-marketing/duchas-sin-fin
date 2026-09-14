import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NosotrosHero } from "@/components/nosotros/NosotrosHero";
import { MisionVision } from "@/components/nosotros/MisionVision";
import { Valores } from "@/components/nosotros/Valores";

export const metadata: Metadata = {
  title: "Quiénes Somos — Ducha Sin Fin, Tecnología Sostenible",
  description:
    "Innovación con propósito. Conoce la misión, visión y valores de Ducha Sin Fin: transformamos la forma en que el mundo usa el agua.",
  alternates: {
    canonical: "https://duchasinfin.com/nosotros",
  },
};

export default function NosotrosPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <NosotrosHero />
        <MisionVision />
        <Valores />
      </main>
      <Footer />
    </>
  );
}
