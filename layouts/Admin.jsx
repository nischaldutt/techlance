import React from "react";

import {
  BusinessAdminNavbar,
  BusinessSidebar,
  BusinessHeaderStats,
  BusinessFooterAdmin,
} from "@/components";

export default function Admin({ children }) {
  return (
    <div>
      <BusinessSidebar />
      <div className="relative md:ml-64 bg-slate-100">
        <BusinessAdminNavbar />
        {/* Header */}
        <BusinessHeaderStats />
        <div className="px-4 md:px-10 mx-auto -m-24">
          {children}
          <BusinessFooterAdmin />
        </div>
      </div>
    </div>
  );
}
