import { notFound } from "next/navigation";
import { getAllSlugs, getProjectBySlug, getProjectCard } from "../../../data/projects";
import ProjectHero from "../../../components/ProjectHero";
import ProjectGallery from "../../../components/ProjectGallery";
import RelatedProjects from "../../../components/RelatedProjects";

// Genera todas las páginas en build time
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// Metadata dinámica por proyecto
  export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — MC Auto Sound Design`,
    description: project.story.heading,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const relatedProjects = project.related
    .map(getProjectCard)
    .filter((p): p is NonNullable<ReturnType<typeof getProjectCard>> => p !== null);

  return (
    <main>
      <ProjectHero
        coverImage={project.coverImage}
        tags={project.tags}
        title={project.title}
        subtitle={project.subtitle}
      />

      {/* Story */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 min-[790px]:grid-cols-[14rem_1fr]">
            <p className="eyebrow pt-1">{project.story.eyebrow}</p>
            <div>
              <h2 className="text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                {project.story.heading}
              </h2>
              <div className="mt-8 space-y-5">
                {project.story.body.map((paragraph, i) => (
                  <p key={i} className="text-sm leading-relaxed text-muted sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectGallery
        images={project.gallery.images}
        defaultIndex={project.gallery.defaultIndex}
        caption={project.gallery.caption}
      />

      {/* CTA */}
      <section className="bg-panel py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-10">
          <h2 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {project.cta.heading}
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
            {project.cta.body}
          </p>
          <a
            href={project.cta.buttonHref}
            className="mt-10 inline-flex items-center gap-2 border border-accent px-8 py-3 text-xs uppercase tracking-[0.18em] text-accent transition-colors duration-300 hover:bg-accent hover:text-background"
          >
            {project.cta.buttonLabel} <span>›</span>
          </a>
        </div>
      </section>

      <RelatedProjects projects={relatedProjects} />
    </main>
  );
}
