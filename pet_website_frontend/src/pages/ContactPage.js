import React, { useMemo, useState } from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

// PUBLIC_INTERFACE
export function ContactPage() {
  /** Contact form page (demo: no backend). */
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim() || !form.email.includes("@")) e.email = "Please enter a valid email.";
    if (form.message.trim().length < 10) e.message = "Message should be at least 10 characters.";
    return e;
  }, [form]);

  const canSubmit = Object.keys(errors).length === 0;

  const onSubmit = (ev) => {
    ev.preventDefault();
    setSubmitted(true);
    if (!canSubmit) return;

    // Demo: would send to backend. Keep it explicit and debuggable.
    // In a real app, this is where you'd call fetch(REACT_APP_API_BASE + ...).
    setForm(initialState);
  };

  return (
    <div className="container">
      <header className="page-header">
        <h1 className="page-title">Contact</h1>
        <p className="page-subtitle">
          Have questions about adoption? Send a note and we’ll get back to you. (Demo form—no backend)
        </p>
      </header>

      <div className="grid" style={{ gridTemplateColumns: "1fr 0.9fr", gap: 16 }}>
        <form className="panel" onSubmit={onSubmit} aria-label="Contact form">
          <h2 className="panel-title">Message</h2>

          <div className="grid" style={{ gap: 12 }}>
            <div className="field">
              <label className="label" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                className="input"
                value={form.name}
                onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                placeholder="Your name"
              />
              {submitted && errors.name ? <div className="helper error">{errors.name}</div> : null}
            </div>

            <div className="field">
              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                className="input"
                value={form.email}
                onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                placeholder="you@example.com"
              />
              {submitted && errors.email ? <div className="helper error">{errors.email}</div> : null}
            </div>

            <div className="field">
              <label className="label" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="textarea"
                value={form.message}
                onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                placeholder="Tell us what you're looking for (type, age, temperament)..."
              />
              {submitted && errors.message ? (
                <div className="helper error">{errors.message}</div>
              ) : (
                <div className="helper">We usually respond within 1–2 business days.</div>
              )}
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button className="btn btn-primary" type="submit" disabled={!canSubmit}>
                Send message
              </button>
              <button
                className="btn btn-outline"
                type="button"
                onClick={() => {
                  setForm(initialState);
                  setSubmitted(false);
                }}
              >
                Clear
              </button>
            </div>

            {!canSubmit && submitted ? (
              <div className="notice error">
                <strong>Fix the highlighted fields</strong> and try again.
              </div>
            ) : null}

            {canSubmit && submitted ? (
              <div className="notice">
                <strong>Thanks!</strong> Your message was recorded locally (demo).
              </div>
            ) : null}
          </div>
        </form>

        <aside className="panel" aria-label="Contact details">
          <h2 className="panel-title">Adoption tips</h2>
          <div className="notice">
            <strong>Bring questions:</strong> ask about energy level, routines, medical history, and how the pet does with other animals.
          </div>
          <div className="divider" />
          <div className="notice">
            <strong>Plan the first week:</strong> quiet space, consistent schedule, and time to decompress.
          </div>
          <div className="divider" />
          <div className="helper">
            If you add a backend later, wire this form to it and keep the same validation contract.
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
