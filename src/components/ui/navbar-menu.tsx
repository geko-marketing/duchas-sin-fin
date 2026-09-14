"use client";
import React, { createContext, useContext, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

const transition = {
  type: "spring" as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

type HoverCtx = {
  hovered: string | null;
  setHovered: (id: string | null) => void;
};

const HoverContext = createContext<HoverCtx | null>(null);

export const Menu = ({
  setActive,
  children,
  className,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
  className?: string;
}) => {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <HoverContext.Provider value={{ hovered, setHovered }}>
      <nav
        onMouseLeave={() => {
          setActive(null);
          setHovered(null);
        }}
        className={`relative flex items-center gap-1 ${className ?? ""}`}
      >
        {children}
      </nav>
    </HoverContext.Provider>
  );
};

export const MenuItem = ({
  setActive,
  active,
  item,
  isActiveRoute = false,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  isActiveRoute?: boolean;
  children?: React.ReactNode;
}) => {
  const ctx = useContext(HoverContext);
  const isOpen = active === item;
  const isHovered = ctx?.hovered === item;

  return (
    <div
      onMouseEnter={() => {
        setActive(item);
        ctx?.setHovered(item);
      }}
      className="relative"
    >
      {isHovered && (
        <motion.div
          layoutId="navHoverPill"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
          className="absolute inset-0 rounded-full bg-[rgba(0,201,214,0.1)] border border-[rgba(0,201,214,0.22)]"
        />
      )}
      <button
        type="button"
        className={`relative z-10 flex items-center gap-1 cursor-pointer px-3.5 py-1.5 rounded-full text-[14.5px] font-medium transition-colors ${
          isActiveRoute || isOpen
            ? "text-[#00c9d6]"
            : "text-[#cfeaf3] hover:text-[#00c9d6]"
        }`}
      >
        {item}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          aria-hidden
        >
          <path d="m6 9 6 6 6-6" />
        </motion.svg>
      </button>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {isOpen && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
              <motion.div
                transition={transition}
                layoutId="active"
                className="overflow-hidden rounded-2xl border border-[rgba(0,201,214,0.22)] shadow-[0_24px_60px_rgba(0,0,0,0.5)]"
                style={{
                  background: "rgba(8,16,32,0.96)",
                  backdropFilter: "blur(16px)",
                }}
              >
                <motion.div layout className="w-max h-full p-3">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const NavLink = ({
  id,
  href,
  isActive = false,
  onHover,
  children,
}: {
  id: string;
  href: string;
  isActive?: boolean;
  onHover?: () => void;
  children: React.ReactNode;
}) => {
  const ctx = useContext(HoverContext);
  const isHovered = ctx?.hovered === id;

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        ctx?.setHovered(id);
        onHover?.();
      }}
    >
      {isHovered && (
        <motion.div
          layoutId="navHoverPill"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
          className="absolute inset-0 rounded-full bg-[rgba(0,201,214,0.1)] border border-[rgba(0,201,214,0.22)]"
        />
      )}
      <Link
        href={href}
        className={`relative z-10 inline-block px-3.5 py-1.5 rounded-full text-[14.5px] font-medium transition-colors ${
          isActive
            ? "text-[#00c9d6]"
            : "text-[#cfeaf3] hover:text-[#00c9d6]"
        }`}
      >
        {children}
      </Link>
    </div>
  );
};

export const HoveredLink = ({
  children,
  href,
  description,
  className,
}: {
  children: React.ReactNode;
  href: string;
  description?: string;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={`group flex flex-col gap-0.5 px-4 py-2.5 rounded-xl text-[#cfeaf3] hover:bg-[rgba(0,201,214,0.1)] transition-colors min-w-[220px] ${className ?? ""}`}
    >
      <span className="text-[14.5px] font-semibold text-white group-hover:text-[#00c9d6] transition-colors">
        {children}
      </span>
      {description && (
        <span className="text-[12.5px] text-[#cfeaf3]/60 leading-snug">
          {description}
        </span>
      )}
    </Link>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-3 group">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-base font-bold mb-1 text-white group-hover:text-[#00c9d6] transition-colors">
          {title}
        </h4>
        <p className="text-[#cfeaf3]/70 text-sm max-w-[12rem]">
          {description}
        </p>
      </div>
    </Link>
  );
};
