"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

const Slider = (props: Props) => {
  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden w-screen">
      <div className="w-max h-full flex transition-all ease-in-out duration-1000">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
          >
            <div className="h-1/2 xl:w-1/2">
              <h2>{slide.description}</h2>
              <h1>{slide.title}</h1>
              <Link href={slide.url}>
                <button>Shop Now</button>
              </Link>
            </div>
            <div className="h-1/2 xl:w-1/2 relative">
              <Image
                src={slide.img}
                alt="bg-image"
                fill
                sizes="100%"
                className="object-cover absolute"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
