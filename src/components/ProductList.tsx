import { featuredProducts } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const ProductList = (props: Props) => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-10 gap-8 items-center">
          {featuredProducts.map((item) => (
            <Link href={item.url} key={item.id} className=" ">
              <Image
                src={item.img}
                alt={item.description}
                width={250}
                height={150}
              />
              <div className="flex justify-between items-center">
                <h1>{item.title}</h1>
                <span>{item.price}</span>
              </div>
              <div className="flex flex-col gap-1 ">
                {item.description}
                <button className="border border-red-600 rounded-xl py-1 px-4 hover:bg-red-500 hover:text-white w-max">
                  Add to cart
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
