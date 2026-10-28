"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const LINKS = [
  { href: "/about", label: "Nosotros" },
  { href: "/portfolio", label: "Proyectos" },
  { href: "/atelier", label: "Atelier" },
  { href: "/services", label: "Formación" },
  { href: "/process", label: "FAQs" },
  { href: "/project", label: "Tu Proyecto" },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 bg-background/80 backdrop-blur-md ${
        scrolled
          ? "min-[790px]:bg-background/80 min-[790px]:backdrop-blur-md"
          : "min-[790px]:bg-gradient-to-t min-[790px]:from-transparent min-[790px]:to-black/90 min-[790px]:backdrop-blur-none"
      }`}
    >      {/*
        Mobile (<790px): 3-column grid — hamburger | logo (centered) | spacer
        Desktop (>=790px): flex — logo left, links right
      */}
      <nav className="mx-auto grid max-w-6xl grid-cols-[2.5rem_1fr_2.5rem] items-center px-6 py-5 min-[790px]:flex min-[790px]:max-w-none min-[790px]:grid-cols-none min-[790px]:justify-between min-[790px]:px-6">
        {/* Mobile toggle (hidden from 790px) */}
        <button
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 justify-self-start min-[790px]:hidden"
        >
          <span
            className={`h-px w-5 bg-foreground transition-transform duration-300 ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-foreground transition-transform duration-300 ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>

        {/* Logo: centered on mobile (grid col 2), left-aligned from 790px */}
        <Link
          href="/"
          className="col-start-2 justify-self-center text-sm font-medium tracking-[0.18em] uppercase text-foreground min-[790px]:col-auto min-[790px]:justify-self-auto"
        >
          MC Auto Sound
        </Link>

        {/* Desktop links (hidden below 790px) */}
        <ul className="hidden items-center gap-9 min-[790px]:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group relative text-[0.78rem] uppercase tracking-[0.14em] text-muted transition-colors duration-300 hover:text-foreground"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Spacer to balance the grid on mobile so the logo stays visually centered */}
        <span className="min-[790px]:hidden" aria-hidden="true" />
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-line transition-[max-height] duration-300 min-[790px]:hidden ${
          open ? "max-h-80" : "max-h-0 border-t-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4">
          {LINKS.map((link) => (
            <li key={link.href} className="border-b border-line/60 last:border-0">
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-[0.78rem] uppercase tracking-[0.14em] text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
