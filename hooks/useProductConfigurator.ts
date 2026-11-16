"use client";

import { useState, useMemo } from "react";
import {
  type Product,
  getCombinacion,
  getDisponibilidad,
  getPrecioFinal,
} from "../data/products";

export function useProductConfigurator(product: Product) {
  // Selección inicial: primer color disponible
  const [selectedColorId, setSelectedColorId] = useState<string>(
    product.coloresPrincipalesIds[0] ?? ""
  );

  // Selección inicial: primer acento disponible (o null si no hay)
  const [selectedAcentoId, setSelectedAcentoId] = useState<string | null>(
    product.acentosIds[0] ?? null
  );

  // Al cambiar color principal, mantener el acento si sigue disponible
  function handleColorChange(colorId: string) {
    setSelectedColorId(colorId);
  }

  function handleAcentoChange(acentoId: string | null) {
    setSelectedAcentoId(acentoId);
  }

  // Combinación activa (puede ser undefined si no hay combinaciones definidas)
  const combinacionActiva = useMemo(
    () =>
      product.combinaciones.length > 0
        ? getCombinacion(product, selectedColorId, selectedAcentoId)
        : undefined,
    [product, selectedColorId, selectedAcentoId]
  );

  // Imágenes resueltas: de la combinación si existen, o portada como fallback
  const imagenes = useMemo<string[]>(() => {
    if (combinacionActiva && combinacionActiva.imagenes.length > 0) {
      return combinacionActiva.imagenes;
    }
    return [product.coverImage];
  }, [combinacionActiva, product.coverImage]);

  // Precio y disponibilidad resueltos
  const precioFinal = useMemo(
    () => getPrecioFinal(product, selectedColorId, selectedAcentoId),
    [product, selectedColorId, selectedAcentoId]
  );

  const disponibilidad = useMemo(
    () => getDisponibilidad(product, selectedColorId, selectedAcentoId),
    [product, selectedColorId, selectedAcentoId]
  );

  const tieneOpciones =
    product.coloresPrincipalesIds.length > 0 || product.acentosIds.length > 0;

  return {
    selectedColorId,
    selectedAcentoId,
    handleColorChange,
    handleAcentoChange,
    imagenes,
    precioFinal,
    disponibilidad,
    tieneOpciones,
    combinacionActiva,
  };
}
