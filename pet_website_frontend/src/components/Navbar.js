import React from "react";
import { NavLink, Link } from "react-router-dom";

// PUBLIC_INTERFACE
export function Navbar() {
  /** Top navigation bar for the app. */
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand" aria-label="Go to home">
          <span className="brand-mark" aria-hidden="true" />
          <span>PetPal</span>
        </Link>

        <nav className="nav-links" aria-label="Primary navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/pets"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Pets
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Contact
          </NavLink>
        </nav>

        <div className="nav-cta">
          <Link to="/pets" className="btn btn-primary">
            Browse pets
          </Link>
        </div>
      </div>
    </header>
  );
}
