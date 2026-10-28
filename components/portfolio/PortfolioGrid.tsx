"use client";

import Link from "next/link";
import Image from "next/image";
import type { Project } from "../../data/projects";

function ProjectCard({ project: p }: { project: Project }) {
  return (
    <Link href={`/portfolio/${p.slug}`} className="group relative block overflow-hidden rounded-2xl bg-[var(--panel)]">
      <div className="relative aspect-[5/4] w-full overflow-hidden">
        <Image
          src={p.coverImage}
          alt={p.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 790px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-1.5">
          {p.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="rounded-full bg-black/60 px-3 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-5">
        <p className="text-xs uppercase tracking-widest text-[var(--accent)]">
          {p.vehiculo.marca} · {p.vehiculo.anio}
        </p>
        <h3 className="mt-1 text-base font-semibold text-foreground group-hover:text-[var(--accent)] transition-colors">
          {p.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted">{p.descripcion}</p>
        <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-[var(--accent)]">
          <span>Ver proyecto</span>
          <svg className="transition-transform group-hover:translate-x-1" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default function PortfolioGrid({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;
  return (
    <div className="grid grid-cols-1 gap-6 min-[790px]:grid-cols-2 xl:grid-cols-3">
      {projects.map((p, i) => (
        <div key={p.slug} className={i === 0 ? "min-[790px]:col-span-2 xl:col-span-1" : ""}>
          <ProjectCard project={p} />
        </div>
      ))}
    </div>
  );
}