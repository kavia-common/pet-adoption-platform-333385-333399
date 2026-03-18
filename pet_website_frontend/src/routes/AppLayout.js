import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

// PUBLIC_INTERFACE
export function AppLayout() {
  /** Shared layout for all pages. */
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="main" role="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
