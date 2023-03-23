import React from "react";
import PropTypes from "prop-types";

import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

export default function CardStats({
  statSubtitle,
  statTitle,
  statArrow,
  statPercent,
  statPercentColor,
  statDescription,
  statIconColor,
  Icon,
}) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                {statSubtitle}
              </h5>
              <span className="font-semibold text-xl text-blueGray-700">
                {statTitle}
              </span>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <div
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-6 h-6 drop-shadow-lg rounded-full " +
                  statIconColor
                }
              >
                {Icon}
              </div>
            </div>
          </div>
          <p className="text-sm text-blueGray-400 mt-4 flex">
            <span className={statPercentColor + " mr-2 flex"}>
              {statArrow === "up" ? (
                <AiOutlineArrowUp size={18} />
              ) : (
                <AiOutlineArrowDown size={18} />
              )}
              {statPercent}%
            </span>
            <span className="whitespace-nowrap">{statDescription}</span>
          </p>
        </div>
      </div>
    </>
  );
}

CardStats.defaultProps = {
  statSubtitle: "Traffic",
  statTitle: "350,897",
  statArrow: "up",
  statPercent: "3.48",
  statPercentColor: "text-emerald-500",
  statDescription: "Since last month",
  statIconColor: "bg-red-500",
};

CardStats.propTypes = {
  statSubtitle: PropTypes.string,
  statTitle: PropTypes.string,
  statArrow: PropTypes.oneOf(["up", "down"]),
  statPercent: PropTypes.string,
  // can be any of the text color utilities
  // from tailwindcss
  statPercentColor: PropTypes.string,
  statDescription: PropTypes.string,
  statIconColor: PropTypes.string,
};
