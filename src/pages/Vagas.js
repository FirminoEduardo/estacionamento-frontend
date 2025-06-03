import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { cadastrarVaga } from "../services/api"; // Importe a função para cadastrar a vaga

const Vagas = () => {
  const [status, setStatus] = useState("Disponível"); // Status da vaga
  const [capacidade, setCapacidade] = useState(1); // Capacidade da vaga
  const [tipoVaga, setTipoVaga] = useState("Normal"); // Tipo de vaga: Normal ou Preferencial

  const handleSubmit = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão de envio de formulário
    const vaga = { status, capacidade, tipo_vaga: tipoVaga }; // Alteração para tipo_vaga conforme esperado no backend

    try {
      // Chama a função que envia os dados para o backend
      const response = await cadastrarVaga(vaga);

      // Exibe a resposta no console (opcional)
      console.log("Vaga cadastrada:", response);

      // Aqui você pode limpar os campos ou exibir uma mensagem de sucesso
      setStatus("Disponível");
      setCapacidade(1);
      setTipoVaga("Normal");
    } catch (error) {
      console.error("Erro ao cadastrar vaga:", error);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold">Cadastro de Vagas</h2>
      <form className="mt-6" onSubmit={handleSubmit}>
        {" "}
        {/* Usando onSubmit ao invés de onClick */}
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
          type="submit" // Usando type="submit" ao invés de onClick para enviar o formulário
          className="mt-4"
        />
      </form>
    </div>
  );
};

export default Vagas;
