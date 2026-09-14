import type { Metadata } from "next";
import { CrowdfundingHero } from "@/components/crowdfunding/CrowdfundingHero";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProjectInfo } from "@/components/crowdfunding/ProjectInfo";
import { RewardTiers } from "@/components/crowdfunding/RewardTiers";

export const metadata: Metadata = {
  title: "Apoya la Primera Ducha Circular de España",
  description:
    "Tu donación financia la primera ducha circular de España. 80% va a I+D. Recompensas exclusivas para primeros colaboradores.",
  alternates: {
    canonical: "https://duchasinfin.com/crowdfunding",
  },
};

export default function CrowdfundingPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <CrowdfundingHero />
        <RewardTiers />
        <ProjectInfo />
      </main>
      <Footer />
    </>
  );
}
