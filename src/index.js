import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./contexts/cartContext";
import { CategoriesProvider } from "./contexts/categoriesContext";
import { UserProvider } from "./contexts/userContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  //<StrictMode></StrictMode>
  <BrowserRouter>
    <UserProvider>
      <CategoriesProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </CategoriesProvider>
    </UserProvider>
  </BrowserRouter>
);
