import React from "react";
import "./input.scss";

type InputProps = {
  label: string;
  type: "text" | "number" | "datetime" | "datetime-local";
  value: any;
  onChange: () => void;
};

const Input = ({ label, type = "text", value, onChange }: InputProps) => {
  return (
    <div className="input flex flex-col gap-2 w-full">
      <label htmlFor="">{label}</label>
      <input id="" type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
