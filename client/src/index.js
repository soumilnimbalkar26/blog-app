import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ContextProvider } from "./context/Context";
import { BrowserRouter as Router } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ContextProvider>
      <Router>
        <App />
      </Router>
    </ContextProvider>
  </React.StrictMode>
);
