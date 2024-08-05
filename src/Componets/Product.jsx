import React from "react";
import { useLocation } from "react-router-dom";

function Product() {
  let { state } = useLocation();
  return (
    <div className="w-full px-2  md:h-auto ">
    <div className="max-w-[900px] shadow-md m-auto flex flex-col gap-2 mt-10 md:flex-row">
      <div className="w-full md:w-6/12 ">
        <img src={state.image} alt="" className="w-full h-[30%] md:h-[500px] overflow-clip md:object-fill" />
      </div>

      <div className="w-full md:w-6/12 px-2 flex flex-col gap-3 pb-5">
        <h1 className="bold text-2xl uppercase">{state.title}</h1>
        <p className="font-bold text-lg ">${state.price}</p>
        <div>
          <button className="bg-black text-white px-3 py-1 rounded-[5px] hover:bg-black/80 duration-300">
            Buy Now
          </button>
        </div>
        <div>
          <h4 className="mb-1">Description</h4>
          <p className="text-zinc-600">{state.description}</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Product;
