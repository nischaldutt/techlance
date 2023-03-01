import React from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Input, Checkbox } from "antd";

const { TextArea } = Input;

const smallFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 8,
      offset: 0,
    },
  },
};

const BasinInfo = ({ jobData, updateJobData, next }) => {
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
        <Form.Item
          label="Business Name"
          name="name"
          rules={[
            {
              required: true,
              message: "eg. TechLance",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Business Address"
          name="address"
          rules={[
            {
              required: true,
              message: "eg. 123 BayView Street, Calgary",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          {...smallFormItemLayout}
          label="Units/Suites"
          name="unit"
          rules={[
            {
              // required: true,
              message: "eg. 4",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          {...smallFormItemLayout}
          label="HST Number"
          name="hst"
          rules={[
            {
              required: true,
              message: "eg. 12345",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Website" name="website">
          <Input addonBefore="https://" />
        </Form.Item>

        <Form.Item
          label="Where did you learn about us?"
          name="discoverDescription"
        >
          <TextArea
            rows={4}
            placeholder="eg. Tell us about where did you learn about us"
            minLength={6}
          />
        </Form.Item>

        <Form.Item>
          <div className="flex flex-col gap-4 p-3 bg-gray-100 rounded-lg">
            <p className="text-justify">
              By checking this box you represent and warrant that you hold all
              required or industry standard insurance, workers compensation, and
              workplace safety, to adequately cover property damage, bodily
              injury, theft, property loss in amounts sufficient for your
              liability under your contract with the Requesting User.
            </p>
            <Checkbox onChange={toggleCheck}>I agree and acknowledge</Checkbox>
          </div>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" size="large">
            Create Company
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default BasinInfo;
