"use client";

import type { Especificaciones } from "../../data/products";

interface Props {
  specs: Especificaciones;
}

type SpecRow = { label: string; valor: string | null };

// ── Accordeon (móvil) ──────────────────────────────────────────
function SpecAccordion({
  index,
  title,
  rows,
}: {
  index: string;
  title: string;
  rows: SpecRow[];
}) {
  return (
    <details className="group overflow-hidden rounded-xl bg-[var(--panel)] shadow-sm">
      <summary className="flex cursor-pointer list-none select-none items-center justify-between p-4">
        <div className="flex items-center gap-2.5">
          <span className="text-[12px] font-semibold text-[var(--accent)]">{index}</span>
          <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-foreground">
            {title}
          </span>
        </div>
        <svg
          className="shrink-0 text-muted transition-transform group-open:rotate-180"
          width="18" height="18" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </summary>
      <div className="grid grid-cols-2 gap-2 px-4 pb-4 pt-1">
        {rows.map((row) => (
          <div key={row.label} className="flex flex-col rounded bg-[var(--background)] p-2.5">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-muted">
              {row.label}
            </span>
            {row.valor ? (
              <span className="mt-0.5 text-[12px] font-semibold text-foreground">
                {row.valor}
              </span>
            ) : (
              <span className="mt-0.5 text-[12px] italic text-muted/50">Pendiente</span>
            )}
          </div>
        ))}
      </div>
    </details>
  );
}

// ── Tarjeta (desktop) ──────────────────────────────────────────
function SpecCard({
  index,
  title,
  icon,
  rows,
}: {
  index: string;
  title: string;
  icon: React.ReactNode;
  rows: SpecRow[];
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-6">
      <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--line)] bg-white/[0.03] text-[var(--accent)]">
        {icon}
      </div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
        {index} · {title}
      </h3>
      <ul className="mt-5 space-y-3">
        {rows.map((row) => (
          <li key={row.label} className="flex justify-between border-b border-[var(--line)] pb-2 last:border-0 last:pb-0">
            <span className="text-xs font-medium text-muted">{row.label}:</span>
            {row.valor ? (
              <span className="ml-4 text-right text-xs font-medium text-foreground">{row.valor}</span>
            ) : (
              <span className="ml-4 text-right text-xs italic text-muted/50">Pendiente</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

const icons = [
  // materiales
  <svg key="mat" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="4" rx="1" /><rect x="2" y="10" width="20" height="4" rx="1" /><rect x="2" y="17" width="20" height="4" rx="1" /></svg>,
  // dimensiones
  <svg key="dim" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" /><path d="M6 3v18M18 3v18" /></svg>,
  // aplicacion
  <svg key="app" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" /></svg>,
];

export default function ProductSpecs({ specs }: Props) {
  const hasContent =
    specs.materiales.length > 0 ||
    specs.dimensiones.length > 0 ||
    specs.compatibilidad.length > 0 ||
    specs.fabricacion.length > 0;

  if (!hasContent) return null;

  const sections = [
    { index: "01", title: "Materiales y resonancia",   rows: specs.materiales },
    { index: "02", title: "Dimensiones y calibre",     rows: specs.dimensiones },
    { index: "03", title: "Aplicación y fabricación",  rows: [...specs.compatibilidad, ...specs.fabricacion] },
  ].filter((s) => s.rows.length > 0);

  return (
    <section className="mt-8 min-[790px]:mt-20 border-t border-[var(--line)] pt-8 min-[790px]:pt-16">
      {/* Encabezado */}
      <div className="mb-6 min-[790px]:mb-12 max-w-4xl">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
          Criterio técnico de fabricación
        </span>
        <h2 className="mt-2 text-xl font-bold uppercase tracking-tight text-foreground min-[790px]:text-3xl">
          Diseñada para integrarse. Calculada para emocionar.
        </h2>
      </div>

      {/* Móvil: acordeones */}
      <div className="flex flex-col gap-2 min-[790px]:hidden">
        {sections.map((s) => (
          <SpecAccordion key={s.index} index={s.index} title={s.title} rows={s.rows} />
        ))}
      </div>

      {/* Desktop: tarjetas en grid */}
      <div className="hidden min-[790px]:grid grid-cols-3 gap-6">
        {sections.map((s, i) => (
          <SpecCard key={s.index} index={s.index} title={s.title} rows={s.rows} icon={icons[i]} />
        ))}
      </div>
    </section>
  );
}
