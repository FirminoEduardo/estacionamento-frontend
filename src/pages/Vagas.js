import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";

const Vagas = () => {
  const [status, setStatus] = useState("Disponível"); // Status da vaga
  const [capacidade, setCapacidade] = useState(1); // Capacidade da vaga
  const [tipoVaga, setTipoVaga] = useState("Normal"); // Tipo de vaga: Normal ou Preferencial

  const handleSubmit = () => {
    // Aqui você pode fazer a chamada para a API que cria a vaga
    console.log("Vaga cadastrada:", { status, capacidade, tipoVaga });
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold">Cadastro de Vagas</h2>
      <form className="mt-6">
        <InputField
          label="Capacidade"
          type="number"
          value={capacidade}
          onChange={(e) => setCapacidade(e.target.value)}
        />
        <div className="mb-4">
          <label className="block mb-2">Status da Vaga</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Disponível">Disponível</option>
            <option value="Ocupada">Ocupada</option>
            <option value="Reservada">Reservada</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Tipo de Vaga</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md"
            value={tipoVaga}
            onChange={(e) => setTipoVaga(e.target.value)}
          >
            <option value="Normal">Normal</option>
            <option value="Preferencial">Preferencial</option>
          </select>
        </div>
        <Button
          label="Cadastrar Vaga"
          onClick={handleSubmit}
          className="mt-4"
        />
      </form>
    </div>
  );
};

export default Vagas;
