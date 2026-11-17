"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Props {
  images: string[];
  productName: string;
}

const viewLabels = ["Perspectiva", "Macro", "Bronce", "Blueprint"];
const viewSub    = ["3/4 Frontal", "Detalle", "Acabado", "CAD Billet"];

export default function ProductGallery({ images, productName }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => { setActiveIndex(0); }, [images]);

  const prev = () => setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) delta < 0 ? next() : prev();
    touchStartX.current = null;
  };

  if (images.length === 0) return null;

  const current = images[activeIndex];
  const currentLabel = viewLabels[activeIndex] ?? `Vista ${activeIndex + 1}`;
  const currentSub   = viewSub[activeIndex] ?? "";

  return (
    <div className="flex flex-col gap-3">
      {/* ── Imagen principal ── */}
      <div
        className="group relative w-full overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--panel)] min-[790px]:rounded-2xl"
        style={{ aspectRatio: "4/3" }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Badge editorial */}
        <div className="absolute left-3 top-3 z-20 flex items-center gap-2 min-[790px]:left-5 min-[790px]:top-5">
          <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/80 px-3 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground" id="gallery-badge-label">
              {productName}
            </span>
          </span>
        </div>

        {/* Degradado inferior */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        <Image
          key={current}
          src={current}
          alt={`${productName} — ${currentLabel}`}
          fill
          sizes="(min-width: 790px) 60vw, 100vw"
          className="object-cover transition-all duration-700 ease-out"
          priority={activeIndex === 0}
        />

        {/* Vista actual — esquina inferior derecha */}
        <div className="absolute bottom-3 right-3 z-20 rounded bg-black/80 px-2.5 py-1 backdrop-blur-md">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
            Vista {String(activeIndex + 1).padStart(2, "0")} // {currentSub}
          </span>
        </div>

        {/* Flechas — solo desktop */}
        {images.length > 1 && (
          <div className="absolute bottom-3 right-3 z-20 hidden items-center gap-2 min-[790px]:flex min-[790px]:bottom-5 min-[790px]:right-5">
            <button type="button" onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white backdrop-blur-md transition-all hover:border-white/40 hover:bg-black/90"
              aria-label="Imagen anterior">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button type="button" onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white backdrop-blur-md transition-all hover:border-white/40 hover:bg-black/90"
              aria-label="Imagen siguiente">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {images.length > 1 && (
        <>
          {/* ── Pills indicadores — solo móvil ── */}
          <div className="flex items-center gap-1.5 min-[790px]:hidden">
            {images.map((_, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={[
                    "flex-1 rounded py-1.5 text-center transition-all",
                    isActive
                      ? "bg-[var(--accent)]/20 text-[var(--accent)]"
                      : "bg-[var(--panel)] text-muted",
                  ].join(" ")}
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em]">
                    {viewLabels[i] ?? `0${i + 1}`}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ── Thumbnails scroll horizontal — móvil ── */}
          <div className="flex gap-2.5 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden min-[790px]:hidden">
            {images.map((src, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={[
                    "flex w-24 shrink-0 flex-col gap-1.5 rounded-lg p-1.5 text-left transition-all",
                    "bg-[var(--panel)]",
                    isActive ? "opacity-100" : "opacity-60 hover:opacity-100",
                  ].join(" ")}
                >
                  <div className="relative h-16 w-full overflow-hidden rounded bg-black/40">
                    <Image
                      src={src}
                      alt={viewLabels[i] ?? `Vista ${i + 1}`}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                  <span className="truncate text-[10px] font-semibold uppercase tracking-[0.08em] text-foreground px-0.5">
                    {String(i + 1).padStart(2, "0")} {viewLabels[i] ?? ""}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ── Thumbnails grid — solo desktop ── */}
          <div className="hidden min-[790px]:grid grid-cols-4 gap-3">
            {images.map((src, i) => {
              const isActive = i === activeIndex;
              const label = viewLabels[i] ?? `Vista ${i + 1}`;
              const sub   = viewSub[i] ?? "";
              return (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={[
                    "group overflow-hidden rounded-xl border-2 p-2.5 text-left transition-all bg-[var(--panel)]",
                    isActive
                      ? "border-[var(--accent)]"
                      : "border-[var(--line)] hover:border-white/30",
                  ].join(" ")}
                >
                  <div className="relative mb-2 aspect-[4/3] overflow-hidden rounded-lg bg-black/40">
                    <Image
                      src={src}
                      alt={label}
                      fill
                      sizes="15vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[9px] font-semibold uppercase tracking-wider text-muted">
                      {sub}
                    </span>
                  </div>
                  <p className="mt-0.5 truncate text-[10px] text-muted">{label}</p>
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
