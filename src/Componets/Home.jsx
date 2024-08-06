import React from "react";
import Card from "./Card";
import { productData } from "../productData";

function Home({ cartHandler }) {
  return (
    <div className="grid grid-cols-1  space-5 gap-5 px-4 pt-16 pb-2 bg-zinc-100 md:grid-cols-3 lg:grid-cols-4">
      {productData.map((e, i) => {
        return (
          <Card key={e.id} cardData={e} cartHandler={cartHandler} id={e.id} />
        );
      })}
    </div>
  );
}

export default Home;
