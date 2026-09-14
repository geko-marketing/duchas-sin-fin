"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "motion/react";
import { HeartIcon } from "@/components/icons";

const QUOTE_LINES = [
  { text: "No hablo solo de innovación.", accent: false },
  { text: "Os hablo de transformar un sector clave", accent: true },
  { text: "y proteger el futuro de un territorio.", accent: false },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const, delay: 0.25 },
  },
};

const quoteMarkVariant = {
  hidden: { opacity: 0, scale: 0.4, rotate: -15 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring" as const, stiffness: 160, damping: 16, delay: 0.05 },
  },
};

export function FounderVideo() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReduced = useReducedMotion();
  const anim = isInView || prefersReduced ? "visible" : "hidden";

  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play().catch(() => undefined);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden py-24 lg:py-28"
      style={{ background: "linear-gradient(180deg, #020b18 0%, #0b1f3b 60%, #020b18 100%)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(45% 70% at 10% 50%, rgba(0,201,214,0.1), transparent 70%), radial-gradient(45% 70% at 90% 50%, rgba(37,99,235,0.1), transparent 70%)",
        }}
      />

      <Orb style={{ top: "10%", left: "5%", width: 200, height: 200 }} color="rgba(0,201,214,0.07)" delay={0} reduced={!!prefersReduced} />
      <Orb style={{ bottom: "15%", right: "3%", width: 260, height: 260 }} color="rgba(37,99,235,0.07)" delay={2} reduced={!!prefersReduced} />

      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">

          {/* ── LEFT: Quote ── */}
          <motion.div
            variants={container}
            initial={prefersReduced ? false : "hidden"}
            animate={anim}
            className="text-center lg:text-left"
          >
            <motion.div variants={fadeUp} className="flex justify-center lg:justify-start">
              <span className="pill-cyan-dark">
                <HeartIcon className="h-3.5 w-3.5" />
                Palabra del Fundador
              </span>
            </motion.div>

            <div className="relative mt-8">
              <motion.span
                variants={quoteMarkVariant}
                initial={prefersReduced ? false : "hidden"}
                animate={anim}
                aria-hidden
                className="pointer-events-none absolute -left-2 -top-6 select-none font-heading font-black leading-none lg:block hidden"
                style={{ fontSize: "clamp(80px,12vw,140px)", color: "rgba(0,201,214,0.12)" }}
              >
                ❝
              </motion.span>

              <blockquote className="relative">
                {QUOTE_LINES.map(({ text, accent }) => (
                  <motion.span
                    key={text}
                    variants={fadeUp}
                    className={`block font-heading font-black leading-[1.2] tracking-[-0.02em] ${
                      accent ? "text-gradient-cyan" : "text-white"
                    }`}
                    style={{ fontSize: "clamp(24px,2.8vw,34px)" }}
                  >
                    {text}
                  </motion.span>
                ))}
              </blockquote>

              <motion.div
                variants={fadeUp}
                className="mt-8 h-[2px] w-16 rounded-full mx-auto lg:mx-0"
                style={{ background: "linear-gradient(90deg, #00c9d6, transparent)" }}
              />

              <motion.div variants={fadeUp} className="mt-6 flex items-center gap-4 justify-center lg:justify-start">
                <a
                  href="https://www.linkedin.com/in/esteban-carnicero-peinado-52651616/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-full ring-2 ring-[rgba(0,201,214,0.4)] hover:ring-[rgba(0,201,214,0.8)] transition-all"
                  aria-label="LinkedIn de Esteban Carnicero Peinado"
                >
                  <Image
                    src="/images/esteban.jpg"
                    alt="Esteban Carnicero Peinado"
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                </a>
                <div>
                  <a
                    href="https://www.linkedin.com/in/esteban-carnicero-peinado-52651616/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] font-semibold leading-tight text-white hover:text-[#00c9d6] transition-colors"
                  >
                    Esteban Carnicero Peinado
                  </a>
                  <p className="mt-0.5 text-[13px] text-[#cfeaf3]/55">CEO · Ducha Sin Fin</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ── RIGHT: Video ── */}
          <motion.div
            variants={slideRight}
            initial={prefersReduced ? false : "hidden"}
            animate={anim}
            className="relative flex justify-center"
          >
            <div
              className="video-glow relative overflow-hidden rounded-[20px] p-[1.5px] w-full"
              style={{
                maxWidth: "320px",
                background:
                  "linear-gradient(135deg, rgba(0,201,214,0.65), rgba(37,99,235,0.45), rgba(0,201,214,0.15))",
              }}
            >
              {isInView && !prefersReduced && (
                <motion.div
                  initial={{ x: "-100%", opacity: 0.7 }}
                  animate={{ x: "200%", opacity: 0 }}
                  transition={{ duration: 0.9, ease: "easeOut", delay: 0.45 }}
                  className="pointer-events-none absolute inset-0 z-10 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
              )}
              <div className="overflow-hidden rounded-[19px] bg-[#0b1f3b]">
                <video
                  ref={videoRef}
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  className="block w-full h-auto"
                  aria-label="Presentación de Esteban Carnicero Peinado, creador de Ducha Sin Fin"
                >
                  <source src="/videos/fundador.webm" type="video/webm" />
                </video>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        .video-glow {
          animation: glow-pulse 3.5s ease-in-out infinite;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .video-glow:hover {
          transform: translateY(-4px);
          box-shadow: 0 24px 60px rgba(0,201,214,0.22), 0 8px 20px rgba(0,0,0,0.4);
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(0,201,214,0.2), 0 8px 32px rgba(0,0,0,0.3); }
          50%       { box-shadow: 0 0 42px rgba(0,201,214,0.42), 0 12px 40px rgba(0,0,0,0.35); }
        }
        @media (prefers-reduced-motion: reduce) {
          .video-glow { animation: none; }
          .video-glow:hover { transform: none; }
        }
      `}</style>
    </section>
  );
}

function Orb({
  style,
  color,
  delay,
  reduced,
}: {
  style: React.CSSProperties;
  color: string;
  delay: number;
  reduced: boolean;
}) {
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute rounded-full blur-3xl"
      style={{ ...style, background: color }}
      animate={reduced ? {} : { y: [0, -20, 0], opacity: [0.5, 0.9, 0.5] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}
