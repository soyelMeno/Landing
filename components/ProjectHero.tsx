import Image from "next/image";

type Props = {
  coverImage: string;
  tags: string[];
  title: string;
  subtitle: string;
};

export default function ProjectHero({ coverImage, tags, title, subtitle }: Props) {
  return (
    <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden bg-background min-[790px]:h-[85vh]">
      <Image
        src={coverImage}
        alt={title}
        fill
        priority
        className="object-cover object-center opacity-75"
      />

      {/* Gradiente inferior para que el texto sea legible */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

      {/* Contenido */}
      <div className="absolute bottom-0 left-0 w-full px-6 pb-12 lg:px-10">
        <div className="mx-auto max-w-6xl">
          {/* Tags */}
          <div className="mb-3 flex items-center gap-2">
            {tags.map((tag, i) => (
              <span key={tag} className="flex items-center gap-2">
                <span className="eyebrow text-[0.65rem]">{tag}</span>
                {i < tags.length - 1 && (
                  <span className="text-accent opacity-50">·</span>
                )}
              </span>
            ))}
          </div>

          <h1 className="text-4xl font-semibold uppercase tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-2 text-sm text-muted sm:text-base">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
