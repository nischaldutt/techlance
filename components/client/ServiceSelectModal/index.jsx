import React from "react";
import { Radio, Space } from "antd";

import { HigherOrderModalComponent } from "@/components";

// note: for future reference
{
  /* <ClientServiceSelectModal
  isModalOpen={isServiceModalOpen}
  handleOk={() => setIsServiceModalOpen(false)}
  handleCancel={() => setIsServiceModalOpen(false)}
  setServiceName={(serviceName) => setServiceName(serviceName)}
/> */
}

export default function ClientServiceSelectModal({
  isModalOpen,
  handleOk,
  handleCancel,
  setServiceName,
}) {
  const [value, setValue] = React.useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target);
    setValue(e.target.value);
  };

  return (
    <HigherOrderModalComponent
      title="Select a service"
      isModalOpen={isModalOpen}
      handleOk={() => {
        setServiceName(services[value - 1].label);
        handleOk();
      }}
      handleCancel={handleCancel}
    >
      <Radio.Group onChange={onChange} value={value}>
        <Space direction="vertical">
          {services.map((service) => {
            return (
              <Radio key={service.value} value={service.value}>
                {service.label}
              </Radio>
            );
          })}
        </Space>
      </Radio.Group>
    </HigherOrderModalComponent>
  );
}

const services = [
  {
    value: 1,
    label: "Installation",
    disabled: false,
  },
  {
    value: 2,
    label: "Cleaning",
    disabled: false,
  },
  {
    value: 3,
    label: "Electrical",
    disabled: false,
  },
  {
    value: 4,
    label: "Washing",
    disabled: false,
  },
];
