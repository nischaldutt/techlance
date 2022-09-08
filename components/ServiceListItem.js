import Link from "next/link";

const ServiceListItem = () => {
  return (
    <div className="py-2 flex justify-between">
      <div className="">
        <div className="text-sm font-bold">Haircut</div>
        <div>Does not include eyebrows</div>
      </div>

      <div className="font-bold flex justify-between w-28">
        <div className="">
          <div className="">₹ 5000</div>
          <div className="text-gray-500 text-[10px]">30 min</div>
        </div>
        <button className="bg-secondary text-white px-[8px] h-[30px] rounded-lg">
          Book
        </button>
      </div>
    </div>
  );
};

export default ServiceListItem;
