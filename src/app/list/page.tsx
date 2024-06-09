import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import Image from "next/image";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      <div className="hidden bg-pink-200 px-4 sm:flex justify-between h-72">
        <div className="w-2/3 flex flex-col items-center justify-center h-64">
          <h1 className="leading-[48px] text-4xl font-semibold text-gray-700">
            Grab p to 50% off on <br />
            selected Products
          </h1>
          <button className="rounded-3xl bg-red-600 text-white w-max px-3 text-sm">
            Buy Now!
          </button>
        </div>
        <div className="relative">
          <Image
            src={
              "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt={"bg image"}
            className="object-contain"
            width={480}
            height={100}
          />
        </div>
      </div>
      {/* filter */}
      <Filter />
      {/* products */}
      <h1 className="mt-12 text-xl font-semibold">Shoes for you</h1>
      <ProductList />
    </div>
  );
}

export default page;
