import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { PETS } from "../data/pets";
import { queryPets } from "../flows/petsFlow";
import { PetCard } from "../components/PetCard";

// PUBLIC_INTERFACE
export function HomePage() {
  /** Landing page with hero and featured pets. */
  const featured = useMemo(() => {
    // Reuse the canonical flow to pick "featured" deterministically:
    // - sort by energy then take first 3
    const result = queryPets({
      pets: PETS,
      filters: { q: "", type: "All", size: "All", maxAge: "", goodWithKids: "Any", vaccinated: "Any", minEnergy: "" },
      sort: "energy",
    });
    return result.items.slice(0, 3);
  }, []);

  const stats = useMemo(() => {
    const result = queryPets({
      pets: PETS,
      filters: { q: "", type: "All", size: "All", maxAge: "", goodWithKids: "Any", vaccinated: "Any", minEnergy: "" },
      sort: "name",
    });
    return result.stats;
  }, []);

  return (
    <div className="container">
      <section className="hero" aria-label="Hero">
        <div className="hero-inner">
          <div>
            <h1 className="hero-title">
              Find your new <strong>best friend</strong>.
            </h1>
            <p className="hero-text">
              PetPal is a modern demo adoption site with a simple browsing experience,
              filters, and pet detail pages—all powered by mock JSON data.
            </p>
            <div className="hero-actions">
              <Link to="/pets" className="btn btn-primary">
                Browse pets
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Ask a question
              </Link>
            </div>
          </div>

          <div className="hero-panel" aria-label="Quick stats">
            <h3>Quick stats</h3>
            <div className="stat">
              <span>Total pets</span>
              <strong>{stats.total}</strong>
            </div>
            <div className="stat">
              <span>Dogs</span>
              <strong>{stats.byType.Dog ?? 0}</strong>
            </div>
            <div className="stat">
              <span>Cats</span>
              <strong>{stats.byType.Cat ?? 0}</strong>
            </div>
          </div>
        </div>
      </section>

      <div className="page-header" style={{ marginTop: 20 }}>
        <h2 className="page-title" style={{ fontSize: 22 }}>
          Featured pets
        </h2>
        <p className="page-subtitle">
          A few friendly faces to get you started.
        </p>
      </div>

      <section className="grid cols-3" aria-label="Featured pets list">
        {featured.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </section>
    </div>
  );
}
