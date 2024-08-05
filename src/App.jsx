import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Componets/Home";
import Product from "./Componets/Product";
import AddToCard from "./Componets/AddToCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-poppins">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
