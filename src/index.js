import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./contexts/cartContext";
import { ProductsProvider } from "./contexts/productContext";
import { UserProvider } from "./contexts/userContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  //<StrictMode></StrictMode>
  <BrowserRouter>
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  </BrowserRouter>
);
