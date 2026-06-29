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
    subtitle: "Ingeniería contemporánea",
    image: "/projects/mustang/cover.jpg",
  },
  {
    slug: "porsche-targa-78",
    title: "Porsche Targa 78",
    subtitle: "Alta fidelidad respetando la identidad del vehículo",
    image: "/projects/targa/cover.jpg",
  },
  {
    slug: "lamborghini-project",
    title: "Lamborghini Project",
    subtitle: "Ingenieria de alto desempeño",
    image: "/projects/lamborghini/cover.png",
  },
];
