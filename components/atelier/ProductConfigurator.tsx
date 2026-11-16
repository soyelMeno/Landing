"use client";

import { getColorPrincipal, getAcento, type Product } from "../../data/products";

interface Props {
  product: Product;
  selectedColorId: string;
  selectedAcentoId: string | null;
  onColorChange: (id: string) => void;
  onAcentoChange: (id: string | null) => void;
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
    <div className="space-y-5">
      {/* ── Color principal ───────────────────── */}
      {hasColores && (
        <div>
          <p className="mb-2 text-xs uppercase tracking-widest text-muted">
            Color principal
          </p>
          <div className="flex flex-wrap gap-2">
            {product.coloresPrincipalesIds.map((id) => {
              const color = getColorPrincipal(id);
              if (!color) return null;
              const isActive = selectedColorId === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => onColorChange(id)}
                  title={color.label}
                  aria-label={color.label}
                  className={[
                    "relative flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs transition-all",
                    isActive
                      ? "border-[var(--accent)] text-[var(--accent)]"
                      : "border-[var(--line)] text-muted hover:border-foreground/30 hover:text-foreground",
                  ].join(" ")}
                >
                  {/* Swatch de color */}
                  <span
                    className="h-3.5 w-3.5 shrink-0 rounded-full border border-white/20"
                    style={{ backgroundColor: color.hex }}
                  />
                  {color.label}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Acento ───────────────────────────── */}
      {hasAcentos && (
        <div>
          <p className="mb-2 text-xs uppercase tracking-widest text-muted">
            Acento
          </p>
          <div className="flex flex-wrap gap-2">
            {product.acentosIds.map((id) => {
              const acento = getAcento(id);
              if (!acento) return null;
              const isActive = selectedAcentoId === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => onAcentoChange(id)}
                  title={acento.label}
                  aria-label={acento.label}
                  className={[
                    "relative flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs transition-all",
                    isActive
                      ? "border-[var(--accent)] text-[var(--accent)]"
                      : "border-[var(--line)] text-muted hover:border-foreground/30 hover:text-foreground",
                  ].join(" ")}
                >
                  <span
                    className="h-3.5 w-3.5 shrink-0 rounded-full border border-white/20"
                    style={{ backgroundColor: acento.hex }}
                  />
                  {acento.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
