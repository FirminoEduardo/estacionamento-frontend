// Página de cadastro e listagem de clientes
import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";

const Clientes = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [tipoCliente, setTipoCliente] = useState("Horista"); // Horista ou Mensalista

  const handleSubmit = () => {
    // Aqui você pode fazer a chamada para a API que cria o cliente
    console.log("Cliente cadastrado:", { nome, cpf, tipoCliente });
  };

  return (
    <div className="p-8">
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
        <div className="mb-4">
          <label className="block mb-2">Tipo de Cliente</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md"
            value={tipoCliente}
            onChange={(e) => setTipoCliente(e.target.value)}
          >
            <option value="Horista">Horista</option>
            <option value="Mensalista">Mensalista</option>
          </select>
        </div>
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
