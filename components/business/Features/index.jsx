import React from "react";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

import { SectionTitle } from "@/components";

const BusinessFeatures = () => {
  return (
    <>
      <section className="flex justify-center my-4">
        <div className="mx-auto">
          <SectionTitle
            title="Main Features"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />

          <div className="flex gap-8 flex-col items-center md:flex-row justify-center flex-wrap">
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
