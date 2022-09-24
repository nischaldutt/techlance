import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";

const StaticMap = () => {
  return (
    <div className="relative w-full h-[200px] flex justify-center">
      <Image
        src={`https://maps.googleapis.com/maps/api/staticmap?center=40.714728,-73.998672&zoom=16&size=400x400&maptype=roadmap&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`}
        alt="..."
        layout="fill"
        objectFit="cover"
      />

      <Link href="/">
        <div className="border border-gray-300 flex justify-between items-center rounded-lg cursor-pointer bg-white absolute bottom-8 w-[90%] px-4 py-1 shadow-lg">
          <div className="">
            <div className="text-gray-700 font-bold text-sm">
              Sam the Barber
            </div>
            <div className="text-gray-500 text-xs">
              2267 Main st, Fort Myers, 33901
            </div>
          </div>
          <FaLocationArrow className="text-gray-400" />
        </div>
      </Link>
    </div>
  );
};

export default StaticMap;
