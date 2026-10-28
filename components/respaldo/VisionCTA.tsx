import Link from "next/link";
import Section from "./Section";

export default function VisionCTA() {
  return (
    <Section
      eyebrow="DIAGNÓSTICO"
      title="Toda gran integración comienza con una visión."
      className="bg-[#f7f6f4]"
    >
      <div className="max-w-5xl">

        {/* Pregunta 1 */}
        <div className="border-t border-zinc-200 py-10">
          <h3 className="text-2xl font-light tracking-tight">
            ¿Cómo imaginas la integración ideal?
          </h3>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-zinc-300 px-5 py-2 text-sm">
              Como si hubiera salido así de fábrica
            </span>

            <span className="rounded-full border border-zinc-300 px-5 py-2 text-sm">
              Una actualización discreta
            </span>

            <span className="rounded-full border border-zinc-300 px-5 py-2 text-sm">
              Una transformación completa del interior
            </span>
          </div>
        </div>

        {/* Pregunta 2 */}

        <div className="border-t border-zinc-200 py-10">
          <h3 className="text-2xl font-light tracking-tight">
            ¿Qué experiencia buscas al conducir?
          </h3>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-zinc-300 px-5 py-2 text-sm">
              Escuchar cada detalle de la música
            </span>

            <span className="rounded-full border border-zinc-300 px-5 py-2 text-sm">
              Sentir la potencia de cada nota
            </span>

            <span className="rounded-full border border-zinc-300 px-5 py-2 text-sm">
              Open Show
            </span>
          </div>
        </div>

        {/* Pregunta 3 */}

        <div className="border-t border-b border-zinc-200 py-10">
          <h3 className="text-2xl font-light tracking-tight">
            Reúne inspiración.
          </h3>

          <p className="mt-4 max-w-2xl leading-8 text-neutral-600">
            Guarda imágenes, conoce algunos de nuestros proyectos o
            simplemente deja que nuestro equipo te acompañe en el proceso.
          </p>

          <Link
            href="/portfolio"
            className="mt-6 inline-block text-sm uppercase tracking-[0.18em] transition-colors hover:text-neutral-500"
          >
            Explorar proyectos →
          </Link>
        </div>

        {/* Cierre */}

        <div className="py-28 text-center">

          <h2 className="mx-auto max-w-4xl text-4xl font-light leading-tight md:text-6xl">
            Si llegaste hasta aquí,
            probablemente tu vehículo merezca algo más que una instalación convencional.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-neutral-600 leading-8">
            Nuestro diagnóstico es el primer paso para diseñar un proyecto
            pensado exclusivamente para tu vehículo.
          </p>

          <Link
            href="/diagnostico"
            className="
              mt-12
              inline-flex
              items-center
              rounded-full
              bg-black
              px-8
              py-4
              text-sm
              uppercase
              tracking-[0.22em]
              text-white
              transition-all
              duration-300
              hover:scale-[1.03]
            "
          >
            Iniciar diagnóstico
          </Link>

        </div>

      </div>
    </Section>
  );
}