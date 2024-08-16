<<<<<<< HEAD
import "./index.css";
import App1 from "./components/App1.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
createRoot(document.getElementById("root")).render(
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
>>>>>>> navBar-X-Home-x-sighn-in
  <StrictMode>
    <App />
  </StrictMode>,
)