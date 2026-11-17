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

function Dropdown({
  label,
  options,
  selectedId,
  onSelect,
}: {
  label: string;
  options: { id: string; label: string; hex: string; delta?: number }[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const selected = options.find((o) => o.id === selectedId);

  return (
    <div className="relative">
      <label className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-2 rounded-lg bg-[var(--panel)] px-3 py-2.5 text-left transition-all hover:bg-[var(--panel)]/80"
      >
        <div className="flex min-w-0 items-center gap-2">
          {selected && (
            <span
              className="h-3.5 w-3.5 shrink-0 rounded-full border border-white/20"
              style={{ backgroundColor: selected.hex }}
            />
          )}
          <span className="truncate text-[11px] font-semibold uppercase tracking-wide text-foreground">
            {selected?.label ?? "—"}
          </span>
        </div>
        <svg
          className={`shrink-0 text-muted transition-transform ${open ? "rotate-180" : ""}`}
          width="18" height="18" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full z-50 mt-1.5 flex flex-col gap-1 rounded-lg bg-[var(--panel)] p-1.5 shadow-xl backdrop-blur-xl">
          {options.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => { onSelect(opt.id); setOpen(false); }}
              className="flex w-full items-center justify-between rounded p-2 text-left transition-colors hover:bg-white/5"
            >
              <div className="flex items-center gap-2">
                <span
                  className="h-3 w-3 shrink-0 rounded-full border border-white/20"
                  style={{ backgroundColor: opt.hex }}
                />
                <span className="text-[11px] font-semibold uppercase tracking-wide text-foreground">
                  {opt.label}
                </span>
              </div>
              <span
                className={[
                  "text-[10px] font-semibold uppercase",
                  opt.delta && opt.delta > 0
                    ? "text-[var(--accent)]"
                    : "text-muted",
                ].join(" ")}
              >
                {opt.delta && opt.delta > 0
                  ? `+$${opt.delta.toLocaleString("es-MX")}`
                  : "Estándar"}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function MobileConfigurator({
  product,
  selectedColorId,
  selectedAcentoId,
  onColorChange,
  onAcentoChange,
}: Props) {
  const hasColores = product.coloresPrincipalesIds.length > 1;
  const hasAcentos = product.acentosIds.length > 0;

  if (!hasColores && !hasAcentos) return null;

  const colorOptions = product.coloresPrincipalesIds.map((id) => {
    const c = getColorPrincipal(id);
    return { id, label: c?.label ?? id, hex: c?.hex ?? "#888", delta: 0 };
  });

  const acentoOptions = product.acentosIds.map((id) => {
    const a = getAcento(id);
    return { id, label: a?.label ?? id, hex: a?.hex ?? "#888", delta: 0 };
  });

  return (
    <div className="min-[790px]:hidden">
      <div className="mb-1 flex min-w-0 items-center justify-between gap-2 overflow-hidden">
        <span className="truncate text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
          Personalización de acabados
        </span>
        <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
          Impacto en vivo
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        {hasColores && (
          <Dropdown
            label="Color primario"
            options={colorOptions}
            selectedId={selectedColorId}
            onSelect={onColorChange}
          />
        )}
        {hasAcentos && (
          <Dropdown
            label="Color de acento"
            options={acentoOptions}
            selectedId={selectedAcentoId}
            onSelect={onAcentoChange}
          />
        )}
      </div>
    </div>
  );
}
