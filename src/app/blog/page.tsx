import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogList } from "@/components/blog/BlogList";

export const metadata: Metadata = {
  title: "Blog sobre Ahorro de Agua y Duchas Sostenibles",
  description:
    "Artículos sobre ahorro de agua, duchas sostenibles, eficiencia energética y tecnología de reciclaje de agua para el hogar y empresas.",
  alternates: {
    canonical: "https://duchasinfin.com/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <BlogHero />
        <BlogList />
      </main>
      <Footer />
    </>
  );
}
