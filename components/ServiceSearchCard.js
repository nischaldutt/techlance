import Link from "next/link";
import Image from "next/image";

import { ServiceListItem } from "../components";

const ServiceInfo = () => {
  return (
    <Link href="/services/hair-salon/salon1">
      <div className="border-b border-gray-300 py-1 cursor-pointer">
        <div className="text-xl font-bold text-gray-800">New Era Cuts</div>
        <div className="text-gray-700 text-xs py-1">
          3338 fairmount Ave, New era cuts, San Diego, 92105
        </div>
      </div>
    </Link>
  );
};

const ServiceSearchCard = ({ bookServiceHandler }) => {
  return (
    <div className="select-none flex flex-col md:flex-row gap-8 shadow-lg my-4 rounded-lg pb-4 px-2">
      <div className="">
        <div className="relative cursor-pointer">
          <div className="absolute right-0 rounded-tr-lg rounded-bl-lg z-10 bg-[rgba(0,0,0,0.5)] text-white text-center p-1">
            <div className="font-bold text-lg">5.0</div>
            <div className="text-[11px]">568 Reviews</div>
          </div>
          <Link href="/services/hair-salon/salon1">
            <div className="w-[340px] h-[226px]">
              <Image
                className="rounded-lg"
                src="https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="flex-grow pr-2">
        <ServiceInfo />
        <ServiceListItem bookServiceHandler={bookServiceHandler} />
        <ServiceListItem bookServiceHandler={bookServiceHandler} />
        <ServiceListItem bookServiceHandler={bookServiceHandler} />
        <ServiceListItem bookServiceHandler={bookServiceHandler} />
      </div>
    </div>
  );
};

export default ServiceSearchCard;
