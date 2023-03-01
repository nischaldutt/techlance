import React from "react";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

import { SectionTitle } from "@/components";

const BusinessFeatures = () => {
  return (
    <>
      <section
        id="features"
        className="border-2 border-black bg-primary/[.03] py-16 md:py-20 lg:py-28 flex justify-center"
      >
        <div className="container border-2 border-black">
          <SectionTitle
            title="Main Features"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />

          <div className="border-2 border-black grid grid-cols-1 justify-between gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessFeatures;
