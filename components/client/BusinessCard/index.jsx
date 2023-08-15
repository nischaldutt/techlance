import Link from "next/link";
import Image from "next/image";

const BusinessCard = () => {
  return (
    <div className="flex justify-center w-[275px] mx-2">
      <div className="rounded-lg bg-white max-w-sm">
        <Link href="/categories/hair-salon/98">
          <a data-mdb-ripple="true" data-mdb-ripple-color="light">
            <div className="relative">
              <div className="absolute right-0 rounded-tr-lg rounded-bl-lg z-10 bg-[rgba(0,0,0,0.5)] text-white text-center p-1">
                <div className="font-bold text-lg">5.0</div>
                <div className="text-[11px]">568 Reviews</div>
              </div>
              <Image
                className="rounded-lg"
                src="https://d2zdpiztbgorvt.cloudfront.net/region1/us/173102/biz_photo/a0c65af40bdf488c9ed98b92bd6780-roy-master-barber-biz-photo-c89d068112214cb2a81d03576c3b58-booksy.jpeg?size=640x427"
                alt=""
                width={275}
                height={180}
              />
            </div>

            <div className="py-1">
              <h5 className="text-primary-100 text-sm font-bold">
                Roy Master Barber
              </h5>
              <p className="text-gray-700 text-xs">
                2249 s woodland blvd, DeLand, 32720
              </p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default BusinessCard;
