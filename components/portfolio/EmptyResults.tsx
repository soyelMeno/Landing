"use client";

interface Props {
  type: "partial" | "fallback";
  message: string;
  onClear: () => void;
}

export default function EmptyResults({ type, message, onClear }: Props) {
  const isHardFallback = type === "fallback";
  return (
    <div className="mb-8 rounded-2xl border border-[var(--line)] bg-[var(--panel)] px-6 py-5">
      <div className="flex flex-col gap-3 min-[790px]:flex-row min-[790px]:items-center min-[790px]:justify-between">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 shrink-0 text-[var(--accent)]" aria-hidden="true">
            {isHardFallback ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            )}
          </span>
          <div>
            <p className="text-sm font-medium text-foreground">{message}</p>
            <p className="mt-0.5 text-xs text-muted">
              {isHardFallback
                ? "Te mostramos una selección editorial de nuestros proyectos destacados."
                : "Ampliamos la búsqueda para mostrarte proyectos similares."}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={onClear}
          className="shrink-0 rounded-full border border-[var(--line)] px-4 py-1.5 text-xs text-muted transition-colors hover:border-foreground/40 hover:text-foreground"
        >
          Limpiar filtros
        </button>
      </div>
    </div>
  );
}