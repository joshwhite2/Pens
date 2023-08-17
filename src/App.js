import "./App.css";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import ShoppingCart from "./components/ShoppingCart";
import { getProducts } from "./data/api";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import Checkout from "./components/Checkout";
import Contact from "./components/Contact";

function App() {
  const [products] = useState(getProducts);

  return (
    <Router>
      <ShoppingCartProvider>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="App">
                  <Home></Home>
                </div>
              </>
            }
          />
          <Route
            path="details/:id"
            element={<ProductDetails item={products}></ProductDetails>}
          ></Route>
          <Route
            path="products/"
            element={<ProductList products={products}></ProductList>}
          ></Route>
          <Route path="/cart" element={<ShoppingCart></ShoppingCart>}></Route>
          <Route path="/checkout" element={<Checkout></Checkout>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
      </ShoppingCartProvider>
    </Router>
  );
}

export default App;
