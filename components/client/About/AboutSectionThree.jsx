import React from "react";

import { About } from "@/components";
import { Bookings } from "@/assets";

export default function ClientAboutSectionThree() {
  return (
    <About
      title="Book with the best, near you"
      description={
        <div className="text-sm lg:text-base text-justify">
          Take a scroll around the block to see top health and beauty businesses
          on Booksy&apos;s marketplace.
          <br />
          Check out their vibe from their business profile and hear what other
          people are saying with verified reviews. You can even look through
          their portfolio of work.
          <br />
          <br />
          Save time and leave the stress to someone else. With Booksy, setting
          up your next beauty appointment is free and easy.
        </div>
      }
      Icon={<Bookings />}
    />
  );
}
