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
    <div className="flex flex-col gap-6">
      {/* ID */}
      <p className="font-mono text-xs text-muted">{product.slug}</p>

      {/* Nombre + descripción */}
      <div>
        <h1 className="text-3xl font-semibold leading-tight tracking-tight text-foreground min-[790px]:text-4xl">
          {product.nombre}
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {product.descripcionBreve}
        </p>
      </div>

      {/* Configurador — solo visible en desktop (en móvil está el MobileConfigurator arriba) */}
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
