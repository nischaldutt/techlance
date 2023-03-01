import React from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Input } from "antd";

const { TextArea } = Input;

const ReferenceInfo = ({ jobData, onEdit, next }) => {
  const [form] = Form.useForm();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log({ data });
    next();
  };

  const toggleCheck = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <section className="w-96">
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
        <ReferenceForm formLabel="1st Reference" />

        <ReferenceForm formLabel="2nd Reference" />

        <Form.Item>
          <Button type="primary" htmlType="submit" size="large">
            Save & Continue
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default ReferenceInfo;

function ReferenceForm({ formLabel }) {
  return (
    <>
      <h1 className="text-lg font-bold pb-4">{formLabel}</h1>

      <Form.Item
        label="Full Name"
        name="fullName"
        rules={[
          {
            required: true,
            message: "Name",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Relationship"
        name="relationship"
        rules={[
          {
            required: true,
            message: "Relationship",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Company"
        name="company"
        rules={[
          {
            required: true,
            message: "Company",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "test@gmail.com",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Phone"
        name="phone"
        rules={[
          {
            required: true,
            message: "1234567890",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Description" name="description">
        <TextArea
          rows={4}
          placeholder="Tell us how you know each other and the reason why you chose this person as your reference."
          minLength={6}
        />
      </Form.Item>
    </>
  );
}
