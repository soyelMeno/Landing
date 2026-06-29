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
    subtitle: "Full system re-engineering",
    image: "/projects/mustang/cover.jpg",
  },
  {
    slug: "porsche-targa-78",
    title: "Porsche Targa 78",
    subtitle: "Bespoke interior audio",
    image: "/projects/targa/cover.jpg",
  },
  {
    slug: "lamborghini-project",
    title: "Lamborghini Project",
    subtitle: "High-output integration",
    image: "/projects/lamborghini/cover.png",
  },
];
