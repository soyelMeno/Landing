import Image from "next/image";
import Link from "next/link";
import type { Product } from "../../data/products";

interface Props {
  products: Product[];
}

export default function AtelierCollection({ products }: Props) {
  return (
    <section
      id="coleccion"
      className="mx-auto w-full max-w-[1440px] px-6 pb-28 pt-16 min-[790px]:px-16 min-[790px]:pb-36 min-[790px]:pt-24"
    >
      {/* ── Encabezado editorial ───────────────────────────────── */}
      <div className="mb-16 flex flex-col gap-6 min-[790px]:mb-24 min-[790px]:flex-row min-[790px]:items-end min-[790px]:justify-between">
        <div className="flex flex-col gap-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
            02 / Obras de Ingeniería
          </span>
          <h2 className="text-3xl font-semibold uppercase tracking-tight text-foreground min-[790px]:text-5xl">
            Nuestra colección
          </h2>
        </div>
        <p className="text-sm font-light leading-relaxed text-muted max-w-sm min-[790px]:text-base">
          Una selección de piezas diseñadas y fabricadas por MC Auto Sound.
        </p>
      </div>

      {/* ── Retícula asimétrica 2 columnas ────────────────────── */}
      {/*
        Desktop: 2 col, pares impares alineados al tope,
        pares desplazados 5rem hacia abajo para ritmo editorial.
        Mobile: columna única.
      */}
      <div className="grid grid-cols-1 gap-y-16 min-[790px]:grid-cols-2 min-[790px]:gap-x-16 min-[790px]:gap-y-28 lg:gap-x-20">
        {products.map((product, i) => {
          const isOffset = i % 2 === 1; // columna derecha
          return (
            <Link
              key={product.slug}
              href={`/atelier/${product.slug}`}
              className={[
                "group flex flex-col overflow-hidden bg-[var(--panel)] transition-colors duration-500 hover:bg-[#1a1a1a]",
                isOffset ? "min-[790px]:mt-20" : "",
              ].join(" ")}
            >
              {/* Imagen */}
              <div className="relative w-full overflow-hidden bg-background" style={{ aspectRatio: "4/3" }}>
                <Image
                  src={product.coverImage}
                  alt={product.nombre}
                  fill
                  sizes="(min-width: 790px) 45vw, 100vw"
                  className="object-cover opacity-90 transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-100"
                />
                {/* Degradado sutil sobre imagen */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--panel)]/40 via-transparent to-transparent" />
              </div>

              {/* Info */}
              <div className="flex flex-col gap-3 p-8 min-[790px]:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[12px] uppercase tracking-[0.16em] text-muted">
                    {product.slug}
                  </span>
                  {/* Flecha diagonal — señal de navegación */}
                  <svg
                    className="text-muted/50 transition-colors duration-300 group-hover:text-[var(--accent)]"
                    width="18" height="18" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="1.8"
                    strokeLinecap="round" strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>

                <h3 className="text-xl font-normal leading-snug text-foreground transition-colors duration-300 group-hover:text-[var(--accent)] min-[790px]:text-2xl">
                  {product.nombre}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>

      {/* ── Cierre editorial ──────────────────────────────────── */}
      <div className="mt-20 flex items-center justify-center gap-2.5 min-[790px]:mt-28">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--line)]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--line)]" />
      </div>
    </section>
  );
}
