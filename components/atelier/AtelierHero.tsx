import Image from "next/image";

/**
 * Portada editorial cinematográfica de MC Atelier.
 *
 * Estructura preparada para sustituir la imagen por un <video> loop
 * silencioso sin reconstruir la sección: solo reemplazar el bloque
 * marcado como "FONDO — reemplazar por <video> cuando esté listo".
 */
export default function AtelierHero() {
  return (
    <section className="relative w-full overflow-hidden bg-background" style={{ height: "84svh", minHeight: "520px" }}>

      {/* ── FONDO — reemplazar por <video> cuando esté listo ─────── */}
      <Image
        src="/atelier/cajonpickup/cover.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center scale-[1.01] transition-transform duration-[3s] ease-out"
        aria-hidden="true"
      />
      {/* ─────────────────────────────────────────────────────────── */}

      {/* Scrim degradado inferior — mantiene legibilidad del texto */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/35" />
      {/* Viñeteado perimetral */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_38%,rgba(10,10,10,0.82)_100%)]" />

      {/* ── Contenido ────────────────────────────────────────────── */}
      <div className="relative z-10 flex h-full flex-col justify-between px-6 py-8 min-[790px]:px-16 min-[790px]:py-14">

        {/* Banda superior editorial */}
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted">
            Edición Limitada · Atelier Manual
          </span>
          <span className="hidden text-[11px] font-semibold uppercase tracking-widest text-muted/60 min-[790px]:block">
            ARCH. 2024 / ARCHIVO ACÚSTICO
          </span>
        </div>

        {/* Bloque tipográfico inferior */}
        <div className="flex flex-col gap-10 min-[790px]:gap-12">
          <div className="flex flex-col gap-4 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
                Manufactura Propietaria
              </span>
            </div>

            <h1 className="text-[clamp(3rem,8vw,5.5rem)] font-bold uppercase leading-[0.93] tracking-[-0.03em] text-foreground">
              MC Atelier
            </h1>

            <p className="text-base font-light leading-relaxed text-muted max-w-md min-[790px]:text-lg">
              Piezas diseñadas y fabricadas para integrarse.
            </p>
          </div>

          {/* Ancla de exploración */}
          <div className="flex items-center justify-between">
            <a
              href="#coleccion"
              aria-label="Desplazarse a la colección"
              className="group inline-flex items-center gap-4 text-muted transition-colors duration-300 hover:text-foreground"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] transition-colors group-hover:text-foreground">
                Explorar Colección
              </span>
              <span className="block h-px w-8 bg-muted/40 transition-all duration-300 group-hover:w-12 group-hover:bg-[var(--accent)]" />
              {/* Flecha hacia abajo */}
              <svg
                className="transition-transform duration-300 group-hover:translate-y-0.5 group-hover:text-[var(--accent)]"
                width="14" height="14" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </a>
            <span className="hidden text-[11px] font-semibold uppercase tracking-widest text-muted/50 min-[790px]:block">
              SERIE NO. 001—004
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
