import Image, { StaticImageData } from "next/image";

type ProjectCardProps = {
  image: StaticImageData | string;
  title: string;
  subtitle: string;
};

export default function ProjectCard({ image, title, subtitle }: ProjectCardProps) {
  return (
    <article className="group cursor-pointer">
      <div className="relative aspect-[5/4] overflow-hidden bg-neutral-200">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      <h3 className="mt-4 text-sm font-medium tracking-tight">{title}</h3>
      <p className="mt-1 text-xs uppercase tracking-[0.1em] text-neutral-400">
        {subtitle}
      </p>
    </article>
  );
}
