"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import { getProductBySlug } from "../../../data/products";
import { useProductConfigurator } from "../../../hooks/useProductConfigurator";
import ProductGallery from "../../../components/atelier/ProductGallery";
import ProductInfo from "../../../components/atelier/ProductInfo";
import ProductPurchase from "../../../components/atelier/ProductPurchase";
import MobileConfigurator from "../../../components/atelier/MobileConfigurator";
import ProductSpecs from "../../../components/atelier/ProductSpecs";
import RelatedProducts from "../../../components/atelier/RelatedProducts";
import Link from "next/link";

// ── Breadcrumb ──────────────────────────────────────────────────
function Breadcrumb({ nombre }: { nombre: string }) {
  return (
    <nav
      className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted"
      aria-label="Breadcrumb"
    >
      <Link href="/" className="hover:text-foreground transition-colors">
        MC Auto Sound
      </Link>
      <span className="text-muted/40">/</span>
      <Link href="/atelier" className="hover:text-foreground transition-colors">
        MC Atelier
      </Link>
      <span className="text-muted/40">/</span>
      <span className="text-foreground">{nombre}</span>
    </nav>
  );
}

// ── Sticky footer móvil ─────────────────────────────────────────
function StickyFooter({
  precio,
  disponibilidad,
}: {
  precio: { contado: number };
  disponibilidad: string;
}) {
  function formatMXN(n: number) {
    return n.toLocaleString("es-MX", { minimumFractionDigits: 0 });
  }

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-background/95 px-6 pt-3 pb-5 backdrop-blur-xl shadow-[0_-4px_24px_rgba(0,0,0,0.7)] min-[790px]:hidden">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0 flex flex-col">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
            Total configurado
          </p>
          <div className="flex items-baseline gap-1.5">
            <p className="text-xl font-semibold tracking-tight text-foreground">
              ${formatMXN(precio.contado)}
            </p>
            <span className="text-[11px] font-semibold uppercase text-muted">MXN</span>
          </div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--accent)]">
            Envío nacional asegurado
          </p>
        </div>
        <button
          type="button"
          disabled={disponibilidad === "agotado"}
          className={[
            "flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg px-6",
            "text-[12px] font-bold uppercase tracking-[0.14em] shadow-md transition-all active:scale-95",
            disponibilidad === "agotado"
              ? "cursor-not-allowed bg-[var(--line)] text-muted"
              : "bg-[var(--accent)] text-black hover:bg-[var(--accent)]/90",
          ].join(" ")}
        >
          Adquirir pieza
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
      <div className="mt-1 flex items-center justify-center">
        <button type="button" className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted transition-colors hover:text-foreground">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          Consultar compatibilidad con mi auto
        </button>
      </div>
    </div>
  );
}

// ── Página ──────────────────────────────────────────────────────
export default function AtelierProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const {
    selectedColorId,
    selectedAcentoId,
    handleColorChange,
    handleAcentoChange,
    imagenes,
    precioFinal,
    disponibilidad,
  } = useProductConfigurator(product);

  return (
    <>
      {/* ── Breadcrumb bar ─────────────────────── */}
      <div className="overflow-hidden border-b border-[var(--line)] bg-background px-6 py-3.5 lg:px-12">
        <div className="mx-auto max-w-[1720px]">
          <Breadcrumb nombre={product.nombre} />
        </div>
      </div>

      <main className="mx-auto max-w-[1720px] overflow-x-hidden px-6 pb-32 pt-10 lg:px-12 min-[790px]:pb-16">

        {/* ── Configurador colapsable móvil ───── */}
        <div className="mb-6 min-[790px]:hidden">
          <MobileConfigurator
            product={product}
            selectedColorId={selectedColorId}
            selectedAcentoId={selectedAcentoId}
            onColorChange={handleColorChange}
            onAcentoChange={handleAcentoChange}
          />
        </div>

        {/* ── Grid 8/4: galería + panel info ─── */}
        <div className="grid grid-cols-1 items-start gap-10 min-[790px]:grid-cols-12 min-[790px]:gap-12 xl:gap-16">
          {/* Galería — 8 columnas */}
          <div className="min-[790px]:col-span-8">
            <ProductGallery images={imagenes} productName={product.nombre} />
          </div>

          {/* Panel info — 4 columnas, sticky */}
          <div className="min-[790px]:col-span-4">
            <ProductInfo
              product={product}
              selectedColorId={selectedColorId}
              selectedAcentoId={selectedAcentoId}
              onColorChange={handleColorChange}
              onAcentoChange={handleAcentoChange}
            />
          </div>
        </div>

        {/* ── Precio y CTA — ancho completo ─── */}
        <div className="mt-10 min-[790px]:mt-12">
          <ProductPurchase
            disponibilidad={disponibilidad}
            precioFinal={precioFinal}
          />
        </div>

        {/* ── Especificaciones técnicas ─────── */}
        <ProductSpecs specs={product.especificaciones} />

        {/* ── Productos relacionados ────────── */}
        <RelatedProducts currentSlug={product.slug} />

      </main>

      {/* ── Sticky footer móvil ───────────── */}
      <StickyFooter precio={precioFinal} disponibilidad={disponibilidad} />
    </>
  );
}
