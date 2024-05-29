import Image from "next/image";
import React from "react";

type Props = {};

const CartModal = (props: Props) => {
  const cartImage = true;
  return (
    <div className="w-max absolute top-12 right-[16px] p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white flex flex-col gap-6 z-20">
      {cartImage ? (
        <div className="flex flex-col gap-6">
          <h1>Shopping Cart</h1>
          <div className="flex justify-between items-center gap-8">
            <Image
              src={
                "https://images.unsplash.com/photo-1716835457716-0e879b88c774?q=80&w=1386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              width={40}
              height={50}
              alt="Shopping cart image"
            />
            <div className="flex flex-col gap-2">
              <span>
                <h1 className="font-semibold">Digital income</h1>

                <p className="text-xs">available</p>
              </span>
              <span className="text-sm">Qty</span>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-semibold">$40</p>
              <p className="text-red-600">remove</p>
            </div>
          </div>
          <div className="flex justify-between items-center gap-8">
            <div className="flex flex-col gap-2">
              <span>
                <h1 className="font-semibold">Subtotal</h1>

                <p className="text-xs">
                  Shipping and taxes are calculated at checkout
                </p>
              </span>
              <button className="font-semibold ring-1 ring-gray-300 w-16">
                Qty
              </button>
            </div>
            <div className="flex flex-col gap-4 ">
              <button>$40</button>
              <p className="bg-black text-white py-1 px-2 rounded-lg">
                Checkout
              </p>
            </div>
          </div>
        </div>
      ) : (
        <h1>Cart is Empty</h1>
      )}
    </div>
  );
};

export default CartModal;
