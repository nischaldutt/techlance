import Link from "next/link";

const ServiceListItem = ({ bookServiceHandler }) => {
  return (
    <div className="py-2 flex justify-between text-xs border-b border-gray-300">
      <div className="">
        <div className="text-sm font-bold text-primary-100">Haircut</div>
        <div className="">Does not include eyebrows</div>
      </div>

      <div className="font-bold flex justify-between w-28">
        <div className="">
          <div className="text-primary-100">₹ 5000</div>
          <div className="text-gray-500 text-[10px]">30 min</div>
        </div>
        <button
          className="bg-primary-100 text-white text-[10px] px-[8px] h-[30px] rounded-lg"
          onClick={() => bookServiceHandler("hairService")}
        >
          Book
        </button>
      </div>
    </div>
  );
};

export default ServiceListItem;
