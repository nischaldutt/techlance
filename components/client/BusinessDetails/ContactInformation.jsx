import { BsPhone } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";

export default function ContactInformation() {
  return (
    <div className="">
      <div className="uppercase text-gray-700 text-sm font-bold py-2">
        Contact & Business Hours
      </div>

      <div className="text-sm py-3 flex justify-between">
        <div className="text-black inline-flex">
          <BsPhone size="20" className="text-gray-700 mr-1" />
          +91987654321
        </div>
        <button className="border border-gray-300 hover:border-primary-100 rounded-lg shadow-lg p-1">
          <AiOutlinePhone
            size="20"
            className="text-gray-700 hover:text-primary-100"
          />
        </button>
      </div>
    </div>
  );
}
