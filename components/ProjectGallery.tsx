"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import type { GalleryImage } from "../data/projects";

type Props = {
  images: GalleryImage[];
  defaultIndex: number;
  caption: string;
};

export default function ProjectGallery({ images, defaultIndex, caption }: Props) {
  const [active, setActive] = useState(defaultIndex);

  // ── Swipe en mobile ──────────────────────────────────────
  const touchStartX = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) < 40) return; // ignorar taps
    if (delta < 0) setActive((i) => Math.min(i + 1, images.length - 1)); // swipe izq → siguiente
    if (delta > 0) setActive((i) => Math.max(i - 1, 0));                 // swipe der → anterior
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
            onClick={() => setActive((i) => Math.max(i - 1, 0))}
            className={`absolute left-4 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center border border-foreground/20 bg-background/60 text-foreground/60 backdrop-blur-sm transition hover:border-accent hover:text-accent ${
              active === 0 ? "opacity-30 pointer-events-none" : ""
            }`}
          >
            ‹
          </button>
          <button
            aria-label="Imagen siguiente"
            onClick={() => setActive((i) => Math.min(i + 1, images.length - 1))}
            className={`absolute right-4 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center border border-foreground/20 bg-background/60 text-foreground/60 backdrop-blur-sm transition hover:border-accent hover:text-accent ${
              active === images.length - 1 ? "opacity-30 pointer-events-none" : ""
            }`}
          >
            ›
          </button>
        </div>

        {/* Miniaturas */}
        <div className="mt-3 grid grid-cols-4 gap-2 sm:gap-3">
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setActive(i)}
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
                {/* Borde activo */}
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
      </div>
    </section>
  );
}
