import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "antd";

import { DatePicker, TimePicker, TextArea } from "../../../components";

const FirstStep = ({ jobData, updateJobData, next }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log({ data });
    next();
  };

  return (
    <section>
      <h3>When should we send someone?</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <DatePicker />
        <TimePicker />
        <TextArea />
        <Button type="primary" onClick={onSubmit}>
          Next
        </Button>
      </form>
    </section>
  );
};

export default FirstStep;
