import { MailIcon, WhatsappIcon, HomeIcon, ScrollIcon } from "@/components/icons";

const ITEMS = [
  {
    Icon: MailIcon,
    title: "Email",
    lines: ["info@duchasinfin.com"],
    href: "mailto:info@duchasinfin.com",
  },
  {
    Icon: WhatsappIcon,
    title: "WhatsApp",
    lines: ["+34 624 640 668"],
    href: "https://wa.me/34624640668",
  },
  {
    Icon: HomeIcon,
    title: "Oficina",
    lines: ["Santa Cruz de Tenerife", "Islas Canarias, España"],
    href: null,
  },
  {
    Icon: ScrollIcon,
    title: "Horario de Atención",
    lines: ["Lunes a Viernes: 9:00 - 18:00", "Sábados: 10:00 - 14:00"],
    href: null,
  },
];

export function ContactInfo() {
  return (
    <div>
      <h2 className="font-heading font-bold text-white text-[24px] sm:text-[28px] tracking-[-0.01em]">
        Información de Contacto
      </h2>
      <div className="mt-8 grid gap-4">
        {ITEMS.map(({ Icon, title, lines, href }) => {
          const inner = (
            <article className="info-row flex items-start gap-4 rounded-2xl p-5">
              <div
                className="h-12 w-12 rounded-xl grid place-items-center bg-cta-gradient text-white shrink-0"
                aria-hidden
              >
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#00c9d6]">
                  {title}
                </div>
                {lines.map((l) => (
                  <div
                    key={l}
                    className="text-white text-[15px] leading-relaxed"
                  >
                    {l}
                  </div>
                ))}
              </div>
            </article>
          );
          return href ? (
            <a
              key={title}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
            >
              {inner}
            </a>
          ) : (
            <div key={title}>{inner}</div>
          );
        })}
      </div>
      <style>{`
        .info-row {
          background: rgba(11,31,59,0.6);
          border: 1px solid rgba(0,201,214,0.2);
          transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
        }
        .info-row:hover {
          border-color: rgba(0,201,214,0.5);
          box-shadow: 0 14px 36px rgba(0,201,214,0.18);
          transform: translateY(-3px);
        }
        @media (prefers-reduced-motion: reduce) {
          .info-row { transition: none; }
          .info-row:hover { transform: none; }
        }
      `}</style>
    </div>
  );
}
