"use client";

import type { Product } from "../../data/products";
import { getColorPrincipal, getAcento, getCombinacion } from "../../data/products";

interface Props {
  product: Product;
  selectedColorId: string;
  selectedAcentoId: string | null;
  onColorChange: (id: string) => void;
  onAcentoChange: (id: string | null) => void;
}

function formatDelta(n: number): string {
  if (n === 0) return "Estándar";
  return `+ $${n.toLocaleString("es-MX")}`;
}

export default function ProductConfigurator({
  product,
  selectedColorId,
  selectedAcentoId,
  onColorChange,
  onAcentoChange,
}: Props) {
  const hasColores = product.coloresPrincipalesIds.length > 1;
  const hasAcentos = product.acentosIds.length > 0;

  if (!hasColores && !hasAcentos) return null;

  return (
    <div className="flex flex-col gap-6 border-t border-[var(--line)] pt-6">
      {/* Color principal */}
      {hasColores && (
        <div>
          <div className="mb-3 flex items-center justify-between">
            <label className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              1. Color principal (cuerpo):
            </label>
            <span className="text-xs font-semibold text-[var(--accent)]">
              {getColorPrincipal(selectedColorId)?.label}
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2.5">
            {product.coloresPrincipalesIds.map((id) => {
              const color = getColorPrincipal(id);
              if (!color) return null;
              const isActive = selectedColorId === id;
              // busca el delta en combinaciones
              const comb = getCombinacion(product, id, selectedAcentoId);
              const delta = comb?.precioDelta ?? 0;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => onColorChange(id)}
                  className={[
                    "flex items-center gap-2 rounded-xl border-2 p-2.5 text-left transition-all",
                    isActive
                      ? "border-[var(--accent)] bg-[var(--panel)]"
                      : "border-[var(--line)] bg-[var(--panel)] hover:border-white/30",
                  ].join(" ")}
                >
                  <span
                    className="h-5 w-5 shrink-0 rounded-full border border-white/20"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="min-w-0 overflow-hidden">
                    <span className="block truncate text-xs font-semibold text-foreground">
                      {color.label}
                    </span>
                    <span
                      className={[
                        "block text-[10px]",
                        delta > 0 ? "font-medium text-[var(--accent)]" : "text-muted",
                      ].join(" ")}
                    >
                      {formatDelta(delta)}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Acento */}
      {hasAcentos && (
        <div>
          <div className="mb-3 flex items-center justify-between">
            <label className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              2. Acento &amp; tornillería:
            </label>
            <span className="text-xs font-medium text-muted">
              {selectedAcentoId ? getAcento(selectedAcentoId)?.label : "Sin acento"}
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2.5">
            {product.acentosIds.map((id) => {
              const acento = getAcento(id);
              if (!acento) return null;
              const isActive = selectedAcentoId === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => onAcentoChange(id)}
                  className={[
                    "flex items-center gap-2 rounded-xl border-2 p-2.5 text-left transition-all",
                    isActive
                      ? "border-[var(--accent)] bg-[var(--panel)]"
                      : "border-[var(--line)] bg-[var(--panel)] hover:border-white/30",
                  ].join(" ")}
                >
                  <span
                    className="h-5 w-5 shrink-0 rounded-full border border-white/20"
                    style={{ backgroundColor: acento.hex }}
                  />
                  <span className="truncate text-xs font-semibold text-foreground">
                    {acento.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
