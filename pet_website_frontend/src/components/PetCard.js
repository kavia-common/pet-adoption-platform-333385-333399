import React from "react";
import { Link } from "react-router-dom";

// PUBLIC_INTERFACE
export function PetCard({ pet }) {
  /**
   * Presentational card for a pet.
   * Contract:
   * - pet: object with id, name, type, breed, ageYears, size, energy, location, imageUrl
   */
  return (
    <article className="card">
      <img className="pet-image" src={pet.imageUrl} alt={`${pet.name}`} />
      <div className="card-body">
        <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
          <h3 className="card-title">{pet.name}</h3>
          <span className="badge accent">{pet.type}</span>
        </div>

        <div className="card-meta">
          <span className="badge">{pet.breed}</span>
          <span className="badge">{pet.size}</span>
          <span className="badge">{pet.ageYears} yr</span>
          <span className="badge">Energy {pet.energy}/5</span>
        </div>

        <div className="divider" />

        <div className="card-meta" style={{ justifyContent: "space-between" }}>
          <span>{pet.location}</span>
          <Link to={`/pets/${pet.id}`} className="btn btn-outline" aria-label={`View details for ${pet.name}`}>
            View
          </Link>
        </div>
      </div>
    </article>
  );
}
