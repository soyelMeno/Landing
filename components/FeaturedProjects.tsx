import Link from "next/link";
import Section from "./Section";
import ProjectCard from "./ProjectCard";
import { featuredProjects } from "../data/projects";

export default function FeaturedProjects() {
  return (
    <Section
      eyebrow="Proyectos"
      title="Proyectos destacados"
      action={
        <Link
          href="/portfolio"
          className="text-xs uppercase tracking-[0.14em] text-neutral-500 transition-colors hover:text-foreground hover:text-[#111111]"
        >
          Explorar Proyectos →
        </Link>
      }
    >
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            image={project.image}
            title={project.title}
            subtitle={project.subtitle}
          />
        ))}
      </div>
    </Section>
  );
}
