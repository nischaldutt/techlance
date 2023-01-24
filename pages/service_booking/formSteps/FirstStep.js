import React from "react";
import { useForm } from "react-hook-form";
import { Button, Divider, Form, Space } from "antd";

import { AiOutlinePlusCircle } from "react-icons/ai";
import { GrSubtractCircle } from "react-icons/gr";

import { DatePicker, TimePicker, TextArea } from "../../../components";

const FirstStep = ({ jobData, updateJobData, next }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log({ data });
    next();
  };

  return (
    <section className="flex flex-col justify-between gap-4">
      <h2 className="text-xl font-bold">When should we send someone?</h2>

      <Form
        name="dynamic_form_item"
        onFinish={onSubmit}
        className="flex flex-col gap-4 "
      >
        <Form.List
          name="date_time"
          rules={[
            {
              validator: async (_, names) => {
                if (!names || names.length < 1) {
                  return Promise.reject(
                    new Error("Please select date and time")
                  );
                }
              },
            },
          ]}
        >
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space key={key} align="baseline">
                  <DateTimeInputs name={name} {...restField} />

                  {fields.length > 1 ? (
                    <GrSubtractCircle
                      className="dynamic-delete-button ml-4 scale-125"
                      onClick={() => remove(name)}
                    />
                  ) : null}
                </Space>
              ))}

              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  icon={<AiOutlinePlusCircle className="scale-125" />}
                  className="flex justify-between items-center gap-2 w-48 h-10"
                >
                  Select Date and Time
                </Button>
                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          )}
        </Form.List>

        <Form.Item>
          <Button type="primary" htmlType="submit" size="large">
            Next
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default FirstStep;

function DateTimeInputs({ name, ...restField }) {
  return (
    <>
      <Space align="baseline">
        <Form.Item
          {...restField}
          name={[name, "date"]}
          validateTrigger={["onChange", "onBlur"]}
          rules={[
            {
              required: true,
              message: "Missing Date",
            },
          ]}
          // noStyle
        >
          <DatePicker />
        </Form.Item>

        <div className="px-2"></div>

        <Form.Item
          {...restField}
          name={[name, "time"]}
          validateTrigger={["onChange", "onBlur"]}
          rules={[
            {
              required: true,
              message: "Missing Time",
            },
          ]}
          // noStyle
        >
          <TimePicker />
        </Form.Item>
      </Space>
      <Divider className="my-3" />
    </>
  );
}
