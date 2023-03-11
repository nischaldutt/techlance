import React, { useState } from "react";
import { Button, Modal } from "antd";

export default function HigherOrderModalComponent({
  title = "",
  isModalOpen,
  handleOk,
  handleCancel,
  children,
}) {
  return (
    <Modal
      title={title}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {children}
    </Modal>
  );
}
