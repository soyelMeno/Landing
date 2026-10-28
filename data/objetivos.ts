export type Objetivo = {
  id: string;
  label: string;
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

export function getObjetivoLabel(id: string): string {
  return objetivos.find((o) => o.id === id)?.label ?? id;
}

export function getObjetivo(id: string): Objetivo | undefined {
  return objetivos.find((o) => o.id === id);
}