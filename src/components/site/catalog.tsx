import { useEffect, useMemo, useState } from "react";
import { Check, Search } from "lucide-react";
import { equipment, families, type Family } from "@/data/site";
import { useQuote } from "@/lib/quote-store";

export function Catalog() {
  const [family, setFamily] = useState<Family | "Toutes">("Toutes");
  const [query, setQuery] = useState("");
  const [mounted, setMounted] = useState(false);
  const lines = useQuote((state) => state.lines);
  const toggle = useQuote((state) => state.toggle);

  useEffect(() => {
    setMounted(true);
  }, []);

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return equipment.filter((item) => {
      const inFamily = family === "Toutes" || item.family === family;
      const inText =
        needle.length === 0 ||
        item.name.toLowerCase().includes(needle) ||
        item.use.toLowerCase().includes(needle) ||
        item.family.toLowerCase().includes(needle);
      return inFamily && inText;
    });
  }, [family, query]);

  const selected = mounted ? new Set(lines.map((line) => line.id)) : new Set<string>();

  return (
    <section id="equipements" className="border-b border-line bg-panel">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="font-display text-sm uppercase tracking-widest text-brass">
              Équipements
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold uppercase leading-none text-cream sm:text-5xl">
              Ce que le magasin doit pouvoir sortir.
            </h2>
            <p className="mt-4 max-w-xl text-mist">
              Familles courantes sur site. Ajoutez une ligne au dossier : elle suit
              dans la demande de devis, sans engagement.
            </p>
          </div>
          <label className="relative block lg:col-span-5">
            <span className="sr-only">Rechercher un équipement</span>
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-mist" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Pompe, vanne, moteur…"
              className="min-h-12 w-full border border-line bg-ink pr-4 pl-10 text-cream outline-none placeholder:text-mist"
            />
          </label>
        </div>

        <div className="mt-6 flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Familles">
          {(["Toutes", ...families] as const).map((item) => {
            const selectedFamily = item === family;
            return (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={selectedFamily}
                onClick={() => setFamily(item)}
                className={
                  "min-h-11 shrink-0 border px-4 text-sm transition-colors " +
                  (selectedFamily
                    ? "border-brass bg-brass text-ink"
                    : "border-line text-mist hover:border-brass hover:text-cream")
                }
              >
                {item}
              </button>
            );
          })}
        </div>

        {visible.length === 0 ? (
          <p className="mt-8 border border-line bg-ink px-4 py-8 text-center text-mist">
            Aucune ligne pour cette recherche. Élargissez la famille ou le mot-clé.
          </p>
        ) : (
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {visible.map((item) => {
              const on = selected.has(item.id);
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    aria-pressed={on}
                    onClick={() =>
                      toggle({ id: item.id, name: item.name, family: item.family })
                    }
                    className={
                      "flex min-h-28 w-full flex-col items-start gap-2 border p-4 text-left transition-colors " +
                      (on
                        ? "border-brass bg-ink"
                        : "border-line bg-ink hover:border-brass")
                    }
                  >
                    <span className="flex w-full items-center justify-between gap-3">
                      <span className="font-display text-xs uppercase tracking-widest text-brass">
                        {item.family}
                      </span>
                      {on ? (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-brass">
                          <Check className="size-3.5" aria-hidden="true" />
                          Au dossier
                        </span>
                      ) : (
                        <span className="text-xs text-mist">Ajouter</span>
                      )}
                    </span>
                    <span className="font-display text-2xl font-semibold uppercase leading-none text-cream">
                      {item.name}
                    </span>
                    <span className="text-sm text-mist">{item.use}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
