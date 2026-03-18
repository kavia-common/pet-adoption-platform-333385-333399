import React from "react";
import { Link } from "react-router-dom";

// PUBLIC_INTERFACE
export function NotFoundPage() {
  /** 404 page. */
  return (
    <div className="container">
      <header className="page-header">
        <h1 className="page-title">Page not found</h1>
        <p className="page-subtitle">
          The page you’re looking for doesn’t exist.
        </p>
      </header>

      <div className="panel">
        <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.7 }}>
          Try going back to the home page or browsing available pets.
        </p>
        <div className="divider" />
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <Link to="/" className="btn btn-primary">
            Home
          </Link>
          <Link to="/pets" className="btn btn-outline">
            Browse pets
          </Link>
        </div>
      </div>
    </div>
  );
}
