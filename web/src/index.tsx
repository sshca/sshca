import React from "react";
import { CookiesProvider } from "react-cookie";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router";
import App from "./App";
import "./index.css";

const root = document.getElementById("root");
if (!root) throw new Error("Missing root element");

createRoot(root).render(
  <React.StrictMode>
    <CookiesProvider>
      <Router>
        <App />
      </Router>
    </CookiesProvider>
  </React.StrictMode>,
);
