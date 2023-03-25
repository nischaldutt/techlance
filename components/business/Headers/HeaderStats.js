import React from "react";

import { BusinessCardStats } from "@/components";

import { AiOutlineBarChart, AiFillPieChart } from "react-icons/ai";
import { FaUsers, FaPercent } from "react-icons/fa";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-blueGray-800 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto">
          <div>
            {/* Card stats */}
            <div className="grid grid-cols-[repeat(1,_minmax(0,_100%))] lg:grid-cols-[repeat(2,_minmax(0,_100%))] xl:grid-cols-[repeat(4,_minmax(0,_100%))] gap-4">
              <BusinessCardStats
                statSubtitle="TRAFFIC"
                statTitle="350,897"
                statArrow="up"
                statPercent="3.48"
                statPercentColor="text-emerald-500"
                statDescription="Since last month"
                statIconColor="bg-red-500"
                Icon={<AiOutlineBarChart size={20} />}
              />
              <BusinessCardStats
                statSubtitle="NEW USERS"
                statTitle="2,356"
                statArrow="down"
                statPercent="3.48"
                statPercentColor="text-red-500"
                statDescription="Since last week"
                statIconColor="bg-orange-500"
                Icon={<AiFillPieChart size={20} />}
              />
              <BusinessCardStats
                statSubtitle="SALES"
                statTitle="924"
                statArrow="down"
                statPercent="1.10"
                statPercentColor="text-orange-500"
                statDescription="Since yesterday"
                statIconColor="bg-pink-500"
                Icon={<FaUsers size={20} />}
              />
              <BusinessCardStats
                statSubtitle="PERFORMANCE"
                statTitle="49,65%"
                statArrow="up"
                statPercent="12"
                statPercentColor="text-emerald-500"
                statDescription="Since last month"
                statIconColor="bg-lightBlue-500"
                Icon={<FaPercent size={14} />}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
