import React from "react";

const TYPE_OPTIONS = ["All", "Dog", "Cat", "Rabbit", "Bird"];
const SIZE_OPTIONS = ["All", "Small", "Medium", "Large"];
const SORT_OPTIONS = [
  { value: "name", label: "Name (A→Z)" },
  { value: "age", label: "Age (youngest)" },
  { value: "energy", label: "Energy (highest)" },
];

// PUBLIC_INTERFACE
export function FilterBar({ filters, sort, onChangeFilters, onChangeSort, onReset }) {
  /**
   * FilterBar: controlled form component.
   *
   * Inputs:
   * - filters: { q, type, size, maxAge, goodWithKids, vaccinated, minEnergy }
   * - sort: "name" | "age" | "energy"
   * - onChangeFilters(partialFilters): merges upstream
   * - onChangeSort(sortValue)
   * - onReset()
   *
   * Side effects: none (delegates changes via callbacks)
   */
  return (
    <aside className="panel" aria-label="Filters">
      <h2 className="panel-title">Filter</h2>

      <div className="grid" style={{ gap: 12 }}>
        <div className="field">
          <label className="label" htmlFor="q">
            Search
          </label>
          <input
            id="q"
            className="input"
            placeholder='Try "corgi" or "San Jose"'
            value={filters.q}
            onChange={(e) => onChangeFilters({ q: e.target.value })}
          />
          <div className="helper">
            Tip: use <span className="kbd">Tab</span> to move between fields.
          </div>
        </div>

        <div className="grid cols-2" style={{ gap: 12 }}>
          <div className="field">
            <label className="label" htmlFor="type">
              Type
            </label>
            <select
              id="type"
              className="select"
              value={filters.type}
              onChange={(e) => onChangeFilters({ type: e.target.value })}
            >
              {TYPE_OPTIONS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label className="label" htmlFor="size">
              Size
            </label>
            <select
              id="size"
              className="select"
              value={filters.size}
              onChange={(e) => onChangeFilters({ size: e.target.value })}
            >
              {SIZE_OPTIONS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid cols-2" style={{ gap: 12 }}>
          <div className="field">
            <label className="label" htmlFor="maxAge">
              Max age (years)
            </label>
            <input
              id="maxAge"
              className="input"
              type="number"
              min={0}
              value={filters.maxAge}
              onChange={(e) =>
                onChangeFilters({
                  maxAge: e.target.value === "" ? "" : Number(e.target.value),
                })
              }
            />
          </div>

          <div className="field">
            <label className="label" htmlFor="minEnergy">
              Min energy (1–5)
            </label>
            <input
              id="minEnergy"
              className="input"
              type="number"
              min={1}
              max={5}
              value={filters.minEnergy}
              onChange={(e) =>
                onChangeFilters({
                  minEnergy: e.target.value === "" ? "" : Number(e.target.value),
                })
              }
            />
          </div>
        </div>

        <div className="grid cols-2" style={{ gap: 12 }}>
          <div className="field">
            <label className="label" htmlFor="kids">
              Good with kids
            </label>
            <select
              id="kids"
              className="select"
              value={String(filters.goodWithKids)}
              onChange={(e) => {
                const v = e.target.value;
                onChangeFilters({
                  goodWithKids: v === "Any" ? "Any" : v === "true",
                });
              }}
            >
              <option value="Any">Any</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>

          <div className="field">
            <label className="label" htmlFor="vax">
              Vaccinated
            </label>
            <select
              id="vax"
              className="select"
              value={String(filters.vaccinated)}
              onChange={(e) => {
                const v = e.target.value;
                onChangeFilters({
                  vaccinated: v === "Any" ? "Any" : v === "true",
                });
              }}
            >
              <option value="Any">Any</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="sort">
            Sort
          </label>
          <select
            id="sort"
            className="select"
            value={sort}
            onChange={(e) => onChangeSort(e.target.value)}
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button className="btn btn-outline" onClick={onReset} type="button">
            Reset filters
          </button>
        </div>
      </div>
    </aside>
  );
}
