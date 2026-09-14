import type { Metadata } from "next";
import { AhorroHero } from "@/components/ahorro/AhorroHero";
import { Calculator } from "@/components/Calculator";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SavingsComparison } from "@/components/ahorro/SavingsComparison";

export const metadata: Metadata = {
  title: "Calculadora Ahorro Agua Ducha — ¿Cuánto Ahorras?",
  description: "Calcula exactamente cuánto ahorras en agua, energía y dinero con Ducha Sin Fin. Una familia de 4 personas ahorra hasta 1.200€/año.",
  alternates: {
    canonical: "https://duchasinfin.com/ahorro",
  },
};

export default function AhorroPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <AhorroHero />
        <SavingsComparison />
        <Calculator />
      </main>
      <Footer />
    </>
  );
}
