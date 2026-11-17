"use client";

import type { Product } from "../../data/products";
import ProductConfigurator from "./ProductConfigurator";

interface Props {
  product: Product;
  selectedColorId: string;
  selectedAcentoId: string | null;
  onColorChange: (id: string) => void;
  onAcentoChange: (id: string | null) => void;
}

export default function ProductInfo({
  product,
  selectedColorId,
  selectedAcentoId,
  onColorChange,
  onAcentoChange,
}: Props) {
  return (
    <div className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-7 shadow-2xl min-[790px]:sticky min-[790px]:top-28">
      {/* Slug + serie */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="rounded bg-white/5 border border-[var(--line)] px-2.5 py-1 text-xs font-semibold tracking-wider text-[var(--accent)]">
            {product.slug}
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
            Serie Atelier
          </span>
        </div>
      </div>

      {/* Nombre */}
      <h1 className="text-2xl font-bold uppercase tracking-tight text-foreground min-[790px]:text-3xl">
        {product.nombre}
      </h1>

      {/* Descripción */}
      <p className="mt-3 text-xs leading-relaxed text-muted">
        {product.descripcionBreve}
      </p>

      {/* Configurador (oculto en móvil — aparece arriba como MobileConfigurator) */}
      <div className="hidden min-[790px]:block">
        <ProductConfigurator
          product={product}
          selectedColorId={selectedColorId}
          selectedAcentoId={selectedAcentoId}
          onColorChange={onColorChange}
          onAcentoChange={onAcentoChange}
        />
      </div>
    </div>
  );
}
