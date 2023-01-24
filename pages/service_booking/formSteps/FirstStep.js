import React from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Space } from "antd";
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

      <Form name="dynamic_form_item" onFinish={onSubmit}>
        <Form.List
          name="date"
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
              {fields.map((field, index) => (
                <Space key={field.key}>
                  <Form.Item label={index === 0 ? "Date" : ""} required={false}>
                    <Form.Item
                      {...field}
                      validateTrigger={["onChange", "onBlur"]}
                      rules={[
                        {
                          required: true,
                          whitespace: true,
                          message: "Missing Date",
                        },
                      ]}
                      noStyle
                    >
                      <DatePicker />
                    </Form.Item>
                  </Form.Item>

                  <Form.Item label={index === 0 ? "Time" : ""} required={false}>
                    <Form.Item
                      {...field}
                      validateTrigger={["onChange", "onBlur"]}
                      rules={[
                        {
                          required: true,
                          whitespace: true,
                          message: "Missing Time",
                        },
                      ]}
                      noStyle
                    >
                      <TimePicker />
                    </Form.Item>
                  </Form.Item>

                  {fields.length > 1 ? (
                    <GrSubtractCircle
                      className="dynamic-delete-button"
                      onClick={() => remove(field.name)}
                    />
                  ) : null}
                </Space>
              ))}

              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  icon={<AiOutlinePlusCircle />}
                  className="border-2 border-black flex gap-2"
                >
                  Add Date and Time
                </Button>
                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          )}
        </Form.List>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Next
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default FirstStep;
