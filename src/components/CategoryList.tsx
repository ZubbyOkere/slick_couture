import { categoryProducts, featuredProducts } from "@/constants/constants";
import { Link } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

const CategoryList = (props: Props) => {
  return (
    <div className="px-4 overflow-x-scroll scroll-hide">
      <div className="flex gap-4 md:gap-8">
        <Link href="/" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4">
          <div className="relative w-full h-96">
            <Image
              src={
                "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
              }
              alt=""
              width={200}
              height={150}
            />
            <h1 className="mt-8 font-light text-cl tracking-wide">
              Category Name
            </h1>
          </div>
        </Link>
        <Link href="/" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4">
          <div className="relative w-full h-96">
            <Image
              src={
                "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
              }
              alt=""
              width={200}
              height={150}
            />
            <h1 className="mt-8 font-light text-cl tracking-wide">
              Category Name
            </h1>
          </div>
        </Link>
        <Link href="/" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4">
          <div className="relative w-full h-96">
            <Image
              src={
                "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
              }
              alt=""
              width={200}
              height={150}
            />
            <h1 className="mt-8 font-light text-cl tracking-wide">
              Category Name
            </h1>
          </div>
        </Link>
        <Link href="/" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4">
          <div className="relative w-full h-96">
            <Image
              src={
                "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
              }
              alt=""
              width={200}
              height={150}
            />
            <h1 className="mt-8 font-light text-cl tracking-wide">
              Category Name
            </h1>
          </div>
        </Link>
        <Link href="/" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4">
          <div className="relative w-full h-96">
            <Image
              src={
                "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
              }
              alt=""
              width={200}
              height={150}
            />
            <h1 className="mt-8 font-light text-cl tracking-wide">
              Category Name
            </h1>
          </div>
        </Link>
        <Link href="/" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4">
          <div className="relative w-full h-96">
            <Image
              src={
                "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
              }
              alt=""
              width={200}
              height={150}
            />
            <h1 className="mt-8 font-light text-cl tracking-wide">
              Category Name
            </h1>
          </div>
        </Link>
        <Link href="/" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4">
          <div className="relative w-full h-96">
            <Image
              src={
                "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
              }
              alt=""
              width={200}
              height={150}
            />
            <h1 className="mt-8 font-light text-cl tracking-wide">
              Category Name
            </h1>
          </div>
        </Link>
        <Link href="/" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4">
          <div className="relative w-full h-96">
            <Image
              src={
                "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
              }
              alt=""
              width={200}
              height={150}
            />
            <h1 className="mt-8 font-light text-cl tracking-wide">
              Category Name
            </h1>
          </div>
        </Link>
        <Link href="/" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4">
          <div className="relative w-full h-96">
            <Image
              src={
                "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
              }
              alt=""
              width={200}
              height={150}
            />
            <h1 className="mt-8 font-light text-cl tracking-wide">
              Category Name
            </h1>
          </div>
        </Link>
        <Link href="/" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4">
          <div className="relative w-full h-96">
            <Image
              src={
                "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
              }
              alt=""
              width={200}
              height={150}
            />
            <h1 className="mt-8 font-light text-cl tracking-wide">
              Category Name
            </h1>
          </div>
        </Link>
        <Link href="/" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4">
          <div className="relative w-full h-96">
            <Image
              src={
                "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
              }
              alt=""
              width={200}
              height={150}
            />
            <h1 className="mt-8 font-light text-cl tracking-wide">
              Category Name
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
