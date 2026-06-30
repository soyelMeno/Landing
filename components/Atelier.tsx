import Section from "./Section";
import Image from "next/image";
import Link from "next/link";
export default function Atelier() {
  return (
    <Section
  eyebrow="ATELIER"
  title="Donde el detalle importa."
  description="Piezas desarrolladas con la misma filosofía que aplicamos en cada proyecto."
  tone="dark"
  action={
    <Link
      href="/atelier"
      className="text-sm uppercase tracking-[0.18em] text-zinc-500 transition-colors hover:text-white"
    >
      Ver Atelier →
    </Link>
  }
>
      <div
    className="
      flex
      gap-6
      overflow-x-auto
      snap-x
      snap-mandatory
      no-scrollbar
      px-6
      -mx-6
      lg:hidden
    "
  >
    {/* Cards */}
{/* Cajón 10" */}
        <article
  className="
    w-[285px]
    shrink-0
    snap-start
    space-y-6
  "
>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/atelier/cajon10/cover.png"
              alt='Cajón acústico de 10 pulgadas'
              fill
              className="object-cover"
            />
          </div>

          <h3 className="text-2xl font-light tracking-tight">
            Cajón acústico 10"
          </h3>

          <p className="leading-7 text-zinc-400">
            Diseñado para máxima integración y desempeño.
          </p>
        </article>

        {/* Cajón Pick Up */}
        <article
  className="
    w-[285px]
    shrink-0
    snap-start
    space-y-6
  "
>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/atelier/cajonpickup/cover.jpeg"
              alt="Cajón acústico para Pick Up"
              fill
              className="object-cover"
            />
          </div>

          <h3 className="text-2xl font-light tracking-tight">
            Cajón acústico 12"
          </h3>

          <p className="leading-7 text-zinc-400">
            Soluciones específicas para camionetas.
          </p>
        </article>

        {/* Tapapuertas */}
        <article
  className="
    w-[285px]
    shrink-0
    snap-start
    space-y-6
  "
>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/atelier/tapapuertas/cover.jpeg"
              alt="Tapapuertas para VW Sedán"
              fill
              className="object-cover"
            />
          </div>

          <h3 className="text-2xl font-light tracking-tight">
            Tapapuertas VW Sedán
          </h3>

          <p className="leading-7 text-zinc-400">
            Materiales y acabados que respetan la identidad del vehículo.
          </p>
        </article>

  </div>

        <div className="hidden lg:grid lg:grid-cols-3 gap-12">
    {/* Cards */}
    {/* Cajón 10" */}
        <article
  className="
    w-[285px]
    shrink-0
    snap-start
    space-y-6
  "
>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/atelier/cajon10/cover.png"
              alt='Cajón acústico de 10 pulgadas'
              fill
              className="object-cover"
            />
          </div>

          <h3 className="text-2xl font-light tracking-tight">
            Cajón acústico 10"
          </h3>

          <p className="leading-7 text-zinc-400">
            Diseñado para máxima integración y desempeño.
          </p>
        </article>

        {/* Cajón Pick Up */}
        <article
  className="
    w-[285px]
    shrink-0
    snap-start
    space-y-6
  "
>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/atelier/cajonpickup/cover.jpeg"
              alt="Cajón acústico para Pick Up"
              fill
              className="object-cover"
            />
          </div>

          <h3 className="text-2xl font-light tracking-tight">
            Cajón acústico 12"
          </h3>

          <p className="leading-7 text-zinc-400">
            Soluciones específicas para camionetas.
          </p>
        </article>

        {/* Tapapuertas */}
        <article
  className="
    w-[285px]
    shrink-0
    snap-start
    space-y-6
  "
>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/atelier/tapapuertas/cover.jpeg"
              alt="Tapapuertas para VW Sedán"
              fill
              className="object-cover"
            />
          </div>

          <h3 className="text-2xl font-light tracking-tight">
            Tapapuertas VW Sedán
          </h3>

          <p className="leading-7 text-zinc-400">
            Materiales y acabados que respetan la identidad del vehículo.
          </p>
        </article>
  </div>
    </Section>
  );
}