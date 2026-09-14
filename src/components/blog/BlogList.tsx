import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

const POSTS = [
  {
    cat: "Sostenibilidad",
    title: "El impacto del ahorro de agua en la vida cotidiana",
    body: "Descubre cómo pequeños cambios en tu rutina diaria pueden generar un gran impacto ambiental y económico.",
    date: "15 Marzo 2024",
    read: "5 min",
  },
  {
    cat: "Tecnología",
    title: "Tecnología de reciclaje de agua: cómo funciona",
    body: "Un vistazo profundo al sistema de filtración de 5 capas que hace posible la ducha circular.",
    date: "10 Marzo 2024",
    read: "7 min",
  },
  {
    cat: "Arquitectura",
    title: "Certificaciones verdes para edificios sostenibles",
    body: "Guía completa sobre LEED, BREEAM y cómo Ducha Sin Fin contribuye a obtenerlas.",
    date: "5 Marzo 2024",
    read: "6 min",
  },
  {
    cat: "Economía",
    title: "ROI en instalaciones de ahorro de agua",
    body: "Análisis detallado de la rentabilidad de invertir en tecnología de reciclaje de agua.",
    date: "28 Febrero 2024",
    read: "8 min",
  },
  {
    cat: "Innovación",
    title: "El futuro del agua en las ciudades",
    body: "Cómo la escasez de agua está transformando el diseño urbano y la construcción.",
    date: "20 Febrero 2024",
    read: "6 min",
  },
  {
    cat: "Guías",
    title: "Mantenimiento de sistemas de reciclaje de agua",
    body: "Todo lo que necesitas saber para mantener tu ducha circular en perfecto estado.",
    date: "15 Febrero 2024",
    read: "4 min",
  },
];

export function BlogList() {
  return (
    <section
      className="py-16 lg:py-24"
      style={{
        background: "linear-gradient(180deg, #0b1f3b 0%, #020b18 100%)",
      }}
    >
      <div className="container-page">
        <div className="mx-auto max-w-[1180px] grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
            <article key={p.title} className="post-card rounded-2xl p-7 flex flex-col">
              <span
                className="self-start text-[11px] font-bold uppercase tracking-[0.14em] text-[#00c9d6] rounded-full px-3 py-1"
                style={{
                  background: "rgba(0,201,214,0.1)",
                  border: "1px solid rgba(0,201,214,0.3)",
                }}
              >
                {p.cat}
              </span>
              <h3 className="mt-5 font-heading font-bold text-white text-[20px] sm:text-[22px] leading-tight tracking-[-0.01em]">
                {p.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[rgb(203,213,225)] flex-1">
                {p.body}
              </p>
              <div className="mt-6 flex items-center gap-3 text-[13px] text-[#cfeaf3]/60">
                <span>{p.date}</span>
                <span className="h-1 w-1 rounded-full bg-[#00c9d6]" aria-hidden />
                <span>{p.read}</span>
              </div>
              <Link
                href="/blog"
                className="mt-5 inline-flex items-center gap-2 text-[#00c9d6] font-semibold text-[15px] group"
              >
                Leer más
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        .post-card {
          background: rgba(11,31,59,0.6);
          border: 1px solid rgba(0,201,214,0.2);
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
        }
        .post-card:hover {
          border-color: rgba(0,201,214,0.55);
          box-shadow: 0 18px 44px rgba(0,201,214,0.22);
          transform: translateY(-6px);
        }
        @media (prefers-reduced-motion: reduce) {
          .post-card { transition: none; }
          .post-card:hover { transform: none; }
        }
      `}</style>
    </section>
  );
}
