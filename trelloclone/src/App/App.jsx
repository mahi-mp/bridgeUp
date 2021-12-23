import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import { KanbanBoard } from "../KanbanBoard";
import "./styles/App.module.css";

/**
 * @function App
 * @returns {Object} Handles Routes
 * includes normal and private routes
 * Followed react router 6 and above version
 */

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <KanbanBoard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export { App };
