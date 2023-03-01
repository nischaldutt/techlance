import React from "react";
import { useForm } from "react-hook-form";
import { Button, Checkbox, Form, List } from "antd";

const SelectServices = ({ jobData, done, onEdit }) => {
  const [form] = Form.useForm();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log({ data });
    done();
  };

  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <section className="w-full md:w-96">
      <Form
        layout="vertical"
        form={form}
        name="basicInfo"
        onFinish={onSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        initialValues={{}}
        requiredMark="optional"
      >
        <Checkbox.Group onChange={onChange}>
          <List
            itemLayout="horizontal"
            dataSource={services}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Checkbox value={item.value} />}
                  title={<p>{item.label}</p>}
                />
              </List.Item>
            )}
          />
        </Checkbox.Group>

        <Form.Item>
          <Button type="primary" htmlType="submit" size="large">
            Save
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default SelectServices;

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
