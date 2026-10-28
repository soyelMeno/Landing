"use client";

import { getMarcas, getModelosByMarca } from "../../data/projects";
import { objetivos } from "../../data/objetivos";

interface Props {
  marca: string;
  modelo: string;
  objetivo: string;
  onMarca: (v: string) => void;
  onModelo: (v: string) => void;
  onObjetivo: (v: string) => void;
}

function Chip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "whitespace-nowrap rounded-full border px-4 py-1.5 text-xs font-medium transition-colors",
        active
          ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]"
          : "border-[var(--line)] bg-transparent text-muted hover:border-foreground/30 hover:text-foreground",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

export default function ProjectFilters({ marca, modelo, objetivo, onMarca, onModelo, onObjetivo }: Props) {
  const marcas = getMarcas();
  const modelos = marca ? getModelosByMarca(marca) : [];

  return (
    <div className="space-y-4">
      <div>
        <p className="mb-2 text-xs uppercase tracking-widest text-muted">Marca</p>
        <div className="flex flex-wrap gap-2">
          {marcas.map((m) => (
            <Chip key={m} label={m} active={marca === m} onClick={() => onMarca(marca === m ? "" : m)} />
          ))}
        </div>
      </div>

      {marca && modelos.length > 0 && (
        <div>
          <p className="mb-2 text-xs uppercase tracking-widest text-muted">Modelo</p>
          <div className="flex flex-wrap gap-2">
            {modelos.map((m) => (
              <Chip key={m} label={m} active={modelo === m} onClick={() => onModelo(modelo === m ? "" : m)} />
            ))}
          </div>
        </div>
      )}

      <div>
        <p className="mb-2 text-xs uppercase tracking-widest text-muted">¿Qué buscas lograr?</p>
        <div className="flex flex-wrap gap-2">
          {objetivos.map((o) => (
            <Chip key={o.id} label={o.label} active={objetivo === o.id} onClick={() => onObjetivo(objetivo === o.id ? "" : o.id)} />
          ))}
        </div>
      </div>
    </div>
  );
}