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

const BasinInfo = ({ jobData, updateJobData, next }) => {
  const [form] = Form.useForm();
  const { register, handleSubmit, errors } = useForm();

  const toggleCheck = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <section>
      <Form
        layout="vertical"
        size="large"
        form={form}
        name="basicInfo"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        initialValues={{
          residence: ["zhejiang", "hangzhou", "xihu"],
          prefix: "86",
        }}
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

        <Form.Item>
          <Input.Group size="large">
            <Row gutter={8}>
              <Col span={5}>
                <Input defaultValue="0571" />
              </Col>
              <Col span={8}>
                <p>RT</p>
              </Col>
              <Col span={8}>
                <Input defaultValue="26888888" />
              </Col>
            </Row>
          </Input.Group>
        </Form.Item>

        <Form.Item>
          <Input addonBefore="http://" addonAfter=".com" />
        </Form.Item>

        <Form.Item>
          <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
        </Form.Item>

        <Form.Item>
          <Checkbox onChange={toggleCheck}>Checkbox</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" size="large">
            Next
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default BasinInfo;
