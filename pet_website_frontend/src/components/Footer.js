import React from "react";
import { Link } from "react-router-dom";

// PUBLIC_INTERFACE
export function Footer() {
  /** Footer shown on all pages. */
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>PetPal</strong> · Adopt, don’t shop.
        </div>
        <div className="footer-links" aria-label="Footer links">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <a
            href="https://www.aspca.org/adopt-pet/adoptable-dogs-your-local-shelter"
            target="_blank"
            rel="noreferrer"
          >
            Adoption resources
          </a>
        </div>
      </div>
    </footer>
  );
}
