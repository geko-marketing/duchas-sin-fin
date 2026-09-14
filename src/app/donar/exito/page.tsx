import type { Metadata } from "next";
import Link from "next/link";
import { stripe } from "@/lib/stripe";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckIcon, HeartIcon, ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Gracias por tu donación · Ducha Sin Fin",
  description: "Tu donación ha sido procesada con éxito.",
  robots: { index: false },
};

type Props = {
  searchParams: Promise<{ session_id?: string }>;
};

async function getDonation(sessionId?: string) {
  if (!sessionId) return null;
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.status !== "complete") return null;
    const amount =
      typeof session.amount_total === "number"
        ? session.amount_total / 100
        : null;
    const name =
      (session.metadata?.donor_name as string | undefined) ?? null;
    const isMonthly = session.mode === "subscription";
    return { amount, name, isMonthly };
  } catch {
    return null;
  }
}

export default async function DonationSuccessPage({ searchParams }: Props) {
  const { session_id } = await searchParams;
  const donation = await getDonation(session_id);

  return (
    <>
      <Header />
      <main className="flex-1">
        <section
          className="relative isolate overflow-hidden text-center pt-[160px] pb-24 lg:pb-32"
          style={{
            background: "linear-gradient(180deg, #020b18 0%, #0b1f3b 100%)",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{
              background:
                "radial-gradient(50% 50% at 30% 20%, rgba(0,201,214,0.18), transparent 60%), radial-gradient(50% 50% at 80% 80%, rgba(37,99,235,0.18), transparent 60%)",
            }}
          />
          <div className="container-page relative">
            <div
              className="mx-auto h-20 w-20 rounded-2xl grid place-items-center bg-cta-gradient text-white"
              aria-hidden
            >
              <CheckIcon className="h-9 w-9" />
            </div>
            <span className="mt-8 inline-block pill-cyan-dark">
              Donación recibida
            </span>
            <h1 className="mt-6 mx-auto max-w-[820px] font-heading font-black text-white text-[clamp(36px,6vw,68px)] leading-[1.05] tracking-[-0.02em]">
              {donation?.name ? `Gracias, ${donation.name.split(" ")[0]}.` : "¡Gracias!"}
              <br />
              <span className="text-gradient-brand inline-block">
                Tu apoyo nos impulsa.
              </span>
            </h1>
            {donation?.amount != null && (
              <p className="mt-6 text-[#cfeaf3]/80 text-[clamp(16px,1.6vw,20px)] leading-relaxed">
                {donation.isMonthly ? (
                  <>
                    Tu suscripción mensual de{" "}
                    <span className="text-[#00c9d6] font-bold">
                      €{donation.amount.toLocaleString("es-ES")}/mes
                    </span>{" "}
                    está activa. Recibirás un recibo cada mes en tu email.
                  </>
                ) : (
                  <>
                    Hemos recibido tu donación de{" "}
                    <span className="text-[#00c9d6] font-bold">
                      €{donation.amount.toLocaleString("es-ES")}
                    </span>
                    . Recibirás un recibo en tu email en unos minutos.
                  </>
                )}
              </p>
            )}
            {!donation && (
              <p className="mt-6 text-[#cfeaf3]/80 text-[17px] leading-relaxed">
                Estamos confirmando tu pago. Si no recibes el recibo en unos
                minutos, contáctanos.
              </p>
            )}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary group">
                <HeartIcon className="h-5 w-5" />
                Volver al inicio
                <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/sostenibilidad" className="btn-secondary-light">
                Ver nuestro impacto
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
