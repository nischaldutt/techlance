import React from "react";
import { HigherOrderModalComponent } from "@/components";

export default function ClientLocationSelectModal({
  isModalOpen,
  handleOk,
  handleCancel,
}) {
  return (
    <HigherOrderModalComponent
      title="Enter your Location"
      isModalOpen={isModalOpen}
      handleOk={handleOk}
      handleCancel={handleCancel}
    >
      <p>Some children...</p>
    </HigherOrderModalComponent>
  );
}
