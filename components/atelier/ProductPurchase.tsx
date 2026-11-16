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
  disponible:    "bg-emerald-900/40 text-emerald-400 border-emerald-800",
  "bajo-pedido": "bg-amber-900/30 text-amber-400 border-amber-800",
  agotado:       "bg-red-900/30 text-red-400 border-red-800",
};

export default function ProductPurchase({ disponibilidad, precioFinal }: Props) {
  const mensualidad = Math.ceil(precioFinal.meses / precioFinal.mesesPlazo);

  return (
    <div className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-6">
      <div className="flex flex-col gap-6 min-[790px]:flex-row min-[790px]:items-end min-[790px]:justify-between">

        {/* Precios */}
        <div className="flex flex-col gap-3">
          {/* Disponibilidad */}
          <span
            className={[
              "w-fit rounded-full border px-3 py-0.5 text-[10px] uppercase tracking-widest",
              disponibilidadStyles[disponibilidad],
            ].join(" ")}
          >
            {disponibilidadLabel[disponibilidad]}
          </span>

          {/* Precio contado */}
          <div className="flex items-baseline gap-2">
            <p className="text-xs uppercase tracking-widest text-muted">
              Precio preferencial de contado
            </p>
            <span className="rounded-full bg-[var(--accent)]/15 px-2.5 py-0.5 text-[10px] font-medium text-[var(--accent)]">
              Ahorro Atelier
            </span>
          </div>
          <p className="text-4xl font-semibold text-foreground">
            ${formatMXN(precioFinal.contado)}{" "}
            <span className="text-base font-normal text-muted">MXN</span>
          </p>

          {/* Meses */}
          <p className="text-sm text-muted">
            <span className="font-medium text-foreground">
              {precioFinal.mesesPlazo} meses sin intereses
            </span>{" "}
            · {precioFinal.mesesPlazo} pagos de ${formatMXN(mensualidad)} MXN
            <span className="ml-2 text-xs line-through">
              ${formatMXN(precioFinal.meses)} MXN
            </span>
          </p>

          {/* Envío */}
          <div className="flex items-center gap-2 text-xs text-muted">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[var(--accent)]" aria-hidden="true">
              <rect x="1" y="3" width="15" height="13" />
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
              <circle cx="5.5" cy="18.5" r="2.5" />
              <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
            Envío incluido a toda la República Mexicana
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-3 min-[790px]:min-w-[220px]">
          <button
            type="button"
            disabled={disponibilidad === "agotado"}
            className={[
              "w-full rounded-2xl px-6 py-4 text-sm font-medium uppercase tracking-widest transition-colors",
              disponibilidad === "agotado"
                ? "cursor-not-allowed bg-[var(--line)] text-muted"
                : "bg-[var(--accent)] text-black hover:bg-[var(--accent)]/90",
            ].join(" ")}
          >
            {disponibilidad === "agotado"
              ? "Agotado"
              : `Adquirir pieza · $${formatMXN(precioFinal.contado)} MXN`}
          </button>

          <button
            type="button"
            className="w-full rounded-2xl border border-[var(--line)] px-6 py-3 text-xs uppercase tracking-widest text-muted transition-colors hover:border-foreground/30 hover:text-foreground"
          >
            Consultar compatibilidad con el taller
          </button>

          <p className="text-center text-[10px] uppercase tracking-widest text-muted/60">
            Garantía de ajuste · Facturación fiscal disponible
          </p>
        </div>

      </div>
    </div>
  );
}
