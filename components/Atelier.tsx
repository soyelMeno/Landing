import Section from "./Section";
import Image from "next/image";
import Link from "next/link";

const atelierItems = [
  {
    image: "/atelier/cajon10/cover.png",
    title: 'Cajón acústico 10"',
    description: "Diseñado para máxima integración y desempeño.",
  },
  {
    image: "/atelier/cajonpickup/cover.jpeg",
    title: 'Cajón acústico 12"',
    description: "Soluciones específicas para camionetas.",
  },
  {
    image: "/atelier/tapapuertas/cover.jpeg",
    title: "Tapapuertas VW Sedán",
    description:
      "Materiales y acabados que respetan la identidad del vehículo.",
  },
];
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
    no-scrollbar
    snap-x
    snap-mandatory

    px-6
    -mx-6

    lg:grid
    lg:grid-cols-3
    lg:gap-12
    lg:overflow-visible
    lg:px-0
    lg:mx-0
"
>
    {/* Mobile*/}
{/* Cajón 10" */}
      {atelierItems.map((item) => (
    <article
      key={item.title}
      className="w-[285px] shrink-0 snap-start space-y-6"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>

      <h3 className="text-2xl font-light tracking-tight">
        {item.title}
      </h3>

      <p className="leading-7 text-zinc-400">
        {item.description}
      </p>
    </article>
  ))}
  </div>
    </Section>
  );
}