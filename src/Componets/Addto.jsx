import React, { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Outlet } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";

function Addto({ cartItems, deletItem }) {
  let [cart, setCart] = useState(false);

  const togglerHandler = () => {
    setCart((prev) => !prev);
  };
  let totalAmount = cartItems.reduce((a, b) => a + b.price, 0);

  return (
    <>
      <div className="fixed w-full z-30 top-0">
        <div className="relative flex justify-end items-center px-4 w-full h-[40px] bg-slate-900">
          <div className="text-white text-lg flex flex-col justify-center items-center leading-[10px]">
            <p className="text-[12px] font-[500]">{cartItems.length}</p>
            <FaCartArrowDown onClick={togglerHandler} />
          </div>

          <div
            className={`bg-white overflow-y-scroll no-scrollbar flex flex-col gap-4 transition-all duration-7000 p-4 h-screen absolute w-[100%] md:w-[400px] top-0 ${
              cart ? "right-0" : "right-[-1000px]"
            }`}
          >
            <div className="flex items-center justify-between  bg-white ">
              <p className="font-semibold">
                Your Products - {cartItems.length}
              </p>
              <p className="text-2xl font-bold">
                <IoMdClose onClick={() => setCart(false)} />
              </p>
            </div>

            <div>
              {cartItems.map((e, i) => {
                return (
                  <div className="flex gap-2 py-2 border-b-2 relative" key={i}>
                    <img
                      className="w-full max-w-[90px] "
                      src={e.image}
                      alt=""
                    />
                    <div>
                      <p className="text-sm w-[90%]">{e.title}</p>
                      <p className="font-bold">${e.price}</p>
                    </div>
                    <div className="text-xl absolute right-0">
                      <MdDeleteForever onClick={() => deletItem(e.id)} />
                    </div>
                  </div>
                );
              })}
            </div>
            {cartItems.length > 0 ? (
              <div className=" w-full flex justify-between">
                <p>Total Amount</p>
                <p className="font-bold">${totalAmount.toFixed(1)}</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Addto;
