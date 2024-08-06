import React from "react";
import {useParams } from "react-router-dom";
import { productData } from "../productData";
 




function Product() {
  const {id} = useParams();
  const filteredProduct = productData.filter((e,i)=> e.id ==  id  );
  console.log(filteredProduct)
  return (
    filteredProduct.map(((e,i)=>{
      return(
    <div className="w-full px-2  md:h-auto py-5" key={e.id}>
    <div className="max-w-[900px] shadow-md m-auto flex flex-col gap-2 mt-10 md:flex-row">
      <div className="w-full md:w-6/12 ">
        <img src={e.image} alt="" className="w-full h-[30%] md:h-[500px] md:object-fill" />
      </div>

      <div className="w-full md:w-6/12 px-2 flex flex-col gap-3 pb-5">
        <h1 className="bold text-2xl uppercase">{e.title}</h1>
        <p className="font-bold text-lg ">${e.price}</p>
        <div>
          <button className="bg-black text-white px-3 py-1 rounded-[5px] hover:bg-black/80 duration-300">
            Buy Now
          </button>
        </div>
        <div>
          <h4 className="mb-1">Description</h4>
          <p className="text-zinc-600">{e.description}</p>
        </div>
      </div>
    </div>
    </div>

      )
    }))
  );
}

export default Product;
