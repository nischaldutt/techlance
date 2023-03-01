import React from "react";

import { ClientCardSlider } from "@/components";

export default function Recommendations() {
  return (
    <div className="select-none py-8">
      <div className="pb-6 text-primary-100 text-xl font-bold mx-auto w-[98vw] xs:w-[90vw] 2xl:w-3/5">
        Recommended
      </div>
      <ClientCardSlider />
    </div>
  );
}
