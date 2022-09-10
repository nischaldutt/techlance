import Link from "next/link";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const Collapse = () => {
  return (
    <div className="">
      <a
        className="text-sm"
        data-bs-toggle="collapse"
        href="#collapseExample"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        <div className="py-4 border border-b-gray-500 border-t-gray-500 inline-flex justify-between w-full">
          <p>Popular Services</p>
          <MdKeyboardArrowDown />
          <MdKeyboardArrowUp />
        </div>
        <div className="collapse" id="collapseExample">
          <div className="block p-6 rounded-lg shadow-lg bg-white">
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
          </div>
        </div>
      </a>
    </div>
  );
};

export default Collapse;
