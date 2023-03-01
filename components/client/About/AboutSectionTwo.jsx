import React from "react";

import { About } from "@/components";
import { Reminders } from "@/assets";

export default function ClientAboutSectionTwo() {
  return (
    <About
      bg="bg-gray-100"
      flexDirection="flex-row-reverse"
      title="Something come up? We've got you."
      description={
        <div className="text-sm lg:text-base text-justify">
          Download Booksy, a free online appointment booking app, and manage
          your appointments from anywhere. Reschedule or cancel without picking
          up the phone.
          <br />
          <br />
          And because we know life gets busy, we&apos;ll send you reminders.
          You&apos;ll never forget or miss out on another appointment.
        </div>
      }
      Icon={<Reminders />}
    />
  );
}
