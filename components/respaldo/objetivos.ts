// ─────────────────────────────────────────────
//  CATÁLOGO DE OBJETIVOS
//  Los proyectos guardan IDs; este archivo tiene los nombres visibles.
//  Para cambiar cómo se muestra un objetivo al usuario, edita solo aquí.
// ─────────────────────────────────────────────

export type Objetivo = {
  id: string;
  /** Texto visible en filtros y cards — lenguaje humano, no técnico */
  label: string;
  /** Descripción corta opcional para tooltips o páginas de ayuda */
  descripcion?: string;
};

export const objetivos: Objetivo[] = [
  {
    id: "oem",
    label: "Mantener estética original",
    descripcion: "Integración invisible que respeta el diseño de fábrica.",
  },
  {
    id: "hifi",
    label: "Escuchar cada detalle",
    descripcion: "Sistemas de alta fidelidad para una experiencia audiófila.",
  },
  {
    id: "potencia",
    label: "Volumen alto sin saturaciones",
    descripcion: "Etapas de potencia optimizadas para presión sonora máxima.",
  },
  {
    id: "openshow",
    label: "Open Show",
    descripcion: "Instalaciones diseñadas para competencia y exhibición.",
  },
  {
    id: "fabricacion",
    label: "Fabricación personalizada",
    descripcion: "Piezas y enclosures fabricados a medida para el vehículo.",
  },
];

// ─────────────────────────────────────────────
//  HELPERS
// ─────────────────────────────────────────────

/** Devuelve el label visible dado un ID de objetivo */
export function getObjetivoLabel(id: string): string {
  return objetivos.find((o) => o.id === id)?.label ?? id;
}

/** Devuelve el objeto Objetivo completo dado un ID */
export function getObjetivo(id: string): Objetivo | undefined {
  return objetivos.find((o) => o.id === id);
}
