import React from "react";
import Link from "next/link";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

import { ServiceListItem } from "../components";

const Accordion = ({ headLabel, initialExpand }) => {
  const [isVisible, setIsVisible] = React.useState(initialExpand);

  const handleToggle = () => {
    setIsVisible(() => !isVisible);
  };

  return (
    <div className="accordion" id="accordionExample5">
      <div className="accordion-item bg-white">
        <h2 className="">
          <button
            className="relative flex items-center w-full py-3 
              border border-b-gray-200 border-t-gray-200 bg-white 
              justify-between"
            type="button"
            onClick={handleToggle}
          >
            <div className="text-gray-800 text-sm">{headLabel}</div>
            {isVisible ? (
              <MdKeyboardArrowUp size="20" />
            ) : (
              <MdKeyboardArrowDown size="20" />
            )}
          </button>
        </h2>
        <div className={isVisible ? "" : "hidden"}>
          <ServiceListItem />
          <ServiceListItem />
          <ServiceListItem />
          <ServiceListItem />
        </div>
      </div>
    </div>
  );
};

export default Accordion;
