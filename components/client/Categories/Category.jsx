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

export default Category;
