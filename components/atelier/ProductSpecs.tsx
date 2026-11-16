"use client";

import { useState } from "react";
import type { Especificaciones } from "../../data/products";

interface Props {
  specs: Especificaciones;
}

const secciones = [
  { key: "materiales" as const,     label: "01 · Materiales y resonancia acústica" },
  { key: "dimensiones" as const,    label: "02 · Dimensiones y calibre físico" },
  { key: "compatibilidad" as const, label: "03 · Aplicación y montaje vehicular" },
  { key: "fabricacion" as const,    label: "04 · Criterio de fabricación" },
];

function SeccionAccordion({
  label,
  items,
}: {
  label: string;
  items: { label: string; valor: string | null }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[var(--line)]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-4 text-left text-sm font-medium text-foreground transition-colors hover:text-[var(--accent)]"
      >
        <span>{label}</span>
        <svg
          className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className="pb-5">
          <dl className="grid grid-cols-1 gap-y-3 min-[790px]:grid-cols-2 min-[790px]:gap-x-8">
            {items.map((item) => (
              <div key={item.label} className="flex flex-col gap-0.5">
                <dt className="text-[10px] uppercase tracking-widest text-muted">
                  {item.label}
                </dt>
                <dd className="text-sm text-foreground">
                  {item.valor ?? (
                    <span className="italic text-muted/50">Pendiente</span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </div>
  );
}

export default function ProductSpecs({ specs }: Props) {
  return (
    <section className="border-t border-[var(--line)] py-16">
      <p className="eyebrow mb-2 text-xs">Ingeniería y criterio de fabricación</p>
      <h2 className="mb-10 text-2xl font-semibold tracking-tight text-foreground min-[790px]:text-3xl">
        Diseñada para integrarse.
        <br />
        Calculada para emocionar.
      </h2>

      <div className="divide-y divide-[var(--line)] rounded-2xl border border-[var(--line)] bg-[var(--panel)] px-6">
        {secciones.map(({ key, label }) => (
          <SeccionAccordion
            key={key}
            label={label}
            items={specs[key]}
          />
        ))}
      </div>
    </section>
  );
}
