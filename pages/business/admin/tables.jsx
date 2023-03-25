import React from "react";

import {
  BusinessCardPageVisits,
  BusinessCardSocialTraffic,
} from "@/components";

import Admin from "@/layouts/Admin";

export default function Tables() {
  return (
    <>
      <div className="grid grid-cols-[repeat(1,_minmax(0,_100%))] gap-4">
        <BusinessCardPageVisits />
        <BusinessCardSocialTraffic />
      </div>
    </>
  );
}

Tables.layout = Admin;
