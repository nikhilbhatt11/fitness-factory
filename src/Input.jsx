import { useField } from "formik";
import React from "react";

function Input({ name, lable, id, ...rest }) {
  const field = useField(name);
  const [data, meta] = field;
  const { value, onChange, onBlur } = data;
  const { touched, error } = meta;

  return (
    <div>
      <lable htmlFor={id} className="sr-only">
        {lable}
      </lable>
      <input
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        {...rest}
      />
      {touched && error && <div className="text-red-400">{error}</div>}
    </div>
  );
}

export default Input;
