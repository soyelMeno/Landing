"use client";

import type { DisponibilidadEstado } from "../../data/products";
import { disponibilidadLabel } from "../../data/products";

interface Props {
  disponibilidad: DisponibilidadEstado;
  precioFinal: { contado: number; meses: number; mesesPlazo: number };
}

function formatMXN(n: number): string {
  return n.toLocaleString("es-MX", { minimumFractionDigits: 0 });
}

const disponibilidadStyles: Record<DisponibilidadEstado, string> = {
  disponible:    "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
  "bajo-pedido": "bg-amber-500/10 border-amber-500/30 text-amber-400",
  agotado:       "bg-red-500/10 border-red-500/30 text-red-400",
};

const disponibilidadDot: Record<DisponibilidadEstado, string> = {
  disponible:    "bg-emerald-400",
  "bajo-pedido": "bg-amber-400",
  agotado:       "bg-red-400",
};

export default function ProductPurchase({ disponibilidad, precioFinal }: Props) {
  const mensualidad = Math.ceil(precioFinal.meses / precioFinal.mesesPlazo);

  return (
    <div className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-7">
      <div className="flex flex-col gap-8 min-[790px]:flex-row min-[790px]:items-end min-[790px]:justify-between">

        {/* ── Precios ── */}
        <div className="flex flex-col gap-4">

          {/* Disponibilidad */}
          <div
            className={[
              "flex w-fit items-center gap-1.5 rounded-full border px-3 py-1",
              "text-[10px] font-semibold uppercase tracking-[0.16em]",
              disponibilidadStyles[disponibilidad],
            ].join(" ")}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${disponibilidadDot[disponibilidad]}`} />
            {disponibilidadLabel[disponibilidad]}
          </div>

          {/* Etiqueta + badge */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
              Precio preferencial de contado
            </span>
            <span className="rounded bg-[var(--accent)]/15 border border-[var(--accent)]/30 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--accent)]">
              Ahorro Atelier
            </span>
          </div>

          {/* Precio contado */}
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold tracking-tight text-foreground">
              ${formatMXN(precioFinal.contado)}
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">MXN</span>
          </div>

          {/* MSI */}
          <div className="flex items-center justify-between rounded-xl border border-[var(--line)] bg-white/[0.02] px-4 py-3 text-xs">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-muted" aria-hidden="true">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                <line x1="1" y1="10" x2="23" y2="10" />
              </svg>
              <span className="font-medium text-muted">Meses sin intereses:</span>
            </div>
            <div className="text-right">
              <span className="text-sm font-semibold text-foreground">${formatMXN(precioFinal.meses)}</span>
              <span className="text-[11px] text-muted"> MXN</span>
              <span className="block text-[11px] text-muted">
                (Hasta {precioFinal.mesesPlazo} meses · ${formatMXN(mensualidad)}/mes)
              </span>
            </div>
          </div>

          {/* Envío */}
          <div className="flex items-center gap-2 text-xs font-medium text-emerald-400">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="1" y="3" width="15" height="13" />
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
              <circle cx="5.5" cy="18.5" r="2.5" />
              <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
            Envío asegurado incluido a toda la República Mexicana
          </div>
        </div>

        {/* ── CTAs ── */}
        <div className="flex flex-col gap-3 min-[790px]:min-w-[240px]">
          <button
            type="button"
            disabled={disponibilidad === "agotado"}
            className={[
              "flex w-full items-center justify-center gap-3 rounded-xl px-6 py-4",
              "text-xs font-semibold uppercase tracking-[0.12em] shadow-lg transition-all active:scale-[0.99]",
              disponibilidad === "agotado"
                ? "cursor-not-allowed bg-[var(--line)] text-muted"
                : "bg-[var(--accent)] text-black hover:bg-[var(--accent)]/90",
            ].join(" ")}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            {disponibilidad === "agotado"
              ? "Agotado"
              : `Adquirir pieza · $${formatMXN(precioFinal.contado)} MXN`}
          </button>

          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--line)] px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted transition-all hover:border-white/30 hover:bg-white/[0.03] hover:text-foreground"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            Consultar compatibilidad con taller
          </button>

          <div className="flex items-center justify-between pt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted/60">
            <span>Garantía de ajuste: 2 años</span>
            <span>Facturación fiscal</span>
          </div>
        </div>

      </div>
    </div>
  );
}
