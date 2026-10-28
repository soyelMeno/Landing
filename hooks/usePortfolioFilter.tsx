"use client";

import { useState, useMemo } from "react";
import { projects, getDestacados, type Project } from "../data/projects";

export type FilterState = {
  query: string;
  marca: string;
  modelo: string;
  objetivo: string;
};

export type FilterResult =
  | { type: "exact";    items: Project[] }
  | { type: "partial";  items: Project[]; message: string }
  | { type: "fallback"; items: Project[]; message: string };

function normalize(str: string): string {
  return str.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

function matchesQuery(p: Project, q: string): boolean {
  if (!q) return true;
  const n = normalize(q);
  const searchable = normalize(
    [p.title, p.vehiculo.marca, p.vehiculo.modelo, p.descripcion, ...p.tags, ...p.objetivos].join(" ")
  );
  return searchable.includes(n);
}

function matchesMarca(p: Project, marca: string): boolean {
  return !marca || p.vehiculo.marca === marca;
}

function matchesModelo(p: Project, modelo: string): boolean {
  return !modelo || p.vehiculo.modelo === modelo;
}

function matchesObjetivo(p: Project, objetivo: string): boolean {
  return !objetivo || p.objetivos.includes(objetivo);
}

function buildMessage(marca: string, modelo: string, objetivo: string): string {
  const vehiculo = [marca, modelo].filter(Boolean).join(" ");
  if (vehiculo && objetivo) return `No encontramos un ${vehiculo} con ese objetivo.`;
  if (vehiculo) return `No encontramos proyectos para ${vehiculo}.`;
  if (objetivo) return `No encontramos proyectos con ese objetivo exacto.`;
  return "No encontramos coincidencias con esa búsqueda.";
}

function resolveResults(query: string, marca: string, modelo: string, objetivo: string): FilterResult {
  const hasFilters = !!(query || marca || modelo || objetivo);
  if (!hasFilters) return { type: "exact", items: projects };

  const exact = projects.filter(
    (p) => matchesQuery(p, query) && matchesMarca(p, marca) && matchesModelo(p, modelo) && matchesObjetivo(p, objetivo)
  );
  if (exact.length > 0) return { type: "exact", items: exact };

  if (modelo) {
    const sinModelo = projects.filter(
      (p) => matchesQuery(p, query) && matchesMarca(p, marca) && matchesObjetivo(p, objetivo)
    );
    if (sinModelo.length > 0) return { type: "partial", items: sinModelo, message: buildMessage(marca, modelo, objetivo) };
  }

  if (marca || modelo) {
    const sinMarca = projects.filter((p) => matchesQuery(p, query) && matchesObjetivo(p, objetivo));
    if (sinMarca.length > 0) return { type: "partial", items: sinMarca, message: buildMessage(marca, modelo, objetivo) };
  }

  if (objetivo) {
    const sinObjetivo = projects.filter(
      (p) => matchesQuery(p, query) && matchesMarca(p, marca) && matchesModelo(p, modelo)
    );
    if (sinObjetivo.length > 0) return { type: "partial", items: sinObjetivo, message: buildMessage(marca, modelo, objetivo) };
  }

  if (query && (marca || modelo || objetivo)) {
    const soloQuery = projects.filter((p) => matchesQuery(p, query));
    if (soloQuery.length > 0) return { type: "partial", items: soloQuery, message: buildMessage(marca, modelo, objetivo) };
  }

  return { type: "fallback", items: getDestacados(), message: buildMessage(marca, modelo, objetivo) };
}

export function usePortfolioFilter() {
  const [filters, setFilters] = useState<FilterState>({ query: "", marca: "", modelo: "", objetivo: "" });

  const result = useMemo(
    () => resolveResults(filters.query, filters.marca, filters.modelo, filters.objetivo),
    [filters]
  );

  function setQuery(query: string) { setFilters((f) => ({ ...f, query })); }
  function setMarca(marca: string) { setFilters((f) => ({ ...f, marca, modelo: "" })); }
  function setModelo(modelo: string) { setFilters((f) => ({ ...f, modelo })); }
  function setObjetivo(objetivo: string) { setFilters((f) => ({ ...f, objetivo })); }
  function clearFilters() { setFilters({ query: "", marca: "", modelo: "", objetivo: "" }); }

  const hasActiveFilters = !!(filters.query || filters.marca || filters.modelo || filters.objetivo);

  return { filters, result, hasActiveFilters, setQuery, setMarca, setModelo, setObjetivo, clearFilters };
}