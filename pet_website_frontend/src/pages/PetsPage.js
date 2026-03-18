import React, { useMemo, useState } from "react";
import { PETS } from "../data/pets";
import { queryPets } from "../flows/petsFlow";
import { FilterBar } from "../components/FilterBar";
import { PetCard } from "../components/PetCard";

const DEFAULT_FILTERS = {
  q: "",
  type: "All",
  size: "All",
  maxAge: "",
  minEnergy: "",
  goodWithKids: "Any",
  vaccinated: "Any",
};

// PUBLIC_INTERFACE
export function PetsPage() {
  /** Pet browse/listing page with sidebar filters. */
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [sort, setSort] = useState("name");

  const result = useMemo(() => {
    try {
      return queryPets({ pets: PETS, filters, sort });
    } catch (err) {
      // Boundary behavior: surface a visible error with context.
      // (No silent fallbacks — easy to debug in future.)
      return {
        items: [],
        stats: { total: PETS.length, matched: 0, byType: {} },
        error: err instanceof Error ? err.message : String(err),
      };
    }
  }, [filters, sort]);

  const onChangeFilters = (partial) => {
    setFilters((prev) => ({ ...prev, ...partial }));
  };

  const onReset = () => {
    setFilters(DEFAULT_FILTERS);
    setSort("name");
  };

  return (
    <div className="container">
      <header className="page-header">
        <h1 className="page-title">Browse pets</h1>
        <p className="page-subtitle">
          Use filters to narrow down results. Data is mock JSON for this demo.
        </p>
      </header>

      <div className="pets-layout">
        <FilterBar
          filters={filters}
          sort={sort}
          onChangeFilters={onChangeFilters}
          onChangeSort={setSort}
          onReset={onReset}
        />

        <section aria-label="Pets results">
          <div className="panel" style={{ marginBottom: 16 }}>
            <h2 className="panel-title">Results</h2>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
              <div className="notice" style={{ flex: "1 1 auto" }}>
                Showing <strong>{result.stats.matched}</strong> of{" "}
                <strong>{result.stats.total}</strong>.
              </div>
              <div className="notice">
                Dogs: <strong>{result.stats.byType.Dog ?? 0}</strong> · Cats:{" "}
                <strong>{result.stats.byType.Cat ?? 0}</strong>
              </div>
            </div>

            {"error" in result && result.error ? (
              <div className="notice error" style={{ marginTop: 12 }}>
                <strong>Filter error:</strong> {result.error}
              </div>
            ) : null}
          </div>

          {result.items.length === 0 ? (
            <div className="notice">
              <strong>No matches.</strong> Try clearing filters or searching a different term.
            </div>
          ) : (
            <div className="grid cols-3" aria-label="Pet cards">
              {result.items.map((pet) => (
                <PetCard key={pet.id} pet={pet} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
