import Image from "next/image";
import Link from "next/link";
import {
  LeafIcon,
  LinkedinIcon,
  MailIcon,
  WhatsappIcon,
} from "@/components/icons";

const COLUMNS = [
  {
    title: "Productos",
    items: [
      { label: "Tecnología", href: "/tecnologia" },
      { label: "Calculadora", href: "/ahorro" },
      { label: "Sectores", href: "/sectores" },
      { label: "Impulsa el Proyecto", href: "/crowdfunding" },
    ],
  },
  {
    title: "Empresa",
    items: [
      { label: "Sobre nosotros", href: "/nosotros" },
      { label: "Sostenibilidad", href: "/sostenibilidad" },
      { label: "Blog", href: "/blog" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
  {
    title: "Recursos",
    items: [
      { label: "Manual de usuario", href: "/downloads/manual.pdf" },
      { label: "Ficha técnica", href: "/downloads/technical.pdf" },
      { label: "Archivos BIM", href: "/downloads/bim.zip" },
      { label: "Preguntas frecuentes", href: "/faq" },
    ],
  },
];

const LEGAL = [
  { label: "Política de privacidad", href: "/privacidad" },
  { label: "Política de cookies", href: "/cookies" },
  { label: "Términos y condiciones", href: "/terminos" },
];

export function Footer() {
  return (
    <footer className="bg-footer-gradient text-white pt-20 pb-8 border-t border-[rgba(0,201,214,0.1)]">
      <div className="container-page">
        <div className="grid gap-12 text-center lg:text-left lg:grid-cols-[1.4fr_repeat(3,_1fr)]">
          <div className="flex flex-col items-center lg:items-start">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Ducha Sin Fin"
                width={64}
                height={45}
                className="h-12 w-auto"
              />
              <div className="font-heading font-bold text-[18px]">
                Ducha Sin Fin
              </div>
            </Link>
            <p className="mt-5 text-[14px] leading-relaxed text-[#a4cee0] max-w-sm mx-auto lg:mx-0">
              Tecnología circular que transforma cada ducha en un acto de
              sostenibilidad. Ahorra agua, energía y dinero sin renunciar al
              confort.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[rgba(0,201,214,0.3)] bg-[rgba(0,201,214,0.08)] px-4 py-2">
              <LeafIcon className="h-4 w-4 text-[#00c9d6]" />
              <span className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#00c9d6]">
                Certificado Sostenible
              </span>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <SocialLink
                href="https://www.linkedin.com/in/esteban-carnicero-peinado-52651616/"
                label="LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4" />
              </SocialLink>
              <SocialLink href="https://wa.me/34624640668" label="WhatsApp">
                <WhatsappIcon className="h-4 w-4" />
              </SocialLink>
              <SocialLink href="mailto:info@duchasinfin.com" label="Email">
                <MailIcon className="h-4 w-4" />
              </SocialLink>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-heading font-bold text-[15px] text-white text-center lg:text-left">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3 flex flex-col items-center lg:items-start">
                {col.items.map((it) => (
                  <li key={it.href}>
                    <Link
                      href={it.href}
                      className="text-[14px] text-[#a4cee0] hover:text-[#00c9d6] transition-colors"
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-6 border-t border-[rgba(0,201,214,0.1)] flex flex-col sm:flex-row gap-4 justify-between items-center text-center sm:text-left">
          <p className="text-[13px] text-[#7da7bb]">
            © 2026 Ducha Sin Fin. Todos los derechos reservados
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 justify-center sm:justify-end">
            {LEGAL.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[13px] text-[#7da7bb] hover:text-[#00c9d6] transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(0,201,214,0.2)] bg-[rgba(0,201,214,0.08)] text-[#00c9d6] hover:bg-[rgba(0,201,214,0.15)] hover:border-[rgba(0,201,214,0.4)] transition-colors"
    >
      {children}
    </a>
  );
}
