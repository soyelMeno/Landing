import Image from "next/image";
export default function Atelier() {
  return (
    <section className="bg-black text-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16">
          <p className="text-sm tracking-[0.3em] text-zinc-500 uppercase">
            MC Atelier
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl">
            Donde el detalle importa.
          </h2>

          <p className="mt-6 max-w-2xl text-zinc-400">
            Algunas piezas merecen ser observadas de cerca. Materiales,
            acabados y soluciones desarrolladas específicamente para cada
            vehículo.
          </p>
        </div>

        <div className="
          grid
          gap-12
          md:grid-cols-2
          lg:grid-cols-3
        ">

          <article className="space-y-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
  <Image
  src="/atelier/cajon10/cover.png"
  alt="Cajón acústico 10 pulgadas"
  width={600}
  height={450}
/>
</div>

            <h3 className="text-xl">
              Cajón acústico 10"
            </h3>

            <p className="text-zinc-400">
              Diseñado para máxima integración y desempeño.
            </p>
          </article>

          <article className="space-y-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
  <Image
    src="/atelier/cajonpickup/cover.png"
    alt='Cajón acústico para pick up'
    fill
    className="object-cover"
  />
</div>

            <h3 className="text-xl">
              Cajón acústico 12"
            </h3>

            <p className="text-zinc-400">
              Soluciones específicas para camionetas.
            </p>
          </article>

          <article className="space-y-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
  <Image
    src="/atelier/tapapuertas/cover.jpeg"
    alt='Tapapuertas para VW Vocho'
    fill
    className="object-cover"
  />
</div>
  
            <h3 className="text-xl">
              Tapapuertas VW Sedán
            </h3>

            <p className="text-zinc-400">
              Materiales y acabados que respetan la identidad del vehículo.
            </p>
          </article>

        </div>

      </div>
    </section>
  );
}