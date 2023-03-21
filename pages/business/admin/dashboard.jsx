import React from "react";

import {
  BusinessCardBarChart,
  BusinessCardLineChart,
  BusinessCardPageVisits,
  BusinessCardSocialTraffic,
} from "@/components";

import Admin from "@/layouts/Admin";

export default function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-[repeat(1,_minmax(0,_100%))] xl:grid-cols-[repeat(2,_minmax(0,_100%))] gap-4">
        <div className="w-full">
          <BusinessCardLineChart />
        </div>
        <div className="w-full">
          <BusinessCardBarChart />
        </div>
        <div className="w-full ">
          <BusinessCardPageVisits />
        </div>
        <div className="w-full">
          <BusinessCardSocialTraffic />
        </div>
      </div>
    </>
  );
}

Dashboard.layout = Admin;
