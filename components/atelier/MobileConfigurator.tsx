"use client";

import { useState } from "react";
import type { Product } from "../../data/products";
import { getColorPrincipal, getAcento } from "../../data/products";

interface Props {
  product: Product;
  selectedColorId: string;
  selectedAcentoId: string | null;
  onColorChange: (id: string) => void;
  onAcentoChange: (id: string | null) => void;
}

export default function MobileConfigurator({
  product,
  selectedColorId,
  selectedAcentoId,
  onColorChange,
  onAcentoChange,
}: Props) {
  const [open, setOpen] = useState(false);

  const hasColores = product.coloresPrincipalesIds.length > 1;
  const hasAcentos = product.acentosIds.length > 0;

  if (!hasColores && !hasAcentos) return null;

  // Etiqueta del estado actual para mostrar en el header colapsable
  const colorLabel = getColorPrincipal(selectedColorId)?.label ?? "";
  const acentoLabel = selectedAcentoId ? getAcento(selectedAcentoId)?.label : null;
  const resumen = [colorLabel, acentoLabel].filter(Boolean).join(" + ");

  return (
    <div className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] min-[790px]:hidden">
      {/* Header colapsable */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full min-w-0 items-center justify-between gap-3 px-5 py-4"
      >
        <div className="min-w-0 text-left">
          <p className="text-[10px] uppercase tracking-wider text-muted">Acabado seleccionado</p>
          <p className="mt-0.5 truncate text-sm font-medium text-foreground">{resumen}</p>
        </div>
        <svg
          className={`shrink-0 text-muted transition-transform ${open ? "rotate-180" : ""}`}
          width="16" height="16" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Opciones */}
      {open && (
        <div className="border-t border-[var(--line)] px-5 pb-5 pt-4 space-y-5">
          {/* Color principal */}
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
                      className={[
                        "flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs transition-all",
                        isActive
                          ? "border-[var(--accent)] text-[var(--accent)]"
                          : "border-[var(--line)] text-muted",
                      ].join(" ")}
                    >
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

          {/* Acento */}
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
                      className={[
                        "flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs transition-all",
                        isActive
                          ? "border-[var(--accent)] text-[var(--accent)]"
                          : "border-[var(--line)] text-muted",
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
      )}
    </div>
  );
}
