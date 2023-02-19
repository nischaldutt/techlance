import React from "react";

export default function About({
  title,
  description,
  Icon,
  bg = "white",
  flexDirection = "flex-row",
}) {
  return (
    <div className={`flex justify-center items-center my-8 ${bg}`}>
      <div
        className={`flex ${flexDirection} md:justify-around py-12 text-gray-900 w-[90%] 2xl:w-3/5`}
      >
        <div className="md:w-1/2">
          <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-6 text-primary-100">
            {title}
          </h3>
          {description}
        </div>
        <div className="grid place-items-center md:w-2/5">
          <div className="text-[80vw] xs:text-[60vw] sm:text-[20rem] md:text-[30vw] lg:text-[24rem]">
            {Icon}
          </div>
        </div>
      </div>
    </div>
  );
}
