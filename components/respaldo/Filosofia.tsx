export default function Philosophy() {
  const principles = [
    {
      title: "PRECISIÓN",
      description:
        "Cada pieza encaja como si hubiera sido diseñada por el fabricante.",
    },
    {
      title: "DETALLE",
      description:
        "Cada costura, textura y acabado forman parte de la experiencia.",
    },
    {
      title: "RESPETO",
      description:
        "Conservamos la esencia de cada vehículo antes de intervenirlo.",
    },
    {
      title: "INTEGRACIÓN",
      description:
        "La tecnología se siente natural, nunca añadida.",
    },
  ];

  return (
    <section className="bg-black py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6">

        {/* Encabezado */}
        <div className="mb-24 max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Nuestra filosofía
          </p>

          <h2 className="text-4xl font-light leading-tight text-white md:text-6xl">
            No diseñamos proyectos alrededor de componentes.
            <br />
            Diseñamos experiencias alrededor del vehículo.
          </h2>
        </div>

        {/* Principios */}
        <div className="space-y-7">
          {principles.map((item) => (
            <div
              key={item.title}
              className="border-t border-zinc-800 pt-8"
            >
              <h3 className="mb-3 text-3xl font-light tracking-tight text-white md:text-5xl">
                {item.title}
              </h3>

              <p className="max-w-2xl text-lg leading-relaxed text-zinc-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}