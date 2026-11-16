"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Props {
  images: string[];
  productName: string;
}

export default function ProductGallery({ images, productName }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // Resetear al índice 0 cuando cambian las imágenes (cambio de combinación)
  useEffect(() => {
    setActiveIndex(0);
  }, [images]);

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) < 40) return;
    if (delta < 0) setActiveIndex((i) => Math.min(i + 1, images.length - 1));
    else setActiveIndex((i) => Math.max(i - 1, 0));
    touchStartX.current = null;
  }

  function prev() {
    setActiveIndex((i) => Math.max(i - 1, 0));
  }

  function next() {
    setActiveIndex((i) => Math.min(i + 1, images.length - 1));
  }

  const hasPrev = activeIndex > 0;
  const hasNext = activeIndex < images.length - 1;

  return (
    <div className="flex flex-col gap-4">
      {/* ── Imagen principal ─────────────────────── */}
      <div
        className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[var(--panel)]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          key={images[activeIndex]}
          src={images[activeIndex]}
          alt={`${productName} — vista ${activeIndex + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 790px) 100vw, 55vw"
          priority={activeIndex === 0}
        />

        {/* Caption */}
        <div className="absolute bottom-4 left-4 rounded-full bg-black/60 px-3 py-1 text-[10px] uppercase tracking-widest text-white backdrop-blur-sm">
          VISTA {String(activeIndex + 1).padStart(2, "0")} // {images.length}/{images.length}
        </div>

        {/* Flechas — solo desktop */}
        {images.length > 1 && (
          <div className="absolute right-4 bottom-4 hidden gap-2 min-[790px]:flex">
            <button
              onClick={prev}
              disabled={!hasPrev}
              aria-label="Imagen anterior"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-opacity disabled:opacity-30 hover:bg-black/80"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={next}
              disabled={!hasNext}
              aria-label="Imagen siguiente"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-opacity disabled:opacity-30 hover:bg-black/80"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* ── Miniaturas ───────────────────────────── */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-1 no-scrollbar">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setActiveIndex(i)}
              aria-label={`Ver imagen ${i + 1}`}
              className={[
                "relative aspect-[4/3] w-20 shrink-0 overflow-hidden rounded-lg transition-all",
                i === activeIndex
                  ? "ring-2 ring-[var(--accent)] ring-offset-2 ring-offset-black"
                  : "opacity-50 hover:opacity-80",
              ].join(" ")}
            >
              <Image
                src={src}
                alt={`${productName} miniatura ${i + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-white">
                {String(i + 1).padStart(2, "0")}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
