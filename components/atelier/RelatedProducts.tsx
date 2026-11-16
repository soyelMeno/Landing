import Link from "next/link";
import Image from "next/image";
import { getAllProducts, disponibilidadLabel, type Product } from "../../data/products";

interface Props {
  currentSlug: string;
}

function formatMXN(n: number): string {
  return n.toLocaleString("es-MX", { minimumFractionDigits: 0 });
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/atelier/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--panel)] transition-colors hover:border-[var(--accent)]/40"
    >
      {/* Imagen */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.coverImage}
          alt={product.nombre}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 790px) 100vw, 33vw"
        />
        <div className="absolute left-3 top-3">
          <span className="rounded-full bg-black/60 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-white backdrop-blur-sm">
            {product.slug}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-sm font-medium text-foreground group-hover:text-[var(--accent)] transition-colors">
          {product.nombre}
        </p>
        <p className="text-xs leading-relaxed text-muted line-clamp-2">
          {product.descripcionBreve}
        </p>
        <div className="mt-auto pt-3 flex items-center justify-between">
          <p className="text-sm font-semibold text-foreground">
            ${formatMXN(product.precio.contado)}{" "}
            <span className="text-xs font-normal text-muted">MXN</span>
          </p>
          <span className="text-[10px] uppercase tracking-widest text-muted">
            {disponibilidadLabel[product.disponibilidad]}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function RelatedProducts({ currentSlug }: Props) {
  const related = getAllProducts()
    .filter((p) => p.slug !== currentSlug)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="border-t border-[var(--line)] py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="eyebrow mb-1 text-xs">Colección curada</p>
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Otras piezas disponibles en MC Atelier
          </h2>
        </div>
        <Link
          href="/atelier"
          className="hidden text-xs uppercase tracking-widest text-muted transition-colors hover:text-foreground min-[790px]:block"
        >
          Ver toda la colección →
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 min-[790px]:grid-cols-3">
        {related.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>

      <div className="mt-6 min-[790px]:hidden">
        <Link
          href="/atelier"
          className="text-xs uppercase tracking-widest text-muted transition-colors hover:text-foreground"
        >
          Ver toda la colección →
        </Link>
      </div>
    </section>
  );
}
