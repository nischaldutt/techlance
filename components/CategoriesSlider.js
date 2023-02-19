import React from "react";
import Link from "next/link";
import Image from "next/image";

const Category = () => {
  return (
    <Link href={`/services/hair-salon`}>
      <div className="bg-white cursor-pointer rounded-lg shadow-lg drop-shadow-lg grid place-items-center shrink-0 w-[170px] h-[207px] px-4 pt-8 pb-4 transition-[margin] duration-300 hover:mt-[-8px]">
        <div className="relative w-[97px] h-[97px]">
          <Image
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="rounded-full w-32"
            alt="Avatar"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="font-bold text-gray-700">Hair Salon</div>
      </div>
    </Link>
  );
};

const CategoriesSlider = () => {
  return (
    <>
      <div className="select-none bg-gray-100 py-2 shadow-lg w-[90%] lg:w-4/5 xl:w-3/5 h-[400px] mx-auto rounded-lg relative">
        <div className="text-center text-xl sm:text-2xl lg:text-3xl font-bold text-primary-100 pt-8 pb-2">
          Get Inspired with Techlance
        </div>
        <div className="text-center text-sm sm:text-base text-gray-700 font-bold pb-8">
          Explore various world-class services
        </div>

        <div className="flex gap-2 py-4 scrollbar-hide overflow-x-auto w-[110%] absolute left-[-5%]">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((category) => {
            return <Category key={category} />;
          })}
        </div>
      </div>
    </>
  );
};

export default CategoriesSlider;
