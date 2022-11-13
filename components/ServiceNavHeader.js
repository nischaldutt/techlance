import React from "react";
import Link from "next/link";
import Image from "next/image";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const ServiceNavHeader = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    window.scrollY <= 132 ? setIsScrolled(false) : setIsScrolled(true);
  };

  return (
    <div
      className={`bg-white shadow-lg py-4 px-2 z-50 ${
        isScrolled ? "sticky-top" : "hidden"
      }`}
    >
      <div className="flex justify-between mx-auto w-full sm:w-4/5 md:w-full lg:w-4/5 2xl:w-3/5">
        <div className="flex gap-4 flex-grow pr-6">
          <div className="relative hidden lg:block w-[48px] h-[48px]">
            <Image
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              className="rounded-full"
              alt="Avatar"
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div className="py-1 flex-grow">
            <div className="text-base font-bold text-primary-100">
              New Era Cuts
            </div>
            <div className="text-gray-500 text-xs py-1">
              3338 fairmount Ave, New era cuts, San Diego, 92105
            </div>
          </div>

          <AiFillHeart size="40" className="text-primary-100" />
        </div>

        <div className="w-[32%] md:w-[40%] 2xl:w-[32%]">
          <button className="bg-primary-100 text-white text-xs font-bold rounded-lg w-full py-3">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceNavHeader;
