import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./AppLayout";
import { HomePage } from "../pages/HomePage";
import { PetsPage } from "../pages/PetsPage";
import { PetDetailsPage } from "../pages/PetDetailsPage";
import { AboutPage } from "../pages/AboutPage";
import { ContactPage } from "../pages/ContactPage";
import { NotFoundPage } from "../pages/NotFoundPage";

// PUBLIC_INTERFACE
export function AppRouter() {
  /**
   * Canonical router definition for the app.
   *
   * Routes:
   * - /              Home
   * - /pets          Listing with filters
   * - /pets/:petId   Pet details
   * - /about         About
   * - /contact       Contact form
   * - *              404
   */
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/pets" element={<PetsPage />} />
        <Route path="/pets/:petId" element={<PetDetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
