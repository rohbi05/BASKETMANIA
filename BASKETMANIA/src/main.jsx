import "./index.css";
import App1 from "./components/App1.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App1 />
  </StrictMode>
);
