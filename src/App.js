import "./App.css";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/Cart";
import { DetailsProvider } from "./contexts/Details";

import Home from "./pages/Home";
import Details from "./pages/Details";
import Cart from "./pages/Cart/";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <CartProvider>
        <DetailsProvider>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/details/" element={<Details />} />
          </Routes>
        </DetailsProvider>
      </CartProvider>
    </>
  );
}

export default App;
