"use client";

import Image from "next/image";
import { useState, useRef, useMemo } from "react";

const THUMBS_PER_PAGE = 4;
import type { GalleryImage } from "../data/projects";

type Props = {
  images: GalleryImage[];
  defaultIndex: number;
  caption: string;
};

export default function ProjectGallery({ images, defaultIndex, caption }: Props) {
  const [active, setActive] = useState(defaultIndex);

  // Página de miniaturas: cada página muestra THUMBS_PER_PAGE imágenes
  const totalPages = Math.ceil(images.length / THUMBS_PER_PAGE);
  const [thumbPage, setThumbPage] = useState(
    Math.floor(defaultIndex / THUMBS_PER_PAGE)
  );

  // Cuando el activo sale de la página visible, avanzar la página automáticamente
  const visibleThumbs = useMemo(() => {
    const start = thumbPage * THUMBS_PER_PAGE;
    return images.slice(start, start + THUMBS_PER_PAGE).map((img, i) => ({
      img,
      index: start + i,
    }));
  }, [thumbPage, images]);

  const goTo = (i: number) => {
    setActive(i);
    const page = Math.floor(i / THUMBS_PER_PAGE);
    if (page !== thumbPage) setThumbPage(page);
  };

  // ── Swipe en mobile ──────────────────────────────────────
  const touchStartX = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) < 40) return; // ignorar taps
    if (delta < 0) goTo(Math.min(active + 1, images.length - 1)); // swipe izq → siguiente
    if (delta > 0) goTo(Math.max(active - 1, 0));                // swipe der → anterior
    touchStartX.current = null;
  };

  // Caption con número dinámico
  const activeCaption = caption.replace(
    /\d{2}\/\d{2}/,
    `${String(active + 1).padStart(2, "0")}/${String(images.length).padStart(2, "0")}`
  );

  return (
    <section className="bg-background py-4 sm:py-6">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">

        {/* Imagen activa */}
        <div
          className="relative aspect-[16/9] w-full overflow-hidden bg-panel select-none"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {images.map((img, i) => (
            <Image
              key={img.src}
              src={img.src}
              alt={img.alt}
              fill
              className={`object-cover transition-opacity duration-500 ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Caption superpuesto */}
          <div className="absolute bottom-4 right-4 flex items-center gap-2">
            <span className="text-[0.6rem] uppercase tracking-[0.2em] text-foreground/60">
              {activeCaption}
            </span>
          </div>

          {/* Descripción de la imagen activa */}
          <div className="absolute bottom-4 left-4">
            <p className="text-[0.65rem] uppercase tracking-[0.15em] text-accent">
              {images[active].description}
            </p>
          </div>

          {/* Flechas desktop */}
          <button
            aria-label="Imagen anterior"
            onClick={() => goTo(Math.max(active - 1, 0))}
            className={`absolute left-4 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center border border-foreground/20 bg-background/60 text-foreground/60 backdrop-blur-sm transition hover:border-accent hover:text-accent ${
              active === 0 ? "opacity-30 pointer-events-none" : ""
            }`}
          >
            ‹
          </button>
          <button
            aria-label="Imagen siguiente"
            onClick={() => goTo(Math.min(active + 1, images.length - 1))}
            className={`absolute right-4 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center border border-foreground/20 bg-background/60 text-foreground/60 backdrop-blur-sm transition hover:border-accent hover:text-accent ${
              active === images.length - 1 ? "opacity-30 pointer-events-none" : ""
            }`}
          >
            ›
          </button>
        </div>

        {/* Miniaturas con paginación */}
        <div className="mt-3 flex items-stretch gap-2 sm:gap-3">

          {/* Flecha izquierda */}
          <button
            aria-label="Miniaturas anteriores"
            onClick={() => setThumbPage((p) => Math.max(p - 1, 0))}
            disabled={thumbPage === 0}
            className="flex w-8 shrink-0 items-center justify-center border border-foreground/15 bg-panel text-foreground/50 transition hover:border-accent hover:text-accent disabled:pointer-events-none disabled:opacity-20"
          >
            ‹
          </button>

          {/* 4 miniaturas visibles */}
          <div className="grid flex-1 grid-cols-4 gap-2 sm:gap-3">
            {visibleThumbs.map(({ img, index: i }) => (
              <button
                key={img.src}
                onClick={() => goTo(i)}
                className={`group relative flex flex-col gap-1.5 text-left transition-opacity ${
                  i === active ? "opacity-100" : "opacity-40 hover:opacity-70"
                }`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-panel">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span
                    className={`absolute inset-0 border transition-colors duration-300 ${
                      i === active ? "border-accent" : "border-transparent"
                    }`}
                  />
                </div>
                <p className="text-[0.6rem] uppercase tracking-[0.12em] text-muted line-clamp-1">
                  {img.label}
                </p>
              </button>
            ))}
          </div>

          {/* Flecha derecha */}
          <button
            aria-label="Miniaturas siguientes"
            onClick={() => setThumbPage((p) => Math.min(p + 1, totalPages - 1))}
            disabled={thumbPage >= totalPages - 1}
            className="flex w-8 shrink-0 items-center justify-center border border-foreground/15 bg-panel text-foreground/50 transition hover:border-accent hover:text-accent disabled:pointer-events-none disabled:opacity-20"
          >
            ›
          </button>
        </div>

        {/* Indicador de página — solo visible si hay más de una página */}
        {totalPages > 1 && (
          <div className="mt-2 flex items-center justify-center gap-1.5">
            {Array.from({ length: totalPages }).map((_, p) => (
              <button
                key={p}
                onClick={() => setThumbPage(p)}
                className={`h-px transition-all duration-300 ${
                  p === thumbPage ? "w-6 bg-accent" : "w-3 bg-foreground/20 hover:bg-foreground/40"
                }`}
                aria-label={`Página ${p + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
