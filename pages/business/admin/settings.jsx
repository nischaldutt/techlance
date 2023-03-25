import React from "react";

import { BusinessCardSettings, BusinessCardProfile } from "@/components";

import Admin from "@/layouts/Admin";

export default function Settings() {
  return (
    <>
      <div className="grid grid-cols-[repeat(1,_minmax(0,_100%))] xl:grid-cols-[repeat(2,_minmax(0,_100%))] gap-4">
        <BusinessCardSettings />
        <BusinessCardProfile />
      </div>
    </>
  );
}

Settings.layout = Admin;
