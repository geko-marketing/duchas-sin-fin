import Link from "next/link";
import { ArrowRightIcon, MailIcon } from "@/components/icons";

export function FAQContact() {
  return (
    <section
      className="py-20 lg:py-24"
      style={{
        background: "linear-gradient(180deg, #020b18 0%, #0b1f3b 100%)",
      }}
    >
      <div className="container-page">
        <div
          className="mx-auto max-w-[880px] rounded-[28px] p-10 sm:p-14 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,201,214,0.12), rgba(37,99,235,0.12))",
            border: "1px solid rgba(0,201,214,0.25)",
          }}
        >
          <div
            className="mx-auto h-16 w-16 rounded-2xl grid place-items-center bg-cta-gradient text-white"
            aria-hidden
          >
            <MailIcon className="h-7 w-7" />
          </div>
          <h2 className="mt-7 font-heading font-black text-white text-[clamp(28px,4vw,42px)] leading-tight tracking-[-0.02em]">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="mt-5 text-[#cfeaf3]/80 text-[17px] leading-relaxed">
            Nuestro equipo está aquí para ayudarte con cualquier pregunta.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contacto" className="btn-primary group">
              Contactar con Soporte
              <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
