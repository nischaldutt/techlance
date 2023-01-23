import React from "react";
import { useForm } from "react-hook-form";

const ThirdStep = ({ jobData, done, onEdit }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log({ data });
    done();
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>final step</h3>

        <button onClick={onEdit}>Edit</button>

        <button onClick={done}>Submit</button>
      </form>
    </section>
  );
};

export default ThirdStep;
