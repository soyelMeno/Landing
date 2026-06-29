import Section from "./Section";
import Image from "next/image";

export default function Atelier() {
  return (
    <Section
      eyebrow="Atelier"
      title="Donde el detalle importa."
      description="Algunas piezas merecen ser observadas de cerca. Materiales, acabados y soluciones desarrolladas específicamente para cada vehículo."
      tone="dark"
    >
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">

        {/* Cajón 10" */}
        <article className="space-y-6">
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
        <article className="space-y-6">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/atelier/cajonpickup/cover.png"
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
        <article className="space-y-6">
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