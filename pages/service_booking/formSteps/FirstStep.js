import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

import { DatePicker, TimePicker, TextArea } from "../../../components";

const FirstStep = ({ setFormStage, jobData, setJobData }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log({ data });
    setFormStage(2);
  };

  return (
    <motion.section
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ stiffness: 150 }}
    >
      <h3>When should we send someone?</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <DatePicker />
        <TimePicker />
        <TextArea />
        <button type="submit" className="">
          Next
        </button>
      </form>
    </motion.section>
  );
};

export default FirstStep;
