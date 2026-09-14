import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactoHero } from "@/components/contacto/ContactoHero";
import { ContactForm } from "@/components/contacto/ContactForm";
import { ContactInfo } from "@/components/contacto/ContactInfo";

export const metadata: Metadata = {
  title: "Contacto y Demo Gratuita — Ducha Sin Fin",
  description:
    "Agenda una demo gratuita de Ducha Sin Fin. Contáctanos por email, WhatsApp o solicita información y presupuesto personalizado.",
  alternates: {
    canonical: "https://duchasinfin.com/contacto",
  },
};

export default function ContactoPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ContactoHero />
        <section
          className="py-12 lg:py-20"
          style={{
            background: "linear-gradient(180deg, #0b1f3b 0%, #020b18 100%)",
          }}
        >
          <div className="container-page">
            <div className="mx-auto max-w-[1180px] grid gap-10 lg:grid-cols-[1.15fr_1fr]">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
