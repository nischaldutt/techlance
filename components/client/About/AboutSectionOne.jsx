import React from "react";

import { About } from "@/components";
import { Services } from "@/assets";

export default function ClientAboutSectionOne() {
  return (
    <About
      title="Appointments done better"
      description={
        <div className="text-sm lg:text-base text-justify">
          Looking for your next appointment with a local barber, hair stylist,
          massage therapist or nail artist? Need appointment booking for a beard
          trim, an eyebrow wax, or a deep tissue massage?
          <br />
          Booksy is a free beauty scheduling app and makes appointments easy to
          find and book within seconds. No more phone tag. Book anytime, from
          anywhere, 24/7.
          <br />
          <br />
          <span className="font-bold">
            Discover top businesses in your area and book instantly with Booksy.
          </span>
        </div>
      }
      Icon={<Services />}
    />
  );
}
