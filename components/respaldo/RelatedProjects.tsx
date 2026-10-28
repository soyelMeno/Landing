import Image from "next/image";
import Link from "next/link";

type ProjectCard = {
  slug: string;
  title: string;
  coverImage: string;
  tags: string[];
};

type Props = {
  projects: ProjectCard[];
};

export default function RelatedProjects({ projects }: Props) {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">

        <div className="flex items-end justify-between">
          <p className="eyebrow">También podría interesarte</p>
          <Link
            href="/portfolio"
            className="text-[0.7rem] uppercase tracking-[0.14em] text-muted transition-colors hover:text-foreground"
          >
            Ver portfolio completo
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="group relative aspect-[3/2] overflow-hidden bg-panel block"
            >
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover opacity-70 transition-all duration-700 group-hover:opacity-90 group-hover:scale-105"
              />

              {/* Overlay gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

              {/* Info */}
              <div className="absolute bottom-0 left-0 p-5">
                <p className="eyebrow text-[0.6rem]">
                  PROYECTO {String(i + 1).padStart(2, "0")}/{String(projects.length).padStart(2, "0")}
                </p>
                <h3 className="mt-1 text-lg font-medium uppercase tracking-tight text-foreground">
                  {project.title}
                </h3>
              </div>

              {/* Flecha */}
              <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center border border-foreground/20 text-foreground/40 transition-all duration-300 group-hover:border-accent group-hover:text-accent">
                ↗
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
