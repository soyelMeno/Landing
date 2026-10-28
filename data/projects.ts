// ─────────────────────────────────────────────
//  TYPES
// ─────────────────────────────────────────────

export type GalleryImage = {
  src: string;
  alt: string;
  label: string;
  description: string;
};

export type Vehiculo = {
  marca: string;
  modelo: string;
  version?: string;
  anio: number;
};

export type Project = {
  // ── Identificador ─────────────────────────────
  slug: string;

  // ── Datos del vehículo ─────────────────────────
  vehiculo: Vehiculo;

  // ── Objetivos (IDs del catálogo data/objetivos.ts) ─
  objetivos: string[];

  // ── Descripción corta para cards de portfolio ──
  descripcion: string;

  // ── Editorial ─────────────────────────────────
  destacado: boolean;

  // ── Hero ──────────────────────────────────────
  coverImage: string;
  tags: string[];
  title: string;
  subtitle: string;

  // ── Story / El Desafío ─────────────────────────
  story: {
    eyebrow: string;
    heading: string;
    body: string[];
  };

  // ── Galería interactiva ───────────────────────
  gallery: {
    defaultIndex: number;
    caption: string;
    images: GalleryImage[];
  };

  // ── CTA interno ───────────────────────────────
  cta: {
    heading: string;
    body: string;
    buttonLabel: string;
    buttonHref: string;
  };

  // ── Proyectos relacionados ─────────────────────
  related: [string, string];
};

// ─────────────────────────────────────────────
//  DATOS
// ─────────────────────────────────────────────

export const projects: Project[] = [
  {
    slug: "mustang-86",
    vehiculo: { marca: "Ford", modelo: "Mustang", anio: 1986 },
    objetivos: ["oem", "fabricacion"],
    descripcion: "Restauración e integración respetando la identidad original del vehículo, optimizando la acústica en un entorno clásico.",
    destacado: true,
    coverImage: "/projects/mustang/cover2.jpg",
    tags: ["CLÁSICO", "OEM+", "INTEGRACIÓN"],
    title: "Mustang 86",
    subtitle: "Integración y restauración",
    story: {
      eyebrow: "EL DESAFÍO",
      heading: "Restaurar la identidad de un ícono mediante la ingeniería de precisión.",
      body: [
        "El proyecto Mustang 86 comenzó con un objetivo claro: revertir décadas de modificaciones no originales que habían diluido la esencia del vehículo. El desafío técnico radicaba en la sustitución de paneles de fibra de vidrio por componentes metálicos fabricados a medida, respetando las tolerancias OEM del fabricante.",
        "Paralelamente, se diseñó un sistema de audio de alta fidelidad completamente integrado. No se trataba solo de sonido, sino de una arquitectura acústica que desaparece en el interior, utilizando materiales que replican el cuero y el acero originales, logrando una simbiosis perfecta entre rendimiento técnico y estética clásica.",
      ],
    },
    gallery: {
      defaultIndex: 0,
      caption: "✦ DETALLE TÉCNICO 01/04",
      images: [
        { src: "/projects/mustang/gallery-01.jpg", alt: "Panel de puerta personalizado del Mustang 86", label: "PANELES PERSONALIZADOS", description: "Ingeniería CAD 3D" },
        { src: "/projects/mustang/gallery-02.jpg", alt: "Materiales y acabados del interior", label: "MATERIALES Y ACABADOS", description: "Estética Aeronáutica" },
        { src: "/projects/mustang/gallery-03.jpg", alt: "Proceso de fabricación artesanal", label: "PROCESO DE FABRICACIÓN", description: "Mano de Obra Artesanal" },
        { src: "/projects/mustang/gallery-04.jpg", alt: "Resultado final del proyecto Mustang 86", label: "RESULTADO FINAL", description: "Perfección OEM+" },
      ],
    },
    cta: {
      heading: "¿Tu proyecto comparte esta filosofía?",
      body: "Cuéntanos qué vehículo tienes y qué deseas lograr. Nuestro equipo de ingeniería evaluará la viabilidad de una integración técnica superior.",
      buttonLabel: "Iniciar diagnóstico",
      buttonHref: "/contact",
    },
    related: ["porsche-targa-78", "lamborghini-huracan"],
  },

  {
    slug: "porsche-targa-78",
    vehiculo: { marca: "Porsche", modelo: "911 Targa", anio: 1978 },
    objetivos: ["oem", "hifi"],
    descripcion: "Sistema de alta fidelidad e integración OEM diseñado para ofrecer una experiencia acústica pura en un ícono del automovilismo.",
    destacado: true,
    coverImage: "/projects/targa/cover.jpg",
    tags: ["CLÁSICO", "BESPOKE", "RESTAURACIÓN"],
    title: "Porsche Targa 78",
    subtitle: "Audio de interiores a medida",
    story: {
      eyebrow: "EL DESAFÍO",
      heading: "Preservar la pureza de un Porsche clásico mientras se eleva su experiencia sonora.",
      body: [
        "El Targa 78 llegó al taller con una petición inusual: intervenir el sistema de audio sin alterar ni un milímetro la silueta visual del habitáculo original. Cada componente debía ocultarse dentro de los paneles existentes o fabricarse de nuevo respetando los radios y materiales de época.",
        "El resultado es un sistema de dos vías completamente invisible que aprovecha la geometría única del Targa como caja de resonancia, complementado con una etapa de amplificación oculta bajo el asiento del conductor.",
      ],
    },
    gallery: {
      defaultIndex: 0,
      caption: "✦ DETALLE TÉCNICO 01/04",
      images: [
        { src: "/projects/targa/gallery-01.jpg", alt: "Interior original del Porsche Targa 78", label: "INTERIOR ORIGINAL", description: "Preservación absoluta" },
        { src: "/projects/targa/gallery-02.jpg", alt: "Componentes de audio integrados", label: "INTEGRACIÓN INVISIBLE", description: "Tweeter flush-mount" },
        { src: "/projects/targa/gallery-03.jpg", alt: "Panel trasero con amplificador", label: "ETAPA DE POTENCIA", description: "Oculta bajo asiento" },
        { src: "/projects/targa/gallery-04.jpg", alt: "Vista exterior del Porsche Targa terminado", label: "RESULTADO FINAL", description: "Sin rastro de intervención" },
      ],
    },
    cta: {
      heading: "¿Tu proyecto comparte esta filosofía?",
      body: "Cuéntanos qué vehículo tienes y qué deseas lograr. Nuestro equipo de ingeniería evaluará la viabilidad de una integración técnica superior.",
      buttonLabel: "Iniciar diagnóstico",
      buttonHref: "/contact",
    },
    related: ["mustang-86", "lamborghini-huracan"],
  },

  {
    slug: "lamborghini-huracan",
    vehiculo: { marca: "Lamborghini", modelo: "Huracán", anio: 2019 },
    objetivos: ["potencia", "hifi"],
    descripcion: "Integración y diseño para un vehículo de altas prestaciones, donde cada componente debe resistir las exigencias de un V10 a máxima potencia.",
    destacado: true,
    coverImage: "/projects/lamborghini/cover.png",
    tags: ["SUPERCAR", "HIGH OUTPUT", "INTEGRACIÓN"],
    title: "Lamborghini Huracán",
    subtitle: "Sistema de alta potencia",
    story: {
      eyebrow: "EL DESAFÍO",
      heading: "Llevar el audio de un supercar al mismo nivel que su ingeniería mecánica.",
      body: [
        "El Huracán llega de fábrica con un sistema de audio que no está a la altura de su precio ni de su propuesta de valor. El reto: instalar un sistema capaz de reproducirse con claridad a 200 km/h, compensando el ruido de cabina propio de un V10 atmosférico sin caja de resonancia.",
        "Se implementó un sistema de 3 vías, logrando integrar un subwoofer de 10.",
      ],
    },
    gallery: {
      defaultIndex: 0,
      caption: "✦ DETALLE TÉCNICO 01/04",
      images: [
        { src: "/projects/lamborghini/gallery-01.jpg", alt: "Habitáculo del Lamborghini Huracán", label: "HABITÁCULO", description: "Análisis acústico previo" },
        { src: "/projects/lamborghini/gallery-02.jpg", alt: "Instalación del DSP", label: "DSP AVANZADO", description: "EQ dinámico por RPM" },
        { src: "/projects/lamborghini/gallery-03.jpg", alt: "Subwoofer integrado en frunk", label: "SUBWOOFER EN FRUNK", description: "Enclosure a medida" },
        { src: "/projects/lamborghini/gallery-04.jpg", alt: "Resultado final del sistema", label: "SISTEMA COMPLETO", description: "200 km/h de claridad" },
      ],
    },
    cta: {
      heading: "¿Tu proyecto comparte esta filosofía?",
      body: "Cuéntanos qué vehículo tienes y qué deseas lograr. Nuestro equipo de ingeniería evaluará la viabilidad de una integración técnica superior.",
      buttonLabel: "Iniciar diagnóstico",
      buttonHref: "/contact",
    },
    related: ["mustang-86", "porsche-targa-78"],
  },
];

// ─────────────────────────────────────────────
//  HELPERS
// ─────────────────────────────────────────────

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export function getProjectCard(slug: string) {
  const p = getProjectBySlug(slug);
  if (!p) return null;
  return {
    slug: p.slug,
    title: p.title,
    coverImage: p.coverImage,
    tags: p.tags,
    subtitle: p.subtitle,
  };
}

export function getMarcas(): string[] {
  return [...new Set(projects.map((p) => p.vehiculo.marca))].sort();
}

export function getModelosByMarca(marca: string): string[] {
  return [
    ...new Set(
      projects
        .filter((p) => p.vehiculo.marca === marca)
        .map((p) => p.vehiculo.modelo)
    ),
  ].sort();
}

export function getDestacados(): Project[] {
  return projects.filter((p) => p.destacado);
}

export function getAllProjects(): Project[] {
  return projects;
}

export function getObjetivosUsados(): string[] {
  return [...new Set(projects.flatMap((p) => p.objetivos))];
}

export const featuredProjects = ["mustang-86", "porsche-targa-78", "lamborghini-huracan"]
  .map(getProjectCard)
  .filter((p): p is NonNullable<ReturnType<typeof getProjectCard>> => p !== null);
