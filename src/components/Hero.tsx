"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRightIcon, ScrollIcon } from "@/components/icons";

const STATS = [
  { value: "70%", label: "Ahorro energía" },
  { value: "80%", label: "Ahorro agua" },
  { value: "100%", label: "Sostenible" },
];

const NAV_OFFSET = 60;

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fadeLine = {
  hidden: { opacity: 0, scaleX: 0.4 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const prefersReduced = useReducedMotion();

  const goToNext = () => {
    const target = document.getElementById("como-funciona");
    if (!target) return;
    window.scrollTo({
      top: target.offsetTop - NAV_OFFSET,
      behavior: prefersReduced ? "auto" : "smooth",
    });
  };

  return (
    <section className="relative isolate overflow-hidden bg-hero-gradient flex flex-col min-h-[100svh]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 60% at 30% 20%, rgba(0,201,214,0.18), transparent 60%), radial-gradient(60% 60% at 80% 80%, rgba(37,99,235,0.18), transparent 60%)",
        }}
      />

      <motion.div
        variants={prefersReduced ? undefined : stagger}
        initial={prefersReduced ? false : "hidden"}
        animate="visible"
        className="container-page relative flex-1 flex flex-col items-center justify-center pt-[clamp(96px,14vh,140px)] pb-[clamp(80px,12vh,120px)]"
      >
        <motion.div variants={fadeUp} className="flex justify-center">
          <span className="pill-cyan-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00c9d6] shadow-[0_0_8px_rgba(0,201,214,0.8)] animate-pulse-soft" />
            Innovación Sostenible
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-6 mx-auto max-w-[920px] text-center font-heading font-black text-white text-[clamp(36px,6vw,68px)] leading-[1.05] tracking-[-0.02em]"
        >
          La ducha del futuro, hoy
        </motion.h1>

        <motion.div
          variants={fadeLine}
          style={{ originX: 0.5 }}
          className="mx-auto mt-6 h-[3px] w-[160px] rounded-full bg-gradient-to-r from-transparent via-[#00c9d6] to-transparent"
        />

        <motion.p
          variants={fadeUp}
          className="mt-6 mx-auto max-w-[680px] text-center text-[#cfeaf3] text-[clamp(15px,1.4vw,18px)] leading-relaxed"
        >
          Un sistema que limpia, filtra y recircula agua en un flujo continuo.
          Ahorra hasta el 80% de agua y energía sin renunciar a tu calidad de
          vida.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 mx-auto w-full max-w-[760px] rounded-[24px] border border-[rgba(0,201,214,0.18)] bg-[rgba(0,201,214,0.05)] backdrop-blur-sm p-6 sm:p-8"
        >
          <div className="grid grid-cols-3 gap-4 sm:gap-8">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-gradient-cyan font-heading font-black text-[clamp(28px,4.4vw,52px)] leading-none">
                  {s.value}
                </div>
                <div className="mt-2 text-[12px] sm:text-[14px] font-medium text-[#cfeaf3]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-10 flex justify-center">
          <Link href="/crowdfunding" className="btn-primary group">
            Apoya este proyecto
            <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <motion.button
          variants={fadeUp}
          type="button"
          onClick={goToNext}
          aria-label="Ir a la siguiente sección"
          className="mt-auto pt-12 group flex flex-col items-center gap-2 text-[#7fc4d4] hover:text-[#00c9d6] transition-colors cursor-pointer"
        >
          <ScrollIcon className="h-6 w-6 animate-scroll-bounce group-hover:scale-110 transition-transform" />
          <span className="text-[12px] font-medium tracking-[0.18em] uppercase">
            Scroll
          </span>
        </motion.button>
      </motion.div>
    </section>
  );
}
