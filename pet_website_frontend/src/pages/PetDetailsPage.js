import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { PETS } from "../data/pets";
import { getPetById } from "../flows/petsFlow";

// PUBLIC_INTERFACE
export function PetDetailsPage() {
  /** Pet detail view. */
  const { petId } = useParams();

  const pet = useMemo(() => {
    try {
      return getPetById(PETS, petId);
    } catch (err) {
      return null;
    }
  }, [petId]);

  if (!pet) {
    return (
      <div className="container">
        <header className="page-header">
          <h1 className="page-title">Pet not found</h1>
          <p className="page-subtitle">
            We couldn’t find that pet. It may have been adopted (or the URL is incorrect).
          </p>
        </header>
        <Link to="/pets" className="btn btn-primary">
          Back to pets
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <header className="page-header">
        <h1 className="page-title">{pet.name}</h1>
        <p className="page-subtitle">
          {pet.breed} · {pet.location}
        </p>
      </header>

      <div className="grid" style={{ gridTemplateColumns: "1.2fr 0.8fr", gap: 16 }}>
        <div className="card">
          <img className="pet-image" style={{ height: 320 }} src={pet.imageUrl} alt={`${pet.name}`} />
          <div className="card-body">
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <span className="badge accent">{pet.type}</span>
              <span className="badge">{pet.size}</span>
              <span className="badge">{pet.ageYears} yr</span>
              <span className="badge">Energy {pet.energy}/5</span>
              <span className="badge">{pet.gender}</span>
            </div>

            <div className="divider" />

            <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.6 }}>{pet.description}</p>

            <div className="divider" />

            <div className="grid cols-2" style={{ gap: 12 }}>
              <div className="notice">
                Good with kids: <strong>{pet.goodWithKids ? "Yes" : "No"}</strong>
              </div>
              <div className="notice">
                Vaccinated: <strong>{pet.vaccinated ? "Yes" : "No"}</strong>
              </div>
            </div>

            <div className="divider" />

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {pet.traits.map((t) => (
                <span key={t} className="badge">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <aside className="panel" aria-label="Adoption panel">
          <h2 className="panel-title">Next steps</h2>
          <div className="notice">
            Interested in <strong>{pet.name}</strong>? Send us a message and we’ll connect you with the shelter.
          </div>

          <div className="divider" />

          <Link
            to="/contact"
            className="btn btn-primary"
            style={{ width: "100%", marginBottom: 10 }}
          >
            Contact us
          </Link>

          <Link to="/pets" className="btn btn-outline" style={{ width: "100%" }}>
            Back to browse
          </Link>

          <div className="divider" />

          <div className="helper">
            Demo note: this app uses mock data only (no backend).
          </div>
        </aside>
      </div>

      <style>
        {`
          @media (max-width: 900px) {
            .grid[style*="grid-template-columns"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </div>
  );
}
