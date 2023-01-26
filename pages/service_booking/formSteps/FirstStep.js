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
} from "antd";

import { AiOutlinePlusCircle } from "react-icons/ai";
import { GrSubtractCircle } from "react-icons/gr";

const { TextArea } = Input;

const FirstStep = ({ jobData, updateJobData, next }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log({ data });
    next();
  };

  const onDateChange = (date, dateString) => {
    console.log(date, dateString);
    console.log({ test: date.get("date") });
  };

  const onTimeChange = (time, timeString) => {
    console.log(time, timeString);
  };

  const onTimeConstraintChange = (e) => {
    console.log("Change:", e.target.value);
  };

  return (
    <section>
      <Form
        name="dynamic_form_item"
        onFinish={onSubmit}
        className="flex flex-col gap-4"
        layout="vertical"
      >
        <h2 className="text-xl font-bold">When should we send someone?</h2>
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
                  <DateTimeInputs
                    name={name}
                    onDateChange={onDateChange}
                    onTimeChange={onTimeChange}
                    {...restField}
                  />

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
                  icon={<AiOutlinePlusCircle className="mr-2" />}
                  className="flex justify-between items-center h-10"
                >
                  Select Date and Time
                </Button>
                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          )}
        </Form.List>

        <Form.Item name="timeConstraint" className="w-3/4">
          <h4 className="text-xl font-bold">Timing Constraints</h4>
          <TextArea
            rows={4}
            placeholder="e.g. Baby is napping from 3 to 4 PM. Please do not arrive during those times."
            maxLength={100}
            showCount
            onChange={onTimeConstraintChange}
          />
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

export default FirstStep;

function DateTimeInputs({ name, onDateChange, onTimeChange, ...restField }) {
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
          <DatePicker className="w-36 h-10 text-lg" onChange={onDateChange} />
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
          <TimePicker
            className="w-36 h-10 text-lg"
            format="HH:mm"
            onChange={onTimeChange}
          />
        </Form.Item>
      </Space>
      <Divider className="my-2" />
    </>
  );
}
