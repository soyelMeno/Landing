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
    <nav className="flex items-center gap-2 text-xs text-muted" aria-label="Breadcrumb">
      <Link href="/" className="hover:text-foreground transition-colors">
        MC Auto Sound
      </Link>
      <span>/</span>
      <Link href="/atelier" className="hover:text-foreground transition-colors">
        MC Atelier
      </Link>
      <span>/</span>
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
    <div className="fixed bottom-0 inset-x-0 z-40 border-t border-[var(--line)] bg-background/95 px-6 py-4 backdrop-blur-sm min-[790px]:hidden">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-muted">Total configurado</p>
          <p className="text-lg font-semibold text-foreground">
            ${formatMXN(precio.contado)}{" "}
            <span className="text-xs font-normal text-muted">MXN</span>
          </p>
          <p className="text-[10px] text-muted">Envío nacional asegurado</p>
        </div>
        <button
          type="button"
          disabled={disponibilidad === "agotado"}
          className={[
            "shrink-0 rounded-2xl px-6 py-3 text-sm font-medium uppercase tracking-wider transition-colors",
            disponibilidad === "agotado"
              ? "cursor-not-allowed bg-[var(--line)] text-muted"
              : "bg-[var(--accent)] text-black hover:bg-[var(--accent)]/90",
          ].join(" ")}
        >
          Adquirir pieza →
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
      {/* ── Breadcrumb ─────────────────────────── */}
      <div className="border-b border-[var(--line)] bg-background px-6 py-3 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <Breadcrumb nombre={product.nombre} />
        </div>
      </div>

      <main className="mx-auto max-w-6xl overflow-x-hidden px-6 pb-32 pt-8 lg:px-10 min-[790px]:pb-16">

        {/* ── Configurador colapsable móvil (oculto en desktop) ── */}
        <div className="mb-6 min-[790px]:hidden">
          <MobileConfigurator
            product={product}
            selectedColorId={selectedColorId}
            selectedAcentoId={selectedAcentoId}
            onColorChange={handleColorChange}
            onAcentoChange={handleAcentoChange}
          />
        </div>

        {/* ── Layout dos columnas: galería + info ─── */}
        <div className="grid grid-cols-1 gap-10 min-[790px]:grid-cols-[1fr_420px] min-[790px]:gap-12 xl:grid-cols-[1fr_460px]">
          {/* Galería — izquierda en desktop, después del configurador en móvil */}
          <ProductGallery images={imagenes} productName={product.nombre} />

          {/* Info + configurador desktop — derecha */}
          {/* En móvil se muestra debajo de la galería (el configurador arriba ya está en MobileConfigurator) */}
          <div>
            {/* Nombre, descripción y configurador (configurador oculto en móvil porque ya está arriba) */}
            <ProductInfo
              product={product}
              selectedColorId={selectedColorId}
              selectedAcentoId={selectedAcentoId}
              onColorChange={handleColorChange}
              onAcentoChange={handleAcentoChange}
            />
          </div>
        </div>

        {/* ── Precio y CTA — ancho completo debajo de las columnas ── */}
        <div className="mt-10 min-[790px]:mt-12">
          <ProductPurchase
            disponibilidad={disponibilidad}
            precioFinal={precioFinal}
          />
        </div>

        {/* ── Especificaciones técnicas ─────────── */}
        <ProductSpecs specs={product.especificaciones} />

        {/* ── Productos relacionados ────────────── */}
        <RelatedProducts currentSlug={product.slug} />

      </main>

      {/* ── Sticky footer móvil ───────────────── */}
      <StickyFooter precio={precioFinal} disponibilidad={disponibilidad} />
    </>
  );
}
