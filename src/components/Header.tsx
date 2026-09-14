"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavBody,
} from "@/components/ui/resizable-navbar";
import {
  HoveredLink,
  Menu,
  MenuItem,
  NavLink,
} from "@/components/ui/navbar-menu";
import { HeartIcon } from "@/components/icons";

const PRODUCTO = [
  {
    label: "Tecnología",
    href: "/tecnologia",
    description: "El sistema circular de filtración de 5 capas",
  },
  {
    label: "Ahorro",
    href: "/ahorro",
    description: "Calculadora y comparativa real de consumo",
  },
];

const RECURSOS = [
  {
    label: "Sostenibilidad",
    href: "/sostenibilidad",
    description: "Nuestro impacto en tiempo real",
  },
  {
    label: "Blog",
    href: "/blog",
    description: "Insights y noticias del sector",
  },
  {
    label: "FAQ",
    href: "/faq",
    description: "Preguntas frecuentes",
  },
];

const MOBILE_LINKS = [
  ...PRODUCTO.map((i) => ({ label: i.label, href: i.href })),
  { label: "Sectores", href: "/sectores" },
  ...RECURSOS.map((i) => ({ label: i.label, href: i.href })),
  { label: "Nosotros", href: "/nosotros" },
];

export function Header() {
  const pathname = usePathname();
  const [active, setActive] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const isActiveHref = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const productoActive = PRODUCTO.some((i) => isActiveHref(i.href));
  const recursosActive = RECURSOS.some((i) => isActiveHref(i.href));
  const sectoresActive = isActiveHref("/sectores");
  const nosotrosActive = isActiveHref("/nosotros");
  const crowdfundingActive = isActiveHref("/crowdfunding");
  const contactoActive = isActiveHref("/contacto");

  return (
    <div className="relative w-full">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <Menu setActive={setActive} className="flex-1 justify-center">
            <MenuItem
              setActive={setActive}
              active={active}
              item="Producto"
              isActiveRoute={productoActive}
            >
              <div className="flex flex-col gap-1">
                {PRODUCTO.map((i) => (
                  <div key={i.href}>
                    <HoveredLink href={i.href} description={i.description}>
                      {i.label}
                    </HoveredLink>
                  </div>
                ))}
              </div>
            </MenuItem>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Recursos"
              isActiveRoute={recursosActive}
            >
              <div className="flex flex-col gap-1">
                {RECURSOS.map((i) => (
                  <div key={i.href}>
                    <HoveredLink href={i.href} description={i.description}>
                      {i.label}
                    </HoveredLink>
                  </div>
                ))}
              </div>
            </MenuItem>
            <NavLink
              id="sectores"
              href="/sectores"
              isActive={sectoresActive}
              onHover={() => setActive(null)}
            >
              Sectores
            </NavLink>

            <NavLink
              id="nosotros"
              href="/nosotros"
              isActive={nosotrosActive}
              onHover={() => setActive(null)}
            >
              Nosotros
            </NavLink>
          </Menu>
          <div className="flex items-center gap-2">
            <NavbarButton
              href="/crowdfunding"
              variant="secondary"
              className={
                crowdfundingActive
                  ? "!bg-[rgba(0,201,214,0.18)] !border-[rgba(0,201,214,0.45)] !text-white"
                  : ""
              }
            >
              <HeartIcon className="h-3.5 w-3.5" />
              Impulsa el Proyecto
            </NavbarButton>
            <NavbarButton
              href="/contacto"
              variant="primary"
              className={contactoActive ? "ring-2 ring-white/40" : ""}
            >
              Contacto
            </NavbarButton>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isOpen}
              onClick={() => setIsOpen((v: boolean) => !v)}
            />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
            {MOBILE_LINKS.map((l) => {
              const active = isActiveHref(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setIsOpen(false)}
                  className={`block w-full px-2 py-2 transition-colors text-[16px] font-medium ${
                    active
                      ? "text-[#00c9d6]"
                      : "text-[#cfeaf3] hover:text-[#00c9d6]"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <div className="mt-2 flex w-full flex-col gap-3">
              <NavbarButton
                href="/crowdfunding"
                onClick={() => setIsOpen(false)}
                variant="secondary"
                className="w-full"
              >
                <HeartIcon className="h-4 w-4" />
                Impulsa el Proyecto
              </NavbarButton>
              <NavbarButton
                href="/contacto"
                onClick={() => setIsOpen(false)}
                variant="primary"
                className="w-full"
              >
                Contacto
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
