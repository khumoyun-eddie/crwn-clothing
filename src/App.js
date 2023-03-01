import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Navigation from "./routes/Navigation";
import Shop from "./routes/Shop/Shop";
import Auth from "./routes/Auth/Auth";
import Checkout from "./routes/Checkout/Checkout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}
