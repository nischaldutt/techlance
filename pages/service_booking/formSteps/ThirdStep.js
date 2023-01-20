import React from "react";
import { useForm } from "react-hook-form";

const ThirdStep = ({ setFormStage }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log({ data });
  };

  const onEdit = () => {
    setFormStage(1);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>final step</h3>

        <button onClick={onEdit}>Edit</button>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default ThirdStep;
