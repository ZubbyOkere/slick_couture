import React from "react";

type Props = {};

const CustomProducts = (props: Props) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h4 className="font-medium">Choose a color</h4>
      <ul className="flex gap-3 items-center">
        <li className="w-8 rounded-full h-8 ring-1 ring-gray-300 cursor-pointer relative bg-red-500">
          <span className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </li>
        <li className="w-8 rounded-full h-8 ring-1 ring-gray-300 cursor-pointer relative bg-blue-500"></li>
        <li className="w-8 rounded-full h-8 ring-1 ring-gray-300  relative bg-green-500 cursor-not-allowed">
          <span className="absolute w-10 h-[2px] ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-400 rotate-45 " />
        </li>
      </ul>
      <h4 className="font-medium">Choose a size</h4>
      <ul className="flex justify-between items-center gap-4">
        <li className="ring-1 ring-red-300 text-red-300 rounded-md py-4 text-sm cursor-pointer">
          Small
        </li>
        <li className="rounded-md py-4 text-sm cursor-pointer bg-red-500 text-white">
          Medium
        </li>
        <li className="text-white rounded-md py-4 text-sm cursor-pointer bg-pink-200">
          Large
        </li>
      </ul>
    </div>
  );
};

export default CustomProducts;
