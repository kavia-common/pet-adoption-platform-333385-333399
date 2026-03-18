import React from "react";

// PUBLIC_INTERFACE
export function AboutPage() {
  /** About page describing the project and approach. */
  return (
    <div className="container">
      <header className="page-header">
        <h1 className="page-title">About PetPal</h1>
        <p className="page-subtitle">
          A simple, modern React pet adoption demo with reusable components, routing, and a clean light theme.
        </p>
      </header>

      <div className="grid cols-2">
        <section className="panel" aria-label="What this is">
          <h2 className="panel-title">What this is</h2>
          <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.7 }}>
            PetPal is a front-end example app built in a CRA-style setup. It uses mock JSON pet data,
            React Router for navigation, and local state for filtering/sorting.
          </p>
        </section>

        <section className="panel" aria-label="How to use">
          <h2 className="panel-title">How to use</h2>
          <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.7 }}>
            <li>Open <strong>Pets</strong> to browse and filter.</li>
            <li>Click a card to view <strong>Pet Details</strong>.</li>
            <li>Use <strong>Contact</strong> for questions (demo form).</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
