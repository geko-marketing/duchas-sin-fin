"use client";
import { cn } from "@/lib/utils";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

const ELEVATED_SHADOW =
  "0 0 24px rgba(0,201,214,0.18), 0 1px 1px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,201,214,0.2), 0 8px 28px rgba(0,201,214,0.18), 0 16px 68px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.06) inset";

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 top-0 z-[1000] w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(14px)" : "blur(10px)",
        boxShadow: visible ? ELEVATED_SHADOW : "none",
        width: visible ? "82%" : "100%",
        borderRadius: visible ? 9999 : 0,
        y: visible ? 14 : 0,
        borderColor: visible
          ? "rgba(0,201,214,0.28)"
          : "rgba(0,201,214,0.12)",
        backgroundColor: visible
          ? "rgba(2,11,24,0.85)"
          : "rgba(2,11,24,0.92)",
        paddingLeft: visible ? 16 : 32,
        paddingRight: visible ? 16 : 32,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        borderWidth: 1,
        borderStyle: "solid",
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full flex-row items-center justify-between self-start py-2.5 lg:flex",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-1 text-sm font-medium text-[#cfeaf3] lg:flex",
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-[#cfeaf3] transition-colors hover:text-[#00c9d6]"
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-[rgba(0,201,214,0.12)] border border-[rgba(0,201,214,0.25)]"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(14px)" : "blur(10px)",
        boxShadow: visible ? ELEVATED_SHADOW : "none",
        width: visible ? "92%" : "100%",
        paddingRight: visible ? 14 : 16,
        paddingLeft: visible ? 14 : 16,
        borderRadius: visible ? 16 : 0,
        y: visible ? 12 : 0,
        borderColor: visible
          ? "rgba(0,201,214,0.28)"
          : "rgba(0,201,214,0.12)",
        backgroundColor: visible
          ? "rgba(2,11,24,0.85)"
          : "rgba(2,11,24,0.92)",
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        borderWidth: 1,
        borderStyle: "solid",
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full flex-col items-center justify-between py-2.5 lg:hidden",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-2xl px-5 py-7 border border-[rgba(0,201,214,0.2)]",
            "bg-[rgba(8,16,32,0.96)] shadow-[0_24px_60px_rgba(0,0,0,0.5)]",
            className,
          )}
          style={{ backdropFilter: "blur(16px)" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      type="button"
      aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      aria-expanded={isOpen}
      onClick={onClick}
      className="grid h-10 w-10 place-items-center rounded-lg text-[#cfeaf3] hover:text-[#00c9d6] hover:bg-[rgba(0,201,214,0.08)] transition-colors"
    >
      {isOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h16" />
        </svg>
      )}
    </button>
  );
};

export const NavbarLogo = () => {
  return (
    <Link
      href="/"
      className="relative z-20 mr-4 flex items-center pl-4 py-1"
    >
      <Image
        src="/images/logo.png"
        alt="Ducha Sin Fin"
        width={60}
        height={42}
        className="h-11 w-auto brightness-0 invert"
        priority
      />
    </Link>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-5 py-2 rounded-full text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center justify-center gap-1.5";

  const variantStyles = {
    primary:
      "bg-[linear-gradient(135deg,#00C9D6_0%,#06B6D4_50%,#2563EB_100%)] text-white shadow-[0_8px_24px_rgba(0,201,214,0.4)] hover:brightness-110",
    secondary:
      "bg-[rgba(0,201,214,0.08)] text-[#e0f2fe] border border-[rgba(0,201,214,0.25)] hover:bg-[rgba(0,201,214,0.16)] hover:border-[rgba(0,201,214,0.4)] hover:text-white",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(0,201,214,0.18)]",
    gradient:
      "bg-gradient-to-b from-[#00C9D6] to-[#2563EB] text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.18)_inset]",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
