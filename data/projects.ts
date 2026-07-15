// ─────────────────────────────────────────────
//  TYPES
// ─────────────────────────────────────────────

export type GalleryImage = {
  /** Ruta de la imagen (en public/) */
  src: string;
  /** Texto alternativo / accesibilidad */
  alt: string;
  /** Etiqueta visible debajo de la miniatura  ej. "PANELES PERSONALIZADOS" */
  label: string;
  /** Descripción corta visible en la vista principal  ej. "Ingeniería CAD 3D" */
  description: string;
};

export type Project = {
  // ── Identificador ─────────────────────────────
  slug: string;

  // ── Hero ──────────────────────────────────────
  /** Imagen principal del hero (full-bleed) */
  coverImage: string;
  /** Ej. ["CLÁSICO", "OEM+", "INTEGRACIÓN"] */
  tags: string[];
  title: string;
  subtitle: string;

  // ── Story / El Desafío ─────────────────────────
  story: {
    eyebrow: string;              // ej. "EL DESAFÍO"
    heading: string;              // titular grande
    /** Cada string es un párrafo independiente */
    body: string[];
  };

  // ── Galería interactiva ───────────────────────
  gallery: {
    /** Imagen que se muestra grande al cargar (índice 0 = primera miniatura) */
    defaultIndex: number;
    /** Caption superpuesto sobre la imagen activa  ej. "✦ DETALLE TÉCNICO 04/04" */
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
  /** Slugs de otros proyectos (máx 2) */
  related: [string, string];
};

// ─────────────────────────────────────────────
//  DATOS
// ─────────────────────────────────────────────

export const projects: Project[] = [
  {
    slug: "mustang-86",

    // Hero
    coverImage: "/projects/mustang/cover.jpeg",
    tags: ["CLÁSICO", "OEM+", "INTEGRACIÓN"],
    title: "Mustang 86",
    subtitle: "Integración y restauración",

    // Story
    story: {
      eyebrow: "EL DESAFÍO",
      heading:
        "Restaurar la identidad de un ícono mediante la ingeniería de precisión.",
      body: [
        "El proyecto Mustang 86 comenzó con un objetivo claro: revertir décadas de modificaciones no originales que habían diluido la esencia del vehículo. El desafío técnico radicaba en la sustitución de paneles de fibra de vidrio por componentes metálicos fabricados a medida, respetando las tolerancias OEM del fabricante.",
        "Paralelamente, se diseñó un sistema de audio de alta fidelidad completamente integrado. No se trataba solo de sonido, sino de una arquitectura acústica que desaparece en el interior, utilizando materiales que replican el cuero y el acero originales, logrando una simbiosis perfecta entre rendimiento técnico y estética clásica.",
      ],
    },

    // Galería
    gallery: {
      defaultIndex: 0,
      caption: "✦ DETALLE TÉCNICO 01/04",
      images: [
        {
          src: "/projects/mustang/gallery-01.jpg",
          alt: "Panel de puerta personalizado del Mustang 86",
          label: "PANELES PERSONALIZADOS",
          description: "Ingeniería CAD 3D",
        },
        {
          src: "/projects/mustang/gallery-02.jpg",
          alt: "Materiales y acabados del interior",
          label: "MATERIALES Y ACABADOS",
          description: "Estética Aeronáutica",
        },
        {
          src: "/projects/mustang/gallery-03.jpg",
          alt: "Proceso de fabricación artesanal",
          label: "PROCESO DE FABRICACIÓN",
          description: "Mano de Obra Artesanal",
        },
        {
          src: "/projects/mustang/gallery-04.jpg",
          alt: "Resultado final del proyecto Mustang 86",
          label: "RESULTADO FINAL",
          description: "Perfección OEM+",
        },
      ],
    },

    // CTA
    cta: {
      heading: "¿Tu proyecto comparte esta filosofía?",
      body: "Cuéntanos qué vehículo tienes y qué deseas lograr. Nuestro equipo de ingeniería evaluará la viabilidad de una integración técnica superior.",
      buttonLabel: "Iniciar diagnóstico",
      buttonHref: "/contact",
    },

    // Relacionados
    related: ["porsche-targa-78", "lamborghini-huracan"],
  },

  {
    slug: "porsche-targa-78",

    coverImage: "/projects/targa/cover.jpg",
    tags: ["CLÁSICO", "BESPOKE", "RESTAURACIÓN"],
    title: "Porsche Targa 78",
    subtitle: "Audio de interiores a medida",

    story: {
      eyebrow: "EL DESAFÍO",
      heading:
        "Preservar la pureza de un Porsche clásico mientras se eleva su experiencia sonora.",
      body: [
        "El Targa 78 llegó al taller con una petición inusual: intervenir el sistema de audio sin alterar ni un milímetro la silueta visual del habitáculo original. Cada componente debía ocultarse dentro de los paneles existentes o fabricarse de nuevo respetando los radios y materiales de época.",
        "El resultado es un sistema de dos vías completamente invisible que aprovecha la geometría única del Targa como caja de resonancia, complementado con una etapa de amplificación oculta bajo el asiento del conductor.",
      ],
    },

    gallery: {
      defaultIndex: 0,
      caption: "✦ DETALLE TÉCNICO 01/04",
      images: [
        {
          src: "/projects/targa/gallery-01.jpg",
          alt: "Interior original del Porsche Targa 78",
          label: "INTERIOR ORIGINAL",
          description: "Preservación absoluta",
        },
        {
          src: "/projects/targa/gallery-02.jpg",
          alt: "Componentes de audio integrados",
          label: "INTEGRACIÓN INVISIBLE",
          description: "Tweeter flush-mount",
        },
        {
          src: "/projects/targa/gallery-03.jpg",
          alt: "Panel trasero con amplificador",
          label: "ETAPA DE POTENCIA",
          description: "Oculta bajo asiento",
        },
        {
          src: "/projects/targa/gallery-04.jpg",
          alt: "Vista exterior del Porsche Targa terminado",
          label: "RESULTADO FINAL",
          description: "Sin rastro de intervención",
        },
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

    coverImage: "/projects/lamborghini/cover.png",
    tags: ["SUPERCAR", "HIGH OUTPUT", "INTEGRACIÓN"],
    title: "Lamborghini Huracán",
    subtitle: "Sistema de alta potencia",

    story: {
      eyebrow: "EL DESAFÍO",
      heading:
        "Llevar el audio de un supercar al mismo nivel que su ingeniería mecánica.",
      body: [
        "El Huracán llega de fábrica con un sistema de audio que no está a la altura de su precio ni de su propuesta de valor. El reto: instalar un sistema capaz de reproducirse con claridad a 200 km/h, compensando el ruido de cabina propio de un V10 atmosférico sin caja de resonancia.",
        "Se implementó un sistema de 3 vías, logrando integrar un subwoofer de 10.",
      ],
    },

    gallery: {
      defaultIndex: 0,
      caption: "✦ DETALLE TÉCNICO 01/04",
      images: [
        {
          src: "/projects/lamborghini/gallery-01.jpg",
          alt: "Habitáculo del Lamborghini Huracán",
          label: "HABITÁCULO",
          description: "Análisis acústico previo",
        },
        {
          src: "/projects/lamborghini/gallery-02.jpg",
          alt: "Instalación del DSP",
          label: "DSP AVANZADO",
          description: "EQ dinámico por RPM",
        },
        {
          src: "/projects/lamborghini/gallery-03.jpg",
          alt: "Subwoofer integrado en frunk",
          label: "SUBWOOFER EN FRUNK",
          description: "Enclosure a medida",
        },
        {
          src: "/projects/lamborghini/gallery-04.jpg",
          alt: "Resultado final del sistema",
          label: "SISTEMA COMPLETO",
          description: "200 km/h de claridad",
        },
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

/** Devuelve un proyecto por slug, o undefined si no existe */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Devuelve los slugs de todos los proyectos (para generateStaticParams) */
export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}

/** Devuelve los datos mínimos de un proyecto para una card de "relacionados" */
export function getProjectCard(slug: string) {
  const p = getProjectBySlug(slug);
  if (!p) return null;
  return {
    slug: p.slug,
    title: p.title,
    coverImage: p.coverImage,
    tags: p.tags,
    subtitle: p.subtitle
  };
}

export const featuredProjects = ["mustang-86", "porsche-targa-78", "lamborghini-huracan"]
  .map(getProjectCard)
  .filter((p): p is NonNullable<ReturnType<typeof getProjectCard>> => p !== null);