// Componenete reutilizável de botão
import React from "react";

const Button = ({ label, onClick, className, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled} // Se o botão estiver desabilitado, o "onClick" não será chamado
      className={`bg-blue-500 text-white p-2 rounded-md 
        ${disabled ? "bg-gray-400 cursor-not-allowed" : "hover:bg-blue-600"} 
        transition-all duration-200 ease-in-out ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
