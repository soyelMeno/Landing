export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
};

export const featuredProjects: Project[] = [
  {
    slug: "mustang-86",
    title: "Mustang 86",
    subtitle: "Ingeniería de audio",
    image: "/projects/mustang/cover.jpg",
  },
  {
    slug: "porsche-targa-78",
    title: "Porsche Targa 78",
    subtitle: "Alta fidelidad OEM",
    image: "/projects/targa/cover.jpg",
  },
  {
    slug: "lamborghini-project",
    title: "Lamborghini Project",
    subtitle: "Integración contemporánea",
    image: "/projects/lamborghini/cover.png",
  },
];
