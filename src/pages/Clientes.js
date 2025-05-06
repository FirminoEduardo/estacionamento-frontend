// Página de cadastro e listagem de clientes
import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";

const Clientes = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");

  const handleSubmit = () => {
    // Aqui você faria a chamada para a API para cadastrar o cliente
    console.log("Cliente cadastrado:", { nome, cpf });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold">Cadastro de Clientes</h2>
      <form className="mt-6">
        <InputField
          label="Nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <InputField
          label="CPF"
          type="text"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        <Button
          label="Cadastrar Cliente"
          onClick={handleSubmit}
          className="mt-4"
        />
      </form>
    </div>
  );
};

export default Clientes;
