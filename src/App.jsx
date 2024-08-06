import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Componets/Home";
import Product from "./Componets/Product";
import Addto from "./Componets/Addto";

function App() {
  let [cartItems, setCartItems] = useState([]);

  const cartHandler = (event, items) => {
    event.stopPropagation();
    if (!cartItems.includes(items)) {
      setCartItems([...cartItems, items]);
    }
  };
  const deletItem = (id) => {
    let filteredItems = cartItems.filter((e, i) => e.id != id);
    setCartItems(filteredItems);
  };
  return (
    <div className="font-poppins">
      <Routes>
        <Route
          path="/"
          element={<Addto cartItems={cartItems} deletItem={deletItem} />}
        >
          <Route path="/" element={<Home cartHandler={cartHandler} />} />
          <Route path="product/:id" element={<Product />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
