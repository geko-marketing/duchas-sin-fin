import type { Metadata } from "next";
import { BackToTop } from "@/components/BackToTop";
import { Benefits } from "@/components/Benefits";
import { Calculator } from "@/components/Calculator";
import { CrowdfundingCTA } from "@/components/CrowdfundingCTA";
import { Footer } from "@/components/Footer";
import { FounderVideo } from "@/components/FounderVideo";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";

export const metadata: Metadata = {
  title: "Ducha Circular — 80% Ahorro de Agua y Energía",
  description: "Sistema que limpia, filtra y recircula agua en tiempo real. Ahorra hasta 80% de agua y energía sin renunciar al confort.",
  alternates: {
    canonical: "https://duchasinfin.com",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <Calculator />
        <Benefits />
        <FounderVideo />
        <CrowdfundingCTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
