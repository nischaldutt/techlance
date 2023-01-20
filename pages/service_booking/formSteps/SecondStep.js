import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const SecondStep = ({ setFormStage }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log({ data });
    setFormStage(3);
  };

  return (
    <motion.section
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ stiffness: 150 }}
    >
      <h3>What do you need done?</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your message
        </label>
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Leave a comment..."
        ></textarea>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Next
        </button>
      </form>
    </motion.section>
  );
};

export default SecondStep;
