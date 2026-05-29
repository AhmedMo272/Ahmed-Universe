import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UniverseProvider } from "./context/UniverseContext";

createRoot(document.getElementById("root")).render(
  <UniverseProvider>
    <App />
  </UniverseProvider>,
);
