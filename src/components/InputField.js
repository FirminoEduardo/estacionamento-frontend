// Campo de entrada reutilizável para formulários

import React from "react";

const InputField = ({ label, type, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  );
};

export default InputField;
