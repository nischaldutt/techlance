import React from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Divider,
  DatePicker,
  Form,
  Input,
  Space,
  TimePicker,
  Row,
  Col,
  Checkbox,
} from "antd";

import { AiOutlinePlusCircle } from "react-icons/ai";
import { GrSubtractCircle } from "react-icons/gr";

const { TextArea } = Input;

const smallFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 8,
      offset: 0,
    },
  },
};

const InsuranceInfo = ({ jobData, updateJobData, next }) => {
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
          label="Email of your Insurance Agent/Broker"
          name="brokerEmail"
          rules={[
            {
              required: true,
              message: "test@gmail.com",
            },
          ]}
          className="my-0"
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Checkbox onChange={toggleCheck}>
            Allow Jiffy to contact my Agent/Broker
          </Checkbox>
        </Form.Item>

        <Form.Item
          label="Insurance Policy Number (optional)"
          name="insurancePolicyNumber"
          rules={[
            {
              // required: true,
              message: "eg. 12345",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <div className="flex flex-col gap-4 p-3 bg-gray-100 rounded-lg">
            <p className="font-bold">I certify that: </p>
            <p className="text-justify">
              I work solely by myself, with no full-time or part-time employees,
              contractors or sub-trades.
            </p>
            <p className="font-bold text-center">OR</p>
            <p className="text-justify">
              I have full-time and/or part-time employees or employ contractors
              or sub-trades as needed. I have an active WSIB number.
            </p>
            <Checkbox onChange={toggleCheck}>
              I agree and acknowledge that one of the statements above is true
            </Checkbox>
          </div>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" size="large">
            Save & Continue
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default InsuranceInfo;
