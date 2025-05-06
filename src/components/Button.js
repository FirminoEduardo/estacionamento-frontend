// Componenete reutilizável de botão
import React from "react";

const Button = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white p-2 rounded-md ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
