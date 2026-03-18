import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppRouter } from "./routes/AppRouter";

// PUBLIC_INTERFACE
function App() {
  /**
   * App entrypoint (UI boundary).
   *
   * Responsibilities:
   * - Configure React Router (client-side routing)
   * - Render the canonical AppRouter
   *
   * Errors:
   * - Router/render errors will surface via the default React error overlay in dev.
   */
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
