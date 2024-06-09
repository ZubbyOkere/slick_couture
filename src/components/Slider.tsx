"use client";
import { slides } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {};

const Slider = (props: Props) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval((prev) => {
      prev === slides.length - 1 ? 0 : prev + 1;
    });
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden w-screen">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw) ` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
          >
            <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center text-center">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1 className="text-5xl lg:text-6xl 2xl:8xl font-semibold">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className="py-3 px-4 bg-black rounded-md text-white mt-3">
                  Shop Now
                </button>
              </Link>
            </div>
            <div className="h-1/2 xl:w-1/2 xl:h-full overflow-hidden relative">
              <Image
                src={slide.img}
                alt="bg-image"
                fill
                sizes="100%"
                className="object-cover absolute overflow-hidden"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
