import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import Header from "./components/Header.jsx";
import SearchAndFilters from "./components/SearchAndFilters.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import ProductModal from "./components/ProductModal.jsx";
import CartDrawer from "./components/CartDrawer.jsx";
import CheckoutModal from "./components/CheckoutModal.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
