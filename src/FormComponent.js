import "./App.css";
import React from "react";
import { useForm } from "react-hook-form";

const FormComponent = () => {
  /*
    data: {
        lastName: '' // not valid
    }
    */
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("lastName")} />
      <input type="submit" />
    </form>
  );
};

export default FormComponent;
