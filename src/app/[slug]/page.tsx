import Add from "@/components/Add";
import CustomProducts from "@/components/CustomProducts";
import ProductImages from "@/components/ProductImages";
import React from "react";

type Props = {};

const SinglePage = (props: Props) => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* img */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* text */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
          explicabo.
        </p>
        <div className="h-[2px] bg-gray-300" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-400">$50</h3>
          <h3 className="font-medium text-2xl">$30</h3>
        </div>
        <div className="h-[2px] bg-gray-300" />
        <CustomProducts />
        <Add />
        <div className="h-[2px] bg-gray-300" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            suscipit eum ex quidem velit eius similique accusamus aperiam
            molestias numquam? Doloribus, alias et enim aperiam voluptatem quo.
            Facilis, temporibus pariatur.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            suscipit eum ex quidem velit eius similique accusamus aperiam
            molestias numquam? Doloribus, alias et enim aperiam voluptatem quo.
            Facilis, temporibus pariatur.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            suscipit eum ex quidem velit eius similique accusamus aperiam
            molestias numquam? Doloribus, alias et enim aperiam voluptatem quo.
            Facilis, temporibus pariatur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
