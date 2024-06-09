"use client";
import { Product, singleProduct } from "@/constants/constants";
import Image from "next/image";
import React, { useState } from "react";

type Props = {};

const ProductImages = (props: Props) => {
  const [index, setIndex] = useState<Product>(singleProduct[0]);

  const handleImageClick = (image: Product) => {
    setIndex(image);
  };
  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={index.img}
          alt=""
          fill
          sizes="50vw"
          className="object-cover"
        />
      </div>
      <div className="flex justify-between items-center gap-6">
        {singleProduct.map((productImage, index) => (
          <div
            className="gap-4 w-1/4 h-32 relative mt-8 rounded-xl cursor-pointer"
            key={productImage.id}
          >
            <Image
              src={productImage.img}
              alt="singleProduct"
              fill
              className="object-contain "
              onClick={() => handleImageClick(productImage)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
