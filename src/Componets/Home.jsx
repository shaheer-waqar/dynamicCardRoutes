import React from "react";
import Card from "./Card";
import { productData } from "../productData";

function Home() {
  return (
    <div 
      className="grid grid-cols-1 space-5 gap-5 px-4 py-10 bg-zinc-100 md:grid-cols-3 lg:grid-cols-4">
      {productData.map((e, i) => {
        return <Card key={e.id} cardData={e} id={e.id} />;
      })}
    </div>
  );
}

export default Home;
