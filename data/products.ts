// ─────────────────────────────────────────────
//  CATÁLOGOS
// ─────────────────────────────────────────────

export type ColorPrincipal = {
  id: string;
  label: string;
  hex: string; // referencia visual aproximada para el swatch
};

export type Acento = {
  id: string;
  label: string;
  hex: string;
};

export const coloresPrincipales: ColorPrincipal[] = [
  { id: "negro-mate",      label: "Negro Mate",      hex: "#1a1a1a" },
  { id: "negro-punteado",  label: "Negro Punteado",  hex: "#222222" },
  { id: "blanco-hueso",    label: "Blanco Hueso",    hex: "#f0ece4" },
  { id: "cafe",            label: "Café",             hex: "#6b4226" },
];

export const acentos: Acento[] = [
  { id: "azul",     label: "Azul",     hex: "#1e4d8c" },
  { id: "rojo",     label: "Rojo",     hex: "#b81c1c" },
  { id: "plateado", label: "Plateado", hex: "#9e9e9e" },
  { id: "negro",    label: "Negro",    hex: "#111111" },
  { id: "blanco",   label: "Blanco",   hex: "#f5f5f5" },
];

// ─────────────────────────────────────────────
//  TIPOS
// ─────────────────────────────────────────────

export type DisponibilidadEstado = "disponible" | "bajo-pedido" | "agotado";

/**
 * Una combinación específica de color principal + acento.
 * Si no existe entrada para una combinación, se considera no disponible.
 */
export type Combinacion = {
  colorPrincipalId: string;
  acentoId: string | null;       // null para productos sin acento
  disponibilidad: DisponibilidadEstado;
  /** Costo adicional sobre el precio base. 0 = sin delta. */
  precioDelta: number;
  /** Rutas relativas a /public. Vacío = imágenes pendientes. */
  imagenes: string[];
};

export type EspecificacionesItem = {
  label: string;
  valor: string | null; // null = pendiente
};

export type Especificaciones = {
  materiales:    EspecificacionesItem[];
  dimensiones:   EspecificacionesItem[];
  compatibilidad: EspecificacionesItem[];
  fabricacion:   EspecificacionesItem[];
};

export type Precio = {
  contado: number;
  meses: number;
  mesesPlazo: number; // cantidad de mensualidades
};

export type Product = {
  slug: string;
  nombre: string;
  descripcionBreve: string;
  precio: Precio;
  /** Disponibilidad base. Las combinaciones pueden sobreescribirla. */
  disponibilidad: DisponibilidadEstado;
  /** IDs de coloresPrincipales disponibles para este producto. */
  coloresPrincipalesIds: string[];
  /** IDs de acentos disponibles. Vacío = producto sin opción de acento. */
  acentosIds: string[];
  /**
   * Combinaciones definidas explícitamente.
   * Si un producto no tiene combinaciones (ej. SUB-002), este array queda vacío
   * y se usa la disponibilidad base + imagen de portada.
   */
  combinaciones: Combinacion[];
  /** Imagen de portada para cards y fallback de galería. */
  coverImage: string;
  especificaciones: Especificaciones;
  /** Tags editoriales para cards. */
  tags: string[];
};

// ─────────────────────────────────────────────
//  DATOS
// ─────────────────────────────────────────────

export const products: Product[] = [
  // ── VW-001 ────────────────────────────────
  {
    slug: "VW-001",
    nombre: "Tapapuertas VW Sedán",
    descripcionBreve:
      "Par de paneles interiores para puerta de VW Sedán 1980–1990, en diferentes combinaciones de color para una integración que combine con la estética exterior e interior del vehículo.",
    precio: {
      contado: 8000,
      meses: 9600,
      mesesPlazo: 9,
    },
    disponibilidad: "bajo-pedido",
    coloresPrincipalesIds: ["negro-mate", "negro-punteado", "blanco-hueso", "cafe"],
    acentosIds: ["azul", "rojo", "plateado", "negro", "blanco"],
    combinaciones: [
      // Las imágenes se agregarán cuando estén disponibles.
      // Se listan combinaciones representativas; expandir según producción.
      { colorPrincipalId: "negro-mate",     acentoId: "azul",     disponibilidad: "bajo-pedido", precioDelta: 0, imagenes: [] },
      { colorPrincipalId: "negro-mate",     acentoId: "rojo",     disponibilidad: "bajo-pedido", precioDelta: 0, imagenes: [] },
      { colorPrincipalId: "negro-mate",     acentoId: "plateado", disponibilidad: "bajo-pedido", precioDelta: 0, imagenes: [] },
      { colorPrincipalId: "negro-mate",     acentoId: "negro",    disponibilidad: "bajo-pedido", precioDelta: 0, imagenes: [] },
      { colorPrincipalId: "negro-mate",     acentoId: "blanco",   disponibilidad: "bajo-pedido", precioDelta: 0, imagenes: [] },
      { colorPrincipalId: "negro-punteado", acentoId: "azul",     disponibilidad: "bajo-pedido", precioDelta: 0, imagenes: [] },
      { colorPrincipalId: "negro-punteado", acentoId: "rojo",     disponibilidad: "bajo-pedido", precioDelta: 0, imagenes: [] },
      { colorPrincipalId: "negro-punteado", acentoId: "plateado", disponibilidad: "bajo-pedido", precioDelta: 0, imagenes: [] },
      { colorPrincipalId: "negro-punteado", acentoId: "negro",    disponibilidad: "bajo-pedido", precioDelta: 0, imagenes: [] },
      { colorPrincipalId: "negro-punteado", acentoId: "blanco",   disponibilidad: "bajo-pedido", precioDelta: 0, imagenes: [] },
      { colorPrincipalId: "blanco-hueso",   acentoId: "azul",     disponibilidad: "bajo-pedido", precioDelta: 0, imagenes: [] },
      { colorPrincipalId: "blanco-hueso",   acentoId: "rojo",     disponibilidad: "bajo-pedido", precioDelta: 0, imagenes: [] },
      { colorPrincipalId: "blanco-hueso",   acentoId: "plateado", disponibilidad: "bajo-pedido", precioDelta: 0, imagenes: [] },
      { colorPrincipalId: "blanco-hueso",   acentoId: "negro",    disponibilidad: "bajo-pedido", precioDelta: 0, imagenes: [] },
      { colorPrincipalId: "blanco-hueso",   acentoId: "blanco",   disponibilidad: "bajo-pedido", precioDelta: 0, imagenes: [] },
      { colorPrincipalId: "cafe",           acentoId: "azul",     disponibilidad: "bajo-pedido", precioDelta: 0, imagenes: [] },
      { colorPrincipalId: "cafe",           acentoId: "rojo",     disponibilidad: "bajo-pedido", precioDelta: 0, imagenes: [] },
      { colorPrincipalId: "cafe",           acentoId: "plateado", disponibilidad: "bajo-pedido", precioDelta: 0, imagenes: [] },
      { colorPrincipalId: "cafe",           acentoId: "negro",    disponibilidad: "bajo-pedido", precioDelta: 0, imagenes: [] },
      { colorPrincipalId: "cafe",           acentoId: "blanco",   disponibilidad: "bajo-pedido", precioDelta: 0, imagenes: [] },
    ],
    coverImage: "/atelier/tapapuertas/cover.jpeg",
    tags: ["INTERIOR", "VW SEDÁN", "BAJO PEDIDO"],
    especificaciones: {
      materiales: [
        { label: "Cuerpo principal", valor: null },
        { label: "Acabado", valor: "Vinil automotriz" },
      ],
      dimensiones: [
        { label: "Compatibilidad", valor: "VW Sedán 1980–1990" },
        { label: "Incluye", valor: "Par (izquierdo + derecho)" },
      ],
      compatibilidad: [
        { label: "Vehículo", valor: "VW Sedán (Vocho) 1980–1990" },
        { label: "Driver", valor: null },
      ],
      fabricacion: [
        { label: "Tiempo de fabricación", valor: "Bajo pedido" },
        { label: "Prueba acústica", valor: null },
      ],
    },
  },

  // ── SUB-001 ───────────────────────────────
  {
    slug: "SUB-001",
    nombre: "Subwoofer GMC Sierra",
    descripcionBreve:
      "Elegante caja acústica diseñada para integrarse de manera natural a la estética interior de tu vehículo, combinando acabados de primer nivel, uso de texturas, materiales y colores para un resultado impecable, de alta gama y distinto a cualquier otro en el mercado.",
    precio: {
      contado: 28000,
      meses: 32000,
      mesesPlazo: 9,
    },
    disponibilidad: "disponible",
    coloresPrincipalesIds: ["negro-mate", "negro-punteado", "blanco-hueso", "cafe"],
    acentosIds: ["azul", "rojo", "plateado", "negro", "blanco"],
    combinaciones: [
      // Disponibilidad varía por combinación — ajustar cuando se confirme stock real.
      { colorPrincipalId: "negro-mate",     acentoId: "azul",     disponibilidad: "disponible",  precioDelta: 0, imagenes: [] },
      { colorPrincipalId: "negro-mate",     acentoId: "rojo",     disponibilidad: "disponible",  precioDelta: 0, imagenes: [] },
      { colorPrincipalId: "negro-mate",     acentoId: "plateado", disponibilidad: "disponible",  precioDelta: 0, imagenes: [] },
      { colorPrincipalId: "negro-mate",     acentoId: "negro",    disponibilidad: "disponible",  precioDelta: 0, imagenes: [] },
      { colorPrincipalId: "negro-mate",     acentoId: "blanco",   disponibilidad: "disponible",  precioDelta: 0, imagenes: [] },
      { colorPrincipalId: "negro-punteado", acentoId: "azul",     disponibilidad: "bajo-pedido", precioDelta: 0, imagenes: [] },
      { colorPrincipalId: "negro-punteado", acentoId: "rojo",     disponibilidad: "bajo-pedido", precioDelta: 0, imagenes: [] },
      { colorPrincipalId: "negro-punteado", acentoId: "plateado", disponibilidad: "bajo-pedido", precioDelta: 0, imagenes: [] },
      { colorPrincipalId: "negro-punteado", acentoId: "negro",    disponibilidad: "bajo-pedido", precioDelta: 0, imagenes: [] },
      { colorPrincipalId: "negro-punteado", acentoId: "blanco",   disponibilidad: "bajo-pedido", precioDelta: 0, imagenes: [] },
      { colorPrincipalId: "blanco-hueso",   acentoId: "azul",     disponibilidad: "bajo-pedido", precioDelta: 0, imagenes: [] },
      { colorPrincipalId: "blanco-hueso",   acentoId: "rojo",     disponibilidad: "bajo-pedido", precioDelta: 0, imagenes: [] },
      { colorPrincipalId: "blanco-hueso",   acentoId: "plateado", disponibilidad: "bajo-pedido", precioDelta: 0, imagenes: [] },
      { colorPrincipalId: "blanco-hueso",   acentoId: "negro",    disponibilidad: "bajo-pedido", precioDelta: 0, imagenes: [] },
      { colorPrincipalId: "blanco-hueso",   acentoId: "blanco",   disponibilidad: "bajo-pedido", precioDelta: 0, imagenes: [] },
      { colorPrincipalId: "cafe",           acentoId: "azul",     disponibilidad: "bajo-pedido", precioDelta: 0, imagenes: [] },
      { colorPrincipalId: "cafe",           acentoId: "rojo",     disponibilidad: "bajo-pedido", precioDelta: 0, imagenes: [] },
      { colorPrincipalId: "cafe",           acentoId: "plateado", disponibilidad: "bajo-pedido", precioDelta: 0, imagenes: [] },
      { colorPrincipalId: "cafe",           acentoId: "negro",    disponibilidad: "bajo-pedido", precioDelta: 0, imagenes: [] },
      { colorPrincipalId: "cafe",           acentoId: "blanco",   disponibilidad: "bajo-pedido", precioDelta: 0, imagenes: [] },
    ],
    coverImage: "/atelier/cajonpickup/cover.png",
    tags: ["SUBWOOFER", "GMC SIERRA", "PICKUP"],
    especificaciones: {
      materiales: [
        { label: "Cuerpo principal", valor: null },
        { label: "Acabado", valor: null },
      ],
      dimensiones: [
        { label: "Medidas externas", valor: null },
        { label: "Driver compatible", valor: null },
      ],
      compatibilidad: [
        { label: "Vehículo", valor: "GMC Sierra" },
        { label: "Generación", valor: null },
      ],
      fabricacion: [
        { label: "Tiempo de fabricación", valor: "Inmediato (stock) / 10 días bajo pedido" },
        { label: "Prueba acústica", valor: null },
      ],
    },
  },

  // ── SUB-002 ───────────────────────────────
  {
    slug: "SUB-002",
    nombre: 'Subwoofer 8"',
    descripcionBreve:
      'Caja acústica sencilla para subwoofer de 8", acabado en vinil automotriz.',
    precio: {
      contado: 4500,
      meses: 5000,
      mesesPlazo: 9,
    },
    disponibilidad: "disponible",
    coloresPrincipalesIds: ["negro-mate"],
    acentosIds: [],
    combinaciones: [],
    coverImage: "/atelier/cajon10/cover.png",
    tags: ['SUBWOOFER 8"', "VINIL AUTOMOTRIZ"],
    especificaciones: {
      materiales: [
        { label: "Cuerpo principal", valor: null },
        { label: "Acabado", valor: "Vinil automotriz" },
      ],
      dimensiones: [
        { label: "Driver compatible", valor: '8"' },
        { label: "Medidas externas", valor: null },
      ],
      compatibilidad: [
        { label: "Aplicación", valor: "Universal" },
        { label: "Profundidad de montaje", valor: null },
      ],
      fabricacion: [
        { label: "Disponibilidad", valor: "En stock" },
        { label: "Prueba acústica", valor: null },
      ],
    },
  },

  // ── SUB-003 ───────────────────────────────
  {
    slug: "SUB-003",
    nombre: 'Subwoofer 10"',
    descripcionBreve:
      'Caja acústica sencilla para subwoofer de 10", acabado en vinil automotriz.',
    precio: {
      contado: 5500,
      meses: 6000,
      mesesPlazo: 9,
    },
    disponibilidad: "disponible",
    coloresPrincipalesIds: ["negro-mate"],
    acentosIds: [],
    combinaciones: [],
    coverImage: "/atelier/cajon10/cover.png",
    tags: ['SUBWOOFER 10"', "VINIL AUTOMOTRIZ"],
    especificaciones: {
      materiales: [
        { label: "Cuerpo principal", valor: null },
        { label: "Acabado", valor: "Vinil automotriz" },
      ],
      dimensiones: [
        { label: "Driver compatible", valor: '10"' },
        { label: "Medidas externas", valor: null },
      ],
      compatibilidad: [
        { label: "Aplicación", valor: "Universal" },
        { label: "Profundidad de montaje", valor: null },
      ],
      fabricacion: [
        { label: "Disponibilidad", valor: "En stock" },
        { label: "Prueba acústica", valor: null },
      ],
    },
  },
];

// ─────────────────────────────────────────────
//  HELPERS
// ─────────────────────────────────────────────

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}

export function getAllProducts(): Product[] {
  return products;
}

/** Busca una combinación específica dentro de un producto. */
export function getCombinacion(
  product: Product,
  colorPrincipalId: string,
  acentoId: string | null
): Combinacion | undefined {
  return product.combinaciones.find(
    (c) => c.colorPrincipalId === colorPrincipalId && c.acentoId === acentoId
  );
}

/**
 * Resuelve la disponibilidad efectiva para una selección dada.
 * Si hay combinación definida, usa la suya; si no, usa la del producto.
 */
export function getDisponibilidad(
  product: Product,
  colorPrincipalId: string,
  acentoId: string | null
): DisponibilidadEstado {
  const combo = getCombinacion(product, colorPrincipalId, acentoId);
  return combo?.disponibilidad ?? product.disponibilidad;
}

/**
 * Resuelve el precio final para una selección dada (contado + delta).
 */
export function getPrecioFinal(product: Product, colorPrincipalId: string, acentoId: string | null) {
  const combo = getCombinacion(product, colorPrincipalId, acentoId);
  const delta = combo?.precioDelta ?? 0;
  return {
    contado: product.precio.contado + delta,
    meses: product.precio.meses + delta,
    mesesPlazo: product.precio.mesesPlazo,
  };
}

/** Etiqueta legible del estado de disponibilidad. */
export const disponibilidadLabel: Record<DisponibilidadEstado, string> = {
  disponible:   "En stock",
  "bajo-pedido": "Bajo pedido",
  agotado:      "Agotado",
};

/** Helpers del catálogo */
export function getColorPrincipal(id: string): ColorPrincipal | undefined {
  return coloresPrincipales.find((c) => c.id === id);
}

export function getAcento(id: string): Acento | undefined {
  return acentos.find((a) => a.id === id);
}
