"use client";

import PortfolioHero from "../../components/portfolio/PortfolioHero";
import ProjectSearch from "../../components/portfolio/ProjectSearch";
import ProjectFilters from "../../components/portfolio/ProjectFilters";
import PortfolioGrid from "../../components/portfolio/PortfolioGrid";
import EmptyResults from "../../components/portfolio/EmptyResults";
import { usePortfolioFilter } from "../../hooks/usePortfolioFilter";

export default function PortfolioPage() {
  const {
    filters,
    result,
    hasActiveFilters,
    setQuery,
    setMarca,
    setModelo,
    setObjetivo,
    clearFilters,
  } = usePortfolioFilter();

  return (
    <>
      <PortfolioHero />

      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-10">
        <div className="mb-6">
          <ProjectSearch value={filters.query} onChange={setQuery} />
        </div>

        <div className="mb-10">
          <ProjectFilters
            marca={filters.marca}
            modelo={filters.modelo}
            objetivo={filters.objetivo}
            onMarca={setMarca}
            onModelo={setModelo}
            onObjetivo={setObjetivo}
          />
        </div>

        {hasActiveFilters && result.type !== "exact" && (
          <EmptyResults
            type={result.type}
            message={result.message}
            onClear={clearFilters}
          />
        )}

        <PortfolioGrid projects={result.items} />
      </section>
    </>
  );
}